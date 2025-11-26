import Image from 'next/image';
import Container from './Container';
import { cn } from '@/lib/utils';

interface FeatureSectionProps {
  badge: string;
  title: string;
  text: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  className?: string;
}

export default function FeatureSection({
  badge,
  title,
  text,
  imageSrc,
  imageAlt,
  reverse = false,
  className,
}: FeatureSectionProps) {
  return (
    <section className={cn("py-24 lg:py-32 overflow-hidden border-b border-[#FAF8F7] last:border-0", className)}>
      <Container>
        <div className={cn(
          "flex flex-col lg:flex-row items-center gap-12 lg:gap-24",
          reverse && "lg:flex-row-reverse"
        )}>
          
          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-block relative">
                <span className="relative z-10 text-sm font-bold text-[#010100] uppercase tracking-widest">{badge}</span>
                <div className="absolute bottom-0 left-0 w-full h-3 bg-[#FAF8F7] -rotate-1 rounded-sm -z-0 transform translate-y-1"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#010100] leading-[1.1] tracking-tight">
              {title}
            </h2>
            
            <div className="text-lg md:text-xl text-[#545555] font-light space-y-6 leading-relaxed">
              {text}
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] aspect-[4/3] lg:aspect-square drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
