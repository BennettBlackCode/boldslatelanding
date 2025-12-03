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

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowUp } from 'lucide-react';

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
    <div className="overflow-x-auto my-4 -mx-4 sm:mx-0">
      <table className="w-full border border-gray-200 rounded-md overflow-hidden text-sm min-w-[500px] sm:min-w-0">
        <thead>
          <tr className="bg-gray-50">
            {headers.map((header, i) => (
              <th key={i} className="text-left font-medium text-gray-700 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200 text-xs sm:text-sm">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 sm:px-4 py-2 sm:py-3 text-[#545555] border-t border-gray-200 text-xs sm:text-sm">
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
      const yOffset = -140;
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
    <div className="bg-[#FFF8F5] border-l-4 border-[#E8A87C] rounded-r-md p-4 sm:p-5 mb-6">
      <p className="text-xs font-semibold text-[#B45309] uppercase tracking-wide mb-2">🚨 THE PROBLEM</p>
      <div className="text-sm text-[#545555] leading-relaxed">{children}</div>
    </div>
  );
}

// ============================================
// Section Divider
// ============================================

function Divider() {
  return <hr className="border-gray-200 my-16 md:my-20" />;
}

// ============================================
// Floating Back to Top Button
// ============================================

function FloatingBackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 p-3 bg-[#010100] text-white rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}

// ============================================
// Main Page Component
// ============================================

export default function AgencyAIInfrastructurePlaybook() {
  return (
    <>
      {/* Floating Back to Top Button */}
      <FloatingBackToTop />
      
      {/* Page Background */}
      <div className="min-h-screen bg-[#FAF8F7] py-8 md:py-12 lg:py-16">
        
        {/* Floating Document */}
        <article className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg px-4 sm:px-6 py-8 md:px-16 md:py-14 lg:px-20 lg:py-16">
          
          {/* Document Header */}
          <header className="mb-8">
            <div className="mb-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Agency AI Infrastructure
              </p>
            </div>
            <p className="text-xs text-gray-400 mb-4">Last updated: November 2025</p>
            <div className="border-b border-gray-200" />
          </header>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl text-[#010100] leading-tight mb-4">
            <span className="font-semibold">The Agency AI Infrastructure Playbook</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-[#545555] leading-relaxed mb-8">
            Five automation systems that eliminate 100+ hours of manual work per week. Full breakdowns, tool stacks, and build approaches included.
          </p>

          {/* Table of Contents */}
          <nav className="bg-[#FAF8F7] rounded-md p-4 sm:p-6 border-l-4 border-gray-300 mb-10">
            <p className="text-sm font-medium uppercase tracking-wide text-gray-600 mb-4">On This Page</p>
            <div className="space-y-0.5">
              <TOCLink href="#context">Context</TOCLink>
              <TOCLink href="#system-1">System #1: From 5 Hours to 15 Minutes: Client Reporting</TOCLink>
              <TOCLink href="#system-2">System #2: Zero-Touch Client Onboarding</TOCLink>
              <TOCLink href="#system-3">System #3: 30 Days of SEO Work - Delivered Day One</TOCLink>
              <TOCLink href="#system-4">System #4: 5 Minute SEO Websites</TOCLink>
              <TOCLink href="#system-5">System #5: Custom AI Infrastructure For Agencies</TOCLink>
              <TOCLink href="#scale">What This Means At Scale</TOCLink>
              <TOCLink href="#implementation">Implementation Options</TOCLink>
              <TOCLink href="#references">References & Resources</TOCLink>
            </div>
          </nav>

          {/* Hero Image */}
          <div className="mb-12 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src="https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/Screenshot%202025-12-03%20at%203.24.56%20AM.png"
              alt="AI Infrastructure Systems"
              width={736}
              height={89}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* ============================================ */}
          {/* CONTEXT */}
          {/* ============================================ */}
          <section id="context" className="scroll-mt-24 mb-12">
            <h2 className="text-2xl font-semibold text-[#010100] mb-6">
              Context
            </h2>
            
            <div className="text-sm text-[#545555] leading-relaxed space-y-4">
              <p>
                The agencies scaling right now aren&apos;t working harder than others.
              </p>
              <p>
                They&apos;ve just stopped rebuilding everything from scratch.
              </p>
              <p>
                Same website structure they&apos;ve built forty times; they templatized it once and now it deploys in minutes. Same client reports every month; they automated the data pull and now AI writes the first draft. Same onboarding chaos with every new client; they systematized it and now it runs without them.
              </p>
              <p>
                These aren&apos;t agencies with bigger teams or better talent. They&apos;re agencies that figured out something simple: speed is the new premium. Clients don&apos;t pay for how long it took. They pay for results. The faster you deliver, the more you can take on, the higher your margins climb.
              </p>
              <p>
                We spent the last year building the infrastructure layer that makes this possible. Five systems. Each one eliminates a specific bottleneck we saw over and over again - in our own agency first, then in the agencies we worked with after.
              </p>
              <p>
                This playbook is the full documentation. What each system does. How it works. The tools involved. Enough detail to build it yourself if you want to.
              </p>
              <p>
                The top 10% of agencies already operate this way. The rest are still doing things manually.
              </p>
              <p>
                The agencies that figure this out will own the next five years. The ones that don&apos;t will keep wondering why it feels harder every year.
              </p>
            </div>
          </section>

          <Divider />

          {/* ============================================ */}
          {/* SYSTEM #1: Client Reporting Automation */}
          {/* ============================================ */}
          <section id="system-1" className="scroll-mt-24">
            <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 text-gray-700 mb-4 shadow-sm">
              System #1
            </span>
            
            <h2 className="text-2xl font-semibold text-[#010100] mb-4">
              From 5 Hours to 15 Minutes: Client Reporting
            </h2>

            <ProblemCallout>
              <p>Reporting eats 3-5 hours per client per month. Most of that time is logging into platforms, pulling data, and writing the same summary email you wrote last month.</p>
              <p className="mt-3">At 20 clients, that&apos;s a full-time role spent on copy-paste work.</p>
            </ProblemCallout>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">What We Built</h3>
            <p className="text-sm text-[#545555] leading-relaxed mb-4">
              A system that pulls client data from all sources automatically, stores it in a unified database, analyzes week-over-week changes, and pre-writes personalized email reports. Your team reviews, edits if needed, and clicks send.
            </p>
            <p className="text-sm font-medium text-[#010100] mb-6">
              Time reduction: 4+ hours per client → 15 minutes of review
            </p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Technical Overview</h3>
            <SimpleTable 
              headers={['Phase', 'What Happens']}
              rows={[
                ['Input', 'Scheduled workflow pulls data from GA4, Search Console, SEMrush/SE Ranking, local rank trackers, and project management tool'],
                ['Processing', 'AI analyzes week-over-week changes, identifies wins worth highlighting, surfaces key insights, and writes personalized summary in your voice'],
                ['Output', 'Email draft created in Gmail, queued for review. Historical data stored for trend analysis. One-click approve or edit before sending.'],
              ]}
            />

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Tools Used</h3>
            <SimpleTable 
              headers={['Tool', 'Purpose']}
              rows={[
                ['n8n', 'Scheduled data pulls and workflow orchestration'],
                ['Supabase', 'Unified client data storage'],
                ['Google Analytics API', 'Traffic, conversions, behavior data'],
                ['Search Console API', 'Keyword rankings and impressions'],
                ['SEMrush or SE Ranking API', 'Competitive rankings and backlink data'],
                ['Claude API', 'Report writing and analysis'],
                ['Gmail API', 'Draft creation and sending'],
              ]}
            />

            <h3 className="text-lg font-semibold text-[#010100] mb-3 mt-6">The Approach</h3>
            <p className="text-sm text-[#545555] leading-relaxed mb-4">If you want to build something similar, here&apos;s the general approach:</p>
            <ol className="text-sm text-[#545555] space-y-3 mb-6 list-decimal list-inside">
              <li><strong>Map your data sources.</strong> List every platform you currently pull reporting data from. For most SEO agencies: Google Analytics, Search Console, rank tracker, project management tool.</li>
              <li><strong>Create a unified client database.</strong> Each client gets a record. Each record stores their API connections and historical data.</li>
              <li><strong>Build the data pull workflow.</strong> A scheduled workflow runs weekly, connects to each data source via API, pulls relevant metrics, writes them to your database.</li>
              <li><strong>Create the AI analysis layer.</strong> Feed the pulled data into Claude with a prompt that compares this week to last week, identifies wins, flags concerns, and writes a summary.</li>
              <li><strong>Set up email drafts.</strong> Have the workflow create a Gmail draft - not send automatically. Keeps humans in the loop for review.</li>
              <li><strong>Add error handling.</strong> APIs fail. Accounts disconnect. Build in notifications when pulls fail so nothing slips through.</li>
            </ol>
            <p className="text-sm text-[#545555] mb-6">The first build takes 15-20 hours. After that, it runs on its own.</p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Real-World Impact</h3>
            <ul className="text-sm text-[#545555] space-y-1">
              <li>• <strong>50+ hours saved per month</strong> across a 20-client roster</li>
              <li>• <strong>Client retention increased by 3+ months average</strong> - consistent communication builds trust</li>
              <li>• <strong>CSMs handle 3x more clients</strong> without burning out on report writing</li>
            </ul>
          </section>

          <Divider />

          {/* ============================================ */}
          {/* SYSTEM #2: Client Onboarding & Operations */}
          {/* ============================================ */}
          <section id="system-2" className="scroll-mt-24">
            <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 text-gray-700 mb-4 shadow-sm">
              System #2
            </span>
            
            <h2 className="text-2xl font-semibold text-[#010100] mb-4">
              Zero-Touch Client Onboarding
            </h2>

            <ProblemCallout>
              <p>New client signs. Then: folder creation, project board setup, intake forms, access credentials, kickoff scheduling. Every step is manual. Every step lives in someone&apos;s head.</p>
              <p className="mt-3">Time cost: 8-15 hours per client. Hidden cost: 3-5 days before real work begins.</p>
            </ProblemCallout>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">What We Built</h3>
            <p className="text-sm text-[#545555] leading-relaxed mb-4">
              A system that triggers the moment a client signs. Folders auto-generate. Project boards populate with templated tasks. Intake forms send with follow-up sequences. Kickoff gets scheduled automatically.
            </p>
            <p className="text-sm text-[#545555] leading-relaxed mb-4">
              Humans do the kickoff and strategy. Everything else runs without them.
            </p>
            <p className="text-sm font-medium text-[#010100] mb-6">
              Time reduction: 8-15 hours → under 1 hour of human touchpoints
            </p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Technical Overview</h3>
            <SimpleTable 
              headers={['Phase', 'What Happens']}
              rows={[
                ['Trigger', 'Contract signed or payment received (from CRM or payment processor webhook)'],
                ['Processing', 'Workflow creates folder structure, project board with templated tasks, sends intake form, creates Slack channel, schedules kickoff based on availability'],
                ['Output', 'Client fully set up in all systems. Team notified. Intake responses collected. Kickoff scheduled.'],
              ]}
            />

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Tools Used</h3>
            <SimpleTable 
              headers={['Tool', 'Purpose']}
              rows={[
                ['n8n', 'Workflow orchestration'],
                ['Google Drive API', 'Folder structure creation'],
                ['Asana/ClickUp/Monday API', 'Project board setup with templates'],
                ['Typeform or Tally', 'Intake form with conditional logic'],
                ['Slack API', 'Channel creation, team notifications'],
                ['Cal.com or Calendly API', 'Kickoff scheduling'],
                ['Supabase', 'Client record storage'],
              ]}
            />

            <h3 className="text-lg font-semibold text-[#010100] mb-3 mt-6">The Approach</h3>
            <ol className="text-sm text-[#545555] space-y-3 mb-6 list-decimal list-inside">
              <li><strong>Document your current onboarding steps.</strong> Write down every single thing that happens between &quot;client signs&quot; and &quot;work begins.&quot; Most agencies discover 15-25 discrete steps.</li>
              <li><strong>Identify what requires human judgment.</strong> Usually it&apos;s the kickoff call, reviewing intake responses, and strategic planning. Everything else is procedural.</li>
              <li><strong>Create templates for the procedural work.</strong> Folder structures. Project board templates. Email sequences. These become the building blocks.</li>
              <li><strong>Build the trigger.</strong> When a deal moves to &quot;Closed Won&quot; in your CRM (or payment is received), the workflow fires.</li>
              <li><strong>Chain the automations.</strong> Each step triggers the next. Folder created → project board created → intake form sent → Slack channel created → team notified.</li>
              <li><strong>Add the human checkpoints.</strong> Intake form submitted → notify team to review. Kickoff scheduled → notify team to prepare.</li>
            </ol>
            <p className="text-sm text-[#545555] mb-6">Build time: 20-30 hours for the initial system. Saves 10+ hours per new client after that.</p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Real-World Impact</h3>
            <ul className="text-sm text-[#545555] space-y-1">
              <li>• <strong>10+ hours saved per new client onboarded</strong></li>
              <li>• <strong>Time to first deliverable reduced from 5-7 days to 1-2 days</strong></li>
              <li>• <strong>Zero steps forgotten</strong> - the system doesn&apos;t forget</li>
              <li>• <strong>Clients start receiving value faster</strong> - better first impression</li>
            </ul>
          </section>

          <Divider />

          {/* ============================================ */}
          {/* SYSTEM #3: SEO Deliverables Pipeline */}
          {/* ============================================ */}
          <section id="system-3" className="scroll-mt-24">
            <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 text-gray-700 mb-4 shadow-sm">
              System #3
            </span>
            
            <h2 className="text-2xl font-semibold text-[#010100] mb-4">
              30 Days of SEO Work - Delivered Day One
            </h2>

            <ProblemCallout>
              <p>After a website goes live, the SEO foundation work begins - keyword research, competitor analysis, backlink prospecting, content briefs, GBP posts.</p>
              <p className="mt-3">That&apos;s 30-50 hours of work before the client sees visible progress. Skilled work, but repetitive. And it&apos;s the bottleneck limiting how many clients you can onboard per month.</p>
            </ProblemCallout>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">What We Built</h3>
            <p className="text-sm text-[#545555] leading-relaxed mb-4">
              A system that runs competitor analysis, keyword research, backlink prospecting, GBP post generation, and content briefs - automatically. Weeks of deliverables ready before the client&apos;s first check-in call.
            </p>
            <p className="text-sm font-medium text-[#010100] mb-6">
              Time reduction: 30-50 hours → delivered in minutes
            </p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Technical Overview</h3>
            <SimpleTable 
              headers={['Phase', 'What Happens']}
              rows={[
                ['Input', 'Client website URL, target locations, primary service keywords'],
                ['Processing', 'System crawls site, extracts sitemap, identifies competitors, pulls keyword data via Ahrefs/SEMrush API, scores backlink opportunities, generates content'],
                ['Output', '30-day GBP post calendar, keyword-to-URL mapping, backlink prospect list, content briefs for priority pages'],
              ]}
            />

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Tools Used</h3>
            <SimpleTable 
              headers={['Tool', 'Purpose']}
              rows={[
                ['n8n', 'Workflow automation'],
                ['Ahrefs or SEMrush API', 'Keyword research, backlink analysis'],
                ['Google Business Profile API', 'GBP post scheduling'],
                ['Supabase', 'Deliverables storage'],
                ['Claude API', 'Content generation, analysis'],
                ['Google Sheets', 'Client-facing deliverable output'],
              ]}
            />

            <h3 className="text-lg font-semibold text-[#010100] mb-3 mt-6">The Approach</h3>
            <ol className="text-sm text-[#545555] space-y-3 mb-6 list-decimal list-inside">
              <li><strong>Standardize your SEO deliverables.</strong> What do you deliver to every client in the first 30 days? Keyword research, competitor analysis, backlink list, GBP posts, content briefs - define the package.</li>
              <li><strong>Map the data inputs.</strong> What information do you need to generate each deliverable? Usually: client URL, target locations, primary keywords, competitor domains.</li>
              <li><strong>Connect to your SEO tools via API.</strong> Ahrefs and SEMrush both have APIs. Pull keyword data, backlink profiles, and competitor analysis programmatically.</li>
              <li><strong>Build the generation logic.</strong> Feed the pulled data into Claude with prompts designed to output each deliverable type. GBP posts, meta descriptions, content briefs - each gets a specific prompt.</li>
              <li><strong>Create output destinations.</strong> Deliverables go somewhere the client can access - Google Sheets, a client portal, or directly into your project management tool.</li>
            </ol>
            <p className="text-sm text-[#545555] mb-6">Build time: 40-60 hours for a comprehensive system. But once built, it runs for every client.</p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Real-World Impact</h3>
            <ul className="text-sm text-[#545555] space-y-1">
              <li>• <strong>Clients see progress before their first check-in call</strong></li>
              <li>• <strong>Capacity to onboard 2-3x more clients per month</strong> without adding headcount</li>
              <li>• <strong>Standardized deliverable quality</strong> - no more variance between team members</li>
              <li>• <strong>20% increase in referrals</strong> from faster, more impressive starts</li>
            </ul>
          </section>

          <Divider />

          {/* ============================================ */}
          {/* SYSTEM #4: 5-Minute SEO Website Builder */}
          {/* ============================================ */}
          <section id="system-4" className="scroll-mt-24">
            <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 text-gray-700 mb-4 shadow-sm">
              System #4
            </span>
            
            <h2 className="text-2xl font-semibold text-[#010100] mb-4">
              5 Minute SEO Websites
            </h2>

            <ProblemCallout>
              <p>Even with templates, WordPress sites take 30-50 hours to build. Service pages, location pages, homepage, content population, SEO configuration.</p>
              <p className="mt-3">Clients wait 4-6 weeks. Every week of delay is lost rankings and lost trust.</p>
            </ProblemCallout>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">What We Built</h3>
            <p className="text-sm text-[#545555] leading-relaxed mb-4">
              A system that takes a client intake form, applies your existing templates, generates SEO-optimized content for every page, and provisions a fully-built WordPress site. Post-launch changes happen through a conversational AI agent - no backend access needed.
            </p>
            <p className="text-sm font-medium text-[#010100] mb-6">
              Time reduction: 40+ hours → under 5 minutes
            </p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Technical Overview</h3>
            <SimpleTable 
              headers={['Phase', 'What Happens']}
              rows={[
                ['Input', 'Client completes intake form: branding assets, service list, target locations, business info'],
                ['Processing', 'AI generates SEO-optimized content for each page, applies brand voice, populates Elementor templates'],
                ['Output', 'WordPress site provisioned on hosting, all pages built and populated, SSL configured, site live'],
              ]}
            />

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Tools Used</h3>
            <SimpleTable 
              headers={['Tool', 'Purpose']}
              rows={[
                ['n8n', 'Workflow orchestration and API coordination'],
                ['WordPress', 'Content management system'],
                ['Elementor', 'Template-based page generation'],
                ['Claude API', 'Content generation with brand voice'],
                ['Cloudways or Kinsta', 'Managed WordPress hosting with API'],
                ['Custom GPT', 'Conversational agent for post-launch changes'],
              ]}
            />

            <h3 className="text-lg font-semibold text-[#010100] mb-3 mt-6">The Approach</h3>
            <ol className="text-sm text-[#545555] space-y-3 mb-6 list-decimal list-inside">
              <li><strong>Create your mega-template.</strong> Build one WordPress site with every page type you commonly use: homepage, about, contact, service pages, location pages. Use Elementor global widgets for elements that repeat.</li>
              <li><strong>Map your custom fields.</strong> Identify what changes per client: logo, colors, business name, service descriptions, location details. These become form fields.</li>
              <li><strong>Build the intake form.</strong> Collect everything needed to populate the template. Structure it so AI can parse the responses.</li>
              <li><strong>Connect content generation.</strong> Claude takes intake responses and generates page content following your templates and brand guidelines.</li>
              <li><strong>Automate the provisioning.</strong> Cloudways API clones your template site. WordPress REST API populates pages with generated content. DNS configuration completes the deployment.</li>
              <li><strong>Add the change agent.</strong> A Custom GPT connected to the WordPress API allows post-launch edits through conversation rather than backend access.</li>
            </ol>
            <p className="text-sm text-[#545555] mb-6">Build time: 60-80 hours for a production-ready system. Saves 35+ hours per site after that.</p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Real-World Impact</h3>
            <ul className="text-sm text-[#545555] space-y-1">
              <li>• <strong>Sites delivered same-day instead of 4-6 weeks</strong></li>
              <li>• <strong>$3,000+/month saved on fulfillment payroll</strong></li>
              <li>• <strong>Zero change request bottlenecks</strong> - clients can request updates through AI agent</li>
              <li>• <strong>Capacity to onboard 6+ additional clients per month</strong> without hiring</li>
            </ul>
          </section>

          <Divider />

          {/* ============================================ */}
          {/* SYSTEM #5: Custom AI Infrastructure */}
          {/* ============================================ */}
          <section id="system-5" className="scroll-mt-24">
            <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 text-gray-700 mb-4 shadow-sm">
              System #5
            </span>
            
            <h2 className="text-2xl font-semibold text-[#010100] mb-4">
              Custom AI Infrastructure For Agencies
            </h2>

            <ProblemCallout>
              <p>Every agency has bottlenecks that don&apos;t fit pre-built solutions. Proposal generation. Client communication workflows. Niche-specific reporting formats.</p>
              <p className="mt-3">Off-the-shelf tools weren&apos;t built for your specific workflow. The bottlenecks persist, quietly eating hours every week.</p>
            </ProblemCallout>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">What We Build</h3>
            <p className="text-sm text-[#545555] leading-relaxed mb-6">
              Custom AI infrastructure designed around your existing tools and workflows. Not a new platform to learn - an automation layer that connects what you already use and eliminates the manual work between systems.
            </p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">How It Works</h3>
            <SimpleTable 
              headers={['Phase', 'What Happens']}
              rows={[
                ['Discovery', 'We map your current tools, workflows, and bottlenecks. Identify where manual work could be automated.'],
                ['Design', 'Architect the system: what triggers it, what data flows where, what outputs get generated.'],
                ['Build', 'Develop the automation using n8n, APIs for your existing tools, and AI where appropriate.'],
                ['Deploy', 'Install in your environment. Test with real data. Train your team on how to manage it.'],
                ['Maintain', 'Ongoing support for errors, updates, and optimizations.'],
              ]}
            />

            <h3 className="text-lg font-semibold text-[#010100] mb-3 mt-6">Examples of Custom Builds</h3>
            <ul className="text-sm text-[#545555] space-y-2 mb-6">
              <li>• <strong>Proposal generator</strong> - intake form triggers AI-written proposal with your pricing, case studies, and terms auto-populated</li>
              <li>• <strong>Lead qualification system</strong> - new leads scored and routed based on criteria you define</li>
              <li>• <strong>Client communication hub</strong> - unified inbox pulling from email, Slack, and project management comments</li>
              <li>• <strong>Custom reporting formats</strong> - reports tailored to specific client requirements or niches</li>
              <li>• <strong>Internal knowledge base</strong> - AI-searchable archive of your SOPs, past projects, and documentation</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">The Approach (If You Want to Build Custom)</h3>
            <ol className="text-sm text-[#545555] space-y-3 mb-6 list-decimal list-inside">
              <li><strong>Document the workflow as it exists today.</strong> Every step. Every tool. Every handoff. Map it completely.</li>
              <li><strong>Identify the manual translation points.</strong> Where does a human copy data from one place to another? Where does someone make a decision that follows a consistent pattern?</li>
              <li><strong>Determine if APIs exist.</strong> Check if the tools involved have API access. Most modern SaaS tools do.</li>
              <li><strong>Scope the automation.</strong> Start with the highest-impact, most-repetitive bottleneck. Don&apos;t try to automate everything at once.</li>
              <li><strong>Build incrementally.</strong> Get one workflow running reliably before adding complexity.</li>
              <li><strong>Plan for maintenance.</strong> APIs change. Tools update. Build in monitoring so you know when something breaks.</li>
            </ol>
            <p className="text-sm text-[#545555] mb-6">Custom builds vary from 10 hours (simple integrations) to 100+ hours (complex multi-system workflows).</p>

            <h3 className="text-lg font-semibold text-[#010100] mb-3">Real-World Impact</h3>
            <ul className="text-sm text-[#545555] space-y-1">
              <li>• <strong>Varies by project</strong> - typically 10-30 hours/week recovered</li>
              <li>• <strong>Systems built on your existing stack</strong> - no new tools to learn</li>
              <li>• <strong>You own the infrastructure</strong> - it runs in your environment</li>
              <li>• <strong>Scales with your business</strong> - built to handle growth</li>
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

            <p className="text-sm text-[#545555] mb-6">When these systems run together, the math changes.</p>

            <SimpleTable 
              headers={['Metric', 'Before', 'After']}
              rows={[
                ['Hours spent on reporting', '60-100/month', '5-10/month'],
                ['Time to onboard new client', '1-2 weeks', '1-2 days'],
                ['Hours to build client website', '40-50 hours', 'Under 1 hour'],
                ['SEO deliverables timeline', '2-3 weeks', 'Day one'],
                ['Owner involvement in delivery', 'Constant', 'Exception-only'],
              ]}
            />

            <div className="space-y-6 mt-8">
              <div>
                <h3 className="text-base font-semibold text-[#010100] mb-2">Capacity Impact</h3>
                <ul className="text-sm text-[#545555] space-y-1">
                  <li>• <strong>100+ hours of manual work eliminated per week</strong></li>
                  <li>• <strong>3-6 additional clients onboarded monthly</strong> without hiring</li>
                  <li>• <strong>Team focuses on strategy and relationships</strong> - not data entry</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#010100] mb-2">Financial Impact</h3>
                <ul className="text-sm text-[#545555] space-y-1">
                  <li>• <strong>$3-5K/month saved on fulfillment costs</strong></li>
                  <li>• <strong>Higher margins per client</strong> - less labor per deliverable</li>
                  <li>• <strong>Faster cash flow</strong> - clients delivered and invoiced sooner</li>
                  <li>• <strong>Revenue growth without proportional headcount growth</strong></li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#010100] mb-2">Operational Impact</h3>
                <ul className="text-sm text-[#545555] space-y-1">
                  <li>• <strong>Processes run consistently</strong> - no variance based on who&apos;s doing the work</li>
                  <li>• <strong>Errors caught systematically</strong> - monitoring surfaces issues before clients notice</li>
                  <li>• <strong>Institutional knowledge captured</strong> - the system knows how things are done, not just the owner</li>
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
            <p className="text-sm text-[#545555] mb-8">Two paths from here.</p>

            <div className="grid md:grid-cols-2 gap-4 items-stretch">
              {/* Option 1: DIY */}
              <div className="bg-[#FAF8F7] rounded-lg p-4 sm:p-6 border border-gray-200 flex flex-col">
                <h3 className="text-base font-semibold text-[#010100] mb-3">Option 1: Build It Yourself</h3>
                <p className="text-sm text-[#545555] leading-relaxed mb-4">
                  Everything documented above is replicable. The approaches are outlined. The tool stacks are listed. If you have technical capacity and time to invest, you can build these systems on your own infrastructure.
                </p>
                <p className="text-sm text-[#545555]">
                  <strong>Best for:</strong> Agencies with technical founders or in-house developers. 40-100 hours to invest per system.
                </p>
              </div>

              {/* Option 2: Have Us Deploy */}
              <div className="bg-[#FAF8F7] rounded-lg p-4 sm:p-6 border border-gray-200 flex flex-col">
                <h3 className="text-base font-semibold text-[#010100] mb-3">Option 2: Have Us Build It</h3>
                <p className="text-sm text-[#545555] leading-relaxed mb-4">
                  We implement the systems you just read about: client reporting, zero-touch onboarding, SEO deliverables, 5-minute websites, or custom AI infrastructure. Pick one or stack them together.
                </p>
                <p className="text-sm text-[#545555] mb-4">
                  <strong>Timeline:</strong> Hours for prebuilt systems, 2-4 weeks for custom builds
                </p>
                <p className="text-sm text-[#545555] mb-4">
                  <strong>What&apos;s included:</strong> Discovery call, system design, full build and deployment, team training, 30 days of support post-launch.
                </p>
                <p className="text-xs text-gray-500 mb-4 italic">
                  Book a free 20-minute call to discuss which systems make the most sense for your agency.
                </p>
                <Link 
                  href="https://cal.com/boldslate/ai-systems-consultation"
                  className="inline-block text-sm bg-[#010100] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Talk to Bennett
                </Link>
                <div className="mt-4 bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
                  <p className="text-xs text-gray-600">
                    We take on a limited number of implementation projects each month to maintain build quality.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* ============================================ */}
          {/* REFERENCES */}
          {/* ============================================ */}
          <section id="references" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-[#010100] mb-6">
              References & Resources
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
              <p className="text-sm text-gray-400">Last updated: November 2025</p>
              <p className="text-sm text-gray-500 mt-1">
                Questions? <Link href="https://cal.com/boldslate/ai-systems-consultation" className="underline hover:text-[#010100]">Talk to Bennett</Link>
              </p>
            </div>
          </section>

        </article>
      </div>
    </>
  );
}
