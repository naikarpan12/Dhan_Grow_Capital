import { motion } from "framer-motion";
import {
  ChartLineUp,
  Coins,
  Receipt,
  Armchair,
  GraduationCap,
  MagnifyingGlass,
  ArrowUpRight,
} from "@phosphor-icons/react";

const services = [
  {
    icon: ChartLineUp,
    tag: "01",
    title: "Systematic Investment Plans",
    body:
      "Automated, goal-mapped SIPs across equity, debt and hybrid categories. We set the discipline, the market does the rest.",
    span: "md:col-span-7 md:row-span-2",
    dark: true,
  },
  {
    icon: Coins,
    tag: "02",
    title: "Lumpsum Deployment",
    body:
      "Windfall, bonus or maturity proceeds — deployed via a staggered STP roadmap that respects both timing and risk.",
    span: "md:col-span-5",
  },
  {
    icon: Receipt,
    tag: "03",
    title: "Tax-Efficient Investing",
    body: "ELSS, indexation-aware debt allocation and capital-gains harvesting — legal, tidy, on record.",
    span: "md:col-span-5",
  },
  {
    icon: Armchair,
    tag: "04",
    title: "Retirement Planning",
    body:
      "Inflation-adjusted corpus targets with a withdrawal glide-path. Retire without recalculating on the way there.",
    span: "md:col-span-6",
  },
  {
    icon: GraduationCap,
    tag: "05",
    title: "Children's Education",
    body:
      "Rupee-cost-averaged, timeline-locked portfolios that survive their teenage years and yours.",
    span: "md:col-span-6",
  },
  {
    icon: MagnifyingGlass,
    tag: "06",
    title: "Financial Research",
    body:
      "NISM-certified fund research memos, quarterly reviews and rebalancing notes — written, not forwarded.",
    span: "md:col-span-12",
    inline: true,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-24 md:py-40 bg-[#f4f1ea]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-4">
            <p className="overline text-black/50">§ Services</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em]">
              Six practices.<br />
              <span className="italic">One quiet</span> promise.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                className={`relative border border-ink p-8 md:p-10 ${
                  s.span || ""
                } ${s.dark ? "bg-forest text-[#f4f1ea]" : "bg-[#e8e3d8]/60"} group`}
                data-testid={`service-card-${s.tag}`}
              >
                <div
                  className={`flex ${
                    s.inline ? "flex-col md:flex-row md:items-center md:justify-between gap-8" : "flex-col"
                  }`}
                >
                  <div className={s.inline ? "md:max-w-2xl" : ""}>
                    <div className="flex items-center gap-4 mb-8">
                      <Icon size={28} weight="duotone" />
                      <span className="overline opacity-70">{s.tag}</span>
                    </div>
                    <h3
                      className={`font-display leading-[1.05] tracking-tight ${
                        s.dark ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`mt-5 font-body leading-relaxed ${
                        s.dark ? "text-[#f4f1ea]/80 text-base md:text-lg max-w-md" : "text-black/70 text-sm md:text-base"
                      }`}
                    >
                      {s.body}
                    </p>
                  </div>
                  <div
                    className={`mt-8 inline-flex items-center gap-2 ${
                      s.dark ? "text-[#f4f1ea]/70" : "text-black/60"
                    } group-hover:text-terracotta transition-colors duration-300`}
                  >
                    <span className="overline">Learn more</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
