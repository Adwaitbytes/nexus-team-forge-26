
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, Github, Linkedin, MapPin, Upload, X, Plus, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const CreateProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    bio: '',
    location: '',
    github: '',
    linkedin: '',
    profileImage: 'https://randomuser.me/api/portraits/lego/1.jpg', // Default placeholder
  });
  
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');
  
  const availableSkills = [
    "React", "Angular", "Vue", "JavaScript", "TypeScript", "Node.js", "Python", 
    "Java", "C#", "PHP", "Ruby", "Go", "Rust", "Swift", "Kotlin",
    "MongoDB", "PostgreSQL", "MySQL", "Firebase", "AWS", "Azure", "GCP",
    "Docker", "Kubernetes", "CI/CD", "DevOps", "Machine Learning", "Data Science",
    "UI/UX Design", "Figma", "Adobe XD", "Product Management", "Agile", "Scrum"
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSkillAdd = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };
  
  const handleCustomSkillAdd = () => {
    if (newSkill && !selectedSkills.includes(newSkill)) {
      setSelectedSkills([...selectedSkills, newSkill]);
      setNewSkill('');
    }
  };
  
  const handleSkillRemove = (skill: string) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, we would save this to a database
    console.log("Profile data:", { ...formData, skills: selectedSkills });
    
    toast({
      title: "Profile Created!",
      description: "Your profile has been successfully created.",
      variant: "default",
    });
    
    setTimeout(() => {
      navigate('/teams');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-space-900 text-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Create Your <span className="gradient-text">Profile</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Complete your profile to connect with other hackathon participants and find your dream team.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto glassmorphism rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Profile Image */}
              <div className="flex flex-col items-center justify-center">
                <Avatar className="h-32 w-32 mb-4 ring-2 ring-neon-purple">
                  <AvatarImage src={formData.profileImage} alt="Profile" />
                  <AvatarFallback>UP</AvatarFallback>
                </Avatar>
                <Button variant="outline" className="text-sm border-white/20 text-white hover:bg-white/10">
                  <Upload className="mr-2 h-4 w-4" /> Upload Photo
                </Button>
              </div>
              
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-medium text-white/80">Role/Title</label>
                  <Input
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Full Stack Developer"
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                  />
                </div>
              </div>
              
              {/* Bio */}
              <div className="space-y-2">
                <label htmlFor="bio" className="text-sm font-medium text-white/80">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell others about yourself, your experience, and what you're passionate about..."
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                />
              </div>
              
              {/* Location */}
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium text-white/80">
                  <MapPin className="h-4 w-4 inline mr-1" /> Location
                </label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="San Francisco, CA"
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                />
              </div>
              
              {/* Social Links */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="github" className="text-sm font-medium text-white/80">
                    <Github className="h-4 w-4 inline mr-1" /> GitHub
                  </label>
                  <Input
                    id="github"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="github.com/yourusername"
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="linkedin" className="text-sm font-medium text-white/80">
                    <Linkedin className="h-4 w-4 inline mr-1" /> LinkedIn
                  </label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="linkedin.com/in/yourusername"
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                  />
                </div>
              </div>
              
              {/* Skills */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Skills</h3>
                
                {/* Selected Skills */}
                <div className="flex flex-wrap gap-2">
                  {selectedSkills.map((skill) => (
                    <Badge 
                      key={skill} 
                      className="bg-neon-purple/20 text-neon-purple hover:bg-neon-purple/30 flex items-center gap-1 px-3 py-1.5"
                    >
                      {skill}
                      <button 
                        type="button" 
                        onClick={() => handleSkillRemove(skill)}
                        className="ml-1"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  
                  {selectedSkills.length === 0 && (
                    <p className="text-white/50 text-sm">Add skills to help teams find you</p>
                  )}
                </div>
                
                {/* Custom Skill Input */}
                <div className="flex items-center gap-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a custom skill..."
                    className="bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                  />
                  <Button 
                    type="button" 
                    onClick={handleCustomSkillAdd}
                    disabled={!newSkill}
                    className="bg-neon-purple hover:bg-purple-600"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Available Skills */}
                <div>
                  <p className="text-sm font-medium text-white/80 mb-2">Common skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {availableSkills
                      .filter(skill => !selectedSkills.includes(skill))
                      .slice(0, 15)
                      .map((skill) => (
                        <button
                          key={skill}
                          type="button"
                          onClick={() => handleSkillAdd(skill)}
                          className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/70"
                        >
                          + {skill}
                        </button>
                      ))}
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <Button 
                  type="button" 
                  variant="outline"
                  className="mr-2 border-white/20 text-white hover:bg-white/10"
                  onClick={() => navigate('/')}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-neon-purple hover:bg-purple-600"
                >
                  Create Profile
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateProfile;
