"use client";
import { useState } from "react";
import {
  PaperAirplaneIcon,
  ArrowDownOnSquareIcon,
  UserCircleIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { aboutVariants } from "../../lib/motion";
import Image from "next/image";

const About = () => {
  const [tabCatategory, setTabCategory] = useState("Profile");
  return (
    <div id="About" className="w-full flex flex-col items-center">
      <div className="w-full p-4 bg-slate-100 mt-24 flex items-center justify-center space-x-5 z-20">
        <Image
          src="/ava3.webp"
          alt="profile"
          width={400}
          height={400}
          className="rounded lg:w-[400px] md:w-[300px] object-cover hidden md:block"
        />
        <div className="w-[400px]">
          <div className="w-full flex items-center justify-start">
            <div className="tabs tabs-boxed bg-slate-100">
              <a
                onClick={() => setTabCategory("Profile")}
                className={`tab ${tabCatategory === "Profile" && "tab-active"}`}
              >
                <UserCircleIcon className="w-[20px] h-[20px] " />
                <span>Profile</span>
              </a>
              <a
                onClick={() => setTabCategory("Education")}
                className={`tab ${
                  tabCatategory === "Education" && "tab-active"
                }`}
              >
                <AcademicCapIcon className="w-[20px] h-[20px] " />
                <span>Education</span>
              </a>
            </div>
          </div>

          {tabCatategory === "Profile" ? (
            <motion.div
              key={tabCatategory}
              className="mt-5 h-[400px]"
              variants={aboutVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h1 className="text-black first-letter:text-3xl font-bold">
                Hi, I'm
                <span className="font-bold"> Jawad Ammar</span>
              </h1>
              <p className="text-xs mt-2 font-semibold text-black">
                As a recent graduate with a degree in Computer and Communication
                Engineering from Lebanese International University, I am
                determined to launch my career in the technology industry. I
                have a solid understanding in technologies like Next.js and
                React.js. I’m eager to apply my knowledge and skills to
                real-world projects. Despite my lack of professional experience,
                I am a fast learner and dedicated to ongoing development in this
                field and I’m excited about the opportunity to join a dynamic
                and innovative team as I set out on my professional journey.
              </p>
              <ul className="flex flex-col space-y-1 mt-3 text-black">
                <li>
                  <span className="text-xs font-bold ">Country:</span>
                  <span className="text-xs"> Lebanon</span>
                </li>
                <li>
                  <span className="text-xs font-bold ">City:</span>
                  <span className="text-xs">
                    {" "}
                    Aley - Ain Anoub - Hay Al Fawara
                  </span>
                </li>
                <li>
                  <span className="text-xs font-bold ">Phone:</span>
                  <span className="text-xs"> +961-76621277</span>
                </li>
                <li>
                  <span className="text-xs font-bold ">Email:</span>
                  <span className="text-xs"> jawadammar000@gmail.com</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#Contact"
                  className="group hover:scale-105 text-xs sm-text-sm  rounded-lg flex items-center space-x-2 justify-center border-2 border-white bg-black p-2  text-white font-bold"
                >
                  <p>Get In Touch</p>
                  <PaperAirplaneIcon className="w-[20px] h-[20px] rotate-180  group-hover:animate-pulse" />
                </a>
                <a
                  className="group hover:scale-105 text-xs sm-text-sm  flex items-center space-x-2 justify-center border-2 border-white bg-red-500 p-2 rounded-lg text-white font-bold  "
                  href="/word-file/JawadAmmar_Resume.pdf"
                  download
                >
                  <p>Download CV</p>

                  <ArrowDownOnSquareIcon className="w-[20px] h-[20px] group-hover:animate-pulse" />
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={tabCatategory}
              className="text-black mt-5 h-[400px]"
              variants={aboutVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p className="text-2xl font-bold">Education:</p>
              <div className="p-4 font-medium ">
                <p className="text-xs">
                  1- Bachelor Science Degree in Computer and Communication
                  Engineering
                </p>
                <div className="ml-10 text-xs">
                  <li> Lebanese International University, Beirut, Lebanon</li>
                  <li> 2018 - May 2023</li>
                </div>
              </div>
              <div className="p-4 font-medium ">
                <p className="text-xs">2- Baccalaureate Degree</p>
                <div className="ml-10 text-xs">
                  <li> Cedars Cultural School, Kabr Chamoun, Lebanon </li>
                  <li> 2017 - 2018</li>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
