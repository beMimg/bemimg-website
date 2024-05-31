"use client";
import React, { useRef } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 700], [1, 3]);
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);

  const words = ["Bernardo,", "beMimg,"];
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
          className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4"
        >
          <h1 className="self-start text-6xl font-bold md:text-9xl dark:text-white">
            I&apos;m <br className="md:hidden" />
            <FlipWords words={words} />
          </h1>
          <h2 className="self-start text-2xl font-extralight md:text-8xl dark:text-neutral-200">
            A Full Stack Web Developer.
          </h2>
          <a
            href="#work"
            className="hidden flex-row items-center gap-2 self-start rounded-full bg-white px-4 py-2 text-xl text-black md:mt-8 md:flex md:animate-bounce md:self-center"
          >
            <p>See Work</p>
            <FaArrowDown />
          </a>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
