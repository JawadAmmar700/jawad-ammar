import {
  PaperAirplaneIcon,
  ArrowDownOnSquareIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div id="About" className=" w-full h-[600px] flex items-center">
      <div className="w-full h-[500px]  bg-slate-100 mt-24 flex items-center justify-center space-x-5">
        <img
          src="/profile.jpg"
          alt="profile"
          className="rounded lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[400px] object-cover hidden md:block"
        />
        <div className="w-[400px] h-[400px]">
          <h1 className="text-black first-letter:text-3xl font-bold">
            Hi, I'm
            <span className="font-bold"> Jawad Ammar</span>
          </h1>
          <p className="text-xs mt-2 font-semibold text-black">
            I'm an undergraduate engineer willing to be a full-stack developer
            and to do programming as a profession. My interests range from
            back-side, front-end and system management. I am willing to find a
            desirable future in the software development field since I am
            interested in all parts of application development. I have developed
            a few projects and worked on the portfolio here in a relatively
            small period of time by myself.
          </p>
          <ul className="flex flex-col space-y-1 mt-3 text-black">
            <li>
              <span className="text-sm font-semibold ">Country:</span>
              <span className="text-sm"> Lebanon</span>
            </li>
            <li>
              <span className="text-sm font-semibold ">City:</span>
              <span className="text-sm"> Aley - Ain Anoub - Hay Al Fawara</span>
            </li>
            <li>
              <span className="text-sm font-semibold ">Phone:</span>
              <span className="text-sm"> +961-76621277</span>
            </li>
            <li>
              <span className="text-sm font-semibold ">Email:</span>
              <span className="text-sm"> jawadammar000@gmail.com</span>
            </li>
          </ul>
          <div id="About" className="mt-4 cursor-pointer">
            <a
              href="#Contact"
              className="group flex items-center space-x-3 justify-center border-2 border-white bg-black p-3 rounded text-white font-bold"
            >
              <p>Get In Touch</p>
              <PaperAirplaneIcon className="w-[20px] h-[20px] rotate-180  group-hover:animate-pulse" />
            </a>
          </div>
          <div className="mt-4 cursor-pointer">
            <a
              // initial={{ scale: 0.9 }}
              // whileHover={{ scale: 1 }}
              className="group flex items-center space-x-3 justify-center border-2 border-white bg-red-500 p-3 rounded text-white font-bold  "
              href="/word-file/Resume_Jawad_Ammar.docx"
              download
            >
              <p>Download CV</p>

              <ArrowDownOnSquareIcon className="w-[20px] h-[20px] group-hover:animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
