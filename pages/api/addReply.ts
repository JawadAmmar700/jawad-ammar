import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { reply, username, commentId, image } = req.body
    const repliedComment = await prisma.reply.create({
      data: {
        reliedComment: reply,
        repliedUser: username,
        commentId,
        image,
      },
    })
    res.status(201).json(repliedComment)
  }
}
