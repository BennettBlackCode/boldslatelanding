'use client';

import { useNavbarConfig } from './NavbarContext';

interface NavbarConfigSetterProps {
  ctaText?: string;
  ctaLink?: string;
  showCta?: boolean;
  children: React.ReactNode;
}

/**
 * Wrapper component to set navbar config for a section/layout.
 * 
 * Use this in layouts to set a default config for all pages in that section.
 * Individual pages can still override using the useNavbarConfig() hook.
 * 
 * @example
 * // In a layout file:
 * <NavbarConfigSetter ctaText="Talk to us" ctaLink="/demo">
 *   <Navbar />
 *   <main>{children}</main>
 *   <Footer />
 * </NavbarConfigSetter>
 */
export default function NavbarConfigSetter({ 
  ctaText,
  ctaLink,
  showCta,
  children 
}: NavbarConfigSetterProps) {
  // Build config object only with provided values
  const config: Partial<{ ctaText: string; ctaLink: string; showCta: boolean }> = {};
  if (ctaText !== undefined) config.ctaText = ctaText;
  if (ctaLink !== undefined) config.ctaLink = ctaLink;
  if (showCta !== undefined) config.showCta = showCta;

  useNavbarConfig(config);

  return <>{children}</>;
}

