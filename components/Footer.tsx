import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="contact" className="h-[300px] bg-black px-6 text-lg">
      <div className="mx-auto flex h-full max-w-screen-2xl flex-row justify-between border-t border-gray-700 py-8 text-white">
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
    </footer>
  );
};

export default Footer;
