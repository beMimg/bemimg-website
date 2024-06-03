"use client";
import React from "react";
import { motion } from "framer-motion";
import { techStack } from "@/utils/techStack";
import ListOfTechs from "./ListOfTechs";
import Image from "next/image";
import me from "@/assets/me.jpg";

const About = () => {
  return (
    <section id="about" className="px-6 pb-40 pt-20 text-lg md:text-2xl">
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
          Hello 👋,
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col justify-between gap-12 md:flex-row"
        >
          <div className="flex flex-col justify-between gap-12 lg:w-[50%]">
            <p className="font-sans font-extralight opacity-80">
              I&apos;m Bernardo, a Full Stack JavaScript Developer experienced
              on the <strong>MERN</strong> Stack (MongoDB, Express.js, React &
              Node.js). I&apos;ve honed my skills through self-learning and
              hands-on projects. I&apos;m passionate about{" "}
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
          <figure className="group overflow-hidden rounded-3xl lg:w-[50%]">
            <Image
              src={me}
              placeholder="blur"
              alt="self portrait"
              className="w-full transition-transform ease-in-out group-hover:scale-110"
            />
          </figure>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
