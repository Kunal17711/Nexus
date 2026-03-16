import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { SocialProof } from '../components/SocialProof';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <SocialProof />
      <CTA />
    </>
  );
}
