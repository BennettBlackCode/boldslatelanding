'use client';

/**
 * ============================================
 * 🎯 NAVBAR CUSTOMIZATION (for AI agents / future devs)
 * ============================================
 * 
 * This page inherits "Talk to us" from the playbook layout.
 * (See: src/app/playbook/layout.tsx using NavbarConfigSetter)
 * 
 * To OVERRIDE the navbar for THIS specific page, use the hook:
 * 
 * ```tsx
 * import { useNavbarConfig } from '@/components/NavbarContext';
 * 
 * // Inside the component:
 * useNavbarConfig({ showCta: false }); // Hides button entirely
 * useNavbarConfig({ ctaText: "Different Text" }); // Changes text
 * ```
 * 
 * See: src/components/NavbarContext.tsx for implementation details
 * ============================================
 */

/**
 * ============================================
 * 📝 VERSION NOTE
 * ============================================
 * 
 * This is V1 of the playbook - a simplified version WITHOUT:
 * - Video walkthrough section
 * - "Build It Yourself" collapsible dropdowns
 * 
 * The full version with videos and build guides is at:
 * /playbook/agency-ai-infrastructure
 * ============================================
 */

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

// ============================================
// Simple Table Component
// ============================================

function SimpleTable({ 
  headers, 
  rows 
}: { 
  headers: string[]; 
  rows: string[][]; 
}) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full border border-gray-200 rounded-md overflow-hidden text-sm">
        <thead>
          <tr className="bg-gray-50">
            {headers.map((header, i) => (
              <th key={i} className="text-left font-medium text-gray-700 px-4 py-3 border-b border-gray-200">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-[#545555] border-t border-gray-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ============================================
// TOC Link with Smooth Scroll
// ============================================

function TOCLink({ href, children }: { href: string; children: React.ReactNode }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -140; // Offset to account for spacing
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="block text-sm text-[#545555] hover:text-[#010100] transition-colors py-1"
    >
      • {children}
    </a>
  );
}

// ============================================
// Problem Callout
// ============================================

function ProblemCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#FFF8F5] border-l-4 border-[#E8A87C] rounded-r-md p-5 mb-6">
      <p className="text-xs font-semibold text-[#B45309] uppercase tracking-wide mb-2">🚨 THE PROBLEM</p>
      <p className="text-sm text-[#545555] leading-relaxed">{children}</p>
    </div>
  );
}

// ============================================
// Section Divider
// ============================================

function Divider() {
  return <hr className="border-gray-200 my-12" />;
}

// ============================================
// Main Page Component
// ============================================

export default function AgencyAIInfrastructurePlaybookV1() {
  return (
    <>
      {/* Page Background */}
      <div className="min-h-screen bg-[#FAF8F7] py-8 md:py-12 lg:py-16">
        
        {/* Floating Document */}
        <article className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg px-6 py-10 md:px-16 md:py-14 lg:px-20 lg:py-16">
          
          {/* Document Header */}
          <header className="mb-8">
            <div className="mb-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Agency AI Infrastructure
              </p>
            </div>
            <p className="text-xs text-gray-400 mb-4">Last updated: December 2, 2024</p>
            <div className="border-b border-gray-200" />
          </header>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl text-[#010100] leading-tight mb-4">
            <span className="font-semibold">The 2025 Agency AI Infrastructure Playbook:</span>{' '}
            <span className="font-normal italic">Engineering 480x Faster Agency Fulfillment</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-[#545555] leading-relaxed mb-8">
            An open playbook documenting how we engineered three automation systems that process 40+ hours of agency work in minutes. Full workflow diagrams and tool specifications included.
          </p>

          {/* Table of Contents */}
          <nav className="bg-[#FAF8F7] rounded-md p-6 border-l-4 border-gray-300 mb-10">
            <p className="text-sm font-medium uppercase tracking-wide text-gray-600 mb-4">On This Page</p>
            <div className="space-y-0.5">
              <TOCLink href="#system-1">System #1: 5-Minute Website Builder</TOCLink>
              <TOCLink href="#system-2">System #2: Automated SEO Deliverables Pipeline</TOCLink>
              <TOCLink href="#system-3">System #3: Client Reporting Automation</TOCLink>
              <TOCLink href="#scale">What This Means At Scale</TOCLink>
              <TOCLink href="#implementation">Implementation Options</TOCLink>
              <TOCLink href="#references">References & Resources</TOCLink>
            </div>
          </nav>

          {/* ============================================ */}
          {/* SYSTEM #1 */}
          {/* ============================================ */}
          <section id="system-1" className="scroll-mt-24">
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full border border-gray-300 text-gray-600 mb-4">
              System #1
            </span>
            
            <h2 className="text-2xl font-semibold text-[#010100] mb-4">
              The 5-Minute Website Builder
            </h2>

            <ProblemCallout>
              SEO agencies spend 40+ hours manually building service and location pages for each client. When clients request changes, that&apos;s another 10 hours of mind-numbing tweaks. This bottleneck prevents agencies from scaling beyond 10-15 clients without hiring more fulfillment staff.
            </ProblemCallout>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">What We Built</h3>
            <p className="text-sm text-[#545555] leading-relaxed mb-4">
              Generates full WordPress sites with 40+ SEO-optimized pages from templates, applies branding automatically, and includes a conversational AI agent for post-launch changes without touching the backend.
            </p>
            <p className="text-sm font-medium text-[#010100] mb-6">
              Time reduction: 40 hours → 5 minutes (480x faster)
            </p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Technical Overview</h3>
            <SimpleTable 
              headers={['Phase', 'What Happens']}
              rows={[
                ['Input', 'Client uploads branding (logo, colors, fonts), copy templates, and service list via intake form'],
                ['Processing', 'AI analyzes market positioning, generates SEO-optimized copy for each page, applies brand voice'],
                ['Output', 'WordPress site provisioned on Cloudways, Elementor templates populated, internal linking applied, site goes live with SSL'],
              ]}
            />

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Tools Used</h3>
            <SimpleTable 
              headers={['Tool', 'Purpose']}
              rows={[
                ['n8n', 'Workflow orchestration and API coordination'],
                ['WordPress', 'Content management system'],
                ['Elementor', 'Template-based page generation'],
                ['Claude API', 'AI-powered content generation'],
                ['Cloudways', 'Managed WordPress hosting with API'],
                ['Custom GPT', 'Conversational agent for post-launch changes'],
              ]}
            />
            <p className="text-sm text-gray-500 mt-2">Estimated monthly cost: ~$200/month</p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3 mt-6">Real-World Impact</h3>
            <ul className="text-sm text-[#545555] space-y-1">
              <li>• 6 additional clients onboarded in first 2 months</li>
              <li>• $3,000/month saved on payroll</li>
              <li>• 20% increase in client satisfaction scores</li>
              <li>• Zero change request bottlenecks</li>
            </ul>
          </section>

          <Divider />

          {/* ============================================ */}
          {/* SYSTEM #2 */}
          {/* ============================================ */}
          <section id="system-2" className="scroll-mt-24">
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full border border-gray-300 text-gray-600 mb-4">
              System #2
            </span>
            
            <h2 className="text-2xl font-semibold text-[#010100] mb-4">
              Automated SEO Deliverables Pipeline
            </h2>

            <ProblemCallout>
              Client websites go live and now your team is buried in 40+ hours of SEO grunt work—keyword research, URL mapping, GMB posts, backlink campaigns—all before the client sees any progress.
            </ProblemCallout>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">What We Built</h3>
            <p className="text-sm text-[#545555] leading-relaxed mb-4">
              Extracts sitemaps, performs SERP research, does keyword research, creates GBP posts, and finds backlink opportunities automatically—delivering weeks of work before the client&apos;s first day.
            </p>
            <p className="text-sm font-medium text-[#010100] mb-6">
              Time reduction: 40+ hours → minutes
            </p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Technical Overview</h3>
            <SimpleTable 
              headers={['Phase', 'What Happens']}
              rows={[
                ['Input', 'System crawls client website, extracts sitemap, queues competitor domains for analysis'],
                ['Processing', 'Ahrefs API runs keyword research, SERP analysis identifies content gaps, backlinks scored'],
                ['Output', 'GBP posts generated for 30 days, URL recommendations compiled, deliverables pushed to client dashboard'],
              ]}
            />

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Tools Used</h3>
            <SimpleTable 
              headers={['Tool', 'Purpose']}
              rows={[
                ['n8n', 'Workflow automation'],
                ['Ahrefs API', 'Keyword research and backlink analysis'],
                ['Google Business Profile API', 'GBP post scheduling'],
                ['Supabase', 'Deliverables storage and client dashboard'],
                ['Claude API', 'Content generation and analysis'],
              ]}
            />
            <p className="text-sm text-gray-500 mt-2">Estimated monthly cost: ~$300/month (varies with Ahrefs tier)</p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3 mt-6">Real-World Impact</h3>
            <ul className="text-sm text-[#545555] space-y-1">
              <li>• Clients get to market in days, not weeks</li>
              <li>• 20% increase in referrals from faster results</li>
              <li>• 4-10 additional clients closed per month</li>
              <li>• Clients see progress before first check-in call</li>
            </ul>
          </section>

          <Divider />

          {/* ============================================ */}
          {/* SYSTEM #3 */}
          {/* ============================================ */}
          <section id="system-3" className="scroll-mt-24">
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full border border-gray-300 text-gray-600 mb-4">
              System #3
            </span>
            
            <h2 className="text-2xl font-semibold text-[#010100] mb-4">
              Client Reporting Automation
            </h2>

            <ProblemCallout>
              Agencies write weekly email reports to keep clients happy, but the team spends hours pulling data from multiple sources and manually writing those emails—every single week, for every client.
            </ProblemCallout>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">What We Built</h3>
            <p className="text-sm text-[#545555] leading-relaxed mb-4">
              Automatically fetches client data from all sources, stores in unified database, and pre-writes weekly email reports. Team reviews, makes edits if needed, and clicks send.
            </p>
            <p className="text-sm font-medium text-[#010100] mb-6">
              Time reduction: 50+ hours saved per week across all clients
            </p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Technical Overview</h3>
            <SimpleTable 
              headers={['Phase', 'What Happens']}
              rows={[
                ['Input', 'Scheduled workflow pulls data from GA4, Search Console, rank trackers, ad platforms'],
                ['Processing', 'Claude analyzes week-over-week changes, identifies wins/concerns, writes personalized summary'],
                ['Output', 'Email draft created in Gmail, queued for CSM review, historical data stored for trends'],
              ]}
            />

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Tools Used</h3>
            <SimpleTable 
              headers={['Tool', 'Purpose']}
              rows={[
                ['n8n', 'Scheduled data pulls and workflow'],
                ['Supabase', 'Unified client data storage'],
                ['Google Analytics API', 'Traffic and conversion data'],
                ['Search Console API', 'Keyword rankings and impressions'],
                ['Claude API', 'Report writing and analysis'],
                ['Gmail API', 'Draft creation and sending'],
              ]}
            />
            <p className="text-sm text-gray-500 mt-2">Estimated monthly cost: ~$150/month</p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3 mt-6">Real-World Impact</h3>
            <ul className="text-sm text-[#545555] space-y-1">
              <li>• 50+ hours saved per week across all clients</li>
              <li>• Client retention increased by 3+ months average</li>
              <li>• $10,000+ saved from prevented churn</li>
              <li>• CSMs handle 3x more clients without burnout</li>
            </ul>
          </section>

          <Divider />

          {/* ============================================ */}
          {/* WHAT THIS MEANS AT SCALE */}
          {/* ============================================ */}
          <section id="scale" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-[#010100] mb-6">
              What This Means At Scale
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#010100] mb-2">Capacity Impact</h3>
                <ul className="text-sm text-[#545555] space-y-1">
                  <li>• 100+ hours of manual work eliminated per week</li>
                  <li>• 4-10 additional clients onboarded monthly without hiring</li>
                  <li>• $25,000+ monthly revenue increase from capacity expansion</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#010100] mb-2">Operational Impact</h3>
                <ul className="text-sm text-[#545555] space-y-1">
                  <li>• Team focuses on strategy and relationships, not data entry</li>
                  <li>• Client onboarding reduced from 2 weeks to 2 days</li>
                  <li>• Changes made without accessing backend systems</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#010100] mb-2">Financial Impact</h3>
                <ul className="text-sm text-[#545555] space-y-1">
                  <li>• $3-5K/month saved on payroll costs</li>
                  <li>• Higher margins per client (less fulfillment cost)</li>
                  <li>• Faster cash flow (clients delivered sooner)</li>
                </ul>
              </div>
            </div>
          </section>

          <Divider />

          {/* ============================================ */}
          {/* IMPLEMENTATION OPTIONS */}
          {/* ============================================ */}
          <section id="implementation" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-[#010100] mb-2">
              Implementation Options
            </h2>
            <p className="text-sm text-[#545555] mb-8">You have two paths from here:</p>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Option 1: DIY */}
              <div className="bg-[#FAF8F7] rounded-lg p-6 border border-gray-200">
                <h3 className="text-base font-semibold text-[#010100] mb-3">Option 1: Build It Yourself</h3>
                <p className="text-sm text-[#545555] leading-relaxed mb-4">
                  Everything documented above is replicable. Download our workflow templates, follow the build guides, and deploy on your own infrastructure.
                </p>
                <p className="text-sm text-[#545555]">
                  <strong>Best for:</strong> Technical teams with 40+ hours to invest in building and testing
                </p>
              </div>

              {/* Option 2: Have Us Deploy */}
              <div className="bg-[#FAF8F7] rounded-lg p-6 border border-gray-200">
                <h3 className="text-base font-semibold text-[#010100] mb-3">Option 2: Have Us Deploy It</h3>
                <p className="text-sm text-[#545555] leading-relaxed mb-4">
                  We implement these systems for your agency in 2-4 weeks, including custom configuration, tool integration, team training, and 30 days of support.
                </p>
                <p className="text-sm text-[#545555] mb-2">
                  <strong>Best for:</strong> Agencies that want results immediately
                </p>
                <p className="text-sm text-[#545555] mb-4">
                  <strong>Timeline:</strong> 2-4 weeks
                </p>
                <p className="text-xs text-gray-500 mb-4 italic">
                  We do a free 30-minute audit to identify where these systems would have the most impact.
                </p>
                <Link 
                  href="https://cal.com/boldslate/ai-systems-consultation"
                  className="inline-block text-sm bg-[#010100] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Book a Fulfillment Audit
                </Link>
                <p className="text-xs text-gray-400 mt-3">
                  Note: We only take on 10 implementation projects per month.
                </p>
              </div>
            </div>
          </section>

          <Divider />

          {/* ============================================ */}
          {/* REFERENCES */}
          {/* ============================================ */}
          <section id="references" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-[#010100] mb-6">
              References & Additional Resources
            </h2>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-[#010100] mb-2">Tool Documentation</h4>
                <ul className="text-[#545555] space-y-1">
                  <li>
                    <a href="https://docs.n8n.io/" target="_blank" rel="noopener noreferrer" className="hover:text-[#010100] underline">
                      n8n Documentation <ExternalLink size={10} className="inline ml-0.5" />
                    </a>
                  </li>
                  <li>
                    <a href="https://supabase.com/docs" target="_blank" rel="noopener noreferrer" className="hover:text-[#010100] underline">
                      Supabase Documentation <ExternalLink size={10} className="inline ml-0.5" />
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.anthropic.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#010100] underline">
                      Claude API Documentation <ExternalLink size={10} className="inline ml-0.5" />
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#010100] mb-2">Open-Source Alternatives</h4>
                <ul className="text-[#545555] space-y-1">
                  <li>• n8n (self-hosted) instead of Zapier/Make</li>
                  <li>• Supabase instead of Firebase</li>
                  <li>• Ollama for local LLM instead of Claude API</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-400">Last updated: December 2, 2024</p>
              <p className="text-sm text-gray-500 mt-1">
                Questions? <a href="mailto:hello@boldslate.com" className="underline hover:text-[#010100]">Contact us</a>
              </p>
            </div>
          </section>

        </article>
      </div>
    </>
  );
}

