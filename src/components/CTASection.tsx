
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="glassmorphism rounded-2xl p-10 md:p-16 relative overflow-hidden neon-glow">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-[20%] left-[10%] h-64 w-64 rounded-full bg-neon-purple blur-[100px]"></div>
            <div className="absolute bottom-[20%] right-[10%] h-64 w-64 rounded-full bg-neon-blue blur-[100px]"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to form your <span className="gradient-text">dream team</span> for the next hackathon?
            </h2>
            
            <p className="text-white/80 text-lg mb-8">
              Join thousands of developers, designers, and innovators finding
              their perfect hackathon teammates on TeamUp Nexus.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-neon-purple hover:bg-purple-600 text-white px-8 py-6 text-lg rounded-xl">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                Explore Teams
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
