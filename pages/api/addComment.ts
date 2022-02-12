// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { comment, username, image } = req.body
    const commentText = await prisma.comment.create({
      data: {
        comment,
        username,
        image,
      },
    })
    res.status(201).json(commentText)
  }
}
