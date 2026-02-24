import DashboardHero from '@/components/DashboardHero';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <div className="space-y-0">
      <DashboardHero />
      <Products />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
