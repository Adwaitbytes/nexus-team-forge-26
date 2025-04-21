
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-space-900 text-white overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-16 flex flex-col items-center">
        <section className="w-full max-w-3xl text-center mb-10 animate-fade-in">
          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full bg-gradient-to-br from-neon-purple to-neon-blue shadow-lg mb-4 p-4">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              About <span className="gradient-text">TeamUp Nexus</span>
            </h1>
            <p className="text-white/70 text-lg">
              The future of hackathon collaboration is here. TeamUp Nexus brings together innovators from around the globe with next-gen tech, design, and AI matching.
            </p>
          </div>
        </section>
        <section className="glassmorphism w-full max-w-2xl p-8 rounded-xl text-center">
          <div className="flex flex-col gap-2 text-lg text-white/80">
            <span>
              🚀 <b>Form dream teams</b> for world-class hackathons.
            </span>
            <span>
              🎨 <b>Modern UI</b> with 3D glass, neon, & dynamic effects.
            </span>
            <span>
              💬 <b>Messaging, matchmaking & more</b>—coming soon.
            </span>
            <span className="text-white/70 mt-6 text-base">
              Connect. Build. Win. <br />
              <Button asChild className="mt-3 bg-neon-purple text-white rounded-lg">
                <a href="https://teamupnexus.dev" target="_blank" rel="noopener noreferrer">
                  Visit Project Site
                </a>
              </Button>
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
