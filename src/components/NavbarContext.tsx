'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// ============================================
// Types
// ============================================

interface NavbarConfig {
  ctaText: string;
  ctaLink: string;
  showCta: boolean;
}

interface NavbarContextType {
  config: NavbarConfig;
  setConfig: (config: Partial<NavbarConfig>) => void;
  resetConfig: () => void;
}

// ============================================
// Default Values
// ============================================

const defaultConfig: NavbarConfig = {
  ctaText: "Schedule A Call",
  ctaLink: "https://cal.com/boldslate/ai-systems-consultation",
  showCta: true,
};

// ============================================
// Context
// ============================================

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

// ============================================
// Provider Component
// ============================================

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [config, setConfigState] = useState<NavbarConfig>(defaultConfig);

  const setConfig = (newConfig: Partial<NavbarConfig>) => {
    setConfigState(prev => ({ ...prev, ...newConfig }));
  };

  const resetConfig = () => {
    setConfigState(defaultConfig);
  };

  return (
    <NavbarContext.Provider value={{ config, setConfig, resetConfig }}>
      {children}
    </NavbarContext.Provider>
  );
}

// ============================================
// Hook to READ the navbar config (used by Navbar)
// ============================================

export function useNavbarContext() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbarContext must be used within a NavbarProvider');
  }
  return context;
}

// ============================================
// Hook to SET navbar config from any page
// ============================================

/**
 * Use this hook in any page to customize the navbar.
 * The config will reset to defaults when you navigate away.
 * 
 * @example
 * // Hide the CTA button entirely
 * useNavbarConfig({ showCta: false });
 * 
 * @example
 * // Change the button text and link
 * useNavbarConfig({ 
 *   ctaText: "Talk to us", 
 *   ctaLink: "https://cal.com/boldslate/15mindemo" 
 * });
 * 
 * @example
 * // Change everything
 * useNavbarConfig({ 
 *   ctaText: "Get Started", 
 *   ctaLink: "/signup",
 *   showCta: true 
 * });
 */
export function useNavbarConfig(config: Partial<NavbarConfig>) {
  const { setConfig, resetConfig } = useNavbarContext();

  useEffect(() => {
    // Set the config when the page mounts
    setConfig(config);

    // Reset to defaults when the page unmounts (navigating away)
    return () => {
      resetConfig();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // We intentionally only run on mount/unmount
}

