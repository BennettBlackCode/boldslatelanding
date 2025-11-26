import Hero from '@/components/Hero';
import Software from '@/components/Software';
import CustomBuilds from '@/components/CustomBuilds';
import Testimonials from '@/components/Testimonials';
import Outcomes from '@/components/Outcomes';
import FeatureSection from '@/components/FeatureSection';
import CallToAction from '@/components/CallToAction';

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
        imageSrc="https://boldslate.com/wp-content/uploads/2025/01/undraw_predictive-analytics_6vi1.svg"
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
        imageSrc="https://boldslate.com/wp-content/uploads/2025/01/undraw_folder-files_5www.svg"
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
        imageSrc="https://boldslate.com/wp-content/uploads/2025/01/undraw_creative-experiment_bzae.svg"
        imageAlt="Complete Tasks on autopilot"
        reverse={false}
        className="bg-[#FAF8F7]"
      />

      <CallToAction />
    </div>
  );
}
