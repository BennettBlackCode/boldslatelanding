'use client';

import Container from './Container';
import { motion } from 'motion/react';

const stats = [
  { value: '10,000+', label: 'Websites generated' },
  { value: '500+', label: 'Agencies using our tools' },
  { value: '480x', label: 'Faster site delivery' },
  { value: '2M+', label: 'Pages created' },
];

export default function Metrics() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#FAF8F7] text-center"
            >
              <p className="text-[32px] md:text-[40px] font-semibold text-[#010100] leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-[#545555] font-light">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
