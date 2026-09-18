import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, WhatsappLogo, DownloadSimple } from "@phosphor-icons/react";
import { whatsappHref, BRAND } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1];

const Line = ({ children, delay = 0, className = "" }) => (
  <span className={`reveal-line ${className}`}>
    <motion.span
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.1, ease, delay }}
    >
      {children}
    </motion.span>
  </span>
);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1.06, 1.18]);
  const opacityImg = useTransform(scrollYProgress, [0, 0.8], [0.55, 0.25]);

  return (
    <section
      ref={ref}
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100svh] pt-24 md:pt-28 overflow-hidden"
    >
      {/* Parallax abstract background */}
      <motion.div
        style={{ y: yImg, scale: scaleImg, opacity: opacityImg }}
        className="absolute inset-0 -z-10"
        aria-hidden
      >
        <img
          src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyYWwlMjBsaW5lc3xlbnwwfHx8fDE3ODU0Mjg2OTZ8MA&ixlib=rb-4.1.0&q=85"
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(244,241,234,0.85) 0%, rgba(244,241,234,0.55) 40%, rgba(244,241,234,0.95) 100%)",
          }}
        />
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-6 md:pt-10">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-2">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease }}
              className="overline text-black/60"
            >
              Est. 2025 · Surat, Gujarat
            </motion.p>
          </div>
          <div className="col-span-12 md:col-span-10 flex md:justify-end">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease }}
              className="overline text-black/60"
            >
              A boutique mutual&nbsp;fund distributor · SEBI-registered
            </motion.p>
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          <h1
            data-testid="hero-headline"
            className="font-display text-[15vw] md:text-[11.5vw] lg:text-[10.5rem] leading-[0.92] tracking-[-0.03em]"
          >
            <Line delay={0.35}>
              <span className="italic font-light">Wealth,</span>
            </Line>
            <Line delay={0.5}>
              <span className="font-light">nurtured</span>
            </Line>
            <Line delay={0.65}>
              <span className="font-light">with </span>
              <span className="text-terracotta italic">discipline.</span>
            </Line>
          </h1>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.9, ease }}
              className="font-body text-base md:text-lg leading-relaxed text-black/75 max-w-md"
            >
              DhanGrow Capital is a research-led mutual fund practice for families
              who value patience over prediction. We build quiet, disciplined
              portfolios — one goal, one instrument at a time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.9, ease }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn accent"
                data-testid="hero-primary-cta"
              >
                <WhatsappLogo size={16} weight="fill" />
                Begin the conversation
              </a>
              <a href="#calculators" className="pill-btn" data-testid="hero-secondary-cta">
                Try the calculators
              </a>
              <a
                href={BRAND.brochure}
                download="DhanGrow-Capital-Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn"
                data-testid="hero-brochure-cta"
              >
                <DownloadSimple size={14} weight="bold" />
                Download brochure
              </a>
            </motion.div>
          </div>

          <div className="hidden md:block md:col-span-2" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.9, ease }}
            className="col-span-12 md:col-span-5"
            data-testid="hero-stats"
          >
            <div className="grid grid-cols-3 border-t border-b border-ink divide-x divide-black/15">
              {[
                { k: "AUM", v: "₹1Cr+" },
                { k: "Families", v: "25+" },
                { k: "Since", v: "2025" },
              ].map((s) => (
                <div key={s.k} className="px-4 py-6">
                  <div className="overline text-black/50">{s.k}</div>
                  <div className="mt-2 font-mono-num text-2xl">{s.v}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 overline text-black/50">
              Mutual fund investments are subject to market risks.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 md:mt-24 flex items-center gap-3 text-black/60"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="inline-flex"
          >
            <ArrowDown size={18} />
          </motion.span>
          <span className="overline">Scroll · Read the manifesto</span>
        </motion.div>
      </div>
    </section>
  );
}
