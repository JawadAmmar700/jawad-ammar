"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Card = ({ id, name, src, span }: ProjectType) => {
  const [revealCard, setRevealCard] = useState<boolean>(false);

  return (
    <div
      onMouseOver={() => setRevealCard(true)}
      onMouseLeave={() => setRevealCard(false)}
      className={`overflow-hidden group ${
        span !== "0"
          ? "md:col-span-2 md:row-span-2 lg:h-[445px]  h-[300px] w-full"
          : "col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-1 w-full lg:h-[200px] h-[300px]"
      }  relative rounded`}
    >
      <Image
        src={`/assets/${src.toLowerCase()}.png`}
        alt={src}
        sizes="100%"
        fill
        className="group-hover:opacity-30 scale-125 group-hover:scale-100 transition-all duration-200 ease-in-out transform w-full rounded"
      />

      {revealCard && (
        <Link href={id}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className={`absolute w-full bg-black cursor-pointer  bottom-0 flex flex-col items-center justify-center md:space-y-2 space-y-1 ${
              span === "0 " ? "md:h-16 h-16" : "md:h-24 h-16"
            }`}
          >
            <h1 className="font-bold text-white">{name}</h1>

            <p className="text-red-500 text-sm cursor-pointer animate-pulse ">
              Read more
            </p>
          </motion.div>
        </Link>
      )}
    </div>
  );
};

export default Card;
