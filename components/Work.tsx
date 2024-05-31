"use client";
import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import { allProjects } from "@/utils/allProjects";

const Work = () => {
  return (
    <section className="px-6 py-20 text-lg md:text-2xl" id="work">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-24 text-white">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-6xl font-semibold md:text-8xl"
        >
          Work
        </motion.h1>
        <div className="flex flex-col gap-36 md:gap-52">
          {allProjects.map((project) => (
            <Project
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              tech={project.tech}
              preview={project.preview}
              code={project.code}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
