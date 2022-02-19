import useTrackScreenHeight from "../lib/hooks/useTrackScreenHeight"
import ProgressBar from "react-scroll-progress-bar"
import { Scrollspy } from "@makotot/ghostui"

const Header = ({ refs }: { refs: React.RefObject<HTMLDivElement>[] }) => {
  const trackHeight = useTrackScreenHeight()

  return (
    <div
      className={` ${
        trackHeight ? "bg-black" : ""
      } sticky top-0  w-full h-16 flex items-center justify-center z-50`}
    >
      <ProgressBar bgcolor="blue" duration="0.2" />
      <Scrollspy sectionRefs={refs}>
        {({ currentElementIndexInViewport }) => (
          <div className="flex space-x-5 md:space-x-10 lg:space-x-12 xl:space-x-16 items-center justify-center text-white">
            <div
              className={` ${
                currentElementIndexInViewport === 0 &&
                "animate-pulse text-blue-500"
              }  link`}
            >
              <a href="#About">About</a>
            </div>
            <div
              className={` ${
                currentElementIndexInViewport === 1 &&
                "animate-pulse text-blue-500"
              }  link`}
            >
              <a href="#Skills">Skills</a>
            </div>
            <div>
              <a href="#Intro">
                <img
                  src="/J.png"
                  className={`w-[50px] scale-110 cursor-pointer  ${
                    currentElementIndexInViewport === 2 &&
                    "animate-pulse text-blue-500"
                  } `}
                  alt="J"
                />
              </a>
            </div>
            <div
              className={` ${
                currentElementIndexInViewport === 3 &&
                "animate-pulse text-blue-500"
              }  link`}
            >
              <a href="#Showcase">Work</a>
            </div>
            <div
              className={` ${
                currentElementIndexInViewport === 4 &&
                "animate-pulse text-blue-500"
              }  link`}
            >
              <a href="#Contact">Contact</a>
            </div>
          </div>
        )}
      </Scrollspy>
    </div>
  )
}

export default Header
