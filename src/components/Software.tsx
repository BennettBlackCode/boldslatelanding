import Link from 'next/link';
import Container from './Container';
import { ArrowUpRight } from 'lucide-react';

export default function Software() {
  return (
    <section id="software" className="py-24 lg:py-32 bg-[#FAF8F7] relative">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex justify-center items-center px-4 py-1.5 rounded-full bg-white border border-[#FAF8F7] mb-6 shadow-sm">
            <span className="text-sm font-bold text-[#010100] uppercase tracking-widest">
              Our Software
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#010100] mb-6 leading-tight">
            What We've Built
          </h2>
          <p className="text-xl leading-relaxed font-light text-[#545555]">
            Software tools that will revolutionize how you deliver results to clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative flex flex-col p-8 bg-white border border-[#FAF8F7] rounded-3xl hover:border-[#010100] hover:shadow-2xl hover:shadow-[#010100]/5 transition-all duration-300 h-full">
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-[#010100]">
                <ArrowUpRight size={24} />
            </div>
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FAF8F7] text-[#010100] border border-[#FAF8F7] text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#010100] mr-2 animate-pulse"></span>
                Live
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-[#010100] mb-3 group-hover:text-[#010100] transition-colors">
              <Link href="https://1clickwebsite.ai/" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                1clickwebsite.ai
              </Link>
            </h3>
            <p className="text-lg leading-relaxed font-light text-[#545555]">
              Build agency quality websites in 1 click using pre-build Wordpress templates.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative flex flex-col p-8 bg-white border border-[#FAF8F7] rounded-3xl hover:border-[#010100] hover:shadow-2xl hover:shadow-[#010100]/5 transition-all duration-300 h-full">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FAF8F7] text-[#010100] border border-[#FAF8F7] text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#010100] mr-2 animate-pulse"></span>
                Live
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-[#010100] mb-3">
              1clickwebsite.ai enterprise
            </h3>
            <p className="text-lg leading-relaxed font-light text-[#545555]">
              Whitelabel version of 1clickwebsite.ai that works with your existing Wordpress templates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative flex flex-col p-8 bg-white/60 border border-[#FAF8F7] rounded-3xl hover:bg-white hover:border-[#FAF8F7] hover:shadow-xl transition-all duration-300 h-full">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FAF8F7] text-[#010100] border border-[#FAF8F7] text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#010100] mr-2"></span>
                In progress
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-[#010100] mb-3">
              1clickgbp.ai
            </h3>
            <p className="text-lg leading-relaxed font-light text-[#545555]">
              Create 365 days worth of Google Business Profile posts and import directly into GoHighLevel.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
