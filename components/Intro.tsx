import { useRef } from "react"
import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi"
import { ChevronDownIcon, ChatAlt2Icon } from "@heroicons/react/outline"
import { motion } from "framer-motion"
import Image from "next/image"
import Comments from "./comments"

const Intro = ({ introRef }: { introRef: React.RefObject<HTMLDivElement> }) => {
  const sideBarRef = useRef<any>(null)
  return (
    <section ref={introRef} id="Intro" className="w-full z-50 h-screen -mt-16">
      <div className="w-full h-screen relative">
        <Image src="/landing-image.png" alt="intro-image" layout="fill" />
      </div>
      <div className="w-full z-30 h-screen flex-col absolute top-0 flex items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 3 }}
          className="flex flex-col space-y-3 text-slate-100 items-center md:w-[600px] md:px-0  px-3  w-full"
        >
          <h1 className="text-xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-slate-700">
            Hello,
          </h1>
          <p className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
            I'm A Full Stack Web Developer
          </p>
          <p className="text-md font-bold break-words text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            nostrum aliquam possimus hic eligendi nisi nobis neque ea placeat
            ducimus.
          </p>

          <div className="flex space-x-2">
            <a href={process.env.NEXT_PUBLIC_FACEBOOK_LINK} target="_blank">
              <FiFacebook className="w-[25px] text-purple-400  scale-110 hover:scale-125 h-[20px] cursor-pointer" />
            </a>
            <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target="_blank">
              <FiLinkedin className="w-[25px] text-pink-400  scale-110 hover:scale-125 h-[20px] cursor-pointer" />
            </a>
            <a href={process.env.NEXT_PUBLIC_GITHUB_LINK} target="_blank">
              <FiGithub className="w-[25px]  text-green-400 scale-110 hover:scale-125 h-[20px] cursor-pointer" />
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-4">
          <a href="#About">
            <ChevronDownIcon className="w-[45px] h-[45px] animate-bounce cursor-pointer hover:text-blue-500" />
          </a>
        </div>

        <button
          className="absolute bottom-0 right-0 m-4 font-bold text-slate-50 scale-95 hover:scale-105 hover:text-sky-500 hover:animate-pulse"
          onClick={() => sideBarRef.current.toggle()}
        >
          <ChatAlt2Icon className="w-5 text-slate-50 " />
        </button>
      </div>
      <Comments ref={sideBarRef} />
    </section>
  )
}

export default Intro
