import { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LogoIcon from "./LogoIcon";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Advertisers", path: "/advertisers" },
  { label: "Publishers", path: "/publishers" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy-policy" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <LogoIcon size={36} />
            <div className="leading-none">
              <div className="text-white font-black text-2xl tracking-tight">Target Media</div>
              <div className="text-primary text-xs font-semibold tracking-widest uppercase">Ads</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://ttmma.affise.com/v2/sign/in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/98 border-b border-border px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3 text-sm font-medium border-b border-border/30 last:border-0 ${
                  location.pathname === link.path ? "text-primary" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://ttmma.affise.com/v2/sign/in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-md text-center"
            >
              Get Started
            </a>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <LogoIcon size={32} />
                <div className="leading-none">
                  <div className="text-white font-black text-sm tracking-tight">Target Media Ads</div>
                  <div className="text-primary text-[9px] font-semibold tracking-widest uppercase">Mobile Performance Network</div>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                A Mobile Performance Network delivering worldwide quality traffic on a large scale. Pay and get paid just on performance.
              </p>
              <div className="mt-4">
                <a href="mailto:Team@targetmedia-ads.com" className="text-primary text-sm hover:underline">
                  Team@targetmedia-ads.com
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Platform</h4>
              <ul className="space-y-2">
                <li><a href="https://ttmma.affise.com/v2/sign/in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">Register on Platform</a></li>
                <li><Link to="/advertisers" className="text-muted-foreground text-sm hover:text-primary transition-colors">CPI / CPA / CPL</Link></li>
                <li><Link to="/publishers" className="text-muted-foreground text-sm hover:text-primary transition-colors">Monetize Traffic</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Target Media Ads LTD. All rights reserved.</p>
            <Link to="/privacy-policy" className="text-muted-foreground text-sm hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}