
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Github, Mail, Heart, Users, BookOpen, Settings } from 'lucide-react';

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
            <p className="text-white/70 max-w-3xl mx-auto">
              We're building the ultimate platform for hackathon enthusiasts to find their perfect teammates and create revolutionary projects together.
            </p>
          </div>
          
          <div className="glassmorphism p-8 md:p-12 rounded-2xl max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Our Story</h2>
                <p className="text-white/80 mb-6 leading-relaxed">
                  TeamUp Nexus was born from our own frustrations at hackathons. We were tired of scrambling to find teammates with complementary skills at the last minute.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Founded in 2023 by a group of hackathon enthusiasts, our platform has grown to connect thousands of developers, designers, and innovators across the globe.
                </p>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <div className="relative">
                  <div className="h-64 w-64 rounded-full bg-neon-purple/20 absolute top-0 left-0 animate-pulse"></div>
                  <div className="h-48 w-48 rounded-full bg-neon-blue/20 absolute bottom-0 right-0 animate-pulse"></div>
                  <div className="glassmorphism p-6 rounded-xl relative z-10">
                    <div className="flex flex-col items-center">
                      <Users className="h-16 w-16 text-neon-purple mb-4" />
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text mb-1">5,000+</div>
                        <div className="text-white/60">Connected Hackers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-px bg-white/10 my-12"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/3 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-neon-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect</h3>
                <p className="text-white/70">
                  We bring together talented individuals from diverse backgrounds to form powerful teams.
                </p>
              </div>
              
              <div className="md:w-1/3 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-neon-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Educate</h3>
                <p className="text-white/70">
                  We provide resources and guidance to help hackathon participants succeed.
                </p>
              </div>
              
              <div className="md:w-1/3 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-neon-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovate</h3>
                <p className="text-white/70">
                  We foster an environment where breakthrough ideas can flourish and come to life.
                </p>
              </div>
            </div>
            
            <div className="h-px bg-white/10 my-12"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Team</h2>
                <p className="text-white/80 mb-6 leading-relaxed">
                  We're a passionate team of developers, designers, and hackathon enthusiasts committed to creating the best platform for team formation and collaboration.
                </p>
                <p className="text-white/80 mb-6 leading-relaxed">
                  With backgrounds spanning from Silicon Valley tech giants to grassroots hackathon communities, our diverse perspectives drive our innovation.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-neon-purple hover:bg-purple-600 text-white">
                    <Mail className="mr-2 h-4 w-4" /> Contact Us
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="aspect-square bg-white/5 rounded-lg flex items-center justify-center overflow-hidden">
                      <div className="bg-neon-purple/20 h-full w-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-white/30" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
