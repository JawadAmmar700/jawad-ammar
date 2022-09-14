import type { NextRequest } from "next/server";
import prisma from "../../lib/prisma";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  if (req.method === "GET") {
    const comments = await prisma.comment.findMany({
      include: {
        Replies: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return new Response(JSON.stringify(comments), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
