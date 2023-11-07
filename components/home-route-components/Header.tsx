"use client";
import useTrackScreenHeight from "../../lib/hooks/useTrackScreenHeight";
// @ts-ignore
import ScrollspyNav from "react-scrollspy-nav";
// @ts-ignore
import ProgressBar from "react-scroll-progress-bar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const trackHeight = useTrackScreenHeight();
  return (
    <div
      className={` ${
        trackHeight ? "bg-black" : "bg-transparent"
      } sticky top-0  w-full h-16 flex items-center justify-center z-50`}
    >
      <ProgressBar bgcolor="blue" duration="0.2" />

      <ScrollspyNav
        scrollTargetIds={["About", "Skills", "Intro", "Showcase", "Contact"]}
        offset={0}
        activeNavClass="activeLink"
        scrollDuration="100"
      >
        <div className="flex space-x-5 md:space-x-10 lg:space-x-12 xl:space-x-16 items-center justify-center text-white">
          <Link href="#About" className="link">
            About
          </Link>
          <Link href="#Skills" className="link">
            Skills
          </Link>
          <Link href="#Intro">
            <Image
              src="/jawad.png"
              priority
              width={50}
              height={50}
              className="scale-110 cursor-pointer link"
              alt="J"
            />
          </Link>
          <Link href="#Showcase" className="link">
            Projects
          </Link>
          <Link href="#Contact" className="link">
            Contact
          </Link>
        </div>
      </ScrollspyNav>
    </div>
  );
};

export default Header;
