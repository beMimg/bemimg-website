"use client";
import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import { allProjects } from "@/utils/allProjects";

const Work = () => {
  return (
    <section className="text-lg md:text-2xl py-20 px-6" id="work">
      <div className="flex flex-col text-white gap-24 max-w-screen-2xl mx-auto">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-9xl font-semibold"
        >
          Work
        </motion.header>
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
