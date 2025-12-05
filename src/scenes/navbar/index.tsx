import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import Logo from "@/assets/logo2.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import type { SelectedPage } from "@/shared/types";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);


  useEffect(() => {
    document.body.style.overflow = isMenuToggled ? "hidden" : "auto";
  }, [isMenuToggled]);

  return (
    <nav>

      <div
        className={`fixed top-0 z-30 w-full py-6 transition-colors duration-300
          ${isTopOfPage ? "" : "bg-black/60 backdrop-blur-md shadow-xl"}`}
      >
        <div className="mx-auto w-5/6 flex items-center justify-between">
            <a href="/">
          <img alt="logo" src={Logo} className="w-6 h-6 md:hidden" />
            </a>

          {isAboveMediumScreens ? (
            <div className="flex justify-between w-full">
              <div className="flex gap-8 text-md">
                <Link page="Home" {...{ selectedPage, setSelectedPage }} />
                <Link page="Latest arrivals" {...{ selectedPage, setSelectedPage }} />
                <Link page="Watches" {...{ selectedPage, setSelectedPage }} />
                <Link page="Discoveries" {...{ selectedPage, setSelectedPage }} />
                <Link page="About us" {...{ selectedPage, setSelectedPage }} />
                <Link page="Contact" {...{ selectedPage, setSelectedPage }} />
              </div>

              {/* icons */}
      <div className="flex justify-center gap-4 menu-item items-center">
        <a href="#" className="footer-link">
          <span className="sr-only">Facebook</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M22 12a10 10 0 1 0-11 9.95V14.89h-2v-3h2v-2c0-2 1.2-3 3-3 .87 0 1.8.15 1.8.15v2h-1c-1 0-1.3.62-1.3 1.25v1.6h2.5l-.4 3h-2.1v7.06A10 10 0 0 0 22 12z" />
          </svg>
        </a>

        <a href="#" className="footer-link">
          <span className="sr-only">Instagram</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
          </svg>
        </a>
      </div>
            </div>
          ) : (
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className="relative w-7 h-7 flex flex-col justify-around items-center group"
            >
              <span
                className={`burger-line ${
                  isMenuToggled ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`burger-line ${
                  isMenuToggled ? "opacity-0" : ""
                }`}
              />
              <span
                className={`burger-line ${
                  isMenuToggled ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          )}
        </div>
      </div>

      {/* BACKDROP */}
      {!isAboveMediumScreens && (
        <div
          className={`mobile-backdrop ${
            isMenuToggled ? "visible" : ""
          }`}
          onClick={() => setIsMenuToggled(false)}
        />
      )}

      {/* MOBILE MENU */}
      {!isAboveMediumScreens && (
        <div
          className={`mobile-menu ${isMenuToggled ? "open" : ""}`}
        >
          <button
            className="absolute right-6 top-8"
            onClick={() => setIsMenuToggled(false)}
          >
            <XMarkIcon className="w-7 h-7 text-gray-700 transition-transform duration-300 rotate-0 group-hover:rotate-90" />
          </button>

          <div className="flex flex-col gap-10 text-xl ml-24 mt-32 animate-fadeSlide">
            <Link page="Home" {...{ selectedPage, setSelectedPage }}/>
            <Link page="Latest arrivals" {...{ selectedPage, setSelectedPage }} />
            <Link page="Watches" {...{ selectedPage, setSelectedPage }} />
            <Link page="Discoveries" {...{ selectedPage, setSelectedPage }} />
            <Link page="About us" {...{ selectedPage, setSelectedPage }} />
            <Link page="Contact" {...{ selectedPage, setSelectedPage }} />
          </div>
                   {/* icons */}
      <div className="flex justify-center gap-4 menu-item items-center m-10">
        <a href="#" className="footer-link">
          <span className="sr-only">Facebook</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentcolor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12a10 10 0 1 0-11 9.95V14.89h-2v-3h2v-2c0-2 1.2-3 3-3 .87 0 1.8.15 1.8.15v2h-1c-1 0-1.3.62-1.3 1.25v1.6h2.5l-.4 3h-2.1v7.06A10 10 0 0 0 22 12z" />
          </svg>
        </a>

        <a href="#" className="footer-link">
          <span className="sr-only">Instagram</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentcolor"
            viewBox="0 0 24 24"
          >
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
          </svg>
        </a>
      </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
