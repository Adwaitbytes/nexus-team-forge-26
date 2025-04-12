
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Globe, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[20%] left-[10%] h-48 w-48 rounded-full bg-neon-purple blur-[80px]"></div>
        <div className="absolute top-[50%] right-[15%] h-72 w-72 rounded-full bg-neon-blue blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[30%] h-60 w-60 rounded-full bg-neon-pink blur-[90px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl">
            <div className="inline-block glassmorphism px-4 py-2 rounded-full mb-4">
              <p className="text-sm text-white/80 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-neon-purple animate-pulse"></span>
                The future of hackathon team formation is here
              </p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find the perfect <span className="gradient-text">teammates</span>
              <br />for your next <span className="gradient-text">hackathon</span>
            </h1>
            
            <p className="text-white/80 text-lg mb-8 max-w-xl">
              TeamUp Nexus connects you with like-minded developers, designers, and innovators
              to form winning hackathon teams. Showcase your skills, discover upcoming hackathons,
              and collaborate with the best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-neon-purple hover:bg-purple-600 text-white px-8 py-6 rounded-xl">
                Find teammates <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-xl">
                Browse hackathons
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-neon-purple" />
                <span>5,000+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-neon-purple" />
                <span>1,200+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-neon-purple" />
                <span>300+ Hackathons</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 hidden md:block">
            <div className="w-full h-[500px] rounded-2xl glassmorphism neon-glow p-6 relative overflow-hidden animate-float">
              {/* Placeholder for 3D globe or animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 rounded-full bg-neon-purple/20 border border-neon-purple/50 flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-24 w-24 text-neon-purple" />
                  </div>
                  <p className="text-white/80">3D Globe Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
