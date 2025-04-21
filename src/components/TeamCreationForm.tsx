
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Plus, 
  X, 
  UserPlus, 
  Calendar, 
  Search,
  BookOpen
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const TeamCreationForm = ({ onClose }: { onClose: () => void }) => {
  const [teamName, setTeamName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedHackathon, setSelectedHackathon] = useState('');
  const [hackathonSearch, setHackathonSearch] = useState('');
  const [openRoles, setOpenRoles] = useState<string[]>([]);
  const [newRole, setNewRole] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const hackathons = [
    "DeepHack AI Global - May 15-17, 2025",
    "BlockChain Summit - June 5-7, 2025",
    "GreenTech Hackathon - July 10-12, 2025",
    "Web3 Builders Summit - August 20-22, 2025",
    "EdTech Revolution - September 8-10, 2025",
    "HealthTech Innovate - October 15-17, 2025",
  ];

  const filteredHackathons = hackathonSearch 
    ? hackathons.filter(h => h.toLowerCase().includes(hackathonSearch.toLowerCase())) 
    : hackathons;

  const handleAddRole = () => {
    if (newRole && !openRoles.includes(newRole)) {
      setOpenRoles([...openRoles, newRole]);
      setNewRole('');
    }
  };

  const handleRemoveRole = (role: string) => {
    setOpenRoles(openRoles.filter(r => r !== role));
  };

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!teamName || !description || !selectedHackathon) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Team created successfully!",
      description: `Your team "${teamName}" has been created.`,
    });
    
    onClose();
  };

  const nextStep = () => {
    if (step === 1 && (!teamName || !description)) {
      toast({
        title: "Missing information",
        description: "Please provide a team name and description.",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 2 && !selectedHackathon) {
      toast({
        title: "Missing information",
        description: "Please select a hackathon.",
        variant: "destructive",
      });
      return;
    }
    
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="glassmorphism p-6 rounded-xl max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          {step === 1 && "Create Your Team"}
          {step === 2 && "Select Hackathon"}
          {step === 3 && "Define Roles & Skills"}
        </h2>
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`h-3 rounded-full bg-neon-purple transition-all duration-300 ${
            step >= 1 ? 'w-full' : 'w-0'
          }`}></div>
          <div className={`h-3 rounded-full transition-all duration-300 mx-1 ${
            step >= 2 ? 'bg-neon-purple w-full' : 'bg-white/20 w-full'
          }`}></div>
          <div className={`h-3 rounded-full transition-all duration-300 ${
            step >= 3 ? 'bg-neon-purple w-full' : 'bg-white/20 w-full'
          }`}></div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="teamName" className="block text-sm font-medium text-white/80 mb-2">
                Team Name *
              </label>
              <input
                id="teamName"
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                placeholder="e.g. CodeCrafters"
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-white/80 mb-2">
                Project Description *
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple resize-none"
                placeholder="Describe your project idea..."
              ></textarea>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Select Hackathon *
              </label>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                <input
                  type="text"
                  placeholder="Search hackathons..."
                  value={hackathonSearch}
                  onChange={(e) => setHackathonSearch(e.target.value)}
                  className="w-full p-3 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                />
              </div>
              
              <div className="max-h-60 overflow-y-auto glassmorphism rounded-lg">
                {filteredHackathons.length > 0 ? (
                  filteredHackathons.map((hackathon, index) => (
                    <div 
                      key={index} 
                      className={`p-3 border-b border-white/10 cursor-pointer hover:bg-white/5 flex items-center ${
                        selectedHackathon === hackathon ? 'bg-white/10' : ''
                      }`}
                      onClick={() => setSelectedHackathon(hackathon)}
                    >
                      <Calendar className="mr-2 h-4 w-4 text-neon-purple" />
                      <span>{hackathon}</span>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-white/50">
                    No hackathons found
                  </div>
                )}
              </div>
            </div>
            
            {selectedHackathon && (
              <div className="p-3 bg-white/5 rounded-lg">
                <h3 className="font-medium mb-1">Selected:</h3>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-neon-purple" />
                  <span>{selectedHackathon}</span>
                </div>
              </div>
            )}
          </div>
        )}
        
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Open Roles (what team members are you looking for?)
              </label>
              <div className="flex items-center mb-2">
                <input
                  type="text"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  className="flex-1 p-3 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                  placeholder="e.g. UI/UX Designer"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddRole())}
                />
                <button
                  type="button"
                  onClick={handleAddRole}
                  className="p-3 bg-neon-purple hover:bg-purple-600 text-white rounded-r-lg"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-2">
                {openRoles.map((role, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-sm"
                  >
                    <UserPlus className="h-3 w-3 text-neon-purple" />
                    {role}
                    <button
                      type="button"
                      onClick={() => handleRemoveRole(role)}
                      className="ml-1 text-white/70 hover:text-white"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Tech Stack & Skills
              </label>
              <div className="flex items-center mb-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  className="flex-1 p-3 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                  placeholder="e.g. React"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="p-3 bg-neon-purple hover:bg-purple-600 text-white rounded-r-lg"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-1 px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-1 text-neon-purple/70 hover:text-neon-purple"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <Button 
              type="button" 
              variant="outline" 
              onClick={prevStep}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Back
            </Button>
          ) : (
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Cancel
            </Button>
          )}
          
          {step < 3 ? (
            <Button 
              type="button"
              onClick={nextStep}
              className="bg-neon-purple hover:bg-purple-600 text-white"
            >
              Continue
            </Button>
          ) : (
            <Button 
              type="submit"
              className="bg-neon-purple hover:bg-purple-600 text-white"
            >
              Create Team
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TeamCreationForm;
