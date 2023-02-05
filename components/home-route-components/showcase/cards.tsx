import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cardVariants } from "../../../lib/motion";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";

const Cards = ({ data, paginationLeft, paginationRight }: CardsProps) => {
  return (
    <>
      {data.slice(paginationLeft, paginationRight).map((item, i) => (
        <motion.div
          key={item.id}
          variants={cardVariants(i)}
          initial="hide"
          animate="show"
          whileHover="hover"
          className=" w-full h-[50px] border-2 border-white bg-[#242933] rounded-lg relative overflow-hidden group"
        >
          <div className="absolute inset-0 w-full h-full bg-opacity-60 bg-black z-10"></div>
          <Image
            src={`/assets/${item.src.toLowerCase()}.png`}
            alt={item.src}
            sizes="100%"
            fill
            className="object-cover rounded-lg z-0"
          />
          <div className="group overflow-hidden absolute inset-0 p-2 w-full h-full z-20 text-slate-100">
            <div className="flex items-center justify-between">
              <h1 className="text-sm md:text-md font-bold ">{item.name}</h1>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
              <p className="p-10 text-sm font-bold text-neutral-content">
                {item.description.substring(0, 100).concat("...")}
              </p>
              <Link href={`/${item.id}`}>
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center space-x-3 p-2 text-black rounded-lg bg-slate-100  border-2 border-white"
                >
                  <p className="text-sm font-bold">Intrested</p>
                  <CursorArrowRaysIcon className="h-5 w-5 text-black text-right" />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Cards;
