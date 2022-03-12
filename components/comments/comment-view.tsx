import React, { useEffect, useMemo, useRef, useState } from "react"
import { signIn } from "next-auth/react"
import { motion } from "framer-motion"
import { LoginIcon } from "@heroicons/react/outline"
import moment from "moment"
import axios from "../../lib/axios"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { Toaster, toast } from "react-hot-toast"
import { Reply, Comment, Session } from "../../lib/types"
import Image from "next/image"

const CommentsView = ({ session }: { session: Session | null }) => {
  const [comment, setComment] = useState<string>("")
  const [reply, setReply] = useState<string>("")
  const [comments, setComments] = useState<Comment[]>([])
  const [openCommentContent, setOpenCommentContent] = useState<number>(-1)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const replyRef = useRef<any>(null)

  const getComments = async () => {
    setIsLoading(true)
    const { data }: { data: Comment[] } = await axios.get("comments")
    if (data) {
      setComments(data)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!session) return
    getComments()
  }, [session])

  const handleComment = async (e: any) => {
    e.preventDefault()
    if (comment) {
      await axios
        .post("addComment", {
          comment,
          username: session?.user?.name ?? "unknown",
          image: session?.user?.image,
        })
        .then(data => {
          const arr = comments
          arr.unshift(data.data)
          setComments([...arr])
        })
      setComment("")
    } else {
      toast.error("Please write a comment")
    }
  }

  const handleReply = async (e: any, commentId: string) => {
    e.preventDefault()
    if (reply) {
      await axios
        .post("addReply", {
          reply,
          username: session?.user?.name ?? "unknown",
          commentId,
          image: session?.user?.image,
        })
        .then(({ data }: { data: Reply }) => {
          const Comments = comments.map(comment => {
            if (comment.id !== data.commentId) return comment
            const Replies = !comment.Replies ? [] : comment.Replies
            Replies.unshift(data)
            return { ...comment, Replies: [...Replies] }
          })

          setComments(Comments)
          replyRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        })

      setReply("")
    } else {
      toast.error("Please write a reply")
    }
  }

  const openComment = (id: number) => {
    setOpenCommentContent(id === openCommentContent ? -1 : id)
    setReply("")
  }

  return (
    <div className="relative">
      {!session ? (
        <div className="mt-16 text-[#161616]">
          <h2 className="text-xl capitalize leading-loose font-extrabold">
            Hello!
          </h2>
          <p className="leading-relaxed text-sm font-semibold">
            Sign in to comment, make a suggestion, or ask a question.
          </p>

          <motion.button
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1 }}
            onClick={() => signIn()}
            className="text-sm flex items-center space-x-2 font-medium uppercase mt-4 scale-90 hover:scale-100 p-3 w-[100px] text-black bg-slate-100 rounded shadow-inner"
          >
            <p>login</p>
            <LoginIcon className="w-5 h-5 text-black" />
          </motion.button>
        </div>
      ) : (
        <div className="flex flex-col space-y-3">
          {isLoading ? (
            <div className="text-center text-xl mx-auto mt-8">
              <AiOutlineLoading3Quarters className="w-5 h-5 text-white animate-spin mt-10" />
            </div>
          ) : (
            <div className="mt-8 h-[340px] overflow-y-scroll hide-scroll-bar">
              {comments.length <= 0 ? (
                <p className="text-center h-[340px] font-semibold text-xl mx-auto mt-8 text-[#383838]">
                  No comments yet
                </p>
              ) : (
                <div className="h-[340px] overflow-y-scroll hide-scroll-bar pb-2">
                  {comments.map((comment: Comment, id: number) => (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, type: "linear" }}
                      key={comment.id}
                      className="flex flex-col p-2 bg-white rounded mt-2  shadow-md"
                    >
                      <div
                        className="flex items-center justify-between space-x-2 cursor-pointer"
                        onClick={() => openComment(id)}
                      >
                        <div className="flex items-center space-x-2">
                          <Image
                            src={comment.image}
                            alt="user image"
                            width={25}
                            height={25}
                            className="rounded-full"
                          />
                          <h2 className="text-xs font-bold text-slate-700">
                            {comment.username}
                          </h2>
                        </div>
                        <p className="text-xs text-black font-medium">
                          {moment().from(comment.createdAt).replace("in", "")}{" "}
                          ago
                        </p>
                      </div>
                      {openCommentContent === id ? (
                        <>
                          <p className="px-10 break-words text-sm text-[#adabab]">
                            {comment.comment}
                          </p>

                          {/* replies goes here */}
                          <div ref={replyRef}></div>
                          <div className="overflow-y-scroll overflow-x-hidden">
                            {comment?.Replies?.map((reply: any, id: number) => (
                              <motion.div
                                initial={{
                                  x: id == 0 ? 100 : id * 200,
                                  opacity: 0,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, type: "fade" }}
                                key={reply.id}
                              >
                                <div className="flex flex-col px-4 bg-white mt-2 py-1">
                                  <div className="flex justify-between">
                                    <div className="flex items-center space-x-2">
                                      <Image
                                        src={reply.image}
                                        alt="user image"
                                        width={25}
                                        height={25}
                                        className="rounded-full"
                                      />
                                      <h2 className="text-xs font-bold text-slate-700">
                                        {reply.repliedUser}
                                      </h2>
                                    </div>
                                    <p className="text-xs text-black font-medium">
                                      {moment()
                                        .from(reply.createdAt)
                                        .replace("in", "")}{" "}
                                      ago
                                    </p>
                                  </div>

                                  <p className="px-10 break-words text-sm text-[#adabab]">
                                    {reply.reliedComment}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          <div className="p-2 h-5 flex items-center space-x-1">
                            <p
                              onClick={() => openComment(id)}
                              className="text-xl h-3 text-gray-500 hover:text-gray-800 cursor-pointer -mt-5 text-right"
                            >
                              ...
                            </p>
                          </div>

                          {/* -------------------- */}
                          <form
                            className="w-full h-10 px-2 flex items-center justify-center bg-slate-100 rounded mt-2 shadow-inner "
                            onSubmit={e => handleReply(e, comment.id)}
                          >
                            <div className="w-[30px] h-[30px] border-4 border-[#BEA5F4] rounded-full">
                              <img
                                src={session?.user.image}
                                className="w-full h-full rounded-full"
                              ></img>
                            </div>
                            <input
                              type="text"
                              className="text-black bg-transparent flex-1 text-sm h-8 rounded  outline-none px-2 "
                              placeholder="Add reply"
                              onChange={e => setReply(e.target.value)}
                              value={reply}
                            />
                          </form>
                        </>
                      ) : (
                        <div className="p-2  ">
                          <p className="px-10 break-words text-sm text-[#adabab] -mt-2">
                            {comment.comment.length < 10
                              ? comment.comment
                              : comment?.comment?.substring(0, 10) + "..."}
                          </p>

                          <p
                            onClick={() => openComment(id)}
                            className="text-xl h-3 text-gray-500 hover:text-gray-800 cursor-pointer -mt-5 text-right mb-1"
                          >
                            ...
                          </p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <form
        className="w-full h-10 flex px-2 items-center shadow-inner justify-center bg-slate-100 rounded absolute top-96"
        onSubmit={handleComment}
      >
        <div className="w-[30px] h-[30px] border-4 border-[#BEA5F4] rounded-full">
          <img
            src={session?.user.image}
            className="w-full h-full rounded-full"
          ></img>
        </div>
        <input
          type="text"
          className="text-black flex-1 bg-transparent text-sm h-10 border-gray-300 rounded outline-none px-2 "
          placeholder="Add comment"
          onChange={e => setComment(e.target.value)}
          value={comment}
        />
      </form>
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  )
}

export default CommentsView
