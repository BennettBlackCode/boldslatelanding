'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import { useNavbarContext } from './NavbarContext';

/**
 * Navbar Component
 * 
 * The CTA button can be configured in 3 ways (in order of priority):
 * 1. Page-level: Any page can use useNavbarConfig() hook to override
 * 2. Layout-level: Pass props directly to <Navbar /> in a layout
 * 3. Default: "Schedule A Call" with consultation link
 * 
 * Priority: Page config > Layout props > Defaults
 */
export default function Navbar() {
  // Get config from context (set by pages via useNavbarConfig hook)
  const { config } = useNavbarContext();
  
  const { ctaText, ctaLink, showCta } = config;
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#FAF8F7] h-[90px] flex items-center transition-all duration-300 shadow-sm">
      <Container className="w-full flex items-center justify-between">
        <div className="relative w-[160px] md:w-[180px] h-[40px] md:h-[50px] flex-shrink-0 transition-opacity hover:opacity-80">
           <Link href="/">
             <Image 
               src="https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/Bold-Slate-Logo-Light-8.webp" 
               alt="Bold Slate"
               fill
               className="object-contain object-left"
               priority
             />
           </Link>
        </div>
        {showCta && (
          <div className="flex-shrink-0 ml-4">
             <Link 
               href={ctaLink}
               className="inline-flex items-center justify-center bg-[#010100] hover:bg-[#1a1a1a] text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] text-sm md:text-base shadow-lg hover:shadow-xl whitespace-nowrap"
             >
               {ctaText}
             </Link>
          </div>
        )}
      </Container>
    </nav>
  );
}
