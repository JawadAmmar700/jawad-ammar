/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  
  reactStrictMode: true,
  images: {
    domains: [
      "images7.alphacoders.com",
      "www.wallpaperup.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com"
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
