"use client";
import React from "react";
import { motion } from "framer-motion";
import { techStack } from "@/utils/techStack";
import ListOfTechs from "./ListOfTechs";
import Image from "next/image";
import me from "@/assets/me.jpg";

const About = () => {
  return (
    <section id="about" className="px-6 pb-40">
      <div className="max-w-7xl mx-auto flex flex-col text-white gap-24">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-4xl font-semibold flex flex-row gap-2 items-center"
        >
          Hello 👋,
        </motion.header>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 justify-between"
        >
          <div className="flex flex-col justify-between gap-8">
            <p className="font-medium">
              I&apos;m Bernardo, a dedicated full stack web developer,
              passionate about creating simplistic, accessible and functional
              user experiences.
            </p>
            <p>
              Currently looking to be a integral part of a software development
              team, keep improving and learning new things.
            </p>
            <div className="flex flex-row justify-between gap-4">
              {techStack.map((tech) => (
                <ListOfTechs
                  key={tech.title}
                  title={tech.title}
                  stack={tech.stack}
                />
              ))}
            </div>
          </div>
          <figure className="md:min-w-[300px] lg:min-w-[500px] max-w-[700px]">
            <Image src={me} alt="self" className="w-full " />
          </figure>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
