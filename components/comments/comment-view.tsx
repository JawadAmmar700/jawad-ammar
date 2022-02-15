import React, { useEffect, useRef, useState } from "react"
import { signIn } from "next-auth/react"
import { motion } from "framer-motion"
import { LoginIcon } from "@heroicons/react/outline"
import { FiSend } from "react-icons/fi"
import moment from "moment"
import axios from "../../lib/axios"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { Toaster, toast } from "react-hot-toast"

const CommentsView = ({ session }) => {
  const [comment, setComment] = useState("")
  const [reply, setReply] = useState("")
  const [comments, setComments] = useState<any>([])
  const [openCommentContent, setOpenCommentContent] = useState(-1)
  const [buttonState, setButtonState] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const commentRef = useRef<any>(null)

  const getComments = async () => {
    setIsLoading(true)
    const { data } = await axios.get("comments")
    if (data) {
      setComments(data)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getComments()
  }, [])

  const handleComment = async (e: any) => {
    e.preventDefault()
    if (comment) {
      setButtonState(true)

      await axios
        .post("addComment", {
          comment,
          username: session?.user?.name ?? "unknown",
          image: session?.user?.image,
        })
        .then(data => {
          setComments([...comments, data.data])
        })
      setComment("")
      setButtonState(false)
      commentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    } else {
      toast.error("Please write a comment")
    }
  }

  const handleReply = async (e: any, commentId: string) => {
    e.preventDefault()
    if (reply) {
      setButtonState(true)
      await axios
        .post("addReply", {
          reply,
          username: session?.user?.name ?? "unknown",
          commentId,
          image: session?.user?.image,
        })
        .then(({ data }) => {
          const Comments = comments.map(comment => {
            if (comment.id !== data.commentId) return comment
            const Replies = !comment.Replies ? [] : comment.Replies
            return { ...comment, Replies: [...Replies, data] }
          })

          setComments(Comments)
        })

      setReply("")
      setButtonState(false)
    } else {
      toast.error("Please write a reply")
    }
  }

  const openComment = (id: number) => {
    setOpenCommentContent(id === openCommentContent ? -1 : id)
    setReply("")
  }

  return (
    <div>
      {!session ? (
        <div className="mt-16">
          <h2 className="text-4xl capitalize leading-loose">hello!</h2>
          <p className="leading-relaxed">
            Sign in to comment, make a suggestion, or ask a question.
          </p>
          {!session && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => signIn()}
              className="text-sm flex items-center space-x-2  uppercase mt-4 font-medium scale-90 hover:scale-100 p-3 w-[100px] text-black bg-slate-50 rounded"
            >
              <p>login</p>
              <LoginIcon className="w-5 h-5 text-black" />
            </motion.button>
          )}
        </div>
      ) : (
        <div className="flex flex-col space-y-3">
          {isLoading ? (
            <div className="text-center text-xl mx-auto mt-8  h-[370px]">
              <AiOutlineLoading3Quarters className="w-5 h-5 text-white animate-spin mt-10" />
            </div>
          ) : (
            <div className="mt-8 h-[370px] overflow-y-scroll snap-mandatory snap-y hide-scroll-bar">
              {comments.length <= 0 ? (
                <p className="text-center text-xl mx-auto mt-8  h-[370px]">
                  No comments yet
                </p>
              ) : (
                <div>
                  {comments.map((comment: any, id) => (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, type: "linear" }}
                      key={comment.id}
                      className="flex snap-center flex-col p-2 bg-slate-200 rounded mt-2 overflow-y-scroll hide-scroll-bar shadow-[0_15px_70px_-15px_#ffee004b]"
                    >
                      <div
                        className="flex items-center justify-between space-x-2"
                        onClick={() => openComment(id)}
                      >
                        <div className="flex items-center space-x-2">
                          <img
                            src={comment.image}
                            alt="user image"
                            className="w-[25px] h-[25px] rounded-full"
                          />
                          <h2 className="text-xs font-bold text-slate-700">
                            {comment.username}
                          </h2>
                        </div>
                        <p className="text-xs text-black">
                          {moment().from(comment.createdAt).replace("in", "")}{" "}
                          ago
                        </p>
                      </div>
                      {openCommentContent === id ? (
                        <>
                          <p className="px-10 break-words text-sm text-black">
                            {comment.comment}
                          </p>

                          {/* replies goes here */}
                          <div className="overflow-y-scroll overflow-x-hidden">
                            {comment?.Replies?.map((reply: any, id) => (
                              <motion.div
                                initial={{
                                  x: id == 0 ? 100 : id * 200,
                                  opacity: 0,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, type: "fade" }}
                                key={reply.id}
                              >
                                <div className="flex flex-col px-4 bg-slate-200 rounded mt-2 py-1 shadow-[0_25px_50px_-15px_#2f00ff49]">
                                  <div className="flex justify-between">
                                    <div className="flex items-center space-x-2">
                                      <img
                                        src={reply.image}
                                        alt="user image"
                                        className="w-[25px] h-[25px] rounded-full"
                                      />
                                      <h2 className="text-xs font-bold text-slate-700">
                                        {reply.repliedUser}
                                      </h2>
                                    </div>
                                    <p className="text-xs text-black">
                                      {moment()
                                        .from(reply.createdAt)
                                        .replace("in", "")}{" "}
                                      ago
                                    </p>
                                  </div>

                                  <p className="px-10 break-words text-sm text-black">
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
                            className="w-full h-8 flex items-center justify-center bg-slate-200 rounded mt-2 shadow-[0_25px_50px_35px_#2f00ff49]"
                            onSubmit={e => handleReply(e, comment.id)}
                          >
                            <input
                              type="text"
                              className="text-black bg-transparent flex-1 text-sm h-8 rounded  outline-none px-2 "
                              placeholder="reply to comment"
                              onChange={e => setReply(e.target.value)}
                              value={reply}
                            />

                            <motion.button
                              type="submit"
                              whileHover={{ scale: 1.1 }}
                              className="flex items-center justify-center h-8 flex-none p-4"
                              disabled={buttonState}
                            >
                              <FiSend className="w-5 h-5 text-black" />
                            </motion.button>
                          </form>
                        </>
                      ) : (
                        <div className="p-2  ">
                          <p className="px-10 break-words text-sm text-black -mt-2">
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
                  <div ref={commentRef}></div>
                </div>
              )}
            </div>
          )}

          <form
            className="w-full h-10 flex items-center shadow-[0_25px_100px_10px_#ffee004b] justify-center bg-slate-200 rounded"
            onSubmit={handleComment}
          >
            <input
              type="text"
              className="text-black flex-1 bg-transparent text-sm h-10 border-gray-300 rounded outline-none px-2 "
              placeholder="Enter a comment..."
              onChange={e => setComment(e.target.value)}
              value={comment}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center h-10 flex-none p-4"
              disabled={buttonState}
            >
              <FiSend className="w-5 h-5 text-black" />
            </motion.button>
          </form>
        </div>
      )}
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  )
}

export default CommentsView
