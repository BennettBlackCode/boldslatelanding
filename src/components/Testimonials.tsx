"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonialsData = [
  {
    text: "Bennett and his team have helped us eliminate tons of manual work, boost our client retention, and they are very responsive & skilled. 10/10 experience.",
    image: "https://boldslate.com/wp-content/uploads/2025/05/Screenshot-2025-05-26-at-1.24.41%E2%80%AFPM-150x150.png",
    name: "Lane Houk",
    role: "CEO, Quantum Agency",
  },
  {
    text: "Bold Slate helped us 10x our revenue with the AI systems they built - no chance we’d be where we are without them. If you’re not using AI and automation yet, you’re falling behind.",
    image: "https://boldslate.com/wp-content/uploads/2025/05/Screenshot-2025-05-26-at-1.47.11%E2%80%AFPM-150x150.png",
    name: "Vincent Triffileti",
    role: "CEO, Clinic Lab",
  },
  {
    text: "They’ve built some super innovative automations that feel like they’re changing the game. They’re responsive, easy to work with, and actually know how to build real stuff.",
    image: "https://boldslate.com/wp-content/uploads/2025/05/Screenshot-2025-05-26-at-1.46.34%E2%80%AFPM-150x150.png",
    name: "Frankie Fihn",
    role: "Author, Beyond The Agency Box",
  },
];

// Duplicate testimonials to fill the grid for the animation
const testimonials = [
  ...testimonialsData,
  ...testimonialsData,
  ...testimonialsData
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-white my-20 relative overflow-hidden">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto px-4"
        >
          <div className="flex justify-center">
            <div className="border border-[#FAF8F7] py-1 px-4 rounded-lg text-[#010100]">Testimonials</div>
          </div>

          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold tracking-tight mt-5 text-center text-[#010100] leading-[1.1]">
            What Our Clients Say
          </h2>
          <p className="text-center mt-5 text-[#545555] opacity-75">
            We proactively look for opportunities to help your business <i>run itself</i>
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden px-4">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
