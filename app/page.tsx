import { Hero } from '@/components/hero';
import { ServicesOverview } from '@/components/services-overview';
import { WhyChooseUs } from '@/components/why-choose-us';
import { CallToAction } from '@/components/call-to-action';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <CallToAction />
    </>
  );
}