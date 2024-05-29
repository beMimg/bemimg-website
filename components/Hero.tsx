"use client";
import React, { useRef } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { motion, useScroll, useTransform } from "framer-motion";

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
          <h1 className="text-3xl md:text-9xl font-bold dark:text-white text-center">
            Hi, I&apos;m Bernardo
          </h1>
          <h2 className="font-extralight text-base md:text-6xl dark:text-neutral-200 py-4">
            A Web Developer.
          </h2>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            See Work
          </button>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
