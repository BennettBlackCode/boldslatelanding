'use client';

import Link from 'next/link';
import Container from './Container';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductShowcase() {
  return (
    <section id="product" className="py-24 lg:py-32 bg-white">
      <Container>
        {/* Block 1: Text Left, Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FAF8F7] border border-[#E5E2E0] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#010100] animate-pulse mr-2" />
              <span className="text-xs font-bold text-[#010100] uppercase tracking-wider">Live</span>
            </div>
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-[#010100] leading-[1.1] mb-6">
              1ClickWebsite.ai
            </h2>
            <p className="text-lg md:text-xl text-[#545555] font-light leading-relaxed mb-8">
              Your clients need websites. Building them shouldn&apos;t take weeks of back-and-forth. 1Click generates full WordPress sites — real pages, real SEO, real content — in minutes. Not mockups. Not templates. Done sites.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Full WordPress sites with SEO-optimized pages',
                'Custom content generated from business details',
                'Deploy to hosting in one step',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#545555] font-light text-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#010100] mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="https://1clickwebsite.ai/"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#010100] text-white rounded-xl text-base font-medium hover:bg-[#010100]/90 transition-colors"
            >
              Try 1ClickWebsite.ai
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-[#FAF8F7] border border-[#E5E2E0] flex items-center justify-center">
              <span className="text-[#545555]/40 text-sm font-light">Product screenshot</span>
            </div>
          </motion.div>
        </div>

        {/* Block 2: Visual Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-2xl bg-[#FAF8F7] border border-[#E5E2E0] flex items-center justify-center">
              <span className="text-[#545555]/40 text-sm font-light">Product screenshot</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-[24px] md:text-[32px] font-semibold text-[#010100] leading-[1.15] mb-6">
              The outcome, not the interface
            </h3>
            <p className="text-lg md:text-xl text-[#545555] font-light leading-relaxed mb-8">
              Most software gives you a dashboard and calls it a day. You still need to hire someone to actually do the work. We think that&apos;s backwards. Our products deliver the finished result — the website, the listing, the campaign — so your team can focus on clients, not clicking buttons.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-[#FAF8F7]">
                <p className="text-[28px] font-semibold text-[#010100]">Minutes</p>
                <p className="text-sm text-[#545555] font-light mt-1">Not weeks to deliver</p>
              </div>
              <div className="p-5 rounded-xl bg-[#FAF8F7]">
                <p className="text-[28px] font-semibold text-[#010100]">Zero</p>
                <p className="text-sm text-[#545555] font-light mt-1">Extra hires needed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
