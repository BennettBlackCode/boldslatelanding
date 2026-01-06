"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Globe, FileText, Target, UserPlus, BarChart3, LucideIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Category = "websites" | "content" | "sales" | "onboarding" | "reporting";

interface HorizontalNavStripProps {
  selected: Category | null;
  onSelect: (category: Category) => void;
}

const categories: { id: Category; label: string; icon: LucideIcon }[] = [
  { id: "websites", label: "Websites", icon: Globe },
  { id: "content", label: "Content", icon: FileText },
  { id: "sales", label: "Sales", icon: Target },
  { id: "onboarding", label: "Onboard", icon: UserPlus },
  { id: "reporting", label: "Reports", icon: BarChart3 },
];

export function HorizontalNavStrip({ selected, onSelect }: HorizontalNavStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll to selected item
  useEffect(() => {
    if (selectedRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const element = selectedRef.current;
      const containerWidth = container.offsetWidth;
      const elementLeft = element.offsetLeft;
      const elementWidth = element.offsetWidth;
      
      container.scrollTo({
        left: elementLeft - (containerWidth / 2) + (elementWidth / 2),
        behavior: "smooth"
      });
    }
  }, [selected]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 120;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative w-full px-2">
      {/* Scroll hint arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1 shadow-md backdrop-blur-sm"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4 text-[#545555]" />
      </button>
      
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1 shadow-md backdrop-blur-sm"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4 text-[#545555]" />
      </button>

      <div 
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto px-6 pb-2 snap-x snap-mandatory scroll-smooth"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selected === category.id;

          return (
            <motion.button
              key={category.id}
              ref={isSelected ? selectedRef : null}
              onClick={() => onSelect(category.id)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex flex-shrink-0 snap-center flex-col items-center justify-center rounded-2xl transition-all duration-200",
                "w-[68px] py-3",
                isSelected
                  ? "bg-[#010100] text-white shadow-lg"
                  : "bg-[#FAF8F7] text-[#545555] active:bg-[#010100]/10"
              )}
            >
              <Icon className="h-5 w-5" strokeWidth={1.5} />
              <span className="mt-1 text-[10px] font-medium whitespace-nowrap">
                {category.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Scroll indicator dots */}
      <div className="mt-3 flex justify-center gap-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-200",
              selected === category.id
                ? "w-4 bg-[#010100]"
                : "w-1.5 bg-[#FAF8F7]"
            )}
            aria-label={`Select ${category.label}`}
          />
        ))}
      </div>
    </div>
  );
}
