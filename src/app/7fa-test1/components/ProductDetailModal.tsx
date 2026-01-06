"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, Check, Globe, Sparkles, Layers } from "lucide-react";
import { LucideIcon } from "lucide-react";

type ProductType = "oneclick" | "agencyx2" | "freedom-stack" | null;

interface ProductInfo {
  icon: LucideIcon;
  title: string;
  headline: string;
  benefits: string[];
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
}

const productDetails: Record<Exclude<ProductType, null>, ProductInfo> = {
  oneclick: {
    icon: Globe,
    title: "OneClick Website",
    headline: "Build WordPress Sites in 5 Minutes",
    benefits: [
      "Full WordPress site from a single prompt",
      "SEO-optimized pages out of the box",
      "Mobile responsive by default",
      "Close deals while leads are still warm",
      "No design or dev skills required",
    ],
    cta: {
      primary: { label: "Try Free", href: "#" },
      secondary: { label: "Watch Demo", href: "#" },
    },
  },
  agencyx2: {
    icon: Sparkles,
    title: "Agency X2",
    headline: "Low-Cost SEO Content at Scale",
    benefits: [
      "GBP posts, blog content, and more",
      "Cheaper than USA or India talent",
      "Consistent quality every time",
      "Built-in brand voice training",
      "Publish directly to client sites",
    ],
    cta: {
      primary: { label: "Try Free", href: "#" },
      secondary: { label: "See Examples", href: "#" },
    },
  },
  "freedom-stack": {
    icon: Layers,
    title: "Agency Freedom Stack",
    headline: "Custom Automations for Your Workflow",
    benefits: [
      "Uses YOUR existing tools and workflows",
      "Pre-configured for common agency tasks",
      "Reporting, onboarding, and fulfillment",
      "Each automation works like mini-software",
      "White-glove setup and support",
    ],
    cta: {
      primary: { label: "Book Strategy Call", href: "#" },
      secondary: { label: "View Catalog", href: "#" },
    },
  },
};

interface ProductDetailModalProps {
  product: ProductType;
  onClose: () => void;
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  if (!product) return null;

  const details = productDetails[product];
  const Icon = details.icon;

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-[10%] z-50 mx-auto max-w-2xl rounded-3xl bg-white p-6 shadow-2xl md:inset-x-auto md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF8F7] transition-colors hover:bg-[#010100] hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content */}
            <div className="pr-8">
              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FAF8F7]">
                <Icon className="h-7 w-7 text-[#010100]" strokeWidth={1.5} />
              </div>

              {/* Title & Headline */}
              <p className="text-sm font-medium uppercase tracking-wide text-[#545555]">
                {details.title}
              </p>
              <h2 className="mt-1 font-heading text-2xl font-semibold text-[#010100] md:text-3xl">
                {details.headline}
              </h2>

              {/* Benefits */}
              <div className="mt-6 space-y-3">
                {details.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#FAF8F7]">
                      <Check className="h-3 w-3 text-[#010100]" />
                    </div>
                    <span className="text-[#545555]">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={details.cta.primary.href}
                  className="flex-1 rounded-xl bg-[#010100] px-6 py-3.5 text-center font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  {details.cta.primary.label}
                </a>
                <a
                  href={details.cta.secondary.href}
                  className="flex-1 rounded-xl border border-[#010100]/20 bg-white px-6 py-3.5 text-center font-medium text-[#010100] transition-colors hover:bg-[#FAF8F7]"
                >
                  {details.cta.secondary.label}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

