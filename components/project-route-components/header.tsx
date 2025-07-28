import Link from "next/link";
import { FiHome, FiColumns } from "react-icons/fi";

const Header = ({ name }: { name: string }) => {
  return (
    <nav className="flex items-center justify-center sticky top-2 left-2 z-10 h-10 max-w-xs bg-pink-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)]">
      <div className="text-sm  text-stone-100">
        <ul className="flex space-x-5">
          <li>
            <Link href="/" className="flex items-center space-x-2">
              <FiHome className="w-4 h-4 mr-2  font-bold" />
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="flex space-x-2 items-center">
              <FiColumns className="w-4 h-4 mr-2 " />
              {name}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
