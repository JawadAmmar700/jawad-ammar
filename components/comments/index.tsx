import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useImperativeHandle, useState } from "react";
import { useSession } from "next-auth/react";
import CommentsView from "./comment-view";
import { Session } from "../../lib/types";
import CommentNav from "./comment-nav";
import CommentLogin from "./comment-login";

const Comments = forwardRef((props, ref) => {
  const { data } = useSession();
  const [sideBar, setSideBar] = useState(false);
  const session = data as Session;

  useImperativeHandle(
    ref,
    () => {
      return {
        toggle: () => setSideBar(!sideBar),
      };
    },
    [sideBar]
  );

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
            className="hidden md:flex flex-col fixed text-slate-100 shadow-lg top-0 py-2 right-0 w-full bg-black max-w-sm min-h-screen z-50"
          >
            <CommentNav
              session={session}
              setSideBar={setSideBar}
              sideBar={sideBar}
            />
            <div className="flex-1 ">
              {!session ? <CommentLogin /> : <CommentsView session={session} />}
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
            className="bg-trasparent fixed h-full w-full flex items-center justify-center top-0 left-0 z-30"
          />
        </>
      )}
    </AnimatePresence>
  );
});

export default Comments;
