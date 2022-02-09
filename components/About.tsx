import React from "react"
import { PaperAirplaneIcon } from "@heroicons/react/outline"
import { motion, AnimatePresence } from "framer-motion"

const About = () => {
  //create a state called viewContent that is set to false
  const [viewContent, setViewContent] = React.useState(false)
  //create a state called hover that is set to false
  const [hover, setHover] = React.useState(false)

  return (
    <div
      id="About"
      className="w-full relative grid grid-cols-1 md:grid-cols-2 text-white  gap-0"
    >
      <div className=" hidden md:block h-[400px] mt-24  ">
        <img
          src="https://cdn.dribbble.com/users/4496283/screenshots/10758256/media/1cf9d968e57c2311961c01511afc20c3.png"
          alt=""
          className="h-full w-full  object-cover rounded"
        />
      </div>

      <div className="w-full  flex flex-col items-center  bg-black justify-evenly h-[400px] mt-24 ">
        <h1 className="text-2xl flex space-x-8">
          <p
            className={`cursor-pointer scale-90 ${
              !viewContent && "text-blue-500 scale-125"
            } `}
            onClick={() => setViewContent(false)}
          >
            About Me
          </p>
          <p>|</p>
          <p
            className={`cursor-pointer scale-90  ${
              viewContent && "text-blue-500 scale-125 "
            }`}
            onClick={() => setViewContent(true)}
          >
            Address
          </p>
        </h1>
        <div className="flex items-center justify-center w-[350px]">
          <AnimatePresence>
            {!viewContent ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.7, delay: 0.2 }}
                exit={{ opacity: 0 }}
                className="h-[200px] text-center"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio voluptas exercitationem laudantium ab assumenda.
                Delectus voluptatibus aspernatur provident repellat rem ducimus
                animi dicta iste. Ad sunt nulla, esse at saepe totam aliquid
                dolorem ullam omnis consequuntur, pariatur est distinctio
                excepturi consectetur cum blanditiis. Id soluta neque ad
                consequatur deleniti placeat.
              </motion.p>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.7, delay: 0.2 }}
                exit={{ opacity: 0 }}
                className=" h-[200px] flex flex-col justify-center items-center space-y-3"
              >
                <p>
                  <span className="font-bold text-gray-100 text-xl">
                    Country:
                  </span>
                  <span className="ml-2">Lebanon</span>
                </p>
                <p>
                  <span className="font-bold text-gray-100  text-xl">
                    City:
                  </span>
                  <span className="ml-2">Ain Anoub - Hay Al Fawara</span>
                </p>
                <p>
                  <span className="font-bold text-gray-100 text-xl">
                    Phone:
                  </span>
                  <span className="ml-2">+961-76621277</span>
                </p>
                <p>
                  <span className="font-bold text-gray-100 text-xl">
                    Email:
                  </span>
                  <a
                    className=" underline hover:text-blue-400 hover:underline ml-2"
                    href="#Contact"
                  >
                    JawadAmmar27janu2000@gmail.com
                  </a>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <a
          href="#Contact"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex items-center space-x-3 justify-center border-2 border-white p-3 rounded hover:bg-white hover:text-black transition-all  duration-75 font-bold  "
        >
          <p>Get In Touch</p>
          <motion.p initial={false} animate={{ scale: hover ? 1.2 : 1 }}>
            <PaperAirplaneIcon className="w-[20px] h-[20px] rotate-180" />
          </motion.p>
        </a>
      </div>
    </div>
  )
}

export default About
