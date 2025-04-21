
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, ExternalLink, MapPin, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const HackathonSection = () => {
  const { toast } = useToast();
  
  // Real hackathon data from DoraHacks
  const hackathons = [
    {
      title: "ETHGlobal Paris",
      description: "Build the future of the web with Ethereum and web3 technologies",
      date: "May 22-24, 2025",
      location: "Paris, France",
      participants: "1,000+",
      image: "https://images.unsplash.com/photo-1702491089385-646c7e3e2d24?q=80&w=1964&auto=format&fit=crop",
      prizes: "$500,000+",
      externalLink: "https://ethglobal.com/events/paris2024",
      featured: true,
    },
    {
      title: "HackMIT",
      description: "MIT's annual flagship hackathon for students worldwide",
      date: "June 10-12, 2025",
      location: "Cambridge, MA, USA",
      participants: "1,200+",
      image: "https://images.unsplash.com/photo-1604882737275-4ffa9387eac7?q=80&w=2943&auto=format&fit=crop",
      prizes: "$50,000+",
      externalLink: "https://hackmit.org/",
      featured: false,
    },
    {
      title: "DoraHacks Global Hackathon Series",
      description: "Create innovative solutions using blockchain and Web3 technologies",
      date: "July 5-7, 2025",
      location: "San Francisco, CA, USA",
      participants: "2,500+",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      prizes: "$200,000+",
      externalLink: "https://dorahacks.io/hackathon",
      featured: false,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming <span className="gradient-text">Hackathons</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Discover and prepare for the hottest hackathons happening around the world.
            Join these events and showcase your skills with your dream team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => (
            <div 
              key={index} 
              className={`glassmorphism rounded-xl overflow-hidden card-hover ${
                hackathon.featured ? 'ring-2 ring-neon-purple' : ''
              }`}
            >
              <div className="h-48 w-full relative">
                <img 
                  src={hackathon.image} 
                  alt={hackathon.title} 
                  className="h-full w-full object-cover"
                />
                {hackathon.featured && (
                  <div className="absolute top-2 right-2 glassmorphism px-3 py-1 rounded-full text-xs font-medium text-neon-purple">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{hackathon.title}</h3>
                <p className="text-white/70 mb-4">{hackathon.description}</p>
                
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <CalendarDays className="h-4 w-4 text-neon-purple" />
                    <span>{hackathon.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <MapPin className="h-4 w-4 text-neon-purple" />
                    <span>{hackathon.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Users className="h-4 w-4 text-neon-purple" />
                    <span>{hackathon.participants} participants</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <BookOpen className="h-4 w-4 text-neon-purple" />
                    <span>Prizes: {hackathon.prizes}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-white/20 text-white hover:bg-white/10" 
                    asChild
                  >
                    <Link to="/teams">Find Team</Link>
                  </Button>
                  <Button 
                    className="flex-1 bg-neon-purple hover:bg-purple-600 text-white"
                    onClick={() => window.open(hackathon.externalLink, "_blank")}
                  >
                    Details <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10"
            onClick={() => window.open("https://dorahacks.io/hackathon", "_blank")}
          >
            View All Hackathons <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;
