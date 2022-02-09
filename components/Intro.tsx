import React from "react"
import TypeWriter from "react-typewriter"
import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi"
import { ChevronDownIcon } from "@heroicons/react/outline"
import { motion } from "framer-motion"

const Intro = () => {
  return (
    <section id="Intro" className="w-full z-50 h-screen -mt-16">
      <img
        src="https://www.wallpaperup.com/uploads/wallpapers/2012/10/03/18069/8dcd6050eb6fb49944489290ddf26625-700.jpg"
        alt=""
        className="w-full h-screen  object-fill z-50"
      />
      <div className="w-full  z-30 h-screen  flex-col absolute top-0 flex items-center justify-center text-white">
        <div className="flex flex-col items-center  space-y-8 justify-center text-white">
          <p className="text-center">
            <TypeWriter typing={0.5}>
              <span className="text-4xl lg:text-5xl font-bold">Hello, </span>
              <span className="text-xl md:text-2xl lg:text-3xl">
                I'm Jawad Ammar
              </span>
            </TypeWriter>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3, delay: 4.6 }}
              className="mt-4 md:text-xl lg:text-2xl "
            >
              Full Stack Developer
            </motion.p>
          </p>
          <div className="flex space-x-4 ">
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3, delay: 5 }}
              href={process.env.NEXT_PUBLIC_FACEBOOK_LINK}
              target="_blank"
            >
              <FiFacebook className="w-[25px] hover:text-blue-500 scale-100 hover:scale-125 h-[25px] cursor-pointer" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3, delay: 5.4 }}
              href={process.env.NEXT_PUBLIC_LINKEDIN_LINK}
              target="_blank"
            >
              <FiLinkedin className="w-[25px] hover:text-blue-500 scale-100 hover:scale-125 h-[25px] cursor-pointer" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3, delay: 5.8 }}
              href={process.env.NEXT_PUBLIC_GITHUB_LINK}
              target="_blank"
            >
              <FiGithub className="w-[25px] hover:text-blue-500 scale-100 hover:scale-125 h-[25px] cursor-pointer" />
            </motion.a>
          </div>
        </div>
        <div className="absolute bottom-4">
          <a href="#About">
            <ChevronDownIcon className="w-[45px] h-[45px] animate-bounce cursor-pointer  hover:text-blue-500" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Intro
