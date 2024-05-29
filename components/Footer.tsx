import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black h-[300px] px-6 ">
      <div className="max-w-7xl  mx-auto justify-between border-t border-gray-700 py-8  h-full flex flex-row text-white">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xl">Contact Me</p>
            <a href="mailto:bemimg.dev@gmail.com">bemimg.dev@gmail.com</a>
          </div>
          <p>© 2024 Bernardo Guerreiro</p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <a
              href="https://www.linkedin.com/in/bemimg/"
              target="a_blank"
              className="flex flex-row gap-2 items-center self-end"
            >
              <p>LinkedIn</p>
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/beMimg"
              target="a_blank"
              className="flex flex-row gap-2 items-center self-end"
            >
              <p>GitHub</p>
              <FaGithub />
            </a>
            <a
              href="mailto:bemimg.dev@gmail.com"
              target="a_blank"
              className="flex flex-row gap-2 items-center self-end"
            >
              <p>Email</p>
              <MdOutlineEmail />
            </a>
          </div>
          <p>Cádiz, Spain</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;