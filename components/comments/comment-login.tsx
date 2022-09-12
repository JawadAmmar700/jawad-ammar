import React from "react";
import Skeleton from "./comment-skeleton";
import { motion } from "framer-motion";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";

const CommentLogin = () => {
  return (
    <div>
      <Skeleton />
      <div className="mt-16 text-slate-100 px-4">
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
          <ArrowLeftOnRectangleIcon className="w-5 h-5 text-black" />
        </motion.button>
      </div>
    </div>
  );
};

export default CommentLogin;
