import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id={id} ref={ref} className={`py-20 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
