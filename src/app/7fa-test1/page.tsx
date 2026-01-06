"use client";

import { useState } from "react";
import { Globe, Sparkles } from "lucide-react";
import { HeroBanner, ProductCard, AccordionCard, ProductDetailModal } from "./components";
import Testimonials from "@/components/Testimonials";

type ProductType = "oneclick" | "agencyx2" | "freedom-stack" | null;

export default function Page7fa() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(null);
  const [modalProduct, setModalProduct] = useState<ProductType>(null);
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);

  const handleProductSelect = (product: ProductType) => {
    // Exclusive selection - collapse accordion if selecting another card
    if (product !== "freedom-stack") {
      setIsAccordionExpanded(false);
    }
    setSelectedProduct(product);
  };

  const handleAccordionToggle = () => {
    setIsAccordionExpanded(!isAccordionExpanded);
    if (!isAccordionExpanded) {
      setSelectedProduct("freedom-stack");
    }
  };

  const openModal = (product: ProductType) => {
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroBanner />

      {/* Product Selection Section */}
      <section className="bg-[#FAF8F7] px-4 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          {/* Section Intro */}
          <div className="mb-12 text-center">
            <h2 className="font-heading text-2xl font-semibold text-[#010100] md:text-3xl">
              What do you want to explore first?
            </h2>
          </div>

          {/* Product Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {/* Card 1: OneClick Website */}
            <ProductCard
              icon={Globe}
              title="OneClick Website"
              description="WordPress sites in 5 minutes. Close deals while they're hot."
              pricing="$97/mo Pro · $297/mo Agency"
              isSelected={selectedProduct === "oneclick"}
              onClick={() => handleProductSelect("oneclick")}
              primaryCta={{
                label: "Try Free",
                href: "#",
              }}
              secondaryCta={{
                label: "Learn More",
                onClick: () => openModal("oneclick"),
              }}
            />

            {/* Card 2: Agency X2 */}
            <ProductCard
              icon={Sparkles}
              title="Agency X2"
              description="Low-cost SEO content when USA/India talent is too expensive."
              pricing="$97/mo Pro · $297/mo Agency · $997/mo Unlimited"
              isSelected={selectedProduct === "agencyx2"}
              onClick={() => handleProductSelect("agencyx2")}
              primaryCta={{
                label: "Try Free",
                href: "#",
              }}
              secondaryCta={{
                label: "Learn More",
                onClick: () => openModal("agencyx2"),
              }}
            />

            {/* Card 3: Agency Freedom Stack (Accordion) */}
            <AccordionCard
              isExpanded={isAccordionExpanded}
              isSelected={selectedProduct === "freedom-stack"}
              onToggle={handleAccordionToggle}
              onBookCall={() => {
                // TODO: Replace with Cal.com link
                window.open("#", "_blank");
              }}
              onSeeExamples={() => openModal("freedom-stack")}
            />
          </div>
        </div>
      </section>

      {/* Community Note */}
      <section className="bg-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg text-[#545555]">
            Questions? Grab a call. We&apos;ll figure out what actually makes sense for your agency.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Product Detail Modal */}
      <ProductDetailModal product={modalProduct} onClose={closeModal} />
    </div>
  );
}
