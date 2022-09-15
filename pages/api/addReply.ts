import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

interface BodyProps {
  reply: string;
  username: string;
  commentId: string;
  image: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") return;
  const { reply, username, commentId, image }: BodyProps = req.body;
  const repliedComment = await prisma.reply.create({
    data: {
      reliedComment: reply,
      repliedUser: username,
      commentId,
      image,
    },
  });
  res.json(repliedComment);
}

// ! Use this to add it to Api Edge routing
// import type { NextRequest } from "next/server";
// import prisma from "../../lib/prisma";

// export const config = {
//   runtime: "experimental-edge",
// };

// interface BodyProps {
//   reply: string;
//   username: string;
//   commentId: string;
//   image: string;
// }

// export default async function handler(req: NextRequest) {
//   if (req.method === "POST") {
//     const { reply, username, commentId, image }: BodyProps = await req.json();
//     const repliedComment = await prisma.reply.create({
//       data: {
//         reliedComment: reply,
//         repliedUser: username,
//         commentId,
//         image,
//       },
//     });
//     return new Response(JSON.stringify(repliedComment), {
//       status: 200,
//       headers: {
//         "content-type": "application/json",
//       },
//     });
//   }
// }
