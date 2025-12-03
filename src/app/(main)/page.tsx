import Hero from '@/components/Hero';
import Software from '@/components/Software';
import CustomBuilds from '@/components/CustomBuilds';
import Testimonials from '@/components/Testimonials';
import Outcomes from '@/components/Outcomes';
import FeatureSection from '@/components/FeatureSection';
import CallToAction from '@/components/CallToAction';

/**
 * ============================================
 * 🎯 NAVBAR CUSTOMIZATION (for AI agents / future devs)
 * ============================================
 * 
 * The navbar CTA button (top right) can be customized PER PAGE.
 * This page uses the DEFAULT config: "Schedule A Call"
 * 
 * To customize on any page, add 'use client' and use the hook:
 * 
 * ```tsx
 * 'use client';
 * import { useNavbarConfig } from '@/components/NavbarContext';
 * 
 * export default function MyPage() {
 *   // Option 1: Change button text and link
 *   useNavbarConfig({ 
 *     ctaText: "Book Demo", 
 *     ctaLink: "https://cal.com/boldslate/demo" 
 *   });
 * 
 *   // Option 2: Hide the button entirely
 *   useNavbarConfig({ showCta: false });
 * 
 *   // Option 3: Change everything
 *   useNavbarConfig({ 
 *     ctaText: "Get Started", 
 *     ctaLink: "/signup",
 *     showCta: true 
 *   });
 * 
 *   return <div>...</div>;
 * }
 * ```
 * 
 * See: src/components/NavbarContext.tsx for implementation details
 * ============================================
 */

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <Software />
      <CustomBuilds />
      <Testimonials />
      <Outcomes />
      
      <FeatureSection 
        badge="Eliminate Manual Tasks"
        title="Automated Workflows"
        text={
          <>
            <p>
              Turn manual tasks and inconsistent processes into intelligent, seamless workflows that boost productivity across every department.
            </p>
            <p>
              Eliminate busywork with AI automation that empowers your team to focus on what truly matters.
            </p>
          </>
        }
        imageSrc="https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/automated%20image%20workflows.svg"
        imageAlt="Automated Workflows"
        reverse={false}
        className="bg-[#FAF8F7]"
      />

      <FeatureSection 
        badge="Access Information Instantly"
        title="Trained On your Business"
        text={
          <>
            <p>
              Make your company's knowledge base accessible to AI agents that answer employee questions and reference internal documents.
            </p>
            <p>
              Ready to deploy in Slack, Telegram or wherever employees already look for documentation.
            </p>
          </>
        }
        imageSrc="https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/trained%20on%20your%20business%20image.svg"
        imageAlt="Trained On your Business"
        reverse={true}
        className="bg-white"
      />

      <FeatureSection 
        badge="Intelligence Meets Action"
        title="Complete Tasks on autopilot"
        text={
          <>
            <p>
              We create autonomous agents that understand incoming data, make decisions, and execute tasks across multiple tools with reasoning.
            </p>
            <p>
              Ready to process information, coordinate workflows, and act as an independent task performer without needing to be prompted.
            </p>
          </>
        }
        imageSrc="https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/complete%20tasks%20on%20autopilot%20image.svg"
        imageAlt="Complete Tasks on autopilot"
        reverse={false}
        className="bg-[#FAF8F7]"
      />

      <CallToAction />
    </div>
  );
}

