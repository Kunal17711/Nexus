import { motion } from 'motion/react';
import { Target, Heart, Zap, Users, Linkedin } from 'lucide-react';
import { cn } from '../lib/utils';

export function About() {
  const values = [
    { icon: <Target size={24} />, title: "Outcome Obsessed", desc: "We don't build features. We build systems that generate pipeline.", color: "text-brand-pink", bg: "bg-brand-pink/10" },
    { icon: <Heart size={24} />, title: "Empathy First", desc: "We understand the grind of sales because we lived it for a decade.", color: "text-brand-cyan", bg: "bg-brand-cyan/10" },
    { icon: <Zap size={24} />, title: "Speed is a Feature", desc: "If it takes more than 5 minutes to set up, we redesign it.", color: "text-brand-accent", bg: "bg-brand-accent/10" },
    { icon: <Users size={24} />, title: "Customer Led", desc: "Our roadmap is dictated by the teams using NexusAI every day.", color: "text-brand-emerald", bg: "bg-brand-emerald/10" }
  ];

  const team = [
    { name: "Alex Mercer", title: "CEO & Co-founder", image: "https://i.pravatar.cc/300?u=alex", color: "from-brand-pink/80" },
    { name: "Sarah Chen", title: "CTO & Co-founder", image: "https://i.pravatar.cc/300?u=sarah2", color: "from-brand-cyan/80" },
    { name: "Marcus Johnson", title: "Head of AI", image: "https://i.pravatar.cc/300?u=marcus", color: "from-brand-accent/80" },
    { name: "Elena Rostova", title: "VP Customer Success", image: "https://i.pravatar.cc/300?u=elena2", color: "from-brand-emerald/80" }
  ];

  return (
    <section id="about" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        {/* Founder Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-3xl overflow-hidden border border-brand-border group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-pink/20 to-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop"
              alt="Founders"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-brand-bg/20 to-transparent z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold">We built the tool we wished we had.</h2>
            <p className="text-lg text-brand-body leading-relaxed">
              In 2022, we were running a B2B agency. We spent 60% of our week writing personalized emails, tracking follow-ups in messy spreadsheets, and praying for replies. It was soul-crushing.
            </p>
            <p className="text-lg text-brand-body leading-relaxed">
              We realized the problem wasn't the outreach—it was the manual execution. So we built NexusAI to automate the busywork while keeping the human touch.
            </p>
            <div className="mt-8 p-8 bg-brand-surface border border-brand-border rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/10 via-brand-accent/10 to-brand-cyan/10" />
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-pink to-brand-cyan" />
              <p className="text-2xl font-display font-bold text-white leading-snug relative z-10">
                "Our mission is to give every sales professional 15 hours of their week back."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-center mb-16">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-brand-surface border border-brand-border rounded-2xl p-8 flex flex-col gap-4 hover:border-brand-body/30 transition-colors group"
              >
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-transform group-hover:scale-110", value.bg, value.color)}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{value.title}</h4>
                <p className="text-brand-body leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-center mb-16">Meet the Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-brand-border"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className={cn("absolute inset-0 bg-gradient-to-t via-brand-bg/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90", member.color)} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0 z-10">
                  <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-brand-body font-medium mb-4 group-hover:text-white transition-colors">{member.title}</p>
                  <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100 duration-300">
                    <Linkedin size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Press Section */}
        <div className="border-t border-brand-border pt-32">
          <p className="text-center text-sm font-medium text-brand-body uppercase tracking-wider mb-12">As Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="font-display font-bold text-2xl tracking-tighter hover:text-brand-pink transition-colors cursor-default">TechCrunch</div>
            <div className="font-display font-bold text-2xl tracking-tighter hover:text-brand-cyan transition-colors cursor-default">Forbes</div>
            <div className="font-display font-bold text-2xl tracking-tighter hover:text-brand-accent transition-colors cursor-default">Wired</div>
            <div className="font-display font-bold text-2xl tracking-tighter hover:text-brand-emerald transition-colors cursor-default">FastCompany</div>
          </div>
        </div>
      </div>
    </section>
  );
}
