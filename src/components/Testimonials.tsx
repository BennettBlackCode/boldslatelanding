"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonialsData = [
  {
    text: "Bennett and his team have helped us eliminate tons of manual work, boost our client retention, and they are very responsive & skilled. 10/10 experience.",
    image: "https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/lane%20image.png",
    name: "Lane Houk",
    role: "CEO, Quantum Agency",
    link: "http://quantumagency.io/",
  },
  {
    text: "Bold Slate helped us 10x our revenue with the AI systems they built - no chance we'd be where we are without them. If you're not using AI and automation yet, you're falling behind.",
    image: "https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/vince%20image.png",
    name: "Vincent Triffileti",
    role: "CEO, VGT Media",
    link: "https://vgtmedia.com/",
  },
  {
    text: "They've built some super innovative automations that feel like they're changing the game. They're responsive, easy to work with, and actually know how to build real stuff.",
    image: "https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/frankie%20image.png",
    name: "Frankie Fihn",
    role: "Author, Beyond The Agency Box",
    link: "https://beyondtheagencybox.com/",
  },
  {
    text: "Bold Slate built us a Custom Automation Solution that saved our team over 96 hours of monthly repetitive work. Highly Recommend!",
    image: "https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/Ibrahim%20Barhumi.png",
    name: "Abe Barhumi",
    role: "VIS Mountain",
    link: "https://vismountain.com/",
  },
  {
    text: "Working with Bold Slate has been awesome. I've been able to cut my development time from 4 weeks to 4 days and create sites that outperform my competitors 10-15 page basic sites with completely SEO optimized sites that are 50+ pages.",
    image: "https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/Social%20Proof/Jeremy%20Friedland/Jeremy%20Friedland%20Profile%20Pic%20-%20AutomatePro.jpg",
    name: "Jeremy Friedland",
    role: "CEO, AutomatePro.ai",
    link: "https://automatepro.ai/",
  },
  {
    text: "Boldslate's one-click website tool changed the pace of our contractor site builds. What used to drag on for a month or more now wraps up in about two weeks. The process is smoother, the workload is lighter, and our team moves faster than we ever thought possible.",
    image: "https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/Social%20Proof/Nicklaus%20Conley/Nicklaus%20Conley%20Profile%20Pic%20Tekton%20Growth.jpg",
    name: "Nicklaus Conley",
    role: "CEO, Tekton Growth",
    link: "https://tektongrowth.com/home",
  },
  {
    text: "Last month I sold 8 out of the 10 sites, saved my VA about 100 hrs of work and made an extra $3000k ROI is nuts. I'm keeping an eye on all your stuff, this is great.",
    image: "https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/Social%20Proof/Balint%20Adorjan/Balint%20Adorjan%20Profile%20Pic%20Vortex%20Local.jpg",
    name: "Balint Adorjan",
    role: "Founder, Vortex Local",
    link: "https://vortexlocal.com/",
  },
];

// Distribute testimonials across columns for varied display
const firstColumn = [testimonialsData[0], testimonialsData[3], testimonialsData[4], testimonialsData[1]];
const secondColumn = [testimonialsData[1], testimonialsData[5], testimonialsData[2], testimonialsData[6]];
const thirdColumn = [testimonialsData[2], testimonialsData[6], testimonialsData[0], testimonialsData[5]];

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
