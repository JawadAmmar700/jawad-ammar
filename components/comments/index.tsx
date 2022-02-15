import { AnimatePresence, motion } from "framer-motion"
import { forwardRef, useImperativeHandle, useState } from "react"
import { XIcon, LogoutIcon } from "@heroicons/react/outline"
import { useSession, signOut } from "next-auth/react"
import CommentsView from "./comment-view"
import { FaRegComments } from "react-icons/fa"

const Comments = forwardRef((props, ref) => {
  const { data: session } = useSession()
  const [sideBar, setSideBar] = useState(false)

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
                  className="p-2 bg-indigo-600 rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer relative group"
                >
                  <LogoutIcon className="w-5 h-5 text-white" />
                  <p className="text-white text-left text-sm font-bold opacity-0 group-hover:opacity-100 -z-10 group-hover:z-0 absolute left-12 w-[100px]">
                    sign out
                  </p>
                </motion.button>
              )}
            </div>
            <FaRegComments className="w-20 h-20 text-indigo-600 mx-auto" />
            <CommentsView session={session} />
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

export default Comments
