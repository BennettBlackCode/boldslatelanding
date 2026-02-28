'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function DashboardHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none isolate opacity-40"
      >
        <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(30,10%,95%,.4)_0,hsla(30,10%,85%,.1)_50%,transparent_80%)]" />
        <div className="h-[80rem] absolute right-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(30,10%,95%,.3)_0,hsla(30,10%,85%,.1)_80%,transparent_100%)] [translate:-5%_-50%]" />
      </div>

      <div className="relative pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <AnimatedGroup variants={transitionVariants}>
              {/* Main Heading */}
              <h1 className="text-[42px] md:text-[52px] lg:text-[60px] leading-[1.05] font-semibold text-[#010100] max-w-4xl mx-auto">
                Software that does the work,{' '}
                <span className="text-[#545555]">not just shows it to you</span>
              </h1>

              {/* Subheading */}
              <p className="mx-auto mt-8 max-w-2xl text-[20px] md:text-[24px] leading-[1.6] text-[#545555] font-light">
                Most agency tools give you a dashboard and leave the work to you. We build products that deliver the finished outcome — so you can focus on your clients.
              </p>
            </AnimatedGroup>

            {/* CTA Button */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <div className="bg-[#010100]/10 rounded-[14px] p-0.5">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl px-8 py-6 text-lg font-medium"
                >
                  <Link href="#product">
                    <span className="text-nowrap">See What We&apos;re Building</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </AnimatedGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
