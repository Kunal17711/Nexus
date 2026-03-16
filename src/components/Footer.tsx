import { motion } from 'motion/react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-pink to-brand-accent flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)] group-hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] transition-shadow">
                <span className="text-white font-display font-bold text-xl leading-none">N</span>
              </div>
              <span className="text-white font-display font-bold text-xl tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-pink group-hover:to-brand-accent transition-all">NexusAI</span>
            </Link>
            <p className="text-brand-body text-sm leading-relaxed max-w-xs">
              Automate your outbound sales with AI agents that personalize, send, and follow up on emails—so you can focus on closing deals.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="text-brand-body hover:text-brand-cyan transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-brand-body hover:text-brand-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-brand-body hover:text-brand-pink transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Product</h4>
            <Link to="/features" className="text-sm text-brand-body hover:text-brand-pink transition-colors">Features</Link>
            <Link to="/pricing" className="text-sm text-brand-body hover:text-brand-pink transition-colors">Pricing</Link>
            <Link to="/about" className="text-sm text-brand-body hover:text-brand-pink transition-colors">About Us</Link>
            <Link to="/faq" className="text-sm text-brand-body hover:text-brand-pink transition-colors">FAQ</Link>
            <Link to="/contact" className="text-sm text-brand-body hover:text-brand-pink transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Resources</h4>
            <a href="#" className="text-sm text-brand-body hover:text-brand-accent transition-colors">Blog</a>
            <a href="#" className="text-sm text-brand-body hover:text-brand-accent transition-colors">Help Center</a>
            <a href="#" className="text-sm text-brand-body hover:text-brand-accent transition-colors">API Documentation</a>
            <a href="#" className="text-sm text-brand-body hover:text-brand-accent transition-colors">Community</a>
            <a href="#" className="text-sm text-brand-body hover:text-brand-accent transition-colors">Sales Templates</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Legal</h4>
            <a href="#" className="text-sm text-brand-body hover:text-brand-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-brand-body hover:text-brand-cyan transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-brand-body hover:text-brand-cyan transition-colors">Cookie Policy</a>
            <a href="#" className="text-sm text-brand-body hover:text-brand-cyan transition-colors">Security</a>
            <a href="#" className="text-sm text-brand-body hover:text-brand-cyan transition-colors">DPA</a>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-body">
            © {new Date().getFullYear()} NexusAI Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-emerald shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span className="text-sm text-brand-body">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
