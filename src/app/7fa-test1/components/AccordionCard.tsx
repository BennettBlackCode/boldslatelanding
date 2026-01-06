"use client";

import { motion, AnimatePresence } from "motion/react";
import { Layers, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubSystem {
  name: string;
  description: string;
}

const subSystems: SubSystem[] = [
  {
    name: "48-Hour Client Launch",
    description: "Onboard new clients in 2 days, not 2 weeks",
  },
  {
    name: "Client Retention Engine",
    description: "Automated check-ins that keep clients happy",
  },
  {
    name: "SEO Autopilot",
    description: "Content creation on cruise control",
  },
  {
    name: "Pipeline Filler",
    description: "Lead gen that runs while you sleep",
  },
  {
    name: "Content Multiplier",
    description: "Turn one piece into ten across platforms",
  },
  {
    name: "Autonomous Operator",
    description: "AI-powered task management and delegation",
  },
];

interface AccordionCardProps {
  isExpanded: boolean;
  isSelected: boolean;
  onToggle: () => void;
  onBookCall: () => void;
  onSeeExamples: () => void;
}

export function AccordionCard({
  isExpanded,
  isSelected,
  onToggle,
  onBookCall,
  onSeeExamples,
}: AccordionCardProps) {
  return (
    <motion.div
      layout
      onClick={onToggle}
      className={cn(
        "group relative flex cursor-pointer flex-col rounded-3xl border bg-white p-6 transition-all duration-200 md:p-8",
        isSelected || isExpanded
          ? "border-[#010100] shadow-2xl"
          : "border-[#FAF8F7] hover:border-[#010100] hover:shadow-2xl"
      )}
    >
      {/* Header - Always visible */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Icon */}
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FAF8F7]">
            <Layers className="h-7 w-7 text-[#010100]" strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl font-semibold text-[#010100] md:text-2xl">
            Agency Freedom Stack
          </h3>

          {/* Description */}
          <p className="mt-2 text-base leading-relaxed text-[#545555] md:text-lg">
            Pre-configured custom automation systems for your agency.
          </p>
        </div>

        {/* Expand Chevron */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-4 mt-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#FAF8F7]"
        >
          <ChevronDown className="h-5 w-5 text-[#545555]" />
        </motion.div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Divider */}
            <div className="my-6 h-px bg-[#FAF8F7]" />

            {/* Sub-systems List */}
            <div className="space-y-3">
              {subSystems.map((system, index) => (
                <motion.div
                  key={system.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#FAF8F7]">
                    <Check className="h-3 w-3 text-[#010100]" />
                  </div>
                  <div>
                    <span className="font-medium text-[#010100]">
                      {system.name}
                    </span>
                    <span className="text-[#545555]"> - {system.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              className="mt-6 space-y-3"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onBookCall();
                }}
                className="block w-full rounded-xl bg-[#010100] px-6 py-3.5 text-center font-medium text-white transition-transform hover:-translate-y-0.5 md:py-4"
              >
                Book Strategy Call
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSeeExamples();
                }}
                className="block w-full py-2 text-center text-sm text-[#545555] transition-colors hover:text-[#010100]"
              >
                See Examples
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed state CTAs hint */}
      {!isExpanded && (
        <div className="mt-6">
          <span className="text-sm text-[#545555]">
            Click to explore 6 automation systems →
          </span>
        </div>
      )}
    </motion.div>
  );
}

