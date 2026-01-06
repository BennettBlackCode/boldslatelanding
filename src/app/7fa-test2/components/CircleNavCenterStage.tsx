"use client";

import { motion, AnimatePresence } from "motion/react";
import { Globe, FileText, Target, UserPlus, BarChart3, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type Category = "websites" | "content" | "sales" | "onboarding" | "reporting";

interface CircleNavCenterStageProps {
  selected: Category | null;
  onSelect: (category: Category) => void;
}

const categories: { id: Category; label: string; icon: LucideIcon }[] = [
  { id: "websites", label: "Websites", icon: Globe },
  { id: "content", label: "Content", icon: FileText },
  { id: "sales", label: "Sales", icon: Target },
  { id: "onboarding", label: "Onboarding", icon: UserPlus },
  { id: "reporting", label: "Reporting", icon: BarChart3 },
];

export function CircleNavCenterStage({ selected, onSelect }: CircleNavCenterStageProps) {
  // Container size: 400px on md+, 320px on mobile
  const containerSize = 400; // md size
  const radius = containerSize * 0.38; // distance from center for orbit

  return (
    <div className="relative mx-auto h-[320px] w-[320px] md:h-[400px] md:w-[400px]">
      {/* Outer orbit ring */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#FAF8F7]" />
      
      {/* Inner orbit ring */}
      <div className="absolute inset-16 rounded-full border border-[#FAF8F7]" />

      {/* Orbiting category buttons */}
      {categories.map((category, index) => {
        const Icon = category.icon;
        const isSelected = selected === category.id;
        
        // Position items in a circle - start from top (-90 deg)
        const angle = (index * 72 - 90) * (Math.PI / 180);
        
        // Calculate position from center
        const centerX = containerSize / 2;
        const centerY = containerSize / 2;
        const buttonSize = 80; // md:h-20 md:w-20 = 80px
        
        // Final position: center of container + orbit position - half button size
        const targetX = isSelected ? centerX - buttonSize / 2 : centerX + Math.cos(angle) * radius - buttonSize / 2;
        const targetY = isSelected ? centerY - buttonSize / 2 : centerY + Math.sin(angle) * radius - buttonSize / 2;

        // Initial orbit position (not selected)
        const orbitX = centerX + Math.cos(angle) * radius - buttonSize / 2;
        const orbitY = centerY + Math.sin(angle) * radius - buttonSize / 2;

        return (
          <motion.button
            key={category.id}
            onClick={() => onSelect(category.id)}
            initial={{ 
              left: orbitX,
              top: orbitY,
              scale: 1,
              opacity: 1,
            }}
            animate={{ 
              left: targetX,
              top: targetY,
              scale: isSelected ? 1.3 : selected ? 0.85 : 1,
              opacity: selected && !isSelected ? 0.5 : 1,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 25,
            }}
            style={{
              left: orbitX,
              top: orbitY,
            }}
            className={cn(
              "absolute flex flex-col items-center justify-center rounded-full transition-colors duration-300",
              "h-16 w-16 md:h-20 md:w-20",
              isSelected
                ? "bg-[#010100] text-white shadow-2xl z-10"
                : selected
                ? "bg-white text-[#545555]/60 border border-[#FAF8F7]"
                : "bg-[#FAF8F7] text-[#545555] hover:bg-[#010100] hover:text-white"
            )}
          >
            <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
            <span className="mt-1 text-[10px] font-medium md:text-xs">
              {category.label}
            </span>
          </motion.button>
        );
      })}

      {/* Glow effect behind selected */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 md:h-36 md:w-36 rounded-full bg-[#010100]/5 blur-2xl"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

