"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const links = [
    { href: "/", text: "Home" },
    { href: "/pages/About", text: "About" },
    { href: "/pages/Services", text: "Services" },
    { href: "/pages/Contact", text: "Contact" },
  ];

  const path = usePathname();

  // Log the current path for debugging
  console.log("Current path:", path);

  // Normalize href to remove leading '..' if necessary
  const normalizeHref = (href) => {
    return href.startsWith("../") ? href.replace("../", "/") : href;
  };

  return (
    <header className="bg-gray-900 text-white relative">
      {/* NavBar */}
      <nav className="container mx-auto p-4 flex items-center justify-between">
        <div className="pl-3">
          <h1 className="text-xl md:text-2xl font-bold">OUTDOOR</h1>
          <h2 className="text-xs md:text-sm tracking-[0.3rem]">ADVENTURE</h2>
        </div>
        <div className="hidden md:flex md:ml-10">
          <ul className="flex justify-center py-5 rounded-sm">
            {links.map((l) => (
              <li className="pr-[2.5rem]" key={l.href}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link
                    className={`${
                      normalizeHref(l.href) === path ? "text-pink-600" : ""
                    } text-base`}
                    href={l.href}
                  >
                    {l.text}
                  </Link>
                </motion.div>
              </li>
            ))}
            <li>
              <button className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-xl text-sm -my-1">
                TAKE ACTION
              </button>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
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
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        onClick={closeMenu}
      />
      <div
        className={`fixed top-0 right-0 w-64 bg-gray-900 p-4 z-50 h-full transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end">
          <button onClick={closeMenu} className="text-white focus:outline-none">
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
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col space-y-4 mt-4">
          <li>
            <a href="#" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li>
            <button
              className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-xl text-sm"
              onClick={closeMenu}
            >
              TAKE ACTION
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
