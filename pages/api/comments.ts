// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const comments = await prisma.comment.findMany({
      include: {
        Replies: true,
      },
    })
    res.status(201).json(comments)
  }
}
