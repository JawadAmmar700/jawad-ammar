import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isOnline } from "./lib/connection";

export async function middleware(request: NextRequest) {
  const is_online = await isOnline();
  if (!is_online) {
    return NextResponse.rewrite(new URL("/offline", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
