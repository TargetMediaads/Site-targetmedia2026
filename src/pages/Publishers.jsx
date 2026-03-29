import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { ArrowRight, CheckCircle, DollarSign, Globe, Smartphone, Zap } from "lucide-react";
import { motion } from "framer-motion";

const adFormats = [
  { icon: Smartphone, title: "Interstitials", desc: "Full-screen ads that deliver high engagement and strong conversion rates across mobile apps and sites." },
  { icon: Zap, title: "Native Ads", desc: "Seamlessly integrated ads that match your content style for better user experience and higher CTR." },
  { icon: Globe, title: "Video Ads", desc: "High-impact video placements across mobile inventory with top CPM rates worldwide." },
  { icon: DollarSign, title: "Performance Offers", desc: "Direct campaigns with exclusive top-converting offers — the best payouts in the industry." },
];

const traffic = [
  "Android Traffic", "iOS Traffic", "WAP / Mobile Web", "App Traffic",
  "150+ Countries", "Global Reach", "Direct Campaigns", "Top Payouts",
];

export default function Publishers() {
  useSEO({
    title: "Publishers — Monetize Your Mobile Traffic",
    description: "Monetize your Android, iOS and WAP traffic with top-paying exclusive offers worldwide. Target Media Ads offers publishers direct campaigns, top payouts, and global reach across 150+ countries.",
    canonical: "/publishers",
  });
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&q=80)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Publishers</div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
              Monetize Your Traffic.<br /><span className="text-primary">Top Payouts. Worldwide.</span>
            </h1>
            <p className="text-white/70 text-lg mb-10 max-w-xl leading-relaxed">
              Work with us and get paid for promoting the best converting exclusive offers. Top advertisers, top offers — the best rates in the industry.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all hover:gap-3">
              Start Earning <ArrowRight size={16} />
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
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Top Advertisers with Top Offers</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Target Media Ads offers a variety of direct campaigns, this allows us to offer our publishers better rates, diversity and far more variety.
                </p>
                <p>
                  Monetize your traffic with great offers worldwide! Android, iOS and WAP traffic worldwide can be monetized with our great offers on top payouts in the industry.
                </p>
                <p>
                  We work with publishers of all sizes — from independent app developers to large traffic networks. Our team is dedicated to maximizing your revenue.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {traffic.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full border border-border text-muted-foreground text-xs font-medium hover:border-primary/40 hover:text-white transition-colors">
                    {t}
                  </span>
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
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
                  alt="Publisher Monetization"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ad Formats */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Ad Formats</div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Multiple Ways to Earn</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Diverse ad formats to match your traffic type and maximize your revenue.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adFormats.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-xl border border-border bg-background hover:border-primary/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <f.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Work with us"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-white mb-6">Why Work With Us?</h2>
              <div className="space-y-4">
                {[
                  "Direct campaigns — better rates and more variety",
                  "Top advertisers with exclusive converting offers",
                  "Weekly/monthly payouts with flexible payment methods",
                  "Dedicated publisher support team",
                  "Real-time tracking and transparent reporting",
                  "Global reach — 150+ countries covered",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm">
                  Join Now <ArrowRight size={14} />
                </Link>
                <a href="http://ttmma.affise.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-white font-semibold rounded-md hover:border-primary/50 transition-colors text-sm">
                  Register on Platform
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}