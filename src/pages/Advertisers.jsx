import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { ArrowRight, CheckCircle, Target, TrendingUp, Users, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const pricingModels = [
  { code: "CPI", title: "Cost Per Installation", desc: "Pay only when users install your app. Perfect for mobile app growth campaigns with measurable ROI." },
  { code: "CPA", title: "Cost Per Action", desc: "Pay when users complete a specific action you define — registration, purchase, or any engagement goal." },
  { code: "CPL", title: "Cost Per Lead", desc: "Pay only for verified leads. Ideal for generating quality sign-ups and business inquiries at scale." },
  { code: "CPV", title: "Cost Per View", desc: "Pay for video ad views with guaranteed viewability. Drive brand awareness with measurable impact." },
];

const benefits = [
  "Risk-free performance-based pricing",
  "Global traffic across 150+ countries",
  "Android & iOS mobile campaigns",
  "Real-time reporting & optimization",
  "Diverse publisher network",
  "Fraud-free traffic guarantee",
  "Dedicated account management",
  "Flexible campaign customization",
];

export default function Advertisers() {
  useSEO({
    title: "Advertisers — Performance Mobile Advertising",
    description: "Get quality users and pay only on performance. Target Media Ads offers CPI, CPA, CPL & CPV campaigns for mobile advertisers. Risk-free user acquisition across 150+ countries.",
    canonical: "/advertisers",
  });
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl pt-24 md:pt-28"
          >
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Advertisers</div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
              Get Quality Users.<br /><span className="text-primary">Pay Only on Performance.</span>
            </h1>
            <p className="text-white/70 text-lg mb-10 max-w-xl leading-relaxed">
              Smart, risk-free solutions for user acquisition and mobile performance marketing. You're only charged once the required action is completed.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all hover:gap-3">
              Start Advertising <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Performance Promotion</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  In the fast growing mobile marketplace, Target Media Ads offers smart, risk-free solutions for user acquisition and mobile performance marketing.
                </p>
                <p>
                  Our pricing model is based on measurable actions as you define them, so that you're only charged once the required install, action or engagement level is completed by the user — you're only paying for the users you want.
                </p>
                <p>
                  Our diverse publishers allow us to deliver global traffic of every kind, at maximal optimisation.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={14} className="text-primary flex-shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80"
                  alt="Mobile Advertising"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Pricing Models</div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Choose How You Pay</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Flexible pricing models designed so you only pay for real, measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingModels.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-xl border border-border bg-background hover:border-primary/50 transition-colors group"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black tracking-wider mb-4">
                  {m.code}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{m.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Scale Your Campaigns?</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
              Contact us today and let our team design the perfect performance campaign for your goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-colors">
                Contact Us <ArrowRight size={16} />
              </Link>
              <a href="http://ttmma.affise.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-border text-white font-bold rounded-md hover:border-primary/50 transition-colors">
                Register on Platform
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}