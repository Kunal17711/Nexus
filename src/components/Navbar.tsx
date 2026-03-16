import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-brand-bg/80 backdrop-blur-md border-b border-brand-border py-4 shadow-lg'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center">
            <span className="text-white font-display font-bold text-xl leading-none">N</span>
          </div>
          <span className="text-white font-display font-bold text-xl tracking-tight">NexusAI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                location.pathname === link.href ? "text-white" : "text-brand-body hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="btn-shimmer text-white font-medium text-sm px-5 py-2.5 rounded-[10px] transition-all shadow-[0_4px_20px_rgba(232,89,60,0.4)] hover:shadow-[0_6px_24px_rgba(232,89,60,0.6)]"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-brand-bg border-b border-brand-border p-6 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-lg font-medium transition-colors",
                location.pathname === link.href ? "text-white" : "text-brand-body hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 bg-brand-accent text-white font-medium text-center py-3 rounded-[10px] transition-all"
          >
            Start Free Trial
          </Link>
        </motion.div>
      )}
    </header>
  );
}
