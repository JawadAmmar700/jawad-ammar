import { useState } from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/future/image";
import { ProjectType } from "../../lib/types";
import { useRouter } from "next/router";

const Card = ({ name, src, span }: ProjectType) => {
  const [revealCard, setRevealCard] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div
      onMouseOver={() => setRevealCard(true)}
      onMouseLeave={() => setRevealCard(false)}
      onClick={() => router.push(name)}
      className={`${
        span !== 0
          ? "md:col-span-2 md:row-span-2 lg:h-[445px]  h-[300px] w-full"
          : "col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-1 w-full lg:h-[200px] h-[300px]"
      } cursor-pointer relative rounded`}
    >
      <Image
        src={src}
        alt={src}
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        fill
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
              <ArrowSmallRightIcon className="text-sky-500 animate-pulse w-4 " />
            </motion.div>
          </motion.div>
        </Link>
      )}
    </div>
  );
};

export default Card;
