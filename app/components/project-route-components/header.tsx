import Link from "next/link";
import React from "react";

const Header = ({ name }: { name: string }) => {
  return (
    <nav className="p-4 sticky top-0 z-10 h-10 ">
      <div className="text-sm breadcrumbs text-stone-100">
        <ul>
          <li>
            <Link href="/">
              <img
                src="/navigation/home.svg"
                alt=""
                className="w-4 h-4 mr-2 stroke-current"
              />
              Home
            </Link>
          </li>
          <li>
            <a href="#">
              <img
                src="/navigation/details.svg"
                alt=""
                className="w-4 h-4 mr-2 stroke-current"
              />
              {name}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
