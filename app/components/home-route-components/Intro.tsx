import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

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
              <Image
                src="/social/facebook.svg"
                alt="facebook icon"
                width={25}
                height={25}
                className="scale-100 hover:scale-125 cursor-pointer"
              />
            </Link>
            <Link href={process.env.NEXT_PUBLIC_LINKEDIN_LINK!} target="_blank">
              <Image
                src="/social/linkedin.svg"
                alt="linkedin icon"
                width={30}
                height={30}
                className="scale-100 hover:scale-125 cursor-pointer"
              />
            </Link>
            <Link href={process.env.NEXT_PUBLIC_GITHUB_LINK!} target="_blank">
              <Image
                src="/social/github.svg"
                alt="github icon"
                width={20}
                height={20}
                className="scale-100 hover:scale-125 cursor-pointer"
              />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-4">
          <a href="#About">
            <ChevronDownIcon className="w-[45px] h-[45px] animate-bounce cursor-pointer hover:text-blue-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
