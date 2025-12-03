'use client';

import Link from 'next/link';
import Container from '@/components/Container';
import { useNavbarConfig } from '@/components/NavbarContext';
import { 
  ArrowRight, 
  Zap, 
  FileText, 
  BarChart3, 
  Users,
  Globe,
  Sparkles,
  CheckCircle2,
  Clock,
  Target,
  Bot,
  Layers,
  Wrench
} from 'lucide-react';

// Automation catalogue data
const automations = [
  {
    id: 'wordpress-website-system',
    icon: Layers,
    category: 'Fulfillment',
    title: 'WordPress Website System',
    description: 'Generate full WordPress sites with 40+ SEO-optimized pages in minutes. AI applies branding, generates copy, and includes a conversational agent for post-launch changes.',
    benefits: ['40 hours → 5 minutes', 'Auto-applied branding & copy', 'AI agent for change requests'],
    popular: true,
    timeReduction: '480x faster',
  },
  {
    id: 'blog-social-content',
    icon: FileText,
    category: 'Content',
    title: 'Blog Post & Social Content System',
    description: 'Transform topics into full blog posts with matching social media content across all platforms. AI maintains brand voice and optimizes for each channel.',
    benefits: ['Blog to social in one click', 'Platform-specific formatting', 'Consistent brand voice'],
    popular: true,
  },
  {
    id: 'seo-deliverables',
    icon: Globe,
    category: 'SEO',
    title: 'SEO Deliverables System',
    description: 'Extracts sitemaps, performs SERP research, does keyword research, creates GBP posts, and finds backlink opportunities—delivering weeks of work before the client\'s first day.',
    benefits: ['Automated keyword research', '30-day GBP posts generated', 'Backlink opportunities found'],
    popular: true,
    timeReduction: '40+ hours → minutes',
  },
  {
    id: 'onboarding-automation',
    icon: Users,
    category: 'Operations',
    title: 'Onboarding Automation',
    description: 'Automatically collect client information, send welcome sequences, create project folders, provision tools, and set up communication channels when a new client signs.',
    benefits: ['2 weeks → 2 days onboarding', 'Zero manual data entry', 'Clients see progress day one'],
    popular: false,
  },
  {
    id: 'lead-scraping',
    icon: Target,
    category: 'Sales',
    title: 'Lead Scraping & Personalization System',
    description: 'Scrape targeted leads from multiple sources, enrich with company data, and generate personalized outreach sequences that feel hand-written.',
    benefits: ['Targeted lead lists on demand', 'Auto-enriched contact data', 'Personalized at scale'],
    popular: false,
  },
  {
    id: 'client-reports',
    icon: BarChart3,
    category: 'Reporting',
    title: 'Automated Client Reports',
    description: 'Automatically fetches client data from GA4, Search Console, rank trackers, and ad platforms. AI writes personalized weekly reports—your team just reviews and sends.',
    benefits: ['50+ hours saved per week', '3x more clients per CSM', 'Prevents churn with consistency'],
    popular: true,
    timeReduction: '50+ hours/week saved',
  },
  {
    id: 'ai-agents',
    icon: Bot,
    category: 'AI',
    title: 'Multi-Purpose AI Agents',
    description: 'Custom AI agents trained on your processes and knowledge base. Deploy in Slack, email, or your client portal to handle questions, tasks, and workflows autonomously.',
    benefits: ['Trained on your SOPs', 'Works across platforms', 'Handles tasks autonomously'],
    popular: false,
  },
];

