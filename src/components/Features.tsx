import { motion } from 'motion/react';
import { Bot, LineChart, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export function Features() {
  const [activeTab, setActiveTab] = useState(0);

  const painPoints = [
    {
      icon: <Bot size={24} className="text-brand-pink" />,
      title: "Manual Outreach is Dead",
      desc: "You're spending 15+ hours a week writing emails that get a 1% reply rate.",
      bg: "bg-brand-pink/10"
    },
    {
      icon: <LineChart size={24} className="text-brand-cyan" />,
      title: "Leads Slip Through Cracks",
      desc: "Following up 7 times is impossible when you're managing 500 prospects.",
      bg: "bg-brand-cyan/10"
    },
    {
      icon: <Zap size={24} className="text-brand-amber" />,
      title: "SDRs are Expensive",
      desc: "Hiring, training, and managing a sales rep costs $80k+ before they book a single meeting.",
      bg: "bg-brand-amber/10"
    }
  ];

  const features = [
    {
      icon: <Bot size={32} className="text-brand-pink" />,
      title: "Automate Personalization",
      desc: "Our AI researches your prospect and writes hyper-personalized emails that actually get replies.",
      hoverColor: "hover:border-brand-pink/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]"
    },
    {
      icon: <Zap size={32} className="text-brand-amber" />,
      title: "Track Every Interaction",
      desc: "Know exactly when a prospect opens, clicks, or replies—and trigger the perfect follow-up.",
      hoverColor: "hover:border-brand-amber/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
    },
    {
      icon: <LineChart size={32} className="text-brand-cyan" />,
      title: "Close More Deals",
      desc: "Stop prospecting and start selling. NexusAI books meetings directly on your calendar.",
      hoverColor: "hover:border-brand-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
    }
  ];

  const steps = [
    { num: "01", title: "Connect", desc: "Sync your email and calendar in 2 clicks.", color: "border-brand-pink", text: "group-hover:text-brand-pink" },
    { num: "02", title: "Automate", desc: "Upload leads and let AI write the campaigns.", color: "border-brand-accent", text: "group-hover:text-brand-accent" },
    { num: "03", title: "Convert", desc: "Wake up to a calendar full of qualified meetings.", color: "border-brand-cyan", text: "group-hover:text-brand-cyan" }
  ];

  const tabs = [
    { id: 0, label: "AI Personalization", content: "Watch the AI research a prospect's LinkedIn and craft a unique email in seconds.", color: "text-brand-pink", bg: "bg-brand-pink/10", border: "border-brand-pink/20" },
    { id: 1, label: "Smart Follow-ups", content: "Set up multi-channel sequences that adapt based on prospect behavior.", color: "text-brand-amber", bg: "bg-brand-amber/10", border: "border-brand-amber/20" },
    { id: 2, label: "Analytics Dashboard", content: "Track open rates, reply rates, and meetings booked in real-time.", color: "text-brand-cyan", bg: "bg-brand-cyan/10", border: "border-brand-cyan/20" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [tabs.length]);

  return (
    <section id="features" className="py-32 bg-brand-bg relative">
      {/* Section A: Problem Agitation */}
      <div className="max-w-[1180px] mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-6">You're leaving money on the table. Here's why.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-brand-surface border border-brand-border rounded-2xl p-8 flex flex-col gap-4 relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className={`w-12 h-12 rounded-xl ${point.bg} flex items-center justify-center relative z-10`}>
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-white relative z-10">{point.title}</h3>
              <p className="text-brand-body leading-relaxed relative z-10">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-accent flex items-center justify-center gap-2">
            There's a better way <ArrowRight size={20} className="text-brand-accent" />
          </p>
        </motion.div>
      </div>

      {/* Section B: Feature Grid */}
      <div className="max-w-[1180px] mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group bg-brand-surface border border-brand-border rounded-2xl p-8 transition-all duration-300 hover:bg-brand-surface-hover ${feature.hoverColor}`}
            >
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-brand-body leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section C: How It Works */}
      <div className="max-w-[1180px] mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-6">How it works</h2>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-12">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-brand-pink via-brand-accent to-brand-cyan opacity-30" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center z-10"
            >
              <div className="w-24 h-24 rounded-full bg-brand-bg border-2 border-brand-border flex items-center justify-center mb-6 relative group">
                <span className={`text-4xl font-display font-bold text-brand-body/20 transition-colors ${step.text}`}>{step.num}</span>
                <div className={`absolute inset-0 rounded-full border-2 ${step.color} scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 shadow-[0_0_20px_currentColor]`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-brand-body leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section D: Product Demo */}
      <div className="max-w-[1180px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-brand-surface border border-brand-border rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* Tabs */}
          <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-brand-border p-8 flex flex-col gap-4 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-pink via-brand-accent to-brand-cyan" />
            <h3 className="text-2xl font-bold text-white mb-4">See NexusAI in action</h3>
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "text-left p-4 rounded-xl transition-all duration-250",
                  activeTab === i
                    ? `${tab.bg} border ${tab.border}`
                    : "hover:bg-brand-surface-hover border border-transparent"
                )}
              >
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 size={18} className={activeTab === i ? tab.color : "text-brand-body"} />
                  <span className={cn("font-medium", activeTab === i ? "text-white" : "text-brand-body")}>
                    {tab.label}
                  </span>
                </div>
                {activeTab === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-sm text-brand-body pl-7"
                  >
                    {tab.content}
                  </motion.p>
                )}
              </button>
            ))}
          </div>

          {/* Demo Area */}
          <div className="lg:w-2/3 p-8 bg-[#0A0A10] relative min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.1),_transparent_70%)]" />
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
              className="w-full h-full border border-brand-border rounded-xl bg-brand-bg p-6 flex flex-col gap-4 shadow-2xl relative z-10"
            >
              {/* Mockup Content based on active tab */}
              <div className="h-8 w-1/3 bg-brand-surface rounded mb-4" />
              <div className="flex-1 bg-brand-surface rounded border border-brand-border p-4 flex flex-col gap-3">
                <div className="h-4 w-3/4 bg-brand-body/20 rounded" />
                <div className="h-4 w-1/2 bg-brand-body/20 rounded" />
                <div className="h-4 w-5/6 bg-brand-body/20 rounded" />
                <div className="h-4 w-2/3 bg-brand-body/20 rounded mt-4" />
              </div>
              <div className={`h-12 w-full ${tabs[activeTab].bg} border ${tabs[activeTab].border} rounded flex items-center justify-center ${tabs[activeTab].color} font-medium mt-auto`}>
                {tabs[activeTab].label} Active
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
