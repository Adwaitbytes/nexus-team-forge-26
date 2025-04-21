
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Github, Mail, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-space-900 text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">TeamUp Nexus</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Building bridges between talented individuals for hackathon success.
            </p>
          </div>
          
          <div className="glassmorphism p-8 md:p-12 rounded-2xl max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              At TeamUp Nexus, we believe great ideas come to life when the right people connect. 
              Our platform is designed to help hackers, developers, designers, and innovators find 
              the perfect teammates for hackathons and tech competitions around the world.
            </p>
            <p className="text-white/80 mb-6 leading-relaxed">
              Whether you're a seasoned developer looking for a UI/UX designer, or a creative mind 
              seeking technical collaborators, TeamUp Nexus provides the tools and community to form 
              dream teams that can turn innovative ideas into reality.
            </p>
            
            <div className="h-px bg-white/10 my-10"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why TeamUp Nexus?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="p-6 bg-white/5 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-neon-purple">Skill-Based Matching</h3>
                <p className="text-white/70">
                  Our advanced algorithms help match participants based on complementary skills, 
                  creating balanced teams with diverse abilities.
                </p>
              </div>
              
              <div className="p-6 bg-white/5 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-neon-purple">Global Community</h3>
                <p className="text-white/70">
                  Connect with talented individuals from around the world, expanding your network 
                  and building international collaborations.
                </p>
              </div>
              
              <div className="p-6 bg-white/5 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-neon-purple">Hackathon Discovery</h3>
                <p className="text-white/70">
                  Stay updated with the latest hackathons and competitions, with detailed information 
                  to help you prepare effectively.
                </p>
              </div>
              
              <div className="p-6 bg-white/5 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-neon-purple">Team Building Made Simple</h3>
                <p className="text-white/70">
                  Our intuitive platform simplifies the team formation process, letting you focus on 
                  what matters most - creating amazing projects.
                </p>
              </div>
            </div>
            
            <div className="h-px bg-white/10 my-10"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-white/80 mb-8">
              Have questions, feedback, or partnership inquiries? We'd love to hear from you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-neon-purple hover:bg-purple-600 text-white">
                <Mail className="mr-2 h-4 w-4" /> Contact Us
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </div>
          </div>
          
          <div className="text-center text-white/50 text-sm">
            <p className="flex items-center justify-center">
              Built with <Heart className="h-4 w-4 text-red-500 mx-1" /> for hackers everywhere
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
