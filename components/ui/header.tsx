"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

import { navLinks } from "@/components/utils/siteData";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full py-5 lg:py-0 z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 transition-all duration-500 hover:drop-shadow-2xl hover:-translate-x-1 hover:-translate-y-1">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-nowrap items-center">
              <Dropdown title={navLinks[2].title}>
                {navLinks[2].products?.map((subLink) => (
                  <Link
                    key={subLink.title}
                    href={subLink.link}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                  >
                    {subLink.title}
                  </Link>
                ))}
              </Dropdown>

              <li>
                <Link
                  href={navLinks[0].link}
                  className="font-medium text-gray-600 hover:text-gray-900 hover:mx-2 px-5 py-3 flex items-center transition-all duration-300 ease-in-out"
                >
                  {navLinks[0].title}
                </Link>
              </li>
              <li>
                <Link
                  href={navLinks[1].link}
                  className="font-medium text-gray-600  hover:text-gray-900 hover:mx-2 px-5 py-3 flex items-center transition-all duration-300 ease-in-out"
                >
                  {navLinks[1].title}
                </Link>
              </li>

              <li>
                <Link
                  href="https://dsyxgxuqd6g.typeform.com/to/DPwTzauX"
                  className="btn-sm text-gray-200 bg-gray-900 ml-3 transition-all duration-500 ease-in-out hover:px-5 hover:py-3 lg:px-5 lg:py-2 lg:hover:px-6 lg:hover:py-3  xl:hover:px-6 xl:hover:py-3 md:text-xs md:gap-0 md:py-2 md:px-1 md:m-0 md:hover:px-1 md:hover:py-2"
                >
                  <span>Request A Consultation</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
