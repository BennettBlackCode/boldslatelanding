/**
 * ============================================
 * 🎯 NAVBAR CONFIGURATION
 * ============================================
 * 
 * This layout uses the DEFAULT navbar config:
 *   - ctaText: "Schedule A Call"
 *   - ctaLink: "https://cal.com/boldslate/ai-systems-consultation"
 *   - showCta: true
 * 
 * Individual pages can override using useNavbarConfig() hook.
 * See: src/components/NavbarContext.tsx
 * ============================================
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Navbar uses defaults from context: "Schedule A Call" */}
      {/* Individual pages can override using useNavbarConfig() hook */}
      <Navbar />
      <main className="min-h-screen pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}

