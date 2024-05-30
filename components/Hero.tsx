"use client";
import React, { useRef } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 700], [1, 3]);
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);

  return (
    <section className="overflow-hidden">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{ scale, opacity }}
          viewport={{ once: true }}
          className="relative flex flex-col max-w-7xl mx-auto gap-4 items-center justify-center px-4"
        >
          <h1 className="text-6xl md:text-9xl font-bold dark:text-white text-center">
            Hi, I&apos;m Bernardo
          </h1>
          <h2 className="font-extralight text-2xl md:text-8xl dark:text-neutral-200 py-4">
            A Full Stack Web Developer.
          </h2>
          <a
            href="#work"
            className="bg-white flex flex-row items-center gap-2 text-black rounded-full text-xl px-4 py-2"
          >
            <p>See Work</p>
            <FaArrowDown className="animate-bounce" />
          </a>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
