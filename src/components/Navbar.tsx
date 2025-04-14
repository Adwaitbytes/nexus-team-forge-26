
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="glassmorphism fixed top-0 w-full z-50 px-4 md:px-8 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-neon-purple animate-pulse-glow"></div>
          <h1 className="text-xl font-bold neon-text">
            TeamUp<span className="gradient-text">Nexus</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hover:bg-white/10 text-white" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button className="bg-neon-purple hover:bg-purple-600 text-white" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="glassmorphism md:hidden absolute top-full left-0 right-0 p-4 flex flex-col gap-4">
          <NavLinks mobile />
          <div className="flex flex-col gap-2">
            <Button variant="ghost" className="hover:bg-white/10 text-white w-full" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button className="bg-neon-purple hover:bg-purple-600 text-white w-full" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks: React.FC<{ mobile?: boolean }> = ({ mobile = false }) => {
  const links = [
    { name: 'Discover', path: '/discover' },
    { name: 'Teams', path: '/teams' },
    { name: 'Hackathons', path: '/hackathons' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className={`${mobile ? 'flex flex-col gap-2' : 'flex items-center gap-6'}`}>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-neon-purple hover:after:w-full after:transition-all ${
            mobile ? 'py-2' : ''
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
