import { useRef, useState } from "react";
import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";
import {
  ChevronDownIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/future/image";
import Comments from "./comments";

const Intro = ({
  introRef,
  isImgLoaded,
}: {
  introRef: React.RefObject<HTMLDivElement>;
  isImgLoaded: boolean;
}) => {
  const [loadingImg, setLoadingImg] = useState<boolean>(true);
  const sideBarRef = useRef<any>(null);
  return (
    <section ref={introRef} id="Intro" className="w-full z-50 h-screen -mt-16">
      <div className="w-full h-screen relative">
        <Image
          src="/landing-image.png"
          alt="intro-image"
          fill
          sizes="100vw"
          onLoadingComplete={() => setLoadingImg(false)}
        />
      </div>
      {!loadingImg && isImgLoaded && (
        <>
          <div className="w-full z-30 h-screen flex-col absolute top-0 flex items-center justify-center text-white">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3 }}
              className="flex flex-col space-y-3 text-slate-100 items-center md:w-[600px] w-full"
            >
              <h1 className="text-lg md:text-xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-slate-700">
                Hello,
              </h1>
              <p className="font-extrabold md:text-3xl text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                Full-Stack Web Developer
              </p>
              <p className="px-5 md:px-0 md:text-md text-sm font-bold break-words text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                I'm associated with the creation of web applications in
                designing the front-end and the back-end of an application while
                ensuring its effiency, reliability and other crucial features.
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
            <div className="space-x-3 hidden md:flex absolute bottom-0 right-0 m-4">
              <p className="text-xs text-slate-50 animate-pulse">
                comments &#8594;
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="font-bold text-slate-50"
                onClick={() => sideBarRef.current.toggle()}
              >
                <ChatBubbleBottomCenterTextIcon className="w-5 text-slate-50 " />
              </motion.button>
            </div>
          </div>
          <Comments ref={sideBarRef} />
        </>
      )}
    </section>
  );
};

export default Intro;
