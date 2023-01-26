import Image from "next/image";
import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const ProjectSocial = ({ repo, site, youtube }: ProjectSocialProps) => {
  return (
    <section className="flex-col space-y-6 w-full h-16 mt-16 flex items-center justify-evenly relative ">
      <h1 className="font-bold text-2xl text-center">
        You can find more about this project
      </h1>
      <div className="flex items-center justify-evenly space-x-4">
        <Link
          href={repo}
          target="_blank"
          className="flex items-center space-x-2  bg-[#5d0a68] px-2 py-1 rounded-lg cursor-pointer"
        >
          <Image
            alt="github icon"
            src="/social/github.svg"
            width={20}
            height={20}
          />
          <label className="font-medium text-stone-100 cursor-pointer">
            Github
          </label>
        </Link>
        <Link
          href={site}
          target="_blank"
          className="flex items-center space-x-2  bg-stone-600 px-2 py-1 rounded-lg cursor-pointer"
        >
          <GlobeAltIcon className="w-5 group-hover:animate-spin text-stone-100" />
          <label className="font-medium text-stone-100 cursor-pointer">
            Site
          </label>
        </Link>

        <Link
          href={youtube}
          className="flex items-center space-x-2  bg-[#C9171A] px-2 py-1 rounded-lg cursor-pointer"
        >
          <Image
            alt="youtube icon"
            className=""
            src="/social/youtube.svg"
            width={20}
            height={20}
          />
          <label className="font-medium text-stone-100 cursor-pointer">
            Youtube
          </label>
        </Link>
      </div>
    </section>
  );
};

export default ProjectSocial;
