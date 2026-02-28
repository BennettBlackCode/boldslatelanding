'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-12 border-t border-[#FAF8F7]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Logo and Tagline */}
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
              We build software that delivers outcomes, not dashboards. Products for marketing agencies that do the work — so your team can focus on clients.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-5 lg:col-span-5 md:text-right space-y-8 pt-4 md:pt-0">
            <h3 className="font-semibold text-[#010100] text-lg uppercase tracking-wider">Company</h3>
            <div className="flex flex-col md:items-end gap-4">
              <Link
                href="https://1clickwebsite.ai/"
                target="_blank"
                className="text-[#545555] hover:text-[#010100] transition-colors font-light text-lg"
              >
                1ClickWebsite.ai
              </Link>
              <Link
                href="mailto:contact@boldslate.com"
                className="text-[#545555] hover:text-[#010100] transition-colors font-light text-lg"
              >
                contact@boldslate.com
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#FAF8F7] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#545555]/60 text-sm font-light">
            &copy; {new Date().getFullYear()} Bold Slate. All rights reserved.
          </p>
          <div className="flex gap-6">
              {/* Socials could go here */}
          </div>
        </div>
      </Container>
    </footer>
  );
}
