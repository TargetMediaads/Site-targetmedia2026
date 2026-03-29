import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { ArrowRight, Target, TrendingUp, Globe, Shield, Zap, BarChart3, Smartphone, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Countries Worldwide" },
  { value: "Millions", label: "Daily Clicks" },
  { value: "3", label: "Pricing Models" },
  { value: "100%", label: "Performance Based" },
];

const features = [
  { icon: Smartphone, title: "Mobile First", desc: "Android & iOS campaigns worldwide. Reach users on the devices they use most." },
  { icon: Target, title: "Precise Targeting", desc: "Advanced targeting by geo, device, OS, and user behavior for maximum conversion." },
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Full transparency with live reporting dashboards and performance tracking." },
  { icon: Shield, title: "Fraud Prevention", desc: "Cutting-edge fraud detection ensures clean, quality traffic every time." },
  { icon: TrendingUp, title: "Performance Models", desc: "CPI, CPA, CPL & CPV — only pay for measurable results you define." },
  { icon: Globe, title: "Global Reach", desc: "Access to worldwide publisher networks covering 150+ countries." },
];

const adFormats = ["Performance", "Mobile", "Personalize", "Optimize", "Monetize", "Targeting", "Native Ads", "Interstitials", "Video Ads", "Traffic"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

export default function Home() {
  useSEO({
    title: "Mobile Performance Network",
    description: "Target Media Ads is a Mobile Performance Network delivering worldwide quality traffic at scale. CPI, CPA, CPL campaigns for advertisers and publishers across 150+ countries. Pay only on performance.",
    canonical: "/",
  });
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl pt-24 md:pt-28">
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Mobile Performance Network
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6">
              Set Your<br />
              <span className="text-primary">Target.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Pay and get paid just on performance. A global mobile advertising network delivering quality traffic at scale — for advertisers and publishers alike.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Link
                to="/advertisers"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all hover:gap-3"
              >
                Advertise <ArrowRight size={16} />
              </Link>
              <Link
                to="/publishers"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:border-white/60 transition-colors"
              >
                Monetize
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-primary py-4 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...adFormats, ...adFormats].map((item, i) => (
            <span key={i} className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
              {item}
            </span>
          ))}
        </div>
      </div>


      {/* Performance Network Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Performance Based Network</div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Targeted Solutions for Advertisers & Publishers
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Target Media Ads is a Mobile Performance Network that delivers worldwide quality traffic on a large scale. Those clicks convert to thousands of actions for our advertisers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We work on risk-free methods: CPI, CPA or CPL basis. These methods enable us to help you attain your goals easily. We focus on Mobile — Android and iOS worldwide for over 150 countries.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/advertisers" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm">
                  For Advertisers <ArrowRight size={14} />
                </Link>
                <Link to="/publishers" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-white font-semibold rounded-md hover:border-primary/50 transition-colors text-sm">
                  For Publishers
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                  alt="Mobile Performance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-xl p-5 shadow-2xl">
                <div className="text-white font-black text-2xl">Millions</div>
                <div className="text-white/80 text-xs font-medium">Daily Clicks Generated</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-3">What We Offer</div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Performance Is Our Second Name</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-6 rounded-xl border border-border bg-background hover:border-primary/40 transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertisers CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Advertisers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-white text-xs font-bold">Live Campaigns</span>
                </div>
                <div className="text-muted-foreground text-xs">CPI · CPA · CPL · CPV</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">For Advertisers</div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Get Quality Users.<br />Pay Only on Performance.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                In the fast growing mobile marketplace, Target Media Ads offers smart, risk-free solutions for user acquisition and mobile performance marketing. Our pricing model is based on measurable actions — you're only charged once the required install, action or engagement is completed.
              </p>
              <Link to="/advertisers" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm">
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publishers CTA */}
      <section className="py-24 md:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">For Publishers</div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Monetize Your Traffic.<br />Top Payouts. Worldwide.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Target Media Ads offers a variety of direct campaigns, allowing us to give publishers better rates, diversity, and far more variety. Android, iOS and WAP traffic worldwide — monetized with our great offers and top payouts in the industry.
              </p>
              <Link to="/publishers" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm">
                Start Earning <ArrowRight size={14} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
                  alt="Publishers"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Ready to Scale?</div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">We Can Make It Happen</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
              We generate millions of clicks on a daily basis. Join our network and experience performance-driven results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-colors">
                Contact Us <ArrowRight size={16} />
              </Link>
              <a href="https://ttmma.affise.com/v2/sign/in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-border text-white font-bold rounded-md hover:border-primary/50 transition-colors">
                Register on Platform
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}