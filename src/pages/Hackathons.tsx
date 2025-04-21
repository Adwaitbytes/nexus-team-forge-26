
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hackathons = () => {
  return (
    <div className="min-h-screen bg-space-900 text-white overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center pt-28 pb-20">
        <section className="w-full max-w-3xl text-center mb-10 animate-fade-in">
          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full bg-gradient-to-br from-neon-purple to-neon-blue shadow-lg mb-4 p-4">
              <CalendarDays className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              Explore <span className="gradient-text">Hackathons</span>
            </h1>
            <p className="text-white/70 text-lg">
              Browse, join, and favorite upcoming hackathons worldwide. Never miss your next big event.
            </p>
          </div>
        </section>
        <section className="w-full max-w-xl glassmorphism p-8 rounded-xl flex flex-col items-center">
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 font-semibold"
            onClick={() => window.open("https://dorahacks.io/hackathon", "_blank")}
          >
            Browse Live Hackathons <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-3 text-white/60 text-sm">
            More hackathon listings coming soon!
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Hackathons;
