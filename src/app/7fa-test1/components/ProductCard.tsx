"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  pricing?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    onClick: () => void;
  };
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ProductCard({
  icon: Icon,
  title,
  description,
  pricing,
  primaryCta,
  secondaryCta,
  isSelected,
  onClick,
  className,
}: ProductCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative flex cursor-pointer flex-col rounded-3xl border bg-white p-6 transition-all duration-200 md:p-8",
        isSelected
          ? "border-[#010100] shadow-2xl"
          : "border-[#FAF8F7] hover:border-[#010100] hover:shadow-2xl",
        className
      )}
    >
      {/* Icon */}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FAF8F7]">
        <Icon className="h-7 w-7 text-[#010100]" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl font-semibold text-[#010100] md:text-2xl">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-base leading-relaxed text-[#545555] md:text-lg">
        {description}
      </p>

      {/* Pricing Badge */}
      {pricing && (
        <div className="mt-4">
          <span className="inline-block rounded-full bg-[#FAF8F7] px-3 py-1 text-sm text-[#545555]">
            {pricing}
          </span>
        </div>
      )}

      {/* CTAs */}
      <div className="mt-6 space-y-3">
        <a
          href={primaryCta.href}
          onClick={(e) => e.stopPropagation()}
          className="block w-full rounded-xl bg-[#010100] px-6 py-3.5 text-center font-medium text-white transition-transform hover:-translate-y-0.5 md:py-4"
        >
          {primaryCta.label}
        </a>
        
        {secondaryCta && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              secondaryCta.onClick();
            }}
            className="block w-full py-2 text-center text-sm text-[#545555] transition-colors hover:text-[#010100]"
          >
            {secondaryCta.label}
          </button>
        )}
      </div>
    </motion.div>
  );
}

