import { useState } from "react";
import { base44 } from "@/api/base44Client";
import useSEO from "../hooks/useSEO";
import { Mail, ExternalLink, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  useSEO({
    title: "Contact Us",
    description: "Contact Target Media Ads — get in touch for advertiser and publisher collaborations. Email us at Team@targetmedia-ads.com or register directly on our performance platform.",
    canonical: "/contact",
  });
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "advertiser", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await base44.entities.ContactSubmission.create({
        name: form.name,
        email: form.email,
        company: form.company,
        type: form.type,
        message: form.message,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("There was an error sending your message. Please make sure your server environment variables are configured correctly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Contact</div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
              Let's Work<br /><span className="text-primary">Together.</span>
            </h1>
            <p className="text-white/60 text-xl max-w-xl leading-relaxed">
              Contact us with any questions — send us an email and you will be contacted ASAP.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-black text-white mb-6">Get In Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Advertisers and Publishers — let us know how we can collaborate together and one of our team will contact you as soon as possible.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">Email Us</div>
                    <a href="mailto:Team@targetmedia-ads.com" className="text-primary text-sm hover:underline">
                      Team@targetmedia-ads.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                <div className="text-primary font-bold text-sm mb-2">Quick Registration</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Ready to get started? Register directly on our performance platform to access campaigns immediately.
                </p>
                <a
                  href="http://ttmma.affise.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
                >
                  Register Now <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-3"
            >
              {submitted ? (
                <div className="h-full flex items-center justify-center py-20">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={32} className="text-primary" />
                    </div>
                    <h3 className="text-white font-black text-2xl mb-3">Message Sent!</h3>
                    <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none text-sm transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none text-sm transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">Company Name</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none text-sm transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">I Am A *</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white focus:border-primary focus:outline-none text-sm transition-colors"
                    >
                      <option value="advertiser">Advertiser</option>
                      <option value="publisher">Publisher</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none text-sm transition-colors resize-none"
                      placeholder="Tell us about your project or how we can collaborate..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}