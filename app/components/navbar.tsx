'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // Assuming you're using Next.js for routing

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-serif text-red-600">VEHICLES ZONE</div>

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
                d={
                  !isOpen
                    ? 'M4 6h16M4 12h16M4 18h16'
                    : 'M6 18L18 6M6 6l12 12'
                }
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
            href="#"
            className="block px-4 py-2 md:inline-block hover:text-red-600 transition-all duration-300 ease-in-out hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block px-4 py-2 md:inline-block hover:text-red-600 transition-all duration-300 ease-in-out hover:scale-105"
          >
            About
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
