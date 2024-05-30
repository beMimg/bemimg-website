import React from "react";
import { motion } from "framer-motion";
import mockup from "@/assets/smartmockups_lwpbprcx.png";
import Image, { StaticImageData } from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  image: StaticImageData;
  title: string;
  description: string;
  tech: string;
}

const Project = ({ image, title, description, tech }: ProjectProps) => {
  return (
    <article className="overflow-hidden flex flex-col md:flex-row justify-between gap-12 p-6">
      <motion.figure
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="relative rounded-none z-1 bg-gradient-to-r from-black to-gray-800 bg-[length:200%] animate-gradientMove flex justify-center items-center"
      >
        <Image
          src={image}
          className=" brightness-110 relative z-20 w-full h-full object-cover object-center cursor-pointer opacity-100 transition-opacity duration-700 rounded-none shadow-none"
          alt="mockup"
        />
        <Image
          src={image}
          className="absolute top-0 left-0 w-full h-full object-cover object-center rounded-none opacity-80 transition-opacity duration-500 delay-500 blur-[8px]  "
          alt="mockup"
        />
      </motion.figure>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="flex flex-col justify-between gap-4"
      >
        <p className="text-3xl">{title}</p>
        <p className="font-extralight opacity-70 ">{description}</p>
        <p className="font-extralight opacity-70">{tech}</p>
        <div className="flex flex-col self-end justify-evenly">
          <a className="flex flex-row items-center gap-2 self-end rounded-full p-2 px-4 cursor-pointer">
            <p className="font-semibold uppercase">Visit project</p>
            <FaExternalLinkAlt />
          </a>
          <a className=" flex flex-row items-center rounded-full gap-2 self-end p-2 px-4 cursor-pointer">
            <p className="font-semibold uppercase">See code</p>
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </article>
  );
};

// initial={{ opacity: 0, y: 200 }}
// whileInView={{ opacity: 1, y: 0 }}
// transition={{
//   duration: 0.4,
//   ease: "easeInOut",
// }}

export default Project;
