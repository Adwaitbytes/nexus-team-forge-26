
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin, Users, ExternalLink, Search, Globe, Clock, Code, BookOpen } from 'lucide-react';

const Hackathons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Real hackathon data
  const hackathons = [
    {
      title: "ETHGlobal Paris",
      description: "Build the future of the web with Ethereum and web3 technologies",
      date: "May 22-24, 2025",
      location: "Paris, France",
      participants: "1,000+",
      image: "https://images.unsplash.com/photo-1702491089385-646c7e3e2d24?q=80&w=1964&auto=format&fit=crop",
      link: "https://ethglobal.com/",
      featured: true,
      categories: ["Web3", "Blockchain", "Ethereum"],
      prizes: "$500,000+"
    },
    {
      title: "HackMIT",
      description: "MIT's annual flagship hackathon for students worldwide",
      date: "June 10-12, 2025",
      location: "Cambridge, MA, USA",
      participants: "1,200+",
      image: "https://images.unsplash.com/photo-1604882737275-4ffa9387eac7?q=80&w=2943&auto=format&fit=crop",
      link: "https://hackmit.org/",
      featured: false,
      categories: ["Student", "AI", "Data Science"],
      prizes: "$50,000+"
    },
    {
      title: "Google Cloud Next Hackathon",
      description: "Create innovative solutions using Google Cloud technologies",
      date: "July 5-7, 2025",
      location: "San Francisco, CA, USA",
      participants: "2,500+",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://cloud.google.com/",
      featured: false,
      categories: ["Cloud", "AI/ML", "Enterprise"],
      prizes: "$200,000+"
    },
    {
      title: "ETHDenver 2025",
      description: "The world's largest web3 #BUIDLathon and community gathering",
      date: "August 20-22, 2025",
      location: "Denver, CO, USA",
      participants: "4,000+",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://www.ethdenver.com/",
      featured: true,
      categories: ["Web3", "Blockchain", "DeFi"],
      prizes: "$1M+"
    },
    {
      title: "TechCrunch Disrupt Hackathon",
      description: "Build revolutionary products at TechCrunch's flagship event",
      date: "September 12-14, 2025",
      location: "Virtual",
      participants: "1,500+",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://techcrunch.com/events/",
      featured: false,
      categories: ["Startup", "VC", "Innovation"],
      prizes: "$100,000+"
    },
    {
      title: "NASA Space Apps Challenge",
      description: "Worldwide hackathon engaging people to solve challenges using NASA data",
      date: "October 1-3, 2025",
      location: "Global (800+ locations)",
      participants: "30,000+",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://www.spaceappschallenge.org/",
      featured: false,
      categories: ["Space", "Data Science", "Climate"],
      prizes: "$70,000+"
    },
  ];

  const filteredHackathons = hackathons.filter(hackathon => 
    hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hackathon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hackathon.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hackathon.categories.some(category => 
      category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHackathons.map((hackathon, index) => (
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
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hackathon.categories.map((category, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-xs"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
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
                    <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                      Find Team
                    </Button>
                    <Button 
                      className="flex-1 bg-neon-purple hover:bg-purple-600 text-white"
                      onClick={() => window.open(hackathon.link, "_blank")}
                    >
                      Details <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredHackathons.length === 0 && (
            <div className="text-center py-16">
              <Globe className="mx-auto h-16 w-16 text-white/30 mb-4" />
              <h3 className="text-xl font-medium mb-2">No hackathons found</h3>
              <p className="text-white/50">
                Try adjusting your search criteria or check back later
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hackathons;
