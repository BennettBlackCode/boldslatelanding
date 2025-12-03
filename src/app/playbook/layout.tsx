/**
 * ============================================
 * 🎯 NAVBAR CONFIGURATION
 * ============================================
 * 
 * This layout sets CUSTOM navbar config for all playbook pages:
 *   - ctaText: "Talk to us"
 *   - ctaLink: "https://cal.com/boldslate/15mindemo"
 * 
 * Uses NavbarConfigSetter wrapper component.
 * Individual playbook pages can still override using useNavbarConfig() hook.
 * See: src/components/NavbarContext.tsx
 * ============================================
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavbarConfigSetter from "@/components/NavbarConfigSetter";

export default function PlaybookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavbarConfigSetter 
      ctaText="Talk to us" 
      ctaLink="https://cal.com/boldslate/ai-systems-consultation"
    >
      {/* All playbook pages show "Talk to us" by default */}
      {/* Individual pages can still override using useNavbarConfig() hook */}
      <Navbar />
      <main className="min-h-screen pt-20">
        {children}
      </main>
      <Footer />
    </NavbarConfigSetter>
  );
}
