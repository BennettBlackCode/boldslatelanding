'use client';

import Link from 'next/link';
import Container from './Container';
import { ArrowRight, Sparkles, Clock, Zap } from 'lucide-react';
import { trackEvent } from './FacebookPixel';

export default function CallToAction() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#010100]">
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
            <Sparkles size={16} className="text-white/80" />
            <span className="text-sm font-medium text-white/90 tracking-wide">Free Strategy Session</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-semibold text-white! leading-[1.1] tracking-tight mb-6">
            Fulfill the same quality of work<br className="hidden sm:block" />{" "}
            in hours instead of weeks.
          </h2>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mb-10 leading-relaxed">
            Book a free 30-minute discovery call. We'll review your processes, identify automation opportunities, and show you exactly how AI can transform your operations.
          </p>
          
          {/* Features Row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
            <div className="flex items-center gap-2 text-white/80">
              <Clock size={18} className="text-white/60" />
              <span className="text-sm font-medium">30 Min Call</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Zap size={18} className="text-white/60" />
              <span className="text-sm font-medium">Custom Strategy</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Sparkles size={18} className="text-white/60" />
              <span className="text-sm font-medium">No Obligation</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <Link 
            href="https://cal.com/boldslate/ai-systems-consultation"
            target="_blank"
            onClick={() => trackEvent('Schedule', { content_name: 'CTA Section Book Call' })}
            className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-[#FAF8F7] text-[#010100] font-semibold text-lg py-5 px-10 rounded-2xl transition-all duration-300 shadow-2xl shadow-white/10 hover:shadow-white/20 hover:-translate-y-1"
          >
            Book Your Free Call
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          
          {/* Trust indicator */}
          <p className="mt-8 text-sm text-white/50">
            Join 100+ agencies already scaling with AI automation
          </p>
          
        </div>
      </Container>
    </section>
  );
}
