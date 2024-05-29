"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto flex flex-col text-white gap-24">
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
          About
        </motion.header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error amet
          labore est saepe libero ipsa dicta debitis doloribus odio consequuntur
          neque qui asperiores exercitationem, totam tempore quae. Modi,
          distinctio consequuntur?
        </p>
      </div>
    </section>
  );
};

export default About;
