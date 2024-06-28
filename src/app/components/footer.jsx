"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
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

  console.log("Current path:", path);

  const normalizeHref = (href) => {
    return href.startsWith("../") ? href.replace("../", "/") : href;
  };

  return (
    <footer className="bg-black px-10 py-8 text-white text-center mt-10">
      <div className="text-2xl tracking-[0.3rem]">TRAVEL BLOG</div>
      <p className="text-slate-300">Adventurous Blogger</p>

      <div className="flex justify-center my-14">
        <ul className="flex flex-col md:flex-row justify-center py-5 rounded-sm space-y-4 md:space-y-0 md:space-x-10">
          {links.map((l) => (
            <li key={l.href}>
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
        </ul>
      </div>
      <div>
        <hr className="text-white" />
      </div>
      <div className="icons space-x-4 my-6">
        <FontAwesomeIcon
          icon={faYoutube}
          className="text-white hover:text-pink-600"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-white hover:text-pink-600"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-white hover:text-pink-600"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-white hover:text-pink-600"
        />
      </div>
      <p className="my-6">
        Copyright &copy; 2024 Travel Blogger | Powered by Outdoor Adventure
      </p>
    </footer>
  );
};

export default Footer;
