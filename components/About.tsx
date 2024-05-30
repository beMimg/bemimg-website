"use client";
import React from "react";
import { motion } from "framer-motion";
import { techStack } from "@/utils/techStack";
import ListOfTechs from "./ListOfTechs";
import Image from "next/image";
import me from "@/assets/me.jpg";

const About = () => {
  return (
    <section id="about" className="px-6 pb-40 pt-20 text-lg">
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
          className="flex flex-col md:flex-row gap-12 justify-between"
        >
          <div className="flex flex-col justify-between gap-20 ">
            <p className=" font-extralight opacity-70">
              I&apos;m Bernardo, Full Stack JavaScript Developer experienced on
              the <strong>MERN</strong> Stack (MongoDB, Express, React & Node).
              I&apos;ve honed my skills through self-learning and hands-on
              projects. I&apos;m passionate about{" "}
              <strong>problem-solving</strong>, <strong>coding</strong> and{" "}
              <strong>learning</strong>. After a long journey driven by my
              passion for programming, I&apos;ve decided to make a career change
              to pursue this dream.
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
