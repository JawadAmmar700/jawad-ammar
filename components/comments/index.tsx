import { AnimatePresence, motion } from "framer-motion"
import { forwardRef, useImperativeHandle, useState } from "react"
import { XIcon, LogoutIcon, LoginIcon } from "@heroicons/react/outline"
import { useSession, signOut, signIn } from "next-auth/react"
import CommentsView from "./comment-view"
import Skeleton from "./comment-skeleton"
import { Session } from "../../lib/types"

const Comments = forwardRef((props, ref) => {
  const { data } = useSession()
  const [sideBar, setSideBar] = useState(false)
  const session = data as Session

  useImperativeHandle(
    ref,
    () => {
      return {
        toggle: () => setSideBar(!sideBar),
      }
    },
    [sideBar]
  )

  return (
    <AnimatePresence>
      {sideBar && (
        <div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="hidden md:flex flex-col fixed text-white shadow-lg top-0 right-0 w-full px-2 bg-white max-w-sm min-h-screen z-50"
          >
            <div className="flex-none">
              <div className="flex items-center space-x-3 flex-none p-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setSideBar(!sideBar)}
                  className="p-2 bg-slate-50 rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer shadow-inner"
                >
                  <XIcon className="w-5 h-5 text-black" />
                </motion.div>
                {session && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => signOut()}
                    className="p-2 bg-indigo-600 rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer relative group"
                  >
                    <LogoutIcon className="w-5 h-5 text-white" />
                    <p className="text-[#383838] text-left text-sm font-bold opacity-0 group-hover:opacity-100 -z-10 group-hover:z-0 absolute left-12 w-[100px]">
                      sign out
                    </p>
                  </motion.button>
                )}
              </div>
              <Skeleton />
            </div>
            <div className="flex-auto relative">
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
                <CommentsView session={session} />
              )}
            </div>
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
        </div>
      )}
    </AnimatePresence>
  )
})

export default Comments
