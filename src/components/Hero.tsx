'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';

export default function Hero() {
  return (
    <section className="relative pt-[80px] pb-[80px] lg:pt-[100px] lg:pb-[100px] bg-white">
      <Container>
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          
          {/* Social Proof Image */}
          <div className="mb-10 flex justify-center">
            <Image
              src="https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/above%20header%20image.webp"
              alt="1,000+ Systems Built"
              width={400}
              height={80}
              className="object-contain"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-[42px] md:text-[52px] lg:text-[60px] leading-[1.05] font-semibold text-[#010100] mb-8">
            Save your agency thousands of<br />
            hours of human time
          </h1>

          {/* Subheading */}
          <p className="text-[20px] md:text-[24px] leading-[1.6] text-[#545555] max-w-2xl mx-auto mb-10 font-light">
            We build AI powered systems for small to medium sized marketing agencies that automate key processes to help you scale.
          </p>
          
          {/* Single CTA Button */}
          <Link 
            href="https://cal.com/boldslate/ai-systems-consultation"
            className="inline-flex items-center justify-center gap-2 bg-[#010100] hover:bg-[#010100] text-white font-medium text-[18px] py-4 px-8 rounded-xl transition-all duration-300"
          >
            Book A Free Automation Discovery Call
            <span className="text-xl">&gt;</span>
          </Link>

        </div>
      </Container>
    </section>
  );
}
