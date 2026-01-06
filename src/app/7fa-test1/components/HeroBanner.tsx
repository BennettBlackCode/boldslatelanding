"use client";

import { motion } from "motion/react";

export function HeroBanner() {
  return (
    <section className="bg-white px-4 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        {/* Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-[#FAF8F7] px-4 py-1.5 text-sm font-medium text-[#545555]">
            Welcome, 7FA Members
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 font-heading text-4xl font-semibold leading-tight text-[#010100] md:text-5xl lg:text-[56px]"
        >
          This Is How Agencies Run in 2026
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#545555] md:text-xl"
        >
          Three ways to make your agency run like software. Pick what interests you most, 
          or explore them all-we built each one to solve the problems you actually have.
        </motion.p>
      </div>
    </section>
  );
}

