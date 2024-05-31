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
      className={`fixed z-40 mx-auto flex w-72 flex-row items-center gap-2 rounded-full p-2 text-base font-medium transition-all ${
        !isTopOfScreen && "bg-glass-effect scale-105"
      }`}
    >
      <a href="#work" className={aStyle}>
        Work
      </a>
      <a href="#about" className={aStyle}>
        About
      </a>
      <a href="#contact" className={aStyle}>
        Contact
      </a>
    </motion.nav>
  );
};

export default Nav;
