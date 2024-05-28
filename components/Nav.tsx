"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [isTopOfScreen, setIsTopOfScreen] = useState(true);

  function handleScroll() {
    if (window.scrollY > 0) {
      setIsTopOfScreen(false);
    } else {
      setIsTopOfScreen(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const aStyle =
    "cursor-pointer w-full text-center p-1 rounded-full text-white transition-all hover:text-black hover:bg-white";
  return (
    <motion.nav
      initial={{ opacity: 0.0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      viewport={{
        once: true,
      }}
      className={`w-72 fixed p-2 z-40 mx-auto transition-all flex flex-row items-center gap-2  text-base font-medium rounded-full ${
        !isTopOfScreen && "bg-gray-500 scale-105"
      }`}
    >
      <a className={aStyle}>Work</a>
      <a className={aStyle}>About</a>
      <a className={aStyle}>Contact</a>
    </motion.nav>
  );
};

export default Nav;
