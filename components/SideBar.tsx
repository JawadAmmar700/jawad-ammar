import { AnimatePresence, motion } from "framer-motion"
import { forwardRef, useImperativeHandle, useState, useEffect } from "react"
import {
  XIcon,
  ChatAlt2Icon,
  LoginIcon,
  LogoutIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline"
import { useSession, signIn, signOut } from "next-auth/react"
import { FiSend } from "react-icons/fi"
import axios from "../lib/axios"
import moment from "moment"

const SideBar = forwardRef((props, ref) => {
  const { data: session } = useSession()
  const [sideBar, setSideBar] = useState(false)
  const [comment, setComment] = useState("")
  const [reply, setReply] = useState("")
  const [comments, setComments] = useState<any>([])
  const [openCommentContent, setOpenCommentContent] = useState(-1)
  const [state, setState] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useImperativeHandle(
    ref,
    () => {
      return {
        toggle: () => setSideBar(!sideBar),
      }
    },
    [sideBar]
  )

  const getComments = async () => {
    const { data } = await axios.get("comments")
    const sortByTime = [...data].reverse()
    // console.log(sortByTime)
    setComments(sortByTime)
  }

  useEffect(() => {
    if (!session) return
    getComments()
  }, [session])

  const handleComment = async (e: any) => {
    e.preventDefault()
    if (!comment && !session) return
    setIsLoading(true)

    await axios.post("addComment", {
      comment,
      username: session?.user?.name ?? "unknown",
      image: session?.user?.image,
    })
    getComments()
    setState("comment")
    setComment("")
    setIsLoading(false)
  }

  const handleReply = async (e: any, commentId: string) => {
    e.preventDefault()
    if (!reply && !session) return
    setIsLoading(true)
    await axios.post("addReply", {
      reply,
      username: session?.user?.name ?? "unknown",
      commentId,
      image: session?.user?.image,
    })
    getComments()
    setState("reply")
    setReply("")
    setIsLoading(false)
  }

  return (
    <AnimatePresence>
      {sideBar && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed bg-black text-white shadow-lg top-0 right-0 w-full max-w-sm min-h-screen p-5 z-50 overflow-y-scroll"
          >
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                onClick={() => setSideBar(!sideBar)}
                className="p-2 bg-slate-50 rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer"
              >
                <XIcon className="w-5 h-5 text-black" />
              </motion.div>
              {session && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => signOut()}
                  className="p-2 bg-black rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer relative group"
                >
                  <LogoutIcon className="w-5 h-5 text-white" />
                  <p className="text-white text-left text-sm font-bold opacity-0 group-hover:opacity-100 -z-10 group-hover:z-0 absolute left-12 w-[100px]">
                    sign out
                  </p>
                </motion.button>
              )}
            </div>
            <ChatAlt2Icon className="w-20 h-20 text-white mx-auto" />
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
                {comments.length <= 0 ? (
                  <p className="text-center text-xl mx-auto mt-8  h-[370px]">
                    No comments yet
                  </p>
                ) : (
                  <div className="mt-8 h-[370px] overflow-y-scroll hide-scroll-bar">
                    {comments.map((comment: any, id) => (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                        key={comment.id}
                        className="flex flex-col p-2 bg-slate-50 rounded mt-2 overflow-y-scroll hide-scroll-bar shadow-[0_25px_50px_-15px_#ffee004b]"
                      >
                        <div className="flex items-center justify-between space-x-2">
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
                            <div className="p-2 h-5 flex items-center space-x-1">
                              <p
                                onClick={() => setOpenCommentContent(-1)}
                                className="text-xl h-3 text-gray-500 hover:text-gray-800 cursor-pointer -mt-5 text-right"
                              >
                                ...
                              </p>
                            </div>
                            {/* replies goes here */}
                            <div className="overflow-y-scroll">
                              {comment.Replies.map((reply: any) => (
                                <div key={reply.id}>
                                  <div className="flex flex-col p-2 bg-slate-50 rounded mt-2 ">
                                    <div className="flex items-center space-x-2">
                                      <img
                                        src={reply.image}
                                        alt="user image"
                                        className="w-[30px] h-[30px] rounded-full"
                                      />
                                      <h2 className="text-sm font-bold text-slate-700">
                                        {reply.repliedUser}
                                      </h2>
                                    </div>

                                    <p className="px-10 break-words text-sm text-black">
                                      {reply.reliedComment}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            {/* -------------------- */}
                            <form
                              className="w-full  h-8 flex items-center justify-center bg-slate-50 rounded mt-2 shadow-[0_25px_50px_-15px_#fa08084a]"
                              onSubmit={e => handleReply(e, comment.id)}
                            >
                              <input
                                type="text"
                                className="text-black  flex-1 bg-slate-50 text-sm h-8 border-gray-300 rounded  outline-none px-2 "
                                placeholder="reply to comment"
                                onChange={e => setReply(e.target.value)}
                                value={reply}
                              />
                              <motion.button
                                type="submit"
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center justify-center h-8 flex-none p-4"
                                disabled={isLoading}
                              >
                                <FiSend className="w-5 h-5 text-black" />
                              </motion.button>
                            </form>
                          </>
                        ) : (
                          <div className="p-2  ">
                            <p className="px-10 break-words text-sm text-black -mt-2">
                              {comment.comment.substring(0, 10)}...
                            </p>

                            <p
                              onClick={() => setOpenCommentContent(id)}
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

                <form
                  className="w-full h-10 flex items-center justify-center bg-slate-50 rounded focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 "
                  onSubmit={handleComment}
                >
                  <input
                    type="text"
                    className="text-black shadow-sm flex-1 bg-slate-50 text-sm h-10 border-gray-300 rounded  outline-none px-2 "
                    placeholder="Enter a comment..."
                    onChange={e => setComment(e.target.value)}
                    value={comment}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-center h-10 flex-none p-4"
                    disabled={isLoading}
                  >
                    <FiSend className="w-5 h-5 text-black" />
                  </motion.button>
                </form>
              </div>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setSideBar(!sideBar)}
            className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0 z-30"
          />
        </>
      )}
    </AnimatePresence>
  )
})

export default SideBar
