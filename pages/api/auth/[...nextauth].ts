import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const GOOGLE_ID: string = `${process.env.GOOGLE_ID}`;
const GOOGLE_SECRET: string = `${process.env.GOOGLE_SECRET}`;
const GITHUB_ID: string = `${process.env.GITHUB_ID}`;
const GITHUB_SECRET: string = `${process.env.GITHUB_SECRET}`;

const GOOGLE_AUTHORIZATION_URL =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    prompt: "consent",
    access_type: "offline",
    response_type: "code",
  });

async function refreshAccessToken(token: any) {
  try {
    const providedUrl =
      token.provider === "google"
        ? "https://oauth2.googleapis.com/token?"
        : "https://github.com/login/oauth/access_token?";
    const url =
      providedUrl +
      new URLSearchParams({
        client_id: token.provider === "google" ? GOOGLE_ID : GITHUB_ID,
        client_secret:
          token.provider === "google" ? GOOGLE_SECRET : GITHUB_SECRET,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      });

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      method: "POST",
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires:
        Math.floor(Date.now() / 1000) + refreshedTokens.expires_in,
      isRefreshToken: true,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      authorization: GOOGLE_AUTHORIZATION_URL,
    }),
    GitHubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    async jwt({ token, user, account }: any) {
      //initial sign in
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: account.expires_at,
          refreshToken: account.refresh_token,
          provider: account.provider,
          user,
        };
      }
      //   Return previous token if the access token has not expired yet
      if (Math.floor(Date.now() / 1000) < token.accessTokenExpires) {
        return token;
      }
      //   Access token has expired, try to update it
      return refreshAccessToken(token);
    },
    async session({ session, token }: any) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.accessTokenExpires = token.accessTokenExpires;
      session.isRefreshToken = token.isRefreshToken ?? false;
      session.error = token.error;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
