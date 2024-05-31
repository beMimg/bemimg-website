import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { RxArrowTopRight } from "react-icons/rx";

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
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "0px 0px -30% 0px",
    amount: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ filter: "grayscale(0%) brightness(100%)" });
    } else {
      controls.start({ filter: "grayscale(100%) brightness(40%)" });
    }
  }, [inView, controls]);

  return (
    <article className="overflow-hidden flex flex-col lg:flex-row gap-12 justify-center">
      <motion.figure
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="lg:w-[50%]"
      >
        <motion.div
          ref={ref}
          initial={{ filter: "grayscale(100%)" }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <Image src={image} className="w-full rounded-3xl " alt="mockup" />
        </motion.div>
      </motion.figure>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="flex flex-col justify-between gap-12 lg:w-[50%]"
      >
        <p className="text-5xl font-semibold glow-text">{title}</p>
        <p className="font-extralight opacity-80 font-sans ">{description}</p>
        <p className="font-extralight opacity-80 font-sans">{tech}</p>
        <div className="flex flex-row  gap-6  lg:gap-8 ">
          <a
            href={preview}
            target="a_blank"
            className="flex flex-row items-center gap-2 self-end rounded-full  bg-white text-black p-2 lg:px-6 px-4 cursor-pointer"
          >
            <p className=" font-light">Visit project</p>
            <RxArrowTopRight />
          </a>
          <a
            href={code}
            target="a_blank"
            className="flex flex-row items-center gap-2 self-end rounded-full  bg-black text-white border border-gray-600 lg:px-6 hover:border-white transition-all p-2  px-4 cursor-pointer"
          >
            <p className="font-light">See code</p>
            <RxArrowTopRight />
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
