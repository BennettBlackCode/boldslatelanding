"use client";

import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="bg-white px-4 pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="mx-auto max-w-3xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-[#FAF8F7] px-4 py-1.5 text-sm font-medium text-[#545555]">
            Welcome, 7FA Members
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 font-heading text-3xl font-semibold leading-tight text-[#010100] md:text-5xl lg:text-[56px]"
        >
          Explore the Future of Your Agency
        </motion.h1>

      </div>
    </section>
  );
}

