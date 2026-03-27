import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Memberships', path: '/memberships' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-red p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic">
            Alpha <span className="text-brand-red">J</span> Fitness
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-bold uppercase tracking-widest hover:text-brand-red transition-colors",
                location.pathname === link.path ? "text-brand-red" : "text-gray-300"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/memberships"
            className="bg-brand-red hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest transition-all red-glow-hover"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-bold uppercase tracking-widest",
                    location.pathname === link.path ? "text-brand-red" : "text-gray-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/memberships"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-red text-white text-center py-3 rounded-xl font-black uppercase tracking-widest"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
