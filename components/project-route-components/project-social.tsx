import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { FiGithub, FiYoutube } from "react-icons/fi";

const ProjectSocial = ({ repo, site, youtube }: ProjectSocialProps) => {
  return (
    <section className="flex-col space-y-6 w-full h-16 mt-16 flex items-center justify-evenly relative ">
      <h1 className="font-bold text-2xl text-center text-neutral-content">
        You can find more about this project
      </h1>
      <div className="flex items-center justify-evenly space-x-4">
        <Link
          href={repo}
          target="_blank"
          className="hover:scale-110 transition-all duration-150 flex items-center space-x-2  bg-[#E260D0] px-2 py-1 rounded-lg cursor-pointer shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
        >
          <FiGithub className="w-5 text-white" />
          <label className="font-medium text-stone-100 text-sm cursor-pointer">
            Github
          </label>
        </Link>
        <Link
          href={site}
          target="_blank"
          className="hover:scale-110 transition-all duration-150 flex items-center space-x-2  bg-stone-600 px-2 py-1 rounded-lg cursor-pointer shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
        >
          <GlobeAltIcon className="w-5 text-white" />
          <label className="font-medium text-stone-100 text-sm cursor-pointer">
            Site
          </label>
        </Link>

        <Link
          href={youtube}
          className="hover:scale-110 transition-all duration-150 flex items-center space-x-2  bg-[#FF2E2E] px-2 py-1 rounded-lg cursor-pointer shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
        >
          <FiYoutube className="w-5 text-white" />

          <label className="font-medium text-stone-100 text-sm  cursor-pointer">
            Youtube
          </label>
        </Link>
      </div>
    </section>
  );
};

export default ProjectSocial;
