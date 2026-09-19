import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  CertificateIcon,
  GraduationCap,
  ShieldCheck,
  WhatsappLogo,
  ArrowUpRight,
  Buildings,
  DownloadSimple,
} from "@phosphor-icons/react";
import { whatsappHref, BRAND } from "@/lib/site";

function Counter({ to, prefix = "", suffix = "", decimals = 0, testid }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, to, mv]);
  return (
    <motion.span ref={ref} className="font-display text-6xl md:text-8xl leading-none" data-testid={testid}>
      {rounded}
    </motion.span>
  );
}

const creds = [
  { icon: CertificateIcon, label: "CFA Level II", note: "Cleared · CFA Institute" },
  { icon: GraduationCap, label: "PGDM Finance", note: "IMT Ghaziabad · 2024-26" },
  { icon: ShieldCheck, label: "NISM Series XV", note: "Research Analyst" },
  { icon: ShieldCheck, label: "NISM Series V-A", note: "Mutual Fund Distributor" },
  { icon: ShieldCheck, label: "NISM Series X-A", note: "Investment Advisor" },
  { icon: Buildings, label: "Prev. Gulf Islamic", note: "PE & IR Intern · Dubai" },
];

export default function FounderTrust() {
  return (
    <section
      id="founder"
      data-testid="founder-section"
      className="relative py-24 md:py-40 bg-forest text-[#f4f1ea] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-4">
            <p className="overline text-[#f4f1ea]/60">§ The Custodian</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9 }}
              className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em]"
            >
              Managed personally by<br />
              <span className="italic text-[#f4f1ea]/80">{BRAND.founder}.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-5 clipped-frame overflow-hidden bg-black"
          >
            <img
              src={BRAND.portrait}
              alt={`${BRAND.founder} — Founder, DhanGrow Capital`}
              className="w-full h-[560px] object-cover object-top"
              style={{ filter: "grayscale(0.15) contrast(1.03)" }}
            />
          </motion.div>

          <div className="col-span-12 md:col-span-7 md:pl-8">
            <p className="overline text-[#f4f1ea]/60 mb-4">Founder · AMFI-Registered MFD</p>
            <p className="font-body text-lg md:text-xl leading-relaxed text-[#f4f1ea]/85 max-w-xl">
              I built DhanGrow Capital to run mutual fund portfolios the way I&apos;d
              want mine to be run — quietly, in writing, and with a clear line of
              sight from every SIP to a specific life goal. No pressure calls.
              No product pushes. Just research, review and steady rebalancing.
            </p>
            <p className="mt-5 font-body text-base leading-relaxed text-[#f4f1ea]/70 max-w-xl">
              Prior to founding DhanGrow, I served institutional and HNI capital
              at <span className="italic">Gulf Islamic Investments, Dubai</span> —
              supporting private equity raises exceeding AED 100M and reporting
              IRR/MOIC to LPs. That same rigour comes home to every Indian
              family I now work with.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {creds.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.label}
                    className="border border-[#f4f1ea]/25 p-5"
                    data-testid={`credential-${c.label.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <Icon size={22} weight="duotone" />
                    <div className="mt-3 font-display text-xl leading-tight">{c.label}</div>
                    <div className="overline text-[#f4f1ea]/60 mt-1">{c.note}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 border-t border-[#f4f1ea]/20 pt-10 grid grid-cols-3 gap-6">
              <div>
                <Counter to={1} prefix="₹" suffix="Cr+" testid="counter-aum" />
                <div className="overline text-[#f4f1ea]/60 mt-3">Assets under advice</div>
              </div>
              <div>
                <Counter to={25} suffix="+" testid="counter-clients" />
                <div className="overline text-[#f4f1ea]/60 mt-3">Families served</div>
              </div>
              <div>
                <Counter to={6} suffix=" mo" testid="counter-tenure" />
                <div className="overline text-[#f4f1ea]/60 mt-3">& compounding</div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn accent"
                data-testid="founder-cta-whatsapp"
              >
                <WhatsappLogo size={16} weight="fill" />
                Book an introduction
                <ArrowUpRight size={14} />
              </a>
              <a
                href={BRAND.brochure}
                download="DhanGrow-Capital-Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn"
                style={{ borderColor: "#f4f1ea", color: "#f4f1ea" }}
                data-testid="founder-brochure-download"
              >
                <DownloadSimple size={14} weight="bold" />
                Download brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
