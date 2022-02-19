import { PaperAirplaneIcon, DownloadIcon } from "@heroicons/react/outline"
import { motion } from "framer-motion"

const About = ({ aboutRef }: { aboutRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div id="About" className=" w-full h-[600px] flex items-center">
      <div className="w-full h-[500px]  bg-slate-100 mt-24 flex items-center justify-center space-x-5">
        <img
          src="/profile.JPG"
          alt="profile"
          className="rounded lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[400px] object-cover hidden md:block"
        />
        <div className="w-[400px] h-[400px]">
          <h1 className="text-black first-letter:text-3xl font-bold">
            Hi, I'm
            <span className="text-black font-bold"> Jawad Ammar</span>
          </h1>
          <p className="text-sm mt-2 font-semibold">
            I'm a full stack web developer, I have a passion for building
            applications that are easy to use and easy to understand. I love
            learning new things and I'm always looking to improve my skills.
          </p>
          <ul className="flex flex-col space-y-1 mt-3">
            <li>
              <span className="text-sm font-semibold ">Country:</span>
              <span className="text-sm"> Lebanon</span>
            </li>
            <li>
              <span className="text-sm font-semibold ">City:</span>
              <span className="text-sm"> Ain Anoub - Hay Al Fawara</span>
            </li>
            <li>
              <span className="text-sm font-semibold ">Phone:</span>
              <span className="text-sm"> +961-76621277</span>
            </li>
            <li>
              <span className="text-sm font-semibold ">Email:</span>
              <span className="text-sm"> JawadAmmar27janu2000@gmail.com</span>
            </li>
          </ul>
          <div ref={aboutRef} className="mt-4 cursor-pointer">
            <motion.a
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
              href="#Contact"
              className="group flex items-center space-x-3 justify-center border-2 border-white bg-black p-3 rounded text-white font-bold  "
            >
              <p>Get In Touch</p>

              <PaperAirplaneIcon className="w-[20px] h-[20px] rotate-180  group-hover:animate-pulse" />
            </motion.a>
          </div>
          <div className="mt-4 cursor-pointer">
            <motion.a
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
              className="group flex items-center space-x-3 justify-center border-2 border-white bg-red-500 p-3 rounded text-white font-bold  "
              href="/word-file/Resume_Jawad_Ammar.docx"
              download
            >
              <p>Download CV</p>

              <DownloadIcon className="w-[20px] h-[20px] group-hover:animate-pulse" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
