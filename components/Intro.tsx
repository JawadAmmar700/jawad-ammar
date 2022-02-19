import { useRef } from "react"
import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi"
import { ChevronDownIcon, ChatAlt2Icon } from "@heroicons/react/outline"
import { motion } from "framer-motion"
import Comments from "./comments"

const Intro = ({ introRef }: { introRef: React.RefObject<HTMLDivElement> }) => {
  const sideBarRef = useRef<any>(null)
  return (
    <section ref={introRef} id="Intro" className="w-full z-50 h-screen -mt-16">
      <img
        src="https://www.wallpaperup.com/uploads/wallpapers/2012/10/03/18069/8dcd6050eb6fb49944489290ddf26625-700.jpg"
        alt="intro-image"
        className="w-full h-screen object-fill z-50"
      />
      <div className="w-full z-30 h-screen flex-col absolute top-0 flex items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 3 }}
          className="flex flex-col items-center  space-y-8 justify-center text-white"
        >
          <div className="text-center">
            <p>Jawad Ammar</p>
            <p className="mt-4 md:text-xl lg:text-2xl">Full Stack Developer</p>
          </div>
          <div className="flex space-x-4 ">
            <a href={process.env.NEXT_PUBLIC_FACEBOOK_LINK} target="_blank">
              <FiFacebook className="w-[25px] hover:text-blue-500 scale-100 hover:scale-125 h-[25px] cursor-pointer" />
            </a>
            <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target="_blank">
              <FiLinkedin className="w-[25px] hover:text-blue-500 scale-100 hover:scale-125 h-[25px] cursor-pointer" />
            </a>
            <a href={process.env.NEXT_PUBLIC_GITHUB_LINK} target="_blank">
              <FiGithub className="w-[25px] hover:text-blue-500 scale-100 hover:scale-125 h-[25px] cursor-pointer" />
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-4">
          <a href="#About">
            <ChevronDownIcon className="w-[45px] h-[45px] animate-bounce cursor-pointer hover:text-blue-500" />
          </a>
        </div>

        <button
          className="hidden sm:block absolute bottom-0 right-0 m-4 font-bold text-slate-50 scale-95 hover:scale-105 hover:text-sky-500 hover:animate-pulse"
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
