import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Link to="/" className="flex items-center">
          Crypto Taxes
        </Link>
      </li>
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Link to="/account" className="flex items-center">
          Free Tools
        </Link>
      </li>
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Link to="/blocks" className="flex items-center">
          Resource Center
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="w-full px-4  lg:px-16 lg:py-0 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between text-gray-950">
        <Link to="#" className="mr-4 cursor-pointer py-1.5 font-medium">
          <img
            src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg"
            alt="logo"
          />
        </Link>

        <div className="flex items-center gap-x-4">
          <div className="hidden lg:block">{navList}</div>
          <button className="hidden lg:inline-block px-4 py-2 bg-blue-600 border border-blue-600 rounded-md text-white hover:bg-blue-700">
            Get Started
          </button>
        </div>
        <button
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {openNav && (
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <button className="w-full px-4 py-2 bg-blue-600 border border-blue-600 rounded-md text-white hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
