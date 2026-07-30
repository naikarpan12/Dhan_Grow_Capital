import { motion } from "framer-motion";
import { WhatsappLogo, ArrowUpRight } from "@phosphor-icons/react";
import { BRAND, whatsappHref } from "@/lib/site";

const links = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Services", href: "#services" },
  { label: "Calculators", href: "#calculators" },
  { label: "Founder", href: "#founder" },
  { label: "Insights", href: "#insights" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl"
      style={{ background: "var(--glass)", borderBottom: "1px solid var(--border)" }}
      data-testid="site-navbar"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" data-testid="brand-logo" className="flex items-center gap-3 group">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          <span className="font-display text-2xl leading-none tracking-tight">
            {BRAND.short}
            <span className="text-terracotta">.</span>
          </span>
          <span className="overline hidden md:inline text-black/50">Capital</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" data-testid="nav-links">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="overline hover:text-terracotta transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="nav-whatsapp-cta"
          className="pill-btn dark group"
        >
          <WhatsappLogo size={16} weight="fill" />
          <span>Talk to us</span>
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.header>
  );
}
