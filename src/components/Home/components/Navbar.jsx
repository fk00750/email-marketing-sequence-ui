import React, { useState } from "react";
import { FiUser } from 'react-icons/fi';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isLoggedIn = true

  return (
    <nav className="bg-black border-gray-200">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <div className="self-center text-2xl font-semibold whitespace-nowrap">
            <span className="text-white">Build</span><span className="text-green-600">Email</span>
          </div>
        </div>
        <div className="flex md:order-2">
          {isLoggedIn ? (
            <button
              type="button"
              className="flex items-center text-white bg-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
              style={{ fontSize: "1.5rem" }} // Adjust the font size here
            >
              <FiUser />
            </button>
          ) : (
            <button
              type="button"
              className="text-white bg-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            >
              Get started
            </button>
          )}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-green-600 rounded md:bg-transparent md:text-green-600 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 md:text-white xl:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 md:text-white rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-green-600 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 md:text-white rounded hover:bg-gray-100 md:hover-bg-transparent md:hover-text-green-600 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;