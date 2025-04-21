
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin, Users, ExternalLink, Search } from 'lucide-react';

const Hackathons = () => {
  const hackathons = [
    {
      title: "DeepHack AI Global",
      description: "Build the next generation of AI-powered applications",
      date: "May 15-17, 2025",
      location: "Virtual",
      participants: "5,000+",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: true,
    },
    {
      title: "BlockChain Summit",
      description: "Revolutionize finance with blockchain solutions",
      date: "June 5-7, 2025",
      location: "New York, USA",
      participants: "2,000+",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: false,
    },
    {
      title: "GreenTech Hackathon",
      description: "Solve climate challenges with technology",
      date: "July 10-12, 2025",
      location: "Berlin, Germany",
      participants: "1,500+",
      image: "https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: false,
    },
    {
      title: "Web3 Builders Summit",
      description: "Create the future of decentralized applications",
      date: "August 20-22, 2025",
      location: "Singapore",
      participants: "1,000+",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: false,
    },
    {
      title: "EdTech Revolution",
      description: "Transforming education with innovative technology",
      date: "September 8-10, 2025",
      location: "London, UK",
      participants: "1,200+",
      image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: false,
    },
    {
      title: "HealthTech Innovate",
      description: "Building solutions for healthcare challenges",
      date: "October 15-17, 2025",
      location: "Toronto, Canada",
      participants: "800+",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-space-900 text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Upcoming <span className="gradient-text">Hackathons</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover and prepare for the hottest hackathons happening around the world.
              Join these events and showcase your skills with your dream team.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-neon-purple hover:bg-purple-600 text-white" 
                onClick={() => window.open("https://dorahacks.io/hackathon", "_blank")}
              >
                Browse More Hackathons <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
            <input
              type="text"
              placeholder="Search hackathons..."
              className="w-full h-12 bg-white/10 rounded-lg pl-10 pr-4 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-neon-purple"
            />
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
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                      Find Team
                    </Button>
                    <Button className="flex-1 bg-neon-purple hover:bg-purple-600 text-white">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hackathons;
