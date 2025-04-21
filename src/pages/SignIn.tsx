
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Github, Mail, Info } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Demo account logic - accept any credentials for demo purposes
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Signed in successfully",
        description: "Welcome back to TeamUp Nexus!",
        variant: "default",
      });
      navigate('/');
    }, 1500);
  };

  const handleDemoLogin = () => {
    setEmail('demo@example.com');
    setPassword('password');
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Signed in with demo account",
        description: "Welcome to TeamUp Nexus!",
        variant: "default",
      });
      navigate('/');
    }, 1500);
  };

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
          <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
          <p className="text-white/70">Sign in to continue your journey</p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSignIn}>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium text-white/80">Password</label>
              <a href="#" className="text-xs text-neon-purple hover:underline">Forgot password?</a>
            </div>
            <input
              id="password"
              type="password"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-purple"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <Button 
            className="w-full bg-neon-purple hover:bg-purple-600 text-white py-6"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
          
          <div className="text-center">
            <button
              type="button"
              onClick={handleDemoLogin}
              className="text-neon-purple hover:underline text-sm flex items-center justify-center gap-1 mx-auto"
            >
              <Info className="h-3 w-3" /> Use demo account
            </button>
          </div>
        </form>
        
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-space-900 text-white/50">Or continue with</span>
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
          Don't have an account?{' '}
          <Link to="/signup" className="text-neon-purple hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
