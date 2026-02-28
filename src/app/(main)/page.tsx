import DashboardHero from '@/components/DashboardHero';
import ProductShowcase from '@/components/ProductShowcase';
import Metrics from '@/components/Metrics';
import FounderSection from '@/components/FounderSection';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <div className="space-y-0">
      <DashboardHero />
      <ProductShowcase />
      <Metrics />
      <FounderSection />
      <CallToAction />
    </div>
  );
}
