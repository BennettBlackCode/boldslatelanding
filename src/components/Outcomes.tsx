import Container from './Container';
import { Wallet, TrendingUp, Gauge } from 'lucide-react';

export default function Outcomes() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex justify-center items-center px-4 py-1.5 rounded-full bg-[#FAF8F7] text-[#010100] mb-6">
            <span className="text-sm font-bold uppercase tracking-widest">
              Outcomes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#010100] mb-6 leading-tight">
            What We Deliver
          </h2>
          <p className="text-xl text-[#545555] font-light max-w-2xl mx-auto">
            We identify the opportunities, build the systems, and maintain them long term.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center group p-8 rounded-3xl transition-colors hover:bg-[#FAF8F7]">
            <div className="w-20 h-20 bg-[#FAF8F7] text-[#010100] rounded-2xl flex items-center justify-center mb-8 shadow-sm transform -rotate-3 transition-all duration-300 group-hover:rotate-0 group-hover:scale-110 group-hover:bg-[#010100] group-hover:text-white group-hover:shadow-lg">
              <Wallet size={36} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold text-[#010100] mb-4">Cost Reduction</h3>
            <p className="text-lg text-[#545555] font-light leading-relaxed">
              Start by providing your current workflows, client deliverables, and systems needs.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center group p-8 rounded-3xl transition-colors hover:bg-[#FAF8F7]">
            <div className="w-20 h-20 bg-[#FAF8F7] text-[#010100] rounded-2xl flex items-center justify-center mb-8 shadow-sm transform rotate-3 transition-all duration-300 group-hover:rotate-0 group-hover:scale-110 group-hover:bg-[#010100] group-hover:text-white group-hover:shadow-lg">
              <TrendingUp size={36} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold text-[#010100] mb-4">Improved Outcomes</h3>
            <p className="text-lg text-[#545555] font-light leading-relaxed">
              Our team gets to work on creating new workflows that allow your business to run on it's own.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center group p-8 rounded-3xl transition-colors hover:bg-[#FAF8F7]">
            <div className="w-20 h-20 bg-[#FAF8F7] text-[#010100] rounded-2xl flex items-center justify-center mb-8 shadow-sm transform -rotate-3 transition-all duration-300 group-hover:rotate-0 group-hover:scale-110 group-hover:bg-[#010100] group-hover:text-white group-hover:shadow-lg">
              <Gauge size={36} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold text-[#010100] mb-4">Increased Productivity</h3>
            <p className="text-lg text-[#545555] font-light leading-relaxed">
              After approval, we'll turn your systems live and monitor the performance, ready to tweak as needed.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
