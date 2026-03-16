import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export function FAQ() {
  const categories = [
    {
      title: "Getting Started",
      color: "text-brand-pink",
      faqs: [
        { q: "How long does it take to set up?", a: "Less than 5 minutes. You connect your email, upload a CSV of leads, and our AI starts drafting campaigns immediately. No coding or complex workflows required." },
        { q: "Do I need to write my own templates?", a: "No. NexusAI analyzes your product and target audience to generate high-converting templates automatically. You can edit them, but 80% of our users use the AI drafts as-is." },
        { q: "Can I use my existing email provider?", a: "Yes. We integrate directly with Google Workspace, Microsoft 365, and any SMTP/IMAP provider." },
        { q: "What if I don't have leads?", a: "NexusAI includes a built-in B2B database of 250M+ verified contacts. You can search by industry, title, and company size directly within the platform." }
      ]
    },
    {
      title: "Pricing & Plans",
      color: "text-brand-accent",
      faqs: [
        { q: "Is there a free trial?", a: "Yes, we offer a 14-day free trial with full access to all Pro features. No credit card required to start." },
        { q: "What counts as an 'active contact'?", a: "An active contact is anyone currently enrolled in an active sequence. Once a sequence finishes or they reply, they no longer count toward your limit." },
        { q: "Can I add team members?", a: "Yes. Pro plans include 3 seats, and Enterprise plans include unlimited seats. Additional seats on Pro are $29/mo." },
        { q: "Do you offer refunds?", a: "Yes. We have a strict 30-day money-back guarantee. If you don't see a positive ROI in your first month, email support and we'll refund you immediately." }
      ]
    },
    {
      title: "Security & Privacy",
      color: "text-brand-cyan",
      faqs: [
        { q: "Is my data secure?", a: "Absolutely. We use bank-level AES-256 encryption for all data at rest and TLS 1.3 for data in transit. We are SOC2 Type II compliant." },
        { q: "Do you read my emails?", a: "No. Our AI only processes emails related to active campaigns to detect replies and intent. We never scan your personal inbox." },
        { q: "Are you GDPR compliant?", a: "Yes. We fully comply with GDPR, CCPA, and CAN-SPAM regulations. We provide tools to easily handle data deletion requests and opt-outs." }
      ]
    },
    {
      title: "Integration & Technical",
      color: "text-brand-emerald",
      faqs: [
        { q: "Does it integrate with Salesforce/HubSpot?", a: "Yes. We have native, bi-directional sync with Salesforce, HubSpot, Pipedrive, and Close. Activities log automatically." },
        { q: "How do you prevent emails from going to spam?", a: "We use proprietary email warmup, spintax generation, and intelligent sending algorithms that mimic human behavior to ensure 99% deliverability." },
        { q: "Do you have an API?", a: "Yes. Enterprise customers get full access to our REST API and webhooks to build custom integrations." }
      ]
    }
  ];

  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <section id="faq" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-6">Frequently asked questions</h2>
          <p className="text-xl text-brand-body">Everything you need to know about the product and billing.</p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {categories.map((category, i) => (
            <div key={i}>
              <h3 className={cn("text-xl font-bold mb-6 uppercase tracking-wider text-sm", category.color)}>{category.title}</h3>
              <div className="flex flex-col gap-4">
                {category.faqs.map((faq, j) => {
                  const id = `${i}-${j}`;
                  const isOpen = openFaq === id;
                  return (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: j * 0.1 }}
                      className="border border-brand-border rounded-xl bg-brand-surface overflow-hidden hover:border-brand-body/30 transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : id)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none group hover:bg-brand-surface-hover transition-colors"
                      >
                        <span className="font-medium text-white pr-8">{faq.q}</span>
                        <span className="text-brand-body shrink-0 transition-transform duration-300">
                          {isOpen ? <Minus size={20} className={category.color} /> : <Plus size={20} className="group-hover:text-white transition-colors" />}
                        </span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
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
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
