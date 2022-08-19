import { useState } from "react"
import { ArrowNarrowRightIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { ProjectType } from "../../lib/types"

const Card = ({ name, src, span }: ProjectType) => {
  const [revealCard, setRevealCard] = useState(false)

  return (
    <div
      onMouseOver={() => setRevealCard(true)}
      onMouseLeave={() => setRevealCard(false)}
      className={`${
        span !== 0
          ? "md:col-span-2 md:row-span-2 lg:h-[445px]  h-[300px] w-full"
          : "col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-1 w-full lg:h-[200px] h-[300px]"
      } cursor-pointer relative rounded`}
    >
      <Image
        src={src}
        alt={src}
        layout="fill"
        objectFit="fill"
        placeholder="blur"
        blurDataURL="/blur.png"
        className={`object-cover rounded  ${
          revealCard && "opacity-50 transition-opacity"
        }`}
      />
      {revealCard && (
        <Link href={name}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ type: "linear" }}
            className={`absolute w-full bg-black  bottom-0 flex flex-col items-center justify-center md:space-y-2 space-y-1 ${
              span === 0 ? "md:h-16 h-16" : "md:h-24 h-16"
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
        </Link>
      )}
    </div>
  )
}

export default Card
