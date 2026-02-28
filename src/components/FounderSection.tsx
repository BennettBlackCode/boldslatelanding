'use client';

import Image from 'next/image';
import Container from './Container';
import { motion } from 'motion/react';

export default function FounderSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAF8F7]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative max-w-sm mx-auto lg:mx-0">
              <Image
                src="/founder-working.jpg"
                alt="Building software that does the work"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-[#010100] leading-[1.1] mb-8">
              Why I&apos;m Building This
            </h2>
            <div className="space-y-5 text-lg text-[#545555] font-light leading-relaxed">
              <p>
                I ran a marketing agency. Every tool I bought promised to save time, but they all did the same thing — show me more data and leave the actual work to me. I still needed VAs, contractors, and hours of manual effort to deliver what my clients were paying for.
              </p>
              <p>
                So I started building for myself. Small tools at first — a faster way to spin up client sites, a better way to manage local listings. Friends who ran agencies asked to use them. Then their friends did too.
              </p>
              <p>
                That&apos;s when it clicked. The software industry is full of dashboards. What agencies actually need are products that do the work — not just show you where the work is. That&apos;s what BoldSlate builds. Software that delivers the outcome, not just the interface.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-[#E5E2E0] flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0">
                <Image
                  src="/bennettblack.jpg"
                  alt="Bennett Black"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-xl font-semibold text-[#010100]">Bennett Black</p>
                <p className="text-base text-[#545555] font-light">Founder, BoldSlate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
