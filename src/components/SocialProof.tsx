import { motion, useInView } from 'motion/react';
import { Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CountUp({ end, duration = 1.5, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function SocialProof() {
  const stats = [
    { label: "Customers", value: 12000, suffix: "+", color: "from-brand-pink to-brand-accent" },
    { label: "Average Rating", value: 4.9, suffix: "/5", color: "from-brand-accent to-brand-cyan" },
    { label: "Revenue Generated", value: 42, suffix: "M+", color: "from-brand-cyan to-brand-emerald" },
    { label: "Retention Rate", value: 97, suffix: "%", color: "from-brand-emerald to-brand-pink" }
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      title: "VP of Sales",
      company: "TechFlow",
      image: "https://i.pravatar.cc/150?u=sarah",
      quote: "Before NexusAI, our SDRs spent 60% of their time writing emails. Now, they spend 90% of their time on calls.",
      result: "Booked 45 meetings in week one.",
      color: "border-brand-pink/30 hover:border-brand-pink shadow-[0_0_30px_rgba(236,72,153,0)] hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]",
      iconColor: "text-brand-pink"
    },
    {
      name: "David Chen",
      title: "Founder",
      company: "GrowthStack",
      image: "https://i.pravatar.cc/150?u=david",
      quote: "I was skeptical about AI outreach, but the personalization is indistinguishable from human writing. It's incredible.",
      result: "3x increase in reply rates.",
      color: "border-brand-accent/30 hover:border-brand-accent shadow-[0_0_30px_rgba(232,89,60,0)] hover:shadow-[0_0_30px_rgba(232,89,60,0.2)]",
      iconColor: "text-brand-accent"
    },
    {
      name: "Elena Rodriguez",
      title: "Head of Growth",
      company: "ScaleUp Inc",
      image: "https://i.pravatar.cc/150?u=elena",
      quote: "We fired our lead gen agency and replaced them entirely with NexusAI. The ROI is absolutely ridiculous.",
      result: "Saved $120k/year in agency fees.",
      color: "border-brand-cyan/30 hover:border-brand-cyan shadow-[0_0_30px_rgba(6,182,212,0)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
      iconColor: "text-brand-cyan"
    }
  ];

  return (
    <section className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px]" />
      </div>

      {/* Stats Bar */}
      <div className="bg-brand-surface border-y border-brand-border py-16 mb-32 relative z-10">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-border/50">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4">
                <div className={`text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-brand-body uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-[1180px] mx-auto px-6 mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-6">Don't just take our word for it.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`bg-brand-surface border rounded-2xl p-8 flex flex-col transition-all duration-300 ${t.color}`}
            >
              <div className={`flex gap-1 mb-6 ${t.iconColor}`}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-white leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div className="bg-brand-bg border border-brand-border rounded-lg p-4 mb-6">
                <p className={`font-medium ${t.iconColor}`}>{t.result}</p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border border-brand-border" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-brand-body">{t.title}, {t.company}</p>
                </div>
                <div className="ml-auto">
                  <CheckCircle2 size={20} className={t.iconColor} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Case Study */}
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-brand-border bg-[#1A1A24] group"
        >
          {/* Parallax Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 via-transparent to-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 p-12 md:p-16 lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-surface border border-brand-border mb-8">
              <span className="text-xs font-medium text-brand-body uppercase tracking-wider">Case Study</span>
              <span className="w-1 h-1 rounded-full bg-brand-border" />
              <span className="text-xs font-medium text-white uppercase tracking-wider">B2B SaaS</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              How Acme Corp achieved a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-accent">400% increase</span> in qualified pipeline in 60 days
            </h3>

            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col gap-2">
                <span className="text-sm text-brand-body">Reply Rate</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-brand-body line-through opacity-50">1.2%</span>
                  <span className="text-3xl font-bold text-brand-pink">8.4%</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-brand-body">Meetings/Wk</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-brand-body line-through opacity-50">4</span>
                  <span className="text-3xl font-bold text-brand-accent">22</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-brand-body">CAC</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-brand-body line-through opacity-50">$850</span>
                  <span className="text-3xl font-bold text-brand-cyan">$210</span>
                </div>
              </div>
            </div>

            <Link to="/contact" className="inline-flex items-center gap-2 text-brand-accent font-medium hover:text-brand-pink transition-colors">
              Read the full case study <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Live Activity Ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-brand-border bg-brand-bg/80 backdrop-blur-md py-3 overflow-hidden flex z-20">
        <div className="flex whitespace-nowrap animate-ticker items-center gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-sm text-brand-body flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
                Sarah M. from Stripe just started a trial
              </span>
              <span className="text-sm text-brand-body flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                David L. from Shopify booked 3 meetings today
              </span>
              <span className="text-sm text-brand-body flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                Acme Corp upgraded to Enterprise
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
