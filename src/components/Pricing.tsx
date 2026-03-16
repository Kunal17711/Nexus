import { motion, AnimatePresence } from 'motion/react';
import { Check, X, Shield } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      desc: "For solo founders and small teams starting outbound.",
      priceMonthly: 49,
      priceAnnual: 39,
      features: [
        "Up to 1,000 active contacts",
        "3 AI agent personas",
        "Basic email personalization",
        "Standard analytics dashboard",
        "Email support"
      ],
      cta: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Pro",
      desc: "For growing sales teams that need to scale outreach.",
      priceMonthly: 99,
      priceAnnual: 69,
      features: [
        "Up to 10,000 active contacts",
        "Unlimited AI agent personas",
        "Advanced hyper-personalization",
        "Multi-channel sequences (LinkedIn + Email)",
        "Priority 24/7 support",
        "Custom domain setup"
      ],
      cta: "Start Free Trial",
      highlighted: true,
      roi: "Pays for itself with just 1 extra meeting booked."
    },
    {
      name: "Enterprise",
      desc: "For revenue organizations requiring custom workflows.",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      features: [
        "Unlimited active contacts",
        "Dedicated success manager",
        "Custom AI model training",
        "SSO & advanced security",
        "API access & webhooks",
        "White-glove onboarding"
      ],
      cta: "Talk to Sales",
      highlighted: false
    }
  ];

  const faqs = [
    { q: "Can I change plans later?", a: "Yes, you can upgrade, downgrade, or cancel your plan at any time from your billing dashboard. Changes take effect immediately." },
    { q: "What happens after my trial?", a: "You'll be automatically downgraded to the free tier unless you choose a paid plan. We'll email you 3 days before your trial ends." },
    { q: "Do you offer refunds?", a: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied within your first 30 days, we'll refund your payment in full." },
    { q: "Is there a setup fee?", a: "No. All plans include self-serve onboarding. Enterprise plans include white-glove setup at no additional cost." },
    { q: "Can I pay annually?", a: "Yes, and you'll save 30% by choosing annual billing. You can toggle this option at checkout." },
    { q: "Do you have a non-profit discount?", a: "Yes, we offer a 50% discount for registered 501(c)(3) organizations. Contact support to apply." }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-32 bg-brand-bg relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-6">Simple, transparent pricing</h2>
          <p className="text-xl text-brand-body mb-10">Start free. Scale as you grow. Cancel anytime.</p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium transition-colors", !isAnnual ? "text-white" : "text-brand-body")}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 rounded-full bg-brand-surface border border-brand-border p-1 transition-colors hover:border-brand-accent/50"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 rounded-full bg-gradient-to-r from-brand-pink to-brand-accent shadow-sm"
                style={{ marginLeft: isAnnual ? "24px" : "0px" }}
              />
            </button>
            <span className={cn("text-sm font-medium transition-colors flex items-center gap-2", isAnnual ? "text-white" : "text-brand-body")}>
              Annual
              <AnimatePresence>
                {isAnnual && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="px-2 py-0.5 rounded-full bg-brand-emerald/20 text-brand-emerald text-xs font-bold"
                  >
                    Save 30%
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </div>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-32 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={cn(
                "relative bg-brand-surface rounded-3xl p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl",
                plan.highlighted
                  ? "md:-my-4 md:py-12 z-10"
                  : "border border-brand-border"
              )}
            >
              {plan.highlighted && (
                <>
                  <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-b from-brand-pink via-brand-accent to-brand-cyan -z-10" />
                  <div className="absolute inset-0 rounded-3xl bg-brand-surface -z-10" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-brand-pink to-brand-accent text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                    Most Popular
                  </div>
                </>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-brand-body mb-6 min-h-[40px]">{plan.desc}</p>

              <div className="mb-8 flex items-baseline gap-2">
                {typeof plan.priceMonthly === 'number' ? (
                  <>
                    <span className="text-5xl font-display font-bold text-white">
                      ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    <span className="text-brand-body">/mo</span>
                  </>
                ) : (
                  <span className="text-5xl font-display font-bold text-white">Custom</span>
                )}
              </div>

              <Link
                to="/contact"
                className={cn(
                  "w-full py-4 rounded-xl font-medium text-center transition-all mb-8",
                  plan.highlighted
                    ? "btn-shimmer text-white shadow-[0_4px_20px_rgba(139,92,246,0.4)]"
                    : "bg-brand-surface-hover text-white border border-brand-border hover:border-brand-body/30"
                )}
              >
                {plan.cta}
              </Link>

              <div className="flex flex-col gap-4 flex-1">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check size={18} className={plan.highlighted ? "text-brand-pink shrink-0 mt-0.5" : "text-brand-emerald shrink-0 mt-0.5"} />
                    <span className="text-sm text-brand-body">{feature}</span>
                  </div>
                ))}
              </div>

              {plan.roi && (
                <div className="mt-8 pt-6 border-t border-brand-border">
                  <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-accent text-center">{plan.roi}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table (Simplified for brevity, but structured) */}
        <div className="hidden md:block mb-32">
          <h3 className="text-2xl font-bold text-center mb-12">Compare all features</h3>
          <div className="bg-brand-surface border border-brand-border rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)]">
            <div className="grid grid-cols-4 border-b border-brand-border bg-brand-surface-hover p-6">
              <div className="font-bold text-white">Features</div>
              <div className="font-bold text-center text-white">Starter</div>
              <div className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-accent">Pro</div>
              <div className="font-bold text-center text-white">Enterprise</div>
            </div>
            {[
              { name: "Active Contacts", s: "1,000", p: "10,000", e: "Unlimited" },
              { name: "AI Personas", s: "3", p: "Unlimited", e: "Unlimited" },
              { name: "Multi-channel Sequences", s: false, p: true, e: true },
              { name: "Custom Domain", s: false, p: true, e: true },
              { name: "API Access", s: false, p: false, e: true },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 border-b border-brand-border p-6 last:border-0 hover:bg-brand-surface-hover/50 transition-colors">
                <div className="text-brand-body">{row.name}</div>
                <div className="text-center text-white flex justify-center">{typeof row.s === 'boolean' ? (row.s ? <Check size={20} className="text-brand-emerald" /> : <X size={20} className="text-brand-body/30" />) : row.s}</div>
                <div className="text-center text-white flex justify-center">{typeof row.p === 'boolean' ? (row.p ? <Check size={20} className="text-brand-pink" /> : <X size={20} className="text-brand-body/30" />) : row.p}</div>
                <div className="text-center text-white flex justify-center">{typeof row.e === 'boolean' ? (row.e ? <Check size={20} className="text-brand-cyan" /> : <X size={20} className="text-brand-body/30" />) : row.e}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-32">
          <h3 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h3>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-brand-border rounded-xl bg-brand-surface overflow-hidden hover:border-brand-accent/30 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className="font-medium text-white">{faq.q}</span>
                  <span className={cn("text-brand-body transition-transform duration-300", openFaq === i ? "rotate-45 text-brand-pink" : "")}>
                    <X size={20} className={openFaq === i ? "" : "rotate-45"} />
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-brand-body leading-relaxed border-t border-brand-border/50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="max-w-3xl mx-auto bg-brand-surface border border-brand-border rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 justify-center text-center sm:text-left relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald/5 to-transparent pointer-events-none" />
          <div className="w-16 h-16 rounded-full bg-brand-emerald/10 flex items-center justify-center shrink-0 relative z-10">
            <Shield size={32} className="text-brand-emerald" />
          </div>
          <div className="relative z-10">
            <h4 className="text-xl font-bold text-white mb-2">30-Day Money-Back Guarantee</h4>
            <p className="text-brand-body">Try NexusAI risk-free. If you don't book more meetings in your first 30 days, we'll refund your payment in full. No questions asked.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
