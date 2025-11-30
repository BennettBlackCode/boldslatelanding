import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';

export default function CustomBuilds() {
  return (
    <section className="py-24 lg:py-32 bg-white border-t border-[#FAF8F7]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] aspect-square animate-float">
              <div className="absolute inset-0 bg-[#010100]/5 rounded-full blur-3xl scale-90 -z-10" />
              <Image
                src="https://boldslate.com/wp-content/uploads/2025/01/undraw_read-notes_7itt.svg"
                alt="Custom Builds Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="order-2 lg:order-2 space-y-8 text-center lg:text-left">
            <div className="inline-block relative">
                <span className="relative z-10 text-sm font-bold text-[#010100] uppercase tracking-widest">Custom Builds</span>
                <div className="absolute bottom-0 left-0 w-full h-3 bg-[#FAF8F7] -rotate-1 rounded-sm -z-0 transform translate-y-1"></div>
            </div>
            
            <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-semibold text-[#010100] leading-[1.1] tracking-tight">
              Your Business On<br />Self-Fulfillment Mode
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-[#545555] font-light leading-relaxed">
              <p>
                Set your teams free to do more of their best work & we'll take care of the rest.
              </p>
              <p>
                Book a call to discuss your processes with our team. You'll leave with a clear idea of where AI + Automation fit inside of your operations.
              </p>
            </div>
            
            <div className="pt-6">
              <Link 
                href="https://cal.com/boldslate/ai-systems-consultation"
                className="inline-flex items-center justify-center gap-2 bg-[#010100] hover:bg-[#010100] text-white font-medium text-[18px] py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Book Custom Build
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
