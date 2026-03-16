import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';

export function PricingPage() {
  return (
    <div className="pt-24">
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
