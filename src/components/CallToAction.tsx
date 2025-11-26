import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import { ClipboardCheck, Search, Plus, BarChart3 } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-white border-t border-[#FAF8F7]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-0 w-1/2 h-full bg-[#FAF8F7]/30 rounded-l-full blur-3xl opacity-60 pointer-events-none" />
      
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
          <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#010100] leading-[1.15]">
              Bring Your Processes,<br />
              <span className="text-[#010100]">Let's Talk Automation.</span>
            </h2>
            
            <ul className="space-y-6 inline-block text-left">
              <li className="flex items-center gap-5 group p-4 rounded-2xl hover:bg-[#FAF8F7] transition-colors duration-300 -mx-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FAF8F7] flex items-center justify-center text-[#010100] shadow-sm group-hover:bg-[#010100] group-hover:text-white transition-colors duration-300">
                  <ClipboardCheck size={22} strokeWidth={2} />
                </div>
                <span className="text-xl text-[#010100] font-medium group-hover:text-[#010100] transition-colors">Review your current tasks & systems</span>
              </li>
              <li className="flex items-center gap-5 group p-4 rounded-2xl hover:bg-[#FAF8F7] transition-colors duration-300 -mx-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FAF8F7] flex items-center justify-center text-[#010100] shadow-sm group-hover:bg-[#010100] group-hover:text-white transition-colors duration-300 relative">
                  <Search size={20} strokeWidth={2.5} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <Plus size={12} strokeWidth={3} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-[8px] translate-y-[8px]" />
                </div>
                <span className="text-xl text-[#010100] font-medium group-hover:text-[#010100] transition-colors">Find improvement opportunities</span>
              </li>
              <li className="flex items-center gap-5 group p-4 rounded-2xl hover:bg-[#FAF8F7] transition-colors duration-300 -mx-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FAF8F7] flex items-center justify-center text-[#010100] shadow-sm group-hover:bg-[#010100] group-hover:text-white transition-colors duration-300">
                  <BarChart3 size={22} strokeWidth={2} />
                </div>
                <span className="text-xl text-[#010100] font-medium group-hover:text-[#010100] transition-colors">See how we can help you scale</span>
              </li>
            </ul>

            <div className="pt-6">
              <Link 
                href="https://cal.com/boldslate/ai-systems-consultation"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-[#010100] hover:bg-[#010100] text-white font-medium text-[18px] py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Book A Free Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square animate-float">
              <Image
                src="https://boldslate.com/wp-content/uploads/2025/01/Untitled-design.svg"
                alt="Automation Discussion"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
