import Link from "next/link";
import { FiHome, FiColumns } from "react-icons/fi";

const Header = ({ name }: { name: string }) => {
  return (
    <nav className="flex items-center justify-center sticky top-2 left-2 z-10 h-10 max-w-xs bg-pink-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)]">
      <div className="text-sm breadcrumbs text-stone-100">
        <ul>
          <li>
            <Link href="/">
              <FiHome className="w-4 h-4 mr-2 stroke-current font-bold" />
              Home
            </Link>
          </li>
          <li>
            <a href="#">
              <FiColumns className="w-4 h-4 mr-2 stroke-current" />
              {name}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
