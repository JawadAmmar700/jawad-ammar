import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";

const Footer = ({ marginTop = "44" }: { marginTop?: string }) => {
  return (
    <footer
      className={`w-full flex flex-col space-y-7 items-center  h-[200px] mt-${marginTop} bg-[#0f0f0f]`}
    >
      <a
        href="#"
        className="w-[60px] h-[60px] relative -top-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-all border-2 border-white "
      >
        <Image src="/code/uparrow.png" alt="arrow up" width={24} height={24} />
      </a>

      <div className="flex items-center space-x-4 text-white">
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
      <p className="text-gray-600">
        <span className="text-gray-800 font-semibold">Made by</span>{" "}
        <span className="font-bold">Jawad Ammar</span>
      </p>
    </footer>
  );
};

export default Footer;
