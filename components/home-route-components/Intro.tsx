import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FileSearch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

const Intro = () => {
  return (
    <section id="Intro" className="w-full z-50 h-screen -mt-16">
      <div className="w-full h-screen relative">
        <Image src="/landing-image.png" alt="intro-image" fill sizes="100vw" />
      </div>

      <div className="w-full z-30 h-screen flex-col absolute top-0 flex items-center justify-center text-white">
        <div className="flex flex-col space-y-3 text-slate-100 items-center md:w-[600px] w-full">
          <h1 className="text-lg md:text-xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-slate-700">
            Hello,
          </h1>
          <p className="font-extrabold md:text-3xl text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
            Full-Stack Web Developer
          </p>
          <p className="px-5 md:px-0 md:text-md text-sm font-bold break-words text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
            I'm associated with the creation of web applications in designing
            the front-end and the back-end of an application while ensuring its
            effiency, reliability and other crucial features.
          </p>

          <div className="flex space-x-2">
            <Link href={process.env.NEXT_PUBLIC_FACEBOOK_LINK!} target="_blank">
              <FiFacebook className="w-[25px] hover:text-sky-500 scale-100 hover:scale-125 h-[25px] cursor-pointer" />
            </Link>
            <Link href={process.env.NEXT_PUBLIC_LINKEDIN_LINK!} target="_blank">
              <FiLinkedin className="w-[25px] hover:text-violet-500 scale-100 hover:scale-125 h-[25px] cursor-pointer" />
            </Link>
            <Link href={process.env.NEXT_PUBLIC_GITHUB_LINK!} target="_blank">
              <FiGithub className="w-[25px] hover:text-pink-500 scale-100 hover:scale-125 h-[25px] cursor-pointer" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-4">
          <a href="#About">
            <ChevronDownIcon className="w-[45px] h-[45px] animate-bounce cursor-pointer hover:text-blue-500" />
          </a>
        </div>
        <div className="absolute bottom-4 right-5">
          <Link
            href="v2"
            className="px-6 py-2 rounded-lg flex items-center justify-center space-x-5 bg-black/40"
          >
            <p>Interact with The CV</p>
            <FileSearch />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
