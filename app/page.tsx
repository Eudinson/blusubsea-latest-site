import { Hero } from '@/components/hero';
import { ServicesOverview } from '@/components/services-overview';
import { Certifications } from '@/components/certifications';

export default function Home() {
  return (
    <>
      <Hero />
      <Certifications />
      <ServicesOverview />
    </>
  );
}