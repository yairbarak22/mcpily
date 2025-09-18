import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { CustomerBenefits } from '@/components/landing/customer-benefits';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Integrations } from '@/components/landing/integrations';
import { SocialProof } from '@/components/landing/social-proof';
import { Pricing } from '@/components/landing/pricing';
import { RiskReversal } from '@/components/landing/risk-reversal';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CustomerBenefits />
      <HowItWorks />
      <Integrations />
      <SocialProof />
      <Pricing />
      <RiskReversal />
      <Footer />
    </div>
  );
}
