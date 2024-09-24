import React, { useContext, useState } from "react";
import classnames from "classnames";
import chillTechLight from "./assets/chilltechLight.png";
import chillTechDark from "./assets/chilltechDark.png";
import { ThemeContext } from "./contexts/theme";

const NavMenu = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <a
        href="#about"
        className="text-primaryDark dark:text-white font-bold py-5 px-4 hover:text-secondary dark:hover:text-secondary"
      >
        About
      </a>
      <a
        href="#services"
        className="text-primaryDark dark:text-white font-bold py-5 px-4 hover:text-secondary dark:hover:text-secondary"
      >
        Services
      </a>
    </div>
  );
};
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDarkMode, setDarkMode] = useContext(ThemeContext);

  const chillTechLogo = isDarkMode ? chillTechDark : chillTechLight;

  return (
    <>
      {/* navbar goes here */}
      <nav className="bg-primaryLight dark:bg-primaryDark fixed w-full z-50">
        <div className="pr-8 mx-auto">
          <div className="flex justify-between">
            <div className="flex gap-8">
              {/* logo */}
              <div className="justify-center items-center flex">
                <a href="/" className="text-gray-700 hidden md:block">
                  <img
                    alt="logo"
                    className="h-16 w-32"
                    src={chillTechLogo}
                  ></img>
                </a>
              </div>
              {/* primary nav */}
              <div className="hidden md:flex gap-5">
                <NavMenu />
              </div>
            </div>
            {/* secondary nav */}
            <div className="hidden md:flex items-center gap-5">
              <div
                onClick={() => {
                  window.location.href = "tel:9539907670";
                }}
                className="rounded w-42 flex justify-center cursor-pointer "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"
                    fill="rgba(99,136,153,1)"
                  />
                </svg>
                <p className="text-gray-700 dark:text-gray-200 font-semibold text-xs m-1 hover:text-blue-800">
                  9539907670
                </p>
              </div>
              <div
                onClick={() => {
                  setDarkMode((prev) => !prev)
                }}
                className="cursor-pointer"
              >
                {isDarkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                      fill="rgba(241,196,15,1)"
                    />
                  </svg>
                )}
              </div>
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
          className={classnames("flex md:hidden", {
            hidden: !isMenuOpen,
          })}
          onClick={() => setIsMenuOpen(false)}
        >
          <NavMenu />
          <div
            onClick={() => setDarkMode((prev) => !prev)}
            className="cursor-pointer flex-1 flex justify-center items-center"
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                  fill="rgba(241,196,15,1)"
                />
              </svg>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
