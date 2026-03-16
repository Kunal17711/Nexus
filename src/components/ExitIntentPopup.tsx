import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download } from 'lucide-react';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [hasTriggered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-brand-surface border border-brand-border rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            {/* Colorful Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-pink/20 rounded-full blur-[50px]" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-cyan/20 rounded-full blur-[50px]" />
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-brand-body hover:text-white transition-colors p-2 rounded-full hover:bg-brand-surface-hover z-10"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col gap-6 text-center relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-pink/20 to-brand-accent/20 border border-brand-pink/30 flex items-center justify-center text-brand-pink mx-auto mb-2 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                <Download size={32} />
              </div>
              
              <h3 className="text-3xl font-bold text-white">Wait! Don't leave empty-handed.</h3>
              
              <p className="text-brand-body text-lg">
                Get our free playbook: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-accent font-medium">"10 Cold Email Templates That Generated $5M in Pipeline"</span>. Used by top 1% SDRs.
              </p>

              <form className="flex flex-col gap-4 mt-4" onSubmit={(e) => { e.preventDefault(); setIsVisible(false); }}>
                <input
                  type="email"
                  placeholder="Enter your work email"
                  required
                  className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-4 text-white placeholder:text-brand-body/50 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-pink via-brand-accent to-brand-cyan text-white font-bold py-4 rounded-xl transition-opacity hover:opacity-90 shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                >
                  Send Me The Playbook
                </button>
              </form>
              
              <p className="text-xs text-brand-body/60 mt-2">
                We respect your inbox. No spam, ever.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
