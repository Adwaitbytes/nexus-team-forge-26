
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Teams = () => {
  return (
    <div className="min-h-screen bg-space-900 text-white overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center pt-28 pb-16">
        <section className="w-full max-w-3xl text-center mb-10 animate-fade-in">
          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full bg-gradient-to-br from-neon-purple to-neon-blue shadow-lg mb-4 p-4">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              Team <span className="gradient-text">Matching</span>
            </h1>
            <p className="text-white/70 text-lg">
              Find your tribe, join a team, or create your own. Collaboration is just a click away.
            </p>
          </div>
        </section>
        <section className="w-full max-w-2xl glassmorphism rounded-xl p-8 flex flex-col items-center">
          <div className="mb-6">
            <Button className="bg-neon-purple text-white cursor-not-allowed opacity-60" disabled>
              <Plus className="mr-2" /> Create New Team
            </Button>
            <p className="text-white/60 text-sm mt-3">Sign up to unlock team creation and invites.</p>
          </div>
          <div className="w-full flex flex-col items-center opacity-60">
            <p className="mb-2">🛠️ Team directory coming soon! <br /> Explore, join, or start a team here.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Teams;
