"use client";
import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import { projects } from "@/utils/projects";

const Work = () => {
  return (
    <section className="bg-gradiant pt-10">
      <div className="max-w-7xl mx-auto flex flex-col text-white gap-20  ">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-4xl font-semibold"
        >
          Work
        </motion.header>
        {projects.map((project) => (
          <Project
            image={project.image}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
