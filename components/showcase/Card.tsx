import { useState } from "react"
import { ArrowNarrowRightIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

const Card = ({ name, src, span }: any) => {
  const [revealCard, setRevealCard] = useState(false)

  return (
    <div
      onMouseOver={() => setRevealCard(true)}
      onMouseLeave={() => setRevealCard(false)}
      className={`${
        span !== 0 && "md:col-span-2 md:row-span-2 h-[445px] w-full"
      } cursor-pointer relative col-span-1 row-span-1 w-full h-[200px] rounded-md`}
    >
      <Image
        src={src}
        alt={src}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL="/blur.jpg"
        className={`object-cover rounded-md  ${
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
              span === 0 ? "md:h-16 h-12" : "md:h-24 h-12"
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
