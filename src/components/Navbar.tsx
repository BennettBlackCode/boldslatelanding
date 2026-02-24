'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';

export default function Navbar() {
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
        <div className="flex-shrink-0 ml-4">
           <Link
             href="#contact"
             className="inline-flex items-center justify-center bg-[#010100] hover:bg-[#1a1a1a] text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] text-sm md:text-base shadow-lg hover:shadow-xl whitespace-nowrap"
           >
             Get In Touch
           </Link>
        </div>
      </Container>
    </nav>
  );
}
