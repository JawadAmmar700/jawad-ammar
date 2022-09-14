import type { NextRequest } from "next/server";
import prisma from "../../lib/prisma";

export const config = {
  runtime: "experimental-edge",
};

interface BodyProps {
  comment: string;
  username: string;
  image: string;
}

export default async function handler(req: NextRequest) {
  if (req.method === "POST") {
    const { comment, username, image }: BodyProps = await req.json();
    const commentText = await prisma.comment.create({
      data: {
        comment,
        username,
        image,
      },
    });
    return new Response(JSON.stringify(commentText), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
