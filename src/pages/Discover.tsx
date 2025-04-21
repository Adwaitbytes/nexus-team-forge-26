
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Users } from "lucide-react";

const Discover = () => {
  return (
    <div className="min-h-screen bg-space-900 text-white overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center pt-28 pb-20">
        <section className="w-full max-w-3xl text-center mb-10 animate-fade-in">
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="rounded-full bg-gradient-to-br from-neon-purple to-neon-blue shadow-lg mb-4 p-4">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Discover <span className="gradient-text">Talent</span>
            </h1>
            <p className="text-white/70 text-lg">
              Search, connect, and build your <b>dream hackathon team</b>. Filter by skills, location, or interests.
            </p>
          </div>
        </section>
        <section className="w-full max-w-2xl glassmorphism rounded-xl p-8 mb-12">
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                type="text"
                placeholder="Search by name, skill, or location..."
                className="w-full h-12 bg-white/10 rounded-lg pl-10 pr-4 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                disabled
              />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Button className="bg-neon-purple text-white opacity-60 cursor-not-allowed" disabled>
                Filter by Skills
              </Button>
              <Button className="bg-neon-purple text-white opacity-60 cursor-not-allowed" disabled>
                Filter by Location
              </Button>
            </div>
            <p className="text-white/50 text-sm">
              Full teammate discovery launches soon. Stay tuned!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Discover;
