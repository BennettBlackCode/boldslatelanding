'use client';

import Script from 'next/script';
import Container from './Container';
import { Mail } from 'lucide-react';

export default function CallToAction() {
  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-[#010100]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 to-transparent rounded-full" />
      </div>

      <Container>
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm">
            <Mail size={16} className="text-white/80" />
            <span className="text-sm font-medium text-white/90 tracking-wide">Get In Touch</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-semibold text-white! leading-[1.1] tracking-tight mb-6">
            Let&apos;s Build Something
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mb-10 leading-relaxed">
            Have a question or want to learn more about our products? Drop us a line and we&apos;ll get back to you.
          </p>

          {/* Formester Embed */}
          <div className="w-full max-w-2xl">
            <Script
              src="https://formester.com/scripts/formester-script.js"
              strategy="lazyOnload"
            />
            {/* @ts-expect-error - Formester web component */}
            <formester-standard-form id="07R7sd2R2" />
          </div>

        </div>
      </Container>
    </section>
  );
}
