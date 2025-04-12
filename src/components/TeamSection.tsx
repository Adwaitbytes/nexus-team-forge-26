
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Search } from 'lucide-react';

const TeamSection = () => {
  const users = [
    {
      name: "Alex Rivera",
      role: "Full Stack Developer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      location: "San Francisco, CA",
      github: "#",
      linkedin: "#",
    },
    {
      name: "Sophia Chen",
      role: "UX/UI Designer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      location: "Toronto, Canada",
      github: "#",
      linkedin: "#",
    },
    {
      name: "Marcus Johnson",
      role: "ML Engineer",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
      location: "London, UK",
      github: "#",
      linkedin: "#",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find your <span className="gradient-text">Dream Team</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Connect with talented individuals looking for hackathon teammates.
            Filter by skills, location, and experience to find your perfect match.
          </p>
        </div>

        <div className="glassmorphism p-6 rounded-xl mb-10 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                <input
                  type="text"
                  placeholder="Search by skills, name, or location..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                />
              </div>
            </div>
            <Button className="bg-neon-purple hover:bg-purple-600 text-white">
              Search
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <div
              key={index}
              className="glassmorphism rounded-xl overflow-hidden card-hover"
            >
              <div className="p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <Avatar className="h-20 w-20 mb-4 ring-2 ring-neon-purple/50">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold">{user.name}</h3>
                  <p className="text-white/70">{user.role}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {user.skills.map((skill, idx) => (
                    <Badge key={idx} className="bg-white/10 hover:bg-white/20 text-white">
                      {skill}
                    </Badge>
                  ))}
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
                  Connect
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            View All Team Members
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
