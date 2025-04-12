
import { Link } from 'react-router-dom';
import { Github, Heart, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-neon-purple"></div>
              <h1 className="text-xl font-bold neon-text">
                TeamUp<span className="gradient-text">Nexus</span>
              </h1>
            </Link>
            <p className="text-white/60 mb-6">
              The ultimate platform for finding your perfect hackathon teammates.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white/60 hover:text-white transition-colors">Find Teammates</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-white transition-colors">Discover Hackathons</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-white transition-colors">Messaging</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-white transition-colors">Profile Builder</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white/60 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            © 2025 TeamUp Nexus. All rights reserved.
          </p>
          <p className="text-white/60 flex items-center">
            Built with <Heart className="mx-1 h-4 w-4 text-neon-pink" /> for hackers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
