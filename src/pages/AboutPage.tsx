import { About } from '../components/About';
import { SocialProof } from '../components/SocialProof';
import { CTA } from '../components/CTA';

export function AboutPage() {
  return (
    <div className="pt-24">
      <About />
      <SocialProof />
      <CTA />
    </div>
  );
}
