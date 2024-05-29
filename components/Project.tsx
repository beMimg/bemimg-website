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
    <motion.article
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      viewport={{
        once: true,
      }}
      className=" shadow-2xl flex flex-col md:flex-row justify-between gap-12  rounded-3xl  "
    >
      <figure className="md:min-w-[300px] lg:min-w-[500px] max-w-[700px]">
        <Image src={image} className=" w-full " alt="mockup" />
      </figure>
      <div className="flex flex-col justify-between gap-3">
        <p className="text-xl">{title}</p>
        <p className="font-extralight opacity-80">{description}</p>
        <p className="font-extralight opacity-80">{tech}</p>
        <div className="flex flex-col self-end justify-evenly">
          <a className="flex flex-row items-center gap-2 self-end rounded-full p-2 px-4 cursor-pointer">
            <p className="text-base">Visit project</p>
            <FaExternalLinkAlt className="text-base" />
          </a>
          <a className=" flex flex-row items-center rounded-full gap-2 self-end p-2 px-4 cursor-pointer">
            <p className="text-base">See code</p>
            <FaGithub className="text-base" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default Project;
