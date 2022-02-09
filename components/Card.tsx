import React from "react"
import { ArrowNarrowRightIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { motion } from "framer-motion"

const Card = ({ name, src, spanX, spanY }: any) => {
  const [revealCard, setRevealCard] = React.useState(false)

  return (
    <Link href={name}>
      <div
        onMouseOver={() => setRevealCard(true)}
        onMouseLeave={() => setRevealCard(false)}
        className={` col-span-${spanX} row-span-${spanY} cursor-pointer relative`}
      >
        <img
          src={src}
          alt={src}
          className={`object-cover rounded-lg z-30 w-full h-full ${
            revealCard && " opacity-50 transition-opacity"
          }`}
        />
        {revealCard && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ type: "linear" }}
            className={`absolute  w-full  bg-black  bottom-0 flex flex-col items-center justify-center space-y-2 ${
              spanX === 0 ? "h-16" : "h-24"
            }`}
          >
            <p className="font-bold text-white">{name}</p>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ ease: "easeOut", duration: 2, repeat: Infinity }}
            >
              <ArrowNarrowRightIcon className="text-sky-500 animate-pulse w-4 " />
            </motion.div>
          </motion.div>
        )}
      </div>
    </Link>
  )
}

export default Card
