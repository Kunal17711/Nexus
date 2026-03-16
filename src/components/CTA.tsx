import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Clock, Calendar } from 'lucide-react';

export function CTA() {
  return (
    <section id="cta" className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-brand-surface),_transparent_50%)]" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-tight">
              Let's figure out if <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-accent to-brand-cyan">NexusAI</span> is right for you.
            </h2>
            
            <p className="text-xl text-brand-body">
              Book a 15-minute discovery call with our founding team. We'll audit your current outbound process and show you exactly how much time and money you could save.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <h3 className="font-bold text-white uppercase tracking-wider text-sm mb-2">What you'll walk away with:</h3>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-brand-pink shrink-0 mt-0.5" />
                <span className="text-brand-body">A custom AI outreach strategy tailored to your ICP.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-brand-accent shrink-0 mt-0.5" />
                <span className="text-brand-body">A live teardown of your current cold email templates.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-brand-body">A clear ROI projection based on your average deal size.</span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-brand-surface border border-brand-border rounded-2xl relative">
              <div className="absolute -top-3 left-6 bg-brand-bg px-2">
                <div className="flex gap-1 text-brand-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-white italic mb-4">"Best 15 minutes I've spent this year. We implemented their strategy the next day and closed $28k the following week."</p>
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?u=michael" alt="Michael T." className="w-10 h-10 rounded-full border border-brand-border" />
                <div>
                  <p className="font-bold text-sm text-white">Michael T.</p>
                  <p className="text-xs text-brand-body">Founder, GrowthOps</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-4 opacity-80">
              <div className="flex items-center gap-2 text-sm text-brand-body">
                <ShieldCheck size={16} className="text-brand-emerald" /> No pressure
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-body">
                <Clock size={16} className="text-brand-pink" /> 15 mins max
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-body">
                <Calendar size={16} className="text-brand-cyan" /> Cancel anytime
              </div>
            </div>
          </motion.div>

          {/* Right Column (Booking Widget Mockup) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-brand-pink to-brand-accent text-white text-xs font-bold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)] z-20 animate-bounce">
              Only 4 spots remaining this week
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-[0_0_50px_rgba(139,92,246,0.15)] relative z-10 min-h-[500px] flex flex-col border border-white/20">
              <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-brand-accent/20">
                  <img src="https://i.pravatar.cc/300?u=alex" alt="Alex" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-xl">Discovery Call</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1"><Clock size={14} className="text-brand-accent" /> 15 min</p>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col gap-4">
                <h4 className="text-gray-900 font-bold mb-2">Select a Date & Time</h4>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={i} className="text-center text-xs font-medium text-gray-400">{day}</div>
                  ))}
                  {[...Array(31)].map((_, i) => (
                    <button key={i} className="aspect-square rounded-full flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-brand-accent/10 hover:text-brand-accent transition-colors">
                      {i + 1}
                    </button>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <button className="w-full bg-gradient-to-r from-brand-pink to-brand-accent hover:opacity-90 text-white font-medium py-3 rounded-xl transition-all shadow-lg hover:shadow-xl">
                    Show Available Times
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Star({ size, fill, className }: { size: number, fill: string, className?: string, key?: number | string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}
