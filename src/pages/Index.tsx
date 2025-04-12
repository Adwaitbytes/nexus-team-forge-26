
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import FeatureSection from '@/components/FeatureSection';
import HackathonSection from '@/components/HackathonSection';
import TeamSection from '@/components/TeamSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-space-900 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <HackathonSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
