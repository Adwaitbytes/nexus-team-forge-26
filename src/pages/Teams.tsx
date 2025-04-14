
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { UserPlus, Users, Search, Filter } from 'lucide-react';

const Teams = () => {
  // Sample teams data
  const teams = [
    {
      id: 1,
      name: "CodeCrafters",
      members: 3,
      openRoles: ["UI/UX Designer", "Backend Developer"],
      description: "Building an AI-powered productivity tool for developers",
      hackathon: "DeepHack AI Global",
      tags: ["React", "Node.js", "AI/ML"]
    },
    {
      id: 2,
      name: "BlockBusters",
      members: 2,
      openRoles: ["Blockchain Developer", "Frontend Developer"],
      description: "Creating a decentralized marketplace for digital creators",
      hackathon: "BlockChain Summit",
      tags: ["Ethereum", "Solidity", "React"]
    },
    {
      id: 3,
      name: "EcoTech",
      members: 4,
      openRoles: ["Data Scientist"],
      description: "Developing a platform to track and reduce carbon footprint",
      hackathon: "GreenTech Hackathon",
      tags: ["Python", "React", "Data Science"]
    }
  ];

  return (
    <div className="min-h-screen bg-space-900 text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your <span className="gradient-text">Dream Team</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Join existing teams looking for your skills or create your own team
              for upcoming hackathons.
            </p>
          </div>
          
          {/* Search and Actions */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                type="text"
                placeholder="Search teams..."
                className="w-full h-12 bg-white/10 rounded-lg pl-10 pr-4 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-neon-purple"
              />
            </div>
            <Button className="h-12 bg-neon-purple hover:bg-purple-600 text-white">
              <UserPlus className="mr-2 h-4 w-4" /> Create Team
            </Button>
          </div>
          
          {/* Teams List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map(team => (
              <div key={team.id} className="glassmorphism rounded-xl overflow-hidden card-hover">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{team.name}</h3>
                    <div className="flex items-center text-white/60 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{team.members}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-4">{team.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-white/80 mb-2">Hackathon:</div>
                    <div className="text-neon-purple">{team.hackathon}</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-white/80 mb-2">Looking for:</div>
                    <div className="flex flex-wrap gap-2">
                      {team.openRoles.map((role, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-white/10 rounded-full text-xs"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {team.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-neon-purple hover:bg-purple-600 text-white">
                    Request to Join
                  </Button>
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

export default Teams;
