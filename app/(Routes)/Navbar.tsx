'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // Added Link import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-serif text-red-600 ">VEHICLES ZONE</div>

        {/* Search Bar */}
        <div className="flex-grow md:flex md:justify-center hidden">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search cars, buses models..."
              className="w-full bg-gray-900 text-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-gray-800"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-red-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className=" md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-black md:static md:flex md:space-x-6 md:w-auto text-lg`}
        >
          <Link
            href="/"
            className="block px-4 py-2 md:inline-block hover:text-red-600 transition-all duration-300 ease-in-out hover:scale-105"
          >
            Home
          </Link>
          
          <Link
            href="/Services"
            className="block px-4 py-2 md:inline-block hover:text-red-600 transition-all duration-300 ease-in-out hover:scale-105"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="block px-4 py-2 md:inline-block hover:text-red-600 transition-all duration-300 ease-in-out hover:scale-105"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
