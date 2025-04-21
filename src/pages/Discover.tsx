
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, Filter, Users, X } from 'lucide-react';

const Discover = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);
  
  const filters = [
    "Frontend", "Backend", "UI/UX", "Mobile", "AI/ML", 
    "Blockchain", "Cloud", "DevOps", "Game Dev"
  ];
  
  const handleFilterToggle = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };
  
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
          
          {/* Results Section - Placeholder */}
          <div className="text-center py-10">
            <Users className="mx-auto h-16 w-16 text-white/30 mb-4" />
            <h3 className="text-xl font-medium mb-2">No users found</h3>
            <p className="text-white/50">
              Try adjusting your search criteria or check back later
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Discover;
