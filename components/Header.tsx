import React from "react"
import useTrackScreenHeight from "../customHook/useTrackScreenHeight"
import ProgressBar from "react-scroll-progress-bar"
import Scrollspy from "react-scrollspy"
import ScrollIntoView from "../Functions/ScrollIntoView"
import setDocTitle from "../Functions/SetDocTitle"

const Header = ({ IntroRef, aboutRef, SkillsRef, WorkRef, ContactRef }) => {
  const trackHeight = useTrackScreenHeight()

  return (
    <div
      className={` ${
        trackHeight ? "bg-black" : ""
      } sticky top-0  w-full h-16 flex items-center justify-center z-50`}
    >
      <ProgressBar bgcolor="blue" duration="0.2" />
      <Scrollspy
        className="flex space-x-5 md:space-x-10 lg:space-x-12 xl:space-x-16 items-center justify-center text-white"
        items={["About", "Skills", "Intro", "Showcase", "Contact"]}
        currentClassName="animate-pulse text-blue-500"
        onUpdate={(id: { id: string }) =>
          setDocTitle(id?.id === undefined ? "About" : id?.id)
        }
      >
        <div className="scale-90 hover:scale-110 cursor-pointer font-bold hover:animate-pulse">
          <a onClick={() => ScrollIntoView(aboutRef, "About")}>About</a>
        </div>
        <div className="scale-90 hover:scale-110 cursor-pointer font-bold hover:animate-pulse">
          <a onClick={() => ScrollIntoView(SkillsRef, "Skills")}>Skills</a>
        </div>
        <div>
          <a onClick={() => ScrollIntoView(IntroRef, "Into")}>
            <img
              src="/J.png"
              className="w-[50px] scale-110 cursor-pointer"
              alt="J"
            />
          </a>
        </div>
        <div className="scale-90 hover:scale-110 cursor-pointer font-bold hover:animate-pulse">
          <a onClick={() => ScrollIntoView(WorkRef, "Showcase")}>Showcase</a>
        </div>
        <div className="scale-90 hover:scale-110 cursor-pointer font-bold hover:animate-pulse">
          <a onClick={() => ScrollIntoView(ContactRef, "Contact")}>Contact</a>
        </div>
      </Scrollspy>
    </div>
  )
}

export default Header
