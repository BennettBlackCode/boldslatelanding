"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  HeroSection,
  CircleNavCenterStage,
  HorizontalNavStrip,
  ContentPanel,
  Category,
} from "./components";
import Testimonials from "@/components/Testimonials";

export default function Page7faTest() {
  const [selected, setSelected] = useState<Category | null>(null);

  const handleSelect = (category: Category) => {
    // Toggle off if already selected
    if (selected === category) {
      setSelected(null);
    } else {
      setSelected(category);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroSection />

      {/* Circle Navigation - Desktop */}
      <div className="hidden md:block">
        <CircleNavCenterStage selected={selected} onSelect={handleSelect} />
      </div>

      {/* Horizontal Scroll Strip - Mobile */}
      <div className="md:hidden">
        <HorizontalNavStrip selected={selected} onSelect={handleSelect} />
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#FAF8F7] to-transparent" />
      </div>

      {/* Content Panel */}
      <ContentPanel category={selected} />

      {/* Testimonials Section (from homepage) */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Testimonials />
        </motion.div>
      )}

      {/* Bottom CTA */}
      {selected && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-[#FAF8F7] px-4 py-16 md:py-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-semibold text-[#010100] md:text-4xl">
              Ready to Transform Your Agency?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#545555]">
              Join hundreds of agencies already using Bold Slate to automate their operations and scale faster.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-[#010100] px-8 py-4 font-medium text-white transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                Start Free Trial
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-[#010100] bg-white px-8 py-4 font-medium text-[#010100] transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                Book a Call
              </a>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}
