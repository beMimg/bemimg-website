"use client";
import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import { projects } from "@/utils/projects";

const Work = () => {
  return (
    <section className="px-6 text-lg py-20" id="work">
      <div className="max-w-7xl mx-auto flex flex-col text-white gap-24">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-6xl font-semibold"
        >
          Work
        </motion.header>
        <div className="flex flex-col gap-36 md:gap-52">
          {projects.map((project) => (
            <Project
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
