import React from "react"
import ScrollIntoView from "../Functions/ScrollIntoView"
import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi"

const Footer = ({ IntroRef }) => {
  return (
    <footer className="w-full flex flex-col space-y-7 items-center  h-[200px] mt-44 bg-[#0f0f0f]">
      <div
        onClick={() => ScrollIntoView(IntroRef, "Intro")}
        className="w-[60px] h-[60px] relative -top-8   rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-all border-2 border-white "
      >
        <img src="/code/uparrow.png" alt="arrow up" />
      </div>
      <div className="flex items-center space-x-4 text-white">
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
      <p className="text-gray-600">
        <span className="text-gray-800">Made by</span> Jawad Ammar
      </p>
    </footer>
  )
}

export default Footer
