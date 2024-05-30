import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  image: StaticImageData;
  title: string;
  description: string;
  tech: string;
  preview: string;
  code: string;
}

const Project = ({
  image,
  title,
  description,
  tech,
  preview,
  code,
}: ProjectProps) => {
  return (
    <article className="overflow-hidden flex flex-col lg:flex-row gap-12 justify-between">
      <motion.figure
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="h-full lg:w-[55%] "
      >
        <Image src={image} className="w-full h-full" alt="mockup" />
      </motion.figure>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="flex flex-col justify-between gap-4 lg:w-[45%]"
      >
        <p className="text-3xl font-semibold glow-text">{title}</p>
        <p className="font-extralight opacity-70 ">{description}</p>
        <p className="font-extralight opacity-70">{tech}</p>
        <div className="flex flex-col self-end justify-evenly">
          <a
            href={preview}
            target="a_blank"
            className="flex flex-row items-center gap-2 self-end rounded-full  cursor-pointer"
          >
            <p className="font-semibold uppercase">Visit project</p>
            <FaExternalLinkAlt />
          </a>
          <a
            href={code}
            target="a_blank"
            className=" flex flex-row items-center rounded-full gap-2 self-end cursor-pointer"
          >
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
