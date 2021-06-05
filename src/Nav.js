import React, { useState } from "react";
import classnames from "classnames";
import chillTectLogo from "./assets/chilltechlogo.png";

const NavMenu = () => {
  return (
    <>
      <a href="/" className="text-gray-700  px-4 hover:text-gray-900">
        About
      </a>
      <a href="/" className="text-gray-700  px-4 hover:text-gray-900">
        Services
      </a>
    </>
  );
};
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {/* navbar goes here */}
      <nav className="bg-gray-100 fixed w-full">
        <div className="px-8 mx-auto">
          <div className="flex justify-between">
            <div className="flex gap-8">
              {/* logo */}
              <div className="flex justify-center items-center">
                <a href="/" className="text-gray-700">
                  <img
                    alt="logo"
                    className="h-16 w-32"
                    src={chillTectLogo}
                  ></img>
                </a>
              </div>
              {/* primary nav */}
              <div className="hidden md:flex gap-5 py-5">
                <NavMenu />
              </div>
            </div>
            {/* secondary nav */}
            <div className="hidden md:flex items-center gap-5">
              {/* <a href="#" className="py-5 px-3 hover:text-gray-900">
                Login
              </a> */}
              <a
                href="/"
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 
                rounded transition duration-500"
              >
                Enquire Now
              </a>
            </div>
            {/* mobile button goes here */}
            <div className="md:hidden flex items-center">
              <button
                className=""
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={classnames("flex flex-col py-2", {
            hidden: !isMenuOpen,
          })}
        >
          <NavMenu />
        </div>
      </nav>
    </>
  );
};

export default Nav;
