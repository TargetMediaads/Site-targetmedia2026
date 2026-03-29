import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { ArrowRight, Globe, Zap, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: TrendingUp, title: "Performance First", desc: "Every campaign is measured by real results. We work on CPI, CPA and CPL basis — you only pay for verified outcomes." },
  { icon: Globe, title: "Global Scale", desc: "We focus on Mobile — Android and iOS worldwide for over 150 countries. Worldwide quality traffic on a large scale." },
  { icon: Zap, title: "Speed & Optimization", desc: "We generate millions of clicks on a daily basis, with continuous optimization to maximize conversion rates." },
  { icon: Shield, title: "Risk-Free Methods", desc: "Our risk-free methods enable us to help you attain your goals easily — no wasted spend, no hidden fees." },
];

export default function About() {
  useSEO({
    title: "About Us",
    description: "Learn about Target Media Ads — a Mobile Performance Network delivering worldwide quality traffic. Risk-free CPI, CPA, CPL campaigns across 150+ countries on Android & iOS.",
    canonical: "/about",
  });
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">About Us</div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
              Performance Is Our<br /><span className="text-primary">Second Name.</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
              A Mobile Performance Network delivering worldwide quality traffic on a large scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Target Media Ads Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Who We Are</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Target Media Ads is a Mobile Performance Network that delivers worldwide quality traffic on a large scale. Those clicks convert to thousands of actions for our advertisers.
                </p>
                <p>
                  We work on risk-free methods: CPI, CPA or CPL basis. These methods enable us to help you attain your goals easily.
                </p>
                <p>
                  Target Media Ads focuses on Mobile — Android and iOS worldwide for over 150 countries. We generate millions of clicks on a daily basis, connecting top advertisers with quality publishers across the globe.
                </p>
                <p className="text-white font-semibold text-lg">
                  Performance Is Our Second Name!
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm">
                  Get In Touch <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Our Approach</div>
            <h2 className="text-4xl md:text-5xl font-black text-white">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-xl border border-border bg-background hover:border-primary/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <v.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Work Together?</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
              Join our network of advertisers and publishers worldwide.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-colors">
              Contact Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}