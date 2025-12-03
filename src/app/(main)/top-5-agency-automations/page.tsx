/**
 * ============================================
 * 🎯 NAVBAR CUSTOMIZATION (for AI agents / future devs)
 * ============================================
 * 
 * This page uses the DEFAULT navbar: "Schedule A Call"
 * (inherited from the (main) layout)
 * 
 * To customize, convert to client component and use the hook:
 * 
 * ```tsx
 * 'use client';
 * import { useNavbarConfig } from '@/components/NavbarContext';
 * 
 * useNavbarConfig({ ctaText: "Book Demo", showCta: true });
 * ```
 * 
 * NOTE: This page is currently a Server Component (has metadata export).
 * To use the hook, you'd need to move metadata to a separate file or
 * use generateMetadata(), then add 'use client'.
 * 
 * See: src/components/NavbarContext.tsx for implementation details
 * ============================================
 */

import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container';
import { Check, Play, ArrowRight, Quote } from 'lucide-react';
import AnalyticsProvider from './AnalyticsProvider';

export const metadata = {
  title: "Top 3 AI Systems for SEO & Web Design Agencies | Bold Slate",
  description: "Discover how AI systems are helping SEO & Web Design agencies cut 100+ hours of fulfillment per month and bank an extra $10K+ without hiring.",
};

// ============================================
// Reusable Components
// ============================================

function SystemBadge({ number, color }: { number: number; color: string }) {
  const colors: Record<string, string> = {
    blue: 'border-[#4A90E2] text-[#4A90E2] bg-[#4A90E2]/5',
    purple: 'border-[#9B59B6] text-[#9B59B6] bg-[#9B59B6]/5',
    green: 'border-[#27AE60] text-[#27AE60] bg-[#27AE60]/5',
  };
  
  return (
    <span className={`inline-flex items-center px-4 py-1.5 rounded-full border-2 text-[13px] font-semibold tracking-wide ${colors[color]}`}>
      System #{number}
    </span>
  );
}

function ProblemBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#FFF4ED] border border-[#FFE4D4] rounded-xl p-6 md:p-8 my-8">
      <p className="font-semibold text-[#010100] text-[15px] uppercase tracking-wider mb-3">Problems:</p>
      <p className="text-[17px] text-[#545555] leading-relaxed">{children}</p>
    </div>
  );
}

