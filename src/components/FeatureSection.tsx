
import { ArrowRight, Globe, Laptop, MessageSquare, Search, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeatureSection = () => {
  const features = [
    {
      title: "Find ideal teammates",
      description: "Match with teammates based on skills, interests, and hackathon preferences.",
      icon: <Users className="h-6 w-6 text-neon-purple" />,
    },
    {
      title: "Discover hackathons",
      description: "Browse and track upcoming hackathons from various platforms in one place.",
      icon: <Globe className="h-6 w-6 text-neon-blue" />,
    },
    {
      title: "Connect instantly",
      description: "Message potential teammates and form your dream team with ease.",
      icon: <MessageSquare className="h-6 w-6 text-neon-pink" />,
    },
    {
      title: "Smart matching",
      description: "Our algorithm suggests perfect teammates based on complementary skills.",
      icon: <Zap className="h-6 w-6 text-neon-purple" />,
    },
    {
      title: "Remote or local",
      description: "Find teammates for both in-person and virtual hackathons worldwide.",
      icon: <Laptop className="h-6 w-6 text-neon-blue" />,
    },
    {
      title: "Advanced filtering",
      description: "Filter potential teammates by tech stack, experience level, and timezone.",
      icon: <Search className="h-6 w-6 text-neon-pink" />,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to <span className="gradient-text">build winning teams</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            TeamUp Nexus provides all the tools you need to discover, connect, and collaborate 
            with the perfect teammates for your next hackathon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glassmorphism p-6 rounded-xl neon-glow card-hover"
            >
              <div className="mb-4 glassmorphism inline-block p-3 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70 mb-4">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-neon-purple hover:bg-purple-600 text-white px-8 py-6 rounded-xl">
            Explore features <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
