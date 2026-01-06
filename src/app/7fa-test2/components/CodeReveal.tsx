"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Gift } from "lucide-react";

interface CodeRevealProps {
  code: string;
  label?: string;
}

export function CodeReveal({ code, label = "7FA Code" }: CodeRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="inline-flex items-center gap-2">
      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <motion.button
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={handleReveal}
            className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F7] px-4 py-2 text-sm font-medium text-[#010100] transition-all hover:bg-[#010100] hover:text-white"
          >
            <Gift className="h-4 w-4" />
            Reveal {label}
          </motion.button>
        ) : (
          <motion.div
            key="code"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#010100] bg-white px-4 py-2"
          >
            <span className="font-mono text-sm font-semibold text-[#010100]">
              {code}
            </span>
            <button
              onClick={handleCopy}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FAF8F7] transition-colors hover:bg-[#010100] hover:text-white"
            >
              {isCopied ? (
                <Check className="h-3 w-3 text-green-600" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {isCopied && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="text-sm text-green-600"
        >
          Copied!
        </motion.span>
      )}
    </div>
  );
}

