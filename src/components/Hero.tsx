
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-neon-purple blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-neon-blue blur-[100px] animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Find Your Perfect <span className="gradient-text">Hackathon Team</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Connect with talented developers, designers, and innovators to build 
            winning projects at the world's most exciting hackathons.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="bg-neon-purple hover:bg-purple-600 text-white px-8 py-6 text-lg rounded-xl"
              asChild
            >
              <Link to="/teams">
                Find Teammates <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
              onClick={() => window.open("https://dorahacks.io/hackathon", "_blank")}
            >
              Browse Hackathons
            </Button>
          </div>
        </div>
        
        <div className="mt-20 flex justify-center">
          <div className="glassmorphism p-4 rounded-2xl">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="text-center px-4">
                <div className="text-3xl font-bold gradient-text">5,000+</div>
                <div className="text-white/60 text-sm">Developers</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold gradient-text">1,200+</div>
                <div className="text-white/60 text-sm">Teams Formed</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold gradient-text">150+</div>
                <div className="text-white/60 text-sm">Hackathons</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold gradient-text">90%</div>
                <div className="text-white/60 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