export default function CataloguePage() {
  useNavbarConfig({
    ctaText: 'Book A Discovery Call',
    ctaLink: 'https://cal.com/boldslate/ai-systems-consultation',
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-[60px] pb-[80px] lg:pt-[80px] lg:pb-[100px] bg-[#FAF8F7]">
        <Container>
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#FAF8F7] mb-8 shadow-sm">
              <Zap size={16} className="text-[#010100]" />
              <span className="text-sm font-bold text-[#010100] uppercase tracking-widest">
                Bold Slate
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] font-semibold text-[#010100] mb-6">
              AI Integrations<br />
              Catalogue
            </h1>

            {/* Subheading */}
            <p className="text-[18px] md:text-[22px] leading-[1.6] text-[#545555] max-w-2xl mx-auto mb-10 font-light">
              Pre-built automation systems designed for digital marketing agencies. Each integration is fully customizable and deploys in 2-4 weeks.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E2E0] text-sm text-[#010100] font-medium">
                <CheckCircle2 size={16} className="text-[#010100]" />
                7 Pre-Built Systems
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E2E0] text-sm text-[#010100] font-medium">
                <Clock size={16} className="text-[#010100]" />
                2-4 Week Deployment
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E2E0] text-sm text-[#010100] font-medium">
                <Sparkles size={16} className="text-[#010100]" />
                Fully Customizable
              </span>
            </div>

          </div>
        </Container>
      </section>

      {/* Automations Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {automations.map((automation) => {
              const IconComponent = automation.icon;
              return (
                <div
                  key={automation.id}
                  className="group relative flex flex-col p-8 bg-white border border-[#E5E2E0] rounded-3xl shadow-lg shadow-black/5 hover:border-[#010100] hover:shadow-2xl hover:shadow-black/15 transition-all duration-300"
                >
                  {/* Time Reduction Badge */}
                  {automation.timeReduction && (
                    <div className="absolute -top-3 right-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#010100] text-white text-xs font-bold uppercase tracking-wider">
                        {automation.timeReduction}
                      </span>
                    </div>
                  )}

                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF8F7] flex items-center justify-center group-hover:bg-[#010100] transition-colors duration-300">
                      <IconComponent size={24} className="text-[#010100] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-xs font-bold text-[#545555] uppercase tracking-widest">
                      {automation.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#010100] mb-3">
                    {automation.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed font-light text-[#545555] mb-6 flex-grow">
                    {automation.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    {automation.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[#010100] flex-shrink-0" />
                        <span className="text-sm text-[#545555]">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="https://cal.com/boldslate/ai-systems-consultation"
                    className="inline-flex items-center gap-2 text-[#010100] font-medium group-hover:gap-3 transition-all duration-300"
                  >
                    Get This System
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}

            {/* Custom Automations Card */}
            <div className="group relative flex flex-col p-8 bg-[#010100] border border-[#010100] rounded-3xl shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
              {/* Icon & Category */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Wrench size={24} className="text-white!" />
                </div>
                <span className="text-xs font-bold text-white/60 uppercase tracking-widest">
                  Custom Build
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white! mb-3">
                Custom Automations
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed font-light text-white/90! mb-6 flex-grow">
                Don't see what you need? We design and build custom automation systems tailored to your specific workflows and tech stack.
              </p>

              {/* Benefits */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-white/90! flex-shrink-0" />
                  <span className="text-sm text-white/90!">Free 30-minute audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-white/90! flex-shrink-0" />
                  <span className="text-sm text-white/90!">Custom scoping & ROI analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-white/90! flex-shrink-0" />
                  <span className="text-sm text-white/90!">2-4 week deployment</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="https://cal.com/boldslate/ai-systems-consultation"
                className="inline-flex items-center gap-2 text-white! font-medium group-hover:gap-3 transition-all duration-300"
              >
                Book Fulfillment Audit
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Implementation Options CTA */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-[#010100]">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
        </div>
        
        <Container>
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm">
              <Sparkles size={16} className="text-white/80" />
              <span className="text-sm font-medium text-white/90 tracking-wide">Implementation Options</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-semibold text-white! leading-[1.1] tracking-tight mb-6">
              Ready to eliminate {' '}
              <br className="hidden sm:block" />
              100+ hours of manual work?
            </h2>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mb-10 leading-relaxed">
              We implement these systems for your agency in 2-4 weeks, including custom configuration, tool integration, team training, and 30 days of support.
            </p>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-3xl">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-semibold text-white mb-1">$3-5K/mo</div>
                <div className="text-sm text-white/60">Saved on payroll</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-semibold text-white mb-1">$25K+/mo</div>
                <div className="text-sm text-white/60">Revenue increase</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-semibold text-white mb-1">3x</div>
                <div className="text-sm text-white/60">Client capacity</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <Link 
              href="https://cal.com/boldslate/ai-systems-consultation"
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-[#FAF8F7] text-[#010100] font-semibold text-lg py-5 px-10 rounded-2xl transition-all duration-300 shadow-2xl shadow-white/10 hover:shadow-white/20 hover:-translate-y-1"
            >
              Book A Fulfillment Audit
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            {/* Trust indicator */}
            <p className="mt-6 text-sm text-white/50">
              Free 30-minute audit • We only take 10 projects/month
            </p>
            
          </div>
        </Container>
      </section>
    </div>
  );
}

