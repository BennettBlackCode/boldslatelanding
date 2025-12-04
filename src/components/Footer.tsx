'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import { trackEvent } from './FacebookPixel';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-12 border-t border-[#FAF8F7]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Logo and Tagline - Spans 7 columns on desktop */}
          <div className="md:col-span-7 lg:col-span-7 space-y-8">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <div className="relative w-[180px] h-[50px]">
                <Image
                  src="https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/Bold-Slate-Logo-Light-8.webp"
                  alt="Bold Slate"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-lg text-[#545555] font-light leading-relaxed max-w-md">
              We build AI automation systems for businesses to increase their efficiency, effectiveness, and bottom line.
            </p>
            <div className="pt-4">
              <Link 
                href="https://cal.com/boldslate/ai-systems-consultation"
                target="_blank"
                onClick={() => trackEvent('Schedule', { content_name: 'Footer Lets Talk' })}
                className="inline-flex items-center justify-center bg-[#010100] hover:bg-[#010100] text-white font-medium text-base py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Let's Talk
              </Link>
            </div>
          </div>

          {/* Company Links - Spans 5 columns on desktop */}
          <div className="md:col-span-5 lg:col-span-5 md:text-right space-y-8 pt-4 md:pt-0">
            <h3 className="font-semibold text-[#010100] text-lg uppercase tracking-wider">Company</h3>
            <div className="flex flex-col md:items-end gap-4">
              <Link 
                href="https://boldslate.firstpromoter.com/" 
                onClick={() => trackEvent('Lead', { content_name: 'Affiliate Signup' })}
                className="text-[#545555] hover:text-[#010100] transition-colors font-light text-lg"
              >
                Become An Affiliate
              </Link>
              <Link 
                href="https://boldslate.firstpromoter.com/login" 
                onClick={() => trackEvent('ViewContent', { content_name: 'Affiliate Dashboard' })}
                className="text-[#545555] hover:text-[#010100] transition-colors font-light text-lg"
              >
                Affiliate Dashboard
              </Link>
              <Link 
                href="https://1clickwebsite.ai/" 
                onClick={() => trackEvent('ViewContent', { content_name: '1ClickWebsite' })}
                className="text-[#545555] hover:text-[#010100] transition-colors font-light text-lg"
              >
                1ClickWebsite.ai
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#FAF8F7] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#545555]/60 text-sm font-light">
            © {new Date().getFullYear()} Bold Slate. All rights reserved.
          </p>
          <div className="flex gap-6">
              {/* Socials could go here */}
          </div>
        </div>
      </Container>
    </footer>
  );
}
