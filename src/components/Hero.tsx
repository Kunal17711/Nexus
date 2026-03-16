import { motion } from 'motion/react';
import { Star, CheckCircle2, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,92,246,0.15),_transparent_50%)]" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-surface border border-brand-border mb-8 backdrop-blur-md"
          >
            <div className="flex gap-0.5 text-brand-amber">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
            </div>
            <span className="text-xs font-medium text-brand-body uppercase tracking-wider">
              Trusted by 10,000+ teams
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-bold text-white mb-6"
          >
            Book 3x More Meetings Without Hiring a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-accent to-brand-cyan">Single SDR</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-lg text-brand-body leading-[1.7] mb-10 max-w-lg"
          >
            NexusAI automates your outbound sales with AI agents that personalize, send, and follow up on emails—so you can focus on closing deals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="btn-shimmer text-white font-medium px-8 py-4 rounded-[10px] text-center flex items-center justify-center gap-2"
            >
              Start Free Trial — 14 Days
            </Link>
            <button className="text-white font-medium px-8 py-4 rounded-[10px] bg-brand-surface hover:bg-brand-surface-hover border border-brand-border transition-colors flex items-center justify-center gap-2 group backdrop-blur-sm">
              <PlayCircle size={20} className="text-brand-cyan group-hover:text-white transition-colors" />
              Watch 2-min Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-6 text-sm text-brand-body/80"
          >
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-brand-emerald" /> No credit card</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-brand-emerald" /> Setup in 5 minutes</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-brand-emerald" /> Cancel anytime</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Mockup Frame */}
          <div className="relative w-full aspect-[16/10] bg-[#0A0A10] rounded-2xl border border-brand-border shadow-[0_0_50px_rgba(139,92,246,0.2)] overflow-hidden animate-float">
            {/* Browser Chrome */}
            <div className="h-10 bg-[#12121A] border-b border-brand-border flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <div className="mx-auto h-5 w-1/2 bg-[#0A0A10] rounded-md border border-brand-border/50" />
            </div>
            {/* App Content Mockup */}
            <div className="p-6 h-full flex flex-col gap-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-brand-pink/5 pointer-events-none" />
              <div className="flex justify-between items-center relative z-10">
                <div className="h-6 w-32 bg-brand-surface rounded" />
                <div className="h-8 w-24 bg-brand-emerald/20 text-brand-emerald rounded flex items-center justify-center text-xs font-medium border border-brand-emerald/30">
                  +324% Meetings
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 relative z-10">
                {[
                  { color: 'bg-brand-accent/20', border: 'border-brand-accent/30' },
                  { color: 'bg-brand-pink/20', border: 'border-brand-pink/30' },
                  { color: 'bg-brand-cyan/20', border: 'border-brand-cyan/30' }
                ].map((style, i) => (
                  <div key={i} className={`h-24 ${style.color} rounded-lg border ${style.border} p-4 flex flex-col justify-between`}>
                    <div className="h-4 w-1/2 bg-white/40 rounded" />
                    <div className="h-8 w-3/4 bg-white/60 rounded" />
                  </div>
                ))}
              </div>
              <div className="flex-1 bg-brand-surface rounded-lg border border-brand-border p-4 flex flex-col gap-3 relative z-10 backdrop-blur-sm">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-12 w-full bg-brand-bg/50 rounded border border-brand-border flex items-center px-4 gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-accent to-brand-pink opacity-80" />
                    <div className="flex-1 h-4 bg-brand-body/20 rounded" />
                    <div className="w-16 h-4 bg-brand-emerald/30 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social Proof Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-brand-border bg-brand-bg/50 backdrop-blur-sm py-6">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-brand-body font-medium whitespace-nowrap">Teams at these companies use NexusAI</p>
          <div className="flex items-center justify-between w-full md:w-auto md:gap-12 opacity-50 grayscale">
            {/* Logos placeholders */}
            <div className="font-display font-bold text-xl tracking-tighter">ACME Corp</div>
            <div className="font-display font-bold text-xl tracking-tighter">Globex</div>
            <div className="font-display font-bold text-xl tracking-tighter">Soylent</div>
            <div className="font-display font-bold text-xl tracking-tighter hidden sm:block">Initech</div>
            <div className="font-display font-bold text-xl tracking-tighter hidden md:block">Umbrella</div>
          </div>
        </div>
      </div>
    </section>
  );
}
