
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Github, Mail, Check } from 'lucide-react';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-space-900 text-white flex items-center justify-center p-4">
      <div className="glassmorphism p-8 rounded-2xl max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <div className="h-8 w-8 rounded-full bg-neon-purple animate-pulse-glow"></div>
            <h1 className="text-xl font-bold neon-text">
              TeamUp<span className="gradient-text">Nexus</span>
            </h1>
          </Link>
          <h2 className="text-2xl font-bold mb-2">Create an Account</h2>
          <p className="text-white/70">Join our community of hackers and innovators</p>
        </div>
        
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium text-white/80">First Name</label>
              <input
                id="firstName"
                type="text"
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                placeholder="John"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium text-white/80">Last Name</label>
              <input
                id="lastName"
                type="text"
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                placeholder="Doe"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
              placeholder="you@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-white/80">Password</label>
            <input
              id="password"
              type="password"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
              placeholder="••••••••"
            />
            <ul className="mt-2 space-y-1 text-xs text-white/50">
              <li className="flex items-center">
                <Check className="h-3 w-3 mr-1 text-green-400" /> At least 8 characters
              </li>
              <li className="flex items-center">
                <Check className="h-3 w-3 mr-1 text-green-400" /> At least one number
              </li>
              <li className="flex items-center">
                <Check className="h-3 w-3 mr-1 text-green-400" /> At least one special character
              </li>
            </ul>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 rounded border-white/20 bg-white/10 text-neon-purple focus:ring-neon-purple"
            />
            <label htmlFor="terms" className="text-sm text-white/70">
              I agree to the <a href="#" className="text-neon-purple hover:underline">Terms of Service</a> and <a href="#" className="text-neon-purple hover:underline">Privacy Policy</a>
            </label>
          </div>
          
          <Button className="w-full bg-neon-purple hover:bg-purple-600 text-white py-6">
            Create Account
          </Button>
        </form>
        
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-space-900 text-white/50">Or sign up with</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Mail className="mr-2 h-4 w-4" /> Google
          </Button>
        </div>
        
        <p className="text-center mt-8 text-white/70 text-sm">
          Already have an account?{' '}
          <Link to="/signin" className="text-neon-purple hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
