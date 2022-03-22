import type { NextFetchEvent, NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { html, isOnline } from "../lib/connection"

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const is_online = await isOnline()

  if (!is_online) {
    return new Response(html, {
      status: 404,
      headers: {
        "Content-Type": "text/html",
      },
    })
  }

  return NextResponse.next()
}
