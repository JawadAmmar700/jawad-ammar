"use client";
import { useState } from "react";
import {
  PaperAirplaneIcon,
  ArrowDownOnSquareIcon,
  UserCircleIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { aboutVariants } from "../../lib/motion";

const About = () => {
  const [tabCatategory, setTabCategory] = useState("Profile");
  return (
    <div id="About" className="w-full flex flex-col items-center">
      <div className="w-full p-4 bg-slate-100 mt-24 flex items-center justify-center space-x-5 z-20">
        <img
          src="/jawad.jpg"
          alt="profile"
          className="rounded lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[400px] object-cover hidden md:block"
        />
        <div className="w-[400px] h-[400px]">
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
              className="mt-5"
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
                I'm an undergraduate engineer willing to be a full-stack
                developer and to do programming as a profession. My interests
                range from back-side, front-end and system management. I am
                willing to find a desirable future in the software development
                field since I am interested in all parts of application
                development. I have developed a few projects and worked on the
                portfolio here in a relatively small period of time by myself.
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
                  className="group hover:scale-105 flex items-center space-x-3 justify-center border-2 border-white bg-black p-3 rounded text-white font-bold"
                >
                  <p>Get In Touch</p>
                  <PaperAirplaneIcon className="w-[20px] h-[20px] rotate-180  group-hover:animate-pulse" />
                </a>
                <a
                  className="group hover:scale-105 flex items-center space-x-3 justify-center border-2 border-white bg-red-500 p-3 rounded text-white font-bold  "
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
              className="text-black mt-5"
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
                  <li> 2018- In Progress, expected in 2022</li>
                </div>
              </div>
              <div className="p-4 font-medium ">
                <p className="text-xs">2- Baccalaureate Degree</p>
                <div className="ml-10 text-xs">
                  <li> Cedars Cultural School, Kabr Chamoun, Lebanon </li>
                  <li> 2017-2018</li>
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
