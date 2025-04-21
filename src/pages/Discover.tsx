
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, Filter, Users, X, BookOpen, UserPlus, Github, Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  
  const filters = [
    "Frontend", "Backend", "UI/UX", "Mobile", "AI/ML", 
    "Blockchain", "Cloud", "DevOps", "Game Dev", "Web3",
    "React", "Node.js", "Python", "JavaScript", "TypeScript"
  ];
  
  const users = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Full Stack Developer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      location: "San Francisco, CA",
      github: "#",
      linkedin: "#",
      bio: "Building scalable web applications with modern tech stacks. Open to collaborate on hackathon projects.",
      availability: "Weekends",
      previousHackathons: 5
    },
    {
      id: 2,
      name: "Sophia Chen",
      role: "UX/UI Designer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      location: "Toronto, Canada",
      github: "#",
      linkedin: "#",
      bio: "Creating intuitive and beautiful user experiences. Looking for a team for my next hackathon adventure.",
      availability: "Evenings & Weekends",
      previousHackathons: 3
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "ML Engineer",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
      location: "London, UK",
      github: "#",
      linkedin: "#",
      bio: "Specialized in computer vision and natural language processing. Excited to apply AI to solve real-world problems.",
      availability: "Full-time for hackathons",
      previousHackathons: 7
    },
    {
      id: 4,
      name: "Jasmine Lee",
      role: "Mobile Developer",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      location: "Seoul, South Korea",
      github: "#",
      linkedin: "#",
      bio: "Crafting seamless mobile experiences. Always looking to push the boundaries of what's possible on mobile.",
      availability: "Weekends",
      previousHackathons: 4
    },
    {
      id: 5,
      name: "Omar Hassan",
      role: "Blockchain Developer",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      skills: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
      location: "Dubai, UAE",
      github: "#",
      linkedin: "#",
      bio: "Passionate about decentralized technologies and their potential to transform industries.",
      availability: "Flexible",
      previousHackathons: 6
    },
    {
      id: 6,
      name: "Emma Wilson",
      role: "Product Manager",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      skills: ["Strategy", "User Stories", "Roadmapping", "Analytics"],
      location: "Berlin, Germany",
      github: "#",
      linkedin: "#",
      bio: "Bridging the gap between technical implementation and user needs. Excited to help teams build products users love.",
      availability: "Weekends",
      previousHackathons: 2
    },
  ];
  
  const handleFilterToggle = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter users based on search term and selected filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = searchTerm === '' || 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilters = selectedFilters.length === 0 || 
      selectedFilters.some(filter => 
        user.skills.some(skill => skill.toLowerCase() === filter.toLowerCase()) ||
        user.role.toLowerCase().includes(filter.toLowerCase())
      );
    
    return matchesSearch && matchesFilters;
  });
  
  return (
    <div className="min-h-screen bg-space-900 text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover <span className="gradient-text">Talent</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Find the perfect teammates for your next hackathon project.
              Filter by skills, location, and availability.
            </p>
          </div>
          
          {/* Search and Filter Section */}
          <div className="glassmorphism p-6 rounded-xl mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                <input
                  type="text"
                  placeholder="Search by name, skill or location..."
                  className="w-full h-12 bg-white/10 rounded-lg pl-10 pr-4 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative group">
                <Button className="h-12 bg-neon-purple hover:bg-purple-600 text-white px-6">
                  <Filter className="mr-2 h-4 w-4" /> Filters
                </Button>
              </div>
            </div>
            
            {/* Filter Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterToggle(filter)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedFilters.includes(filter)
                      ? 'bg-neon-purple text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            {/* Selected Filters */}
            {selectedFilters.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2 items-center">
                <span className="text-white/50 text-sm">Selected:</span>
                {selectedFilters.map((filter) => (
                  <div 
                    key={filter}
                    className="flex items-center gap-1 px-2 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-sm"
                  >
                    {filter}
                    <button onClick={() => handleFilterToggle(filter)}>
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                {selectedFilters.length > 0 && (
                  <button 
                    className="text-white/50 text-sm hover:text-white"
                    onClick={() => setSelectedFilters([])}
                  >
                    Clear all
                  </button>
                )}
              </div>
            )}
          </div>
          
          {/* Results Section */}
          {loading ? (
            <div className="flex justify-center py-16">
              <div className="relative">
                <div className="h-16 w-16 rounded-full border-t-2 border-neon-purple animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-neon-purple/20"></div>
                </div>
              </div>
            </div>
          ) : filteredUsers.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredUsers.map(user => (
                <div key={user.id} className="glassmorphism rounded-xl overflow-hidden card-hover">
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <Avatar className="h-20 w-20 mb-4 ring-2 ring-neon-purple/50">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold">{user.name}</h3>
                      <p className="text-white/70">{user.role}</p>
                    </div>
                    
                    <p className="text-white/70 text-sm text-center mb-4 line-clamp-3">
                      {user.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      {user.skills.map((skill, idx) => (
                        <Badge key={idx} className="bg-white/10 hover:bg-white/20 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="text-sm text-white/60 text-center mb-2">
                      <div className="flex items-center justify-center gap-1">
                        <BookOpen className="h-3 w-3 text-neon-purple" />
                        <span>{user.previousHackathons} hackathons attended</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-white/60 text-center mb-6">
                      <p>{user.location}</p>
                    </div>

                    <div className="flex justify-center gap-4 mb-4">
                      <a
                        href={user.github}
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href={user.linkedin}
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>

                    <Button className="w-full bg-neon-purple hover:bg-purple-600 text-white">
                      <UserPlus className="mr-2 h-4 w-4" /> Connect
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Users className="mx-auto h-16 w-16 text-white/30 mb-4" />
              <h3 className="text-xl font-medium mb-2">No users found</h3>
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

export default Discover;
