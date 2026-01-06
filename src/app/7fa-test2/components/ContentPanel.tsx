"use client";

import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, Calendar, Sparkles } from "lucide-react";
import { DemoVideo } from "./DemoVideo";
import { CodeReveal } from "./CodeReveal";
import { cn } from "@/lib/utils";

export type Category = "websites" | "content" | "sales" | "onboarding" | "reporting";

interface ContentPanelProps {
  category: Category | null;
}

interface ProductSection {
  badge: string;
  badgeType: "agencyx2" | "custom" | "wordpress";
  headline: string;
  subheadline?: string;
  bullets: string[];
  demoTitle: string;
  cta: {
    label: string;
    href: string;
  };
  code: string;
  discountText: string;
  priceAnchor?: {
    original: string;
    discounted: string;
  };
}

interface PanelContent {
  sections: ProductSection[];
  transitionText?: string; // Text between sections like "Some of you might be sticking to WordPress..."
}

const panelData: Record<Category, PanelContent> = {
  websites: {
    sections: [
      {
        badge: "Agency X2",
        badgeType: "agencyx2",
        headline: "Your agency builds full SEO websites in 30 seconds (literally).",
        bullets: [
          "Clone your existing WordPress, Webflow, Wix templates by scanning the URL & save them as templates",
          "Grab any prospect's GBP URL & it auto-scrapes all info and populates your site template with it + all service & location pages",
          "Show up to sales calls with an example site prebuilt (that you made in 30 sec) - watch your close rate jump",
          "Use that example site as a downsell for prospects with smaller budgets",
          "Page speed score of 100 out of the box",
          "Make small revisions for clients easily with your website agent",
          "Add infinite SEO-optimized service & location pages just by telling the agent what to add",
        ],
        demoTitle: "Agency X2 Website Builder Demo",
        cta: { label: "Try It For Free", href: "#" },
        code: "7FA",
        discountText: "and get 3 additional sites free with this code",
      },
      {
        badge: "WordPress Users",
        badgeType: "wordpress",
        headline: "Build full SEO WordPress sites in 5 minutes",
        subheadline: "For those of you sticking with WordPress - we've got something for you too.",
        bullets: [
          "Full WordPress site generated from any business URL",
          "All SEO metadata populated automatically",
          "Mobile responsive themes included",
          "Export and deploy to any host",
        ],
        demoTitle: "1clickwebsite.ai Demo",
        cta: { label: "Try 1clickwebsite.ai", href: "https://1clickwebsite.ai" },
        code: "7FA",
        discountText: "and get 2 additional credits free with this code",
      },
    ],
    transitionText: "Some of you might be sticking to WordPress and we have something for you too:",
  },
  content: {
    sections: [
      {
        badge: "Agency X2 - GBP Posts",
        badgeType: "agencyx2",
        headline: "Your agency writes and posts 360 days of GBP posts for EVERY client in a couple minutes.",
        bullets: [
          "Based on their actual SEO keywords",
          "Drop in their GBP profile URL → it auto-scrapes all content about them & determines their industry",
          "Choose 30, 60, 90, or 360 days worth of content",
          "Pick your topics and it writes all the content with images in minutes",
          "Schedule posts automatically or export for manual posting",
        ],
        demoTitle: "GBP Content Creator Demo",
        cta: { label: "Try It For Free", href: "#" },
        code: "7FA",
        discountText: "and get 1000 additional SEO post credits with this code",
      },
      {
        badge: "Agency X2 - Blog Posts",
        badgeType: "agencyx2",
        headline: "4 blog posts for every client, generated in minutes.",
        bullets: [
          "SEO-optimized blog content based on target keywords",
          "Matches your client's brand voice and industry",
          "Internal linking suggestions included",
          "Ready to publish or schedule",
        ],
        demoTitle: "Blog Post Generator Demo",
        cta: { label: "Try It For Free", href: "#" },
        code: "7FA",
        discountText: "and get additional blog credits with this code",
      },
    ],
  },
  sales: {
    sections: [
      {
        badge: "Agency X2",
        badgeType: "agencyx2",
        headline: "Your agency's close rate has doubled because your team shows up to sales calls prepared.",
        subheadline: "With something concrete to show - not just a pitch deck.",
        bullets: [
          "Prospect's site already built before the call (made in 30 seconds)",
          "SEO heat map showing their current ranking in the area",
          "Set of GBP posts already created for them - a gift just for hopping on the call",
          "A list of all the keywords their competitors are ranking for that they aren't",
          "Your software checked their site before the call so you know exactly where they're losing",
        ],
        demoTitle: "Sales Call Prep Demo",
        cta: { label: "Try It For Free", href: "#" },
        code: "7FA",
        discountText: "and get 3 free sites + 1000 GBP post credits with this code",
      },
      {
        badge: "Agency X2 - SEO Heat Maps",
        badgeType: "agencyx2",
        headline: "Show them exactly where they're losing before you even pitch.",
        subheadline: "Visual proof beats talk every time.",
        bullets: [
          "Visual heat map of their ranking across the entire service area",
          "See which competitors are dominating their keywords",
          "Generate a prospect report in seconds before any call",
          "Show them the gaps - then show them you can fix it",
          "Export as PDF to leave behind or email after the call",
        ],
        demoTitle: "SEO Heat Map for Sales Demo",
        cta: { label: "Try It For Free", href: "#" },
        code: "7FA",
        discountText: "and get additional heat map credits with this code",
      },
    ],
  },
  onboarding: {
    sections: [
      {
        badge: "Custom Build - Onboarding System",
        badgeType: "custom",
        headline: "New clients are onboarded in 48 hours - automatically.",
        subheadline: "They see progress on day one. Your team didn't lift a finger.",
        bullets: [
          "Automatically collects client information via branded intake forms",
          "Sends welcome sequences that make clients feel like VIPs",
          "Creates project folders, provisions tools, sets up communication channels",
          "Triggers internal workflows so your team knows exactly what to do",
          "Clients see visible progress within 24 hours of signing",
          "8-12 hours saved per client onboarded",
        ],
        demoTitle: "48-Hour Client Launch System Demo",
        cta: { label: "Book a Call", href: "https://cal.com/boldslate" },
        code: "7FA",
        discountText: "mention \"7FA\" on your call for exclusive member pricing",
        priceAnchor: {
          original: "$5,000+",
          discounted: "Exclusive 7FA Pricing",
        },
      },
    ],
  },
  reporting: {
    sections: [
      {
        badge: "Custom Build - Client Retention Engine",
        badgeType: "custom",
        headline: "Clients see their results without you lifting a finger.",
        subheadline: "The retention system that eliminates churn.",
        bullets: [
          "Aggregate Google Analytics, Search Console, GMB, and ad platforms - all in one view",
          "Automated weekly/monthly reports with every metric that matters to them",
          "Client milestone celebrations - automated recognition keeps them happy",
          "Proactive alerts when metrics dip so you can act before they complain",
          "Weekly \"wins\" summaries sent automatically to clients",
          "Builds loyalty. Reduces churn. Generates referrals.",
        ],
        demoTitle: "Client Retention Engine Demo",
        cta: { label: "Book a Call", href: "https://cal.com/boldslate" },
        code: "7FA",
        discountText: "mention \"7FA\" on your call for exclusive member pricing",
        priceAnchor: {
          original: "$5,000+",
          discounted: "Exclusive 7FA Pricing",
        },
      },
    ],
  },
};

