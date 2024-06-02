"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black px-6 text-lg">
      <div className="mx-auto grid min-h-[400px] max-w-screen-2xl grid-cols-2 grid-rows-2 justify-between border-t border-gray-700 bg-black py-8 text-white md:grid-cols-3">
        <div className="row-start-2 flex flex-col justify-between md:row-start-1 md:row-end-3">
          <div className="flex flex-col gap-1">
            <p>Contact Me</p>
            <a
              href="mailto:bemimg.dev@gmail.com"
              className="font-extralight opacity-70"
            >
              bemimg.dev@gmail.com
            </a>
          </div>
          <p className="text-base font-extralight opacity-70">
            © 2024 Bernardo Guerreiro
          </p>
        </div>
        <div className="col-start-1 col-end-3 row-start-1 flex h-full flex-col items-center justify-center gap-6 pb-12 md:col-start-2 md:row-end-3">
          <p className="text-center text-2xl font-medium">
            Ready to level up your project?
          </p>
          <a
            href="mailto:bemimg.dev@gmail.com"
            className="animate-shimmer inline-flex h-14 w-full items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-center font-medium uppercase text-slate-500 transition-all hover:scale-105 hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            get in touch
          </a>
        </div>
        <div className="cols-tart-2 row-start-2 flex flex-col justify-between md:col-start-3 md:row-start-1 md:row-end-3">
          <div className="flex flex-col gap-1">
            <a
              href="https://www.linkedin.com/in/bemimg/"
              target="a_blank"
              className="flex flex-row items-center gap-2 self-end transition-all hover:-translate-x-1"
            >
              <p>LinkedIn</p>
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/beMimg"
              target="a_blank"
              className="flex flex-row items-center gap-2 self-end transition-all hover:-translate-x-1"
            >
              <p>GitHub</p>
              <FaGithub />
            </a>
            <a
              href="mailto:bemimg.dev@gmail.com"
              target="a_blank"
              className="flex flex-row items-center gap-2 self-end transition-all hover:-translate-x-1"
            >
              <p>Email</p>
              <MdOutlineEmail />
            </a>
          </div>
          <p className="self-end text-base font-extralight opacity-70">
            Cádiz, Spain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <footer id="contact" className="h-[300px] bg-black px-6 text-lg">
<div className="mx-auto flex h-full  flex-row justify-between border-t border-gray-700 py-8 text-white">
  <div className="flex flex-col justify-between">
    <div className="flex flex-col gap-1">
      <p>Contact Me</p>
      <a
        href="mailto:bemimg.dev@gmail.com"
        className="font-extralight opacity-70"
      >
        bemimg.dev@gmail.com
      </a>
    </div>
    <p className="text-base font-extralight opacity-70">
      © 2024 Bernardo Guerreiro
    </p>
  </div>
  <div className="flex flex-col justify-between">
    <div className="flex flex-col gap-1">
      <a
        href="https://www.linkedin.com/in/bemimg/"
        target="a_blank"
        className="flex flex-row items-center gap-2 self-end"
      >
        <p>LinkedIn</p>
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/beMimg"
        target="a_blank"
        className="flex flex-row items-center gap-2 self-end"
      >
        <p>GitHub</p>
        <FaGithub />
      </a>
      <a
        href="mailto:bemimg.dev@gmail.com"
        target="a_blank"
        className="flex flex-row items-center gap-2 self-end"
      >
        <p>Email</p>
        <MdOutlineEmail />
      </a>
    </div>
    <p className="text-base font-extralight opacity-70">Cádiz, Spain</p>
  </div>
</div>
</footer> */
}
