import React from "react";
import { motion } from "framer-motion";
import {
  XMarkIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Session } from "../../lib/types";
import { signOut } from "next-auth/react";

type Props = {
  session: Session | null;
  setSideBar: (sideBar: boolean) => void;
  sideBar: boolean;
};

const CommentNav = ({ session, setSideBar, sideBar }: Props) => {
  return (
    <div className="flex-none w-full z-50">
      <div className="flex items-center space-x-3 flex-none p-2 ">
        <motion.div
          whileHover={{ scale: 1.1 }}
          onClick={() => setSideBar(!sideBar)}
          className="p-2 bg-slate-50 rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer shadow-inner"
        >
          <XMarkIcon className="w-5 h-5 text-black" />
        </motion.div>
        {session && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => signOut()}
            className="p-2 bg-indigo-600 rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer relative group"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5 text-white" />
            <p className="text-slate-100 text-left text-sm font-bold opacity-0 group-hover:opacity-100 -z-10 group-hover:z-0 absolute left-12 w-[100px]">
              sign out
            </p>
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default CommentNav;