function ProductSectionComponent({ 
  section, 
  index, 
  showTransition,
  transitionText 
}: { 
  section: ProductSection; 
  index: number;
  showTransition?: boolean;
  transitionText?: string;
}) {
  const isCustom = section.badgeType === "custom";
  const isWordPress = section.badgeType === "wordpress";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className={cn(
        "py-10",
        index > 0 && "border-t border-[#FAF8F7]"
      )}
    >
      {/* Transition text between sections */}
      {showTransition && transitionText && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8 text-center text-lg font-medium text-[#545555]"
        >
          {transitionText}
        </motion.p>
      )}

      {/* Product badge */}
      <div className="mb-4 text-center">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
            isCustom
              ? "bg-[#010100] text-white"
              : isWordPress
              ? "bg-blue-600 text-white"
              : "bg-[#FAF8F7] text-[#545555]"
          )}
        >
          {isCustom && <Sparkles className="h-3 w-3" />}
          {section.badge}
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-center font-heading text-2xl font-semibold leading-tight text-[#010100] md:text-3xl">
        {section.headline}
      </h2>

      {/* Subheadline */}
      {section.subheadline && (
        <p className="mx-auto mt-3 max-w-xl text-center text-lg text-[#545555]">
          {section.subheadline}
        </p>
      )}

      {/* Bullet points */}
      <ul className="mx-auto mt-8 max-w-2xl space-y-3">
        {section.bullets.map((bullet, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="flex items-start gap-3"
          >
            <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#FAF8F7]">
              <Check className="h-3 w-3 text-[#010100]" />
            </div>
            <span className="text-[#545555]">{bullet}</span>
          </motion.li>
        ))}
      </ul>

      {/* Demo Video Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mx-auto mt-10 max-w-2xl"
      >
        <h3 className="mb-4 text-center font-heading text-lg font-medium text-[#010100]">
          See it in action
        </h3>
        <DemoVideo title={section.demoTitle} />
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-10 text-center"
      >
        <a
          href={section.cta.href}
          target={section.cta.href.startsWith("http") ? "_blank" : undefined}
          rel={section.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={cn(
            "inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-medium transition-all",
            "bg-[#010100] text-white hover:-translate-y-1 hover:shadow-lg"
          )}
        >
          {isCustom ? (
            <>
              <Calendar className="h-5 w-5" />
              {section.cta.label}
            </>
          ) : (
            <>
              {section.cta.label}
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </a>

        {/* Code reveal, pricing, and discount text */}
        <div className="mt-6">
          <CodeReveal code={section.code} />
          {section.priceAnchor && (
            <div className="mt-4 mb-2">
              <span className="text-sm text-[#545555] line-through">{section.priceAnchor.original}</span>
              <span className="ml-2 text-sm font-semibold text-[#010100]">{section.priceAnchor.discounted}</span>
            </div>
          )}
          <p className="mt-3 text-sm text-[#545555]">
            {section.discountText}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ContentPanel({ category }: ContentPanelProps) {
  if (!category) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <p className="text-lg text-[#545555]">
          Select a category above to explore what Bold Slate can do for your agency.
        </p>
      </div>
    );
  }

  const content = panelData[category];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={category}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-4xl px-4"
      >
        {content.sections.map((section, index) => (
          <ProductSectionComponent
            key={index}
            section={section}
            index={index}
            showTransition={index > 0}
            transitionText={content.transitionText}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
