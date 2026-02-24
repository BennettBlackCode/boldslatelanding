'use client';

import Link from 'next/link';
import Container from './Container';
import { Globe, Database, Search, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const products = [
  {
    name: '1ClickWebsite.ai',
    description: 'AI-powered website builder that creates full WordPress sites with SEO-optimized pages in minutes — built for agencies.',
    icon: Globe,
    href: 'https://1clickwebsite.ai/',
    status: 'live' as const,
  },
  {
    name: 'LocalProspects.ai',
    description: 'Database of 5M+ local business leads with deep enhancement — find and qualify your next clients instantly.',
    icon: Database,
    href: null,
    status: 'coming-soon' as const,
  },
  {
    name: 'AgencyX2.ai',
    description: 'Local SEO for the agentic era — automate citations, reviews, and local listings across every platform.',
    icon: Search,
    href: null,
    status: 'coming-soon' as const,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-[#FAF8F7]">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex justify-center items-center px-4 py-1.5 rounded-full bg-white border border-[#FAF8F7] mb-6 shadow-sm">
            <span className="text-sm font-bold text-[#010100] uppercase tracking-widest">
              Our Products
            </span>
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-[#010100] mb-6 leading-[1.1]">
            Software for Agencies
          </h2>
          <p className="text-xl leading-relaxed font-light text-[#545555]">
            Tools that help marketing agencies deliver better results, faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            const isLive = product.status === 'live';

            const cardContent = (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative flex flex-col p-8 bg-white border border-[#FAF8F7] rounded-3xl transition-all duration-300 h-full ${
                  isLive ? 'hover:border-[#010100] hover:shadow-2xl hover:shadow-[#010100]/5' : ''
                }`}
              >
                {isLive && (
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-[#010100]">
                    <ArrowUpRight size={24} />
                  </div>
                )}

                <div className="mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF8F7] flex items-center justify-center group-hover:bg-[#010100] transition-colors duration-300">
                    <IconComponent size={24} className="text-[#010100] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    isLive
                      ? 'bg-[#FAF8F7] text-[#010100] border border-[#FAF8F7]'
                      : 'bg-[#FAF8F7] text-[#545555] border border-[#E5E2E0]'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full mr-2 ${isLive ? 'bg-[#010100] animate-pulse' : 'bg-[#545555]'}`} />
                    {isLive ? 'Live' : 'Coming Soon'}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-[#010100] mb-3">
                  {product.name}
                </h3>
                <p className="text-lg leading-relaxed font-light text-[#545555]">
                  {product.description}
                </p>
              </motion.div>
            );

            if (isLive && product.href) {
              return (
                <Link key={product.name} href={product.href} target="_blank" className="block h-full">
                  {cardContent}
                </Link>
              );
            }

            return <div key={product.name}>{cardContent}</div>;
          })}
        </div>
      </Container>
    </section>
  );
}