function VideoPlaceholder({ caption }: { caption: string }) {
  return (
    <div className="w-full">
      <div className="aspect-video bg-gradient-to-br from-[#FAF8F7] to-[#E8E4E1] rounded-xl border border-[#E5E5E5] flex items-center justify-center overflow-hidden">
        <div className="text-center p-6">
          <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-[#010100]/10 flex items-center justify-center">
            <Play size={24} className="text-[#010100]/60 ml-1" />
          </div>
          <p className="text-[#545555]/60 text-sm">Video Demo</p>
        </div>
      </div>
      <p className="text-[13px] text-[#545555]/70 text-center mt-3 italic">{caption}</p>
    </div>
  );
}

function OutcomeCard({ emoji, text }: { emoji: string; text: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#E5E5E5]">
      <span className="text-2xl flex-shrink-0">{emoji}</span>
      <p className="text-[15px] text-[#545555] leading-relaxed">{text}</p>
    </div>
  );
}

function CTAButton({ href, children, variant = 'primary' }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' }) {
  const styles = {
    primary: 'bg-[#010100] hover:bg-[#1a1a1a] text-white shadow-lg shadow-black/10',
    secondary: 'bg-white hover:bg-[#FAF8F7] text-[#010100] border-2 border-[#010100]',
  };
  
  return (
    <Link 
      href={href}
      className={`inline-flex items-center justify-center gap-3 font-semibold text-[17px] py-4 px-8 rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
      <ArrowRight size={18} />
    </Link>
  );
}

function TestimonialCard({ quote, name, title, company, image }: { 
  quote: string; 
  name: string; 
  title: string; 
  company: string;
  image?: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-[#E5E5E5] shadow-sm">
      <Quote size={32} className="text-[#E5E5E5] mb-4" />
      <p className="text-[17px] text-[#545555] leading-relaxed mb-6 italic">&quot;{quote}&quot;</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#FAF8F7] border border-[#E5E5E5] flex items-center justify-center overflow-hidden">
          {image ? (
            <Image src={image} alt={name} width={48} height={48} className="object-cover" />
          ) : (
            <span className="text-[#545555] font-semibold text-lg">{name.charAt(0)}</span>
          )}
        </div>
        <div>
          <p className="font-semibold text-[#010100]">{name}</p>
          <p className="text-[14px] text-[#545555]">{title}, {company}</p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Main Page Component
// ============================================

export default function Top5AgencyAutomations() {
  return (
    <AnalyticsProvider>
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-[#FAF8F7] via-[#FDFCFB] to-white overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#010100]/[0.02] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#010100]/[0.015] rounded-full blur-3xl" />
        </div>
        
        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E5E5] text-[13px] font-medium text-[#545555] mb-8 shadow-sm">
              <Play size={14} className="text-[#010100]" />
              Watch the Full Breakdown
            </div>
            
            {/* Main Headline */}
            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] font-bold text-[#010100] mb-6 tracking-tight">
              How These 3 AI Systems Are Helping SEO & Web Design Agencies Cut 100+ Hours Of Fulfillment Per Month
            </h1>
            
            <p className="text-[24px] md:text-[28px] text-[#545555] font-light mb-8">
              (And Bank An Extra $10K+ Without Hiring)
            </p>
            
            {/* Subheadline */}
            <p className="text-[18px] md:text-[20px] text-[#545555] leading-relaxed max-w-2xl mx-auto mb-12">
              Your team should spend 100% of their time focusing on their zone of genius. 
              <span className="font-medium text-[#010100]"> Instead</span>, they are bogged down by repetitive tasks that should&apos;ve been automated years ago.
            </p>
            
            {/* Loom Video Embed */}
            <div className="max-w-3xl mx-auto mb-10">
              <div className="aspect-video bg-[#010100] rounded-2xl shadow-2xl shadow-black/20 overflow-hidden border-4 border-[#010100]">
                {/* TODO: Replace with actual Loom embed URL */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#010100]">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <Play size={36} className="text-white ml-1" />
                    </div>
                    <p className="text-white/60 text-sm">Loom Video Placeholder</p>
                    <p className="text-white/40 text-xs mt-1">Replace with actual Loom embed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <CTAButton href="https://cal.com/boldslate/15mindemo">
              Book Your Free Audit
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* ============================================ */}
      {/* SYSTEM #1 */}
      {/* ============================================ */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <SystemBadge number={1} color="blue" />
            
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#010100] leading-tight mt-6 mb-4">
              How To Build Full SEO WordPress Sites In 5 Minutes (Instead of 5 Days)
            </h2>
            
            <ProblemBox>
              If you&apos;re an SEO & Web Design agency, you know the 40+ hour grind that teams spend manually building all the SEO service & location pages for each client. Then when the client wants changes? Another 10 hours of back-and-forth mind numbing tweaks.
            </ProblemBox>
            
            {/* Two Column Layout */}
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 my-12">
              <div className="md:col-span-3">
                <h3 className="text-[20px] font-semibold text-[#010100] mb-4">
                  What we built to solve this: The 5 Minute Site System
                </h3>
                
                <div className="space-y-4 text-[16px] text-[#545555] leading-relaxed">
                  <div className="flex gap-3 p-4 bg-[#FAF8F7] rounded-lg">
                    <span className="font-semibold text-[#010100] min-w-[80px]">1. Input:</span>
                    <span>You upload their branding, copy templates, and service list</span>
                  </div>
                  <div className="flex gap-3 p-4 bg-[#FAF8F7] rounded-lg">
                    <span className="font-semibold text-[#010100] min-w-[80px]">2. Processing:</span>
                    <span>AI analyzes their market, competitors, and keyword opportunities</span>
                  </div>
                  <div className="flex gap-3 p-4 bg-[#FAF8F7] rounded-lg">
                    <span className="font-semibold text-[#010100] min-w-[80px]">3. Output:</span>
                    <span>Fully-built WordPress site with 40+ SEO-optimized pages, proper URL structure, internal linking, and on-page SEO — all done in 5 minutes</span>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <VideoPlaceholder caption="5 Minute Site System Demo" />
              </div>
            </div>
            
            {/* Outcomes */}
            <h3 className="text-[20px] font-semibold text-[#010100] mb-6">Outcomes & Impact:</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              <OutcomeCard emoji="✅" text="Team starts fulfillment in hours instead of days" />
              <OutcomeCard emoji="⏱️" text="40+ hours cut down to 5 minutes (480x faster)" />
              <OutcomeCard emoji="📈" text="Client Satisfaction Skyrockets = 20% increase in referrals" />
              <OutcomeCard emoji="💪" text="Zero manual page building. Zero change request headaches." />
              <OutcomeCard emoji="💰" text="$3,000+ saved on payroll per client" />
              <OutcomeCard emoji="🚀" text="4-10 extra clients per month = $25,000+ monthly impact" />
            </div>
            
            {/* Real Results Placeholder */}
            <div className="bg-[#FAF8F7] rounded-xl p-6 border border-[#E5E5E5] mb-10">
              <p className="text-[15px] font-semibold text-[#010100] mb-2">Real Results:</p>
              <p className="text-[#545555] italic">Client testimonial or specific metrics go here</p>
            </div>
            
            <div className="text-center">
              <CTAButton href="https://cal.com/boldslate/15mindemo">
                Book Your Free Audit
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================ */}
      {/* SYSTEM #2 */}
      {/* ============================================ */}
      <section className="py-20 md:py-28 bg-[#FAF8F7]">
        <Container>
          <div className="max-w-5xl mx-auto">
            <SystemBadge number={2} color="purple" />
            
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#010100] leading-tight mt-6 mb-4">
              How To Finish 40+ Hours Of SEO Deliverables Before The Client&apos;s First Day With You
            </h2>
            
            <p className="text-[18px] text-[#545555] mb-4">From Backlinks To GMB Posts</p>
            
            <ProblemBox>
              Your clients websites go live and now your team is buried in additional SEO grunt work that takes 40+ hours per client. Creating & scheduling full months worth of GMB posts, backlink outreach, keyword research, URL mapping, and more.
            </ProblemBox>
            
            {/* Two Column Layout */}
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 my-12">
              <div className="md:col-span-3">
                <h3 className="text-[20px] font-semibold text-[#010100] mb-4">
                  What we&apos;ve built to automate this:
                </h3>
                
                <p className="text-[16px] text-[#545555] leading-relaxed mb-6">
                  A comprehensive automation system that extracts sitemaps, performs SERP research, does keyword research, creates GBP posts, finds backlink opportunities, and more — all before your client&apos;s first day.
                </p>
                
                <ul className="space-y-3">
                  {['Automated sitemap extraction', 'SERP & keyword research', 'GBP post generation', 'Backlink opportunity finder', 'URL structure mapping'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#545555]">
                      <Check size={18} className="text-[#27AE60] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="md:col-span-2">
                <VideoPlaceholder caption="SEO Automation Workflow Demo" />
              </div>
            </div>
            
            {/* Outcomes */}
            <h3 className="text-[20px] font-semibold text-[#010100] mb-6">Outcomes & Impact:</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              <OutcomeCard emoji="✅" text="Clients get to market in a few days, not weeks" />
              <OutcomeCard emoji="⏳" text="40+ Hours of Initial SEO Tasks Done In Minutes" />
              <OutcomeCard emoji="⭐" text="20% Referral Increase from faster results" />
              <OutcomeCard emoji="💰" text="Additional 4-10 Clients Closed & Fulfilled Per Month" />
            </div>
            
            {/* Real Results Placeholder */}
            <div className="bg-white rounded-xl p-6 border border-[#E5E5E5] mb-10">
              <p className="text-[15px] font-semibold text-[#010100] mb-2">Real Results:</p>
              <p className="text-[#545555] italic">Client testimonial or specific metrics go here</p>
            </div>
            
            <div className="text-center">
              <CTAButton href="https://cal.com/boldslate/15mindemo">
                Book Your Free Audit
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================ */}
      {/* SYSTEM #3 */}
      {/* ============================================ */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <SystemBadge number={3} color="green" />
            
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#010100] leading-tight mt-6 mb-4">
              Weekly Client Reporting (Drafted With Accurate Data From Their Data Sources)
            </h2>
            
            <ProblemBox>
              Agencies that write each client a weekly email report to keep them happy and make them feel there&apos;s good communication, but the team is still pulling client data from all these sources and then writing those emails manually.
            </ProblemBox>
            
            {/* Two Column Layout */}
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 my-12">
              <div className="md:col-span-3">
                <h3 className="text-[20px] font-semibold text-[#010100] mb-4">
                  What we&apos;ve built to automate this:
                </h3>
                
                <p className="text-[16px] text-[#545555] leading-relaxed mb-6">
                  Every week, important data is automatically fetched for all clients and turned into a concise email summary that your team can edit, review, and send — with a unified database tracking all historical data points.
                </p>
                
                <ul className="space-y-3">
                  {['Automatic data fetching from all sources', 'Pre-written email drafts', 'Historical data tracking', 'One-click send after review', 'Unified client database'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#545555]">
                      <Check size={18} className="text-[#27AE60] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="md:col-span-2">
                <VideoPlaceholder caption="Client Reporting Automation Demo" />
              </div>
            </div>
            
            {/* Outcomes */}
            <h3 className="text-[20px] font-semibold text-[#010100] mb-6">Outcomes & Impact:</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              <OutcomeCard emoji="✅" text="CSMs no longer grind every week to write client updates" />
              <OutcomeCard emoji="⏳" text="50+ Human Hours Saved Every Week" />
              <OutcomeCard emoji="📈" text="Client Retention Increased by 3 more months" />
              <OutcomeCard emoji="💰" text="$10,000+ Saved from Client Churn over 2 months" />
            </div>
            
            {/* Real Results Placeholder */}
            <div className="bg-[#FAF8F7] rounded-xl p-6 border border-[#E5E5E5] mb-10">
              <p className="text-[15px] font-semibold text-[#010100] mb-2">Real Results:</p>
              <p className="text-[#545555] italic">Client testimonial or specific metrics go here</p>
            </div>
            
            <div className="text-center">
              <CTAButton href="https://cal.com/boldslate/15mindemo">
                Book Your Free Audit
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================ */}
      {/* BONUS SECTION */}
      {/* ============================================ */}
      <section className="py-20 md:py-28 bg-[#FAF8F7]">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#010100] text-white text-[13px] font-semibold tracking-wide mb-6">
                BONUS
              </span>
              <h2 className="text-[32px] md:text-[40px] font-bold text-[#010100] leading-tight">
                Custom Systems Tailored To Your Needs
              </h2>
            </div>
            
            <p className="text-[18px] text-[#545555] leading-relaxed text-center max-w-3xl mx-auto mb-12">
              All workflows can be customized unique to your business that replicate your exact SOP&apos;s & tools for onboarding, service delivery, reporting, sales, and more. Plus if you have any of your own ideas that you&apos;ve wanted to implement you can share them with us.
            </p>
            
            <h3 className="text-[22px] font-semibold text-[#010100] mb-8 text-center">
              Example Onboarding Workflows:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                <div className="aspect-[4/3] bg-[#FAF8F7] rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-[#545555]/50 text-sm text-center px-4">SEO Client Onboarding Workflow</p>
                </div>
                <p className="text-[14px] text-[#545555]">Includes adding the client to each tool & starting the SEO process</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                <div className="aspect-[4/3] bg-[#FAF8F7] rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-[#545555]/50 text-sm text-center px-4">Web Design Kickoff Workflow</p>
                </div>
                <p className="text-[14px] text-[#545555]">Collects onboarding info and clones server application for quick kickoff</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                <div className="aspect-[4/3] bg-[#FAF8F7] rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-[#545555]/50 text-sm text-center px-4">PPC Client Kickoff Workflow</p>
                </div>
                <p className="text-[14px] text-[#545555]">Researches ads, writes new copy, and provides completed campaigns to review</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================ */}
      {/* SOCIAL PROOF SECTION */}
      {/* ============================================ */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[32px] md:text-[40px] font-bold text-[#010100] leading-tight">
                Real Results From Real Agencies
              </h2>
              <p className="text-[18px] text-[#545555] mt-4">
                See what agency owners are saying about our automation systems
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <TestimonialCard 
                quote="We went from spending 40+ hours on client setup to less than 30 minutes. The ROI was immediate and our team morale went through the roof."
                name="Sarah M."
                title="Founder"
                company="Digital Growth Agency"
              />
              <TestimonialCard 
                quote="The weekly reporting automation alone saved us 2 full-time employee salaries. Now we can focus on strategy instead of data pulling."
                name="James K."
                title="CEO"
                company="SEO Partners Inc"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA SECTION */}
      {/* ============================================ */}
      <section className="py-20 md:py-28 bg-[#010100]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-white leading-[1.1] mb-6">
              What this means for you:
            </h2>
            <p className="text-[22px] md:text-[26px] text-white/80 font-light mb-4">
              Your agency operates in a leaner & more efficient way.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mt-12">
              <h3 className="text-[26px] md:text-[32px] font-bold text-white mb-4">
                Next Step — Get A Free Audit of Your SOP&apos;s
              </h3>
              <p className="text-[17px] text-white/70 mb-8 leading-relaxed max-w-xl mx-auto">
                We&apos;ll take a look at your SOP&apos;s and identify 2-3 high impact systems where automation would have the most impact. You&apos;ll walk away with actionable insights whether you work with us or not.
              </p>
              
              {/* Cal.com Embed Placeholder */}
              <div className="bg-white rounded-xl overflow-hidden mb-8">
                {/* TODO: Replace with actual Cal.com embed URL */}
                <div className="h-[400px] flex items-center justify-center bg-[#FAF8F7]">
                  <div className="text-center">
                    <p className="text-[#545555] mb-2">Cal.com Calendar Embed</p>
                    <p className="text-[#545555]/60 text-sm">Replace with actual Cal.com embed</p>
                  </div>
                </div>
              </div>
              
              <p className="text-white/50 text-sm">
                Or click below to open in a new tab
              </p>
              
              <div className="mt-6">
                <Link 
                  href="https://cal.com/boldslate/15mindemo"
                  className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-[#FAF8F7] text-[#010100] font-semibold text-lg py-5 px-10 rounded-xl transition-all duration-300 shadow-2xl shadow-white/10 hover:shadow-white/20 hover:-translate-y-1"
                >
                  Book Your Free Workflow Audit
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <p className="mt-8 text-sm text-white/40">
              We only take on 10 new audits per month
            </p>
          </div>
        </Container>
      </section>
    </AnalyticsProvider>
  );
}

