import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

const notes = [
  {
    tag: "Research Memo",
    date: "Dec 2025",
    title: "Why we're still under-weighting mid-cap heavy funds in early 2026",
    read: "6 min read",
  },
  {
    tag: "Client Letter",
    date: "Nov 2025",
    title: "The quiet math behind step-up SIPs — and why 10% works",
    read: "4 min read",
  },
  {
    tag: "Explainer",
    date: "Oct 2025",
    title: "Tax on debt mutual funds after 2023: a plain-language walkthrough",
    read: "5 min read",
  },
];

export default function Insights() {
  return (
    <section id="insights" data-testid="insights-section" className="py-24 md:py-40 bg-[#e8e3d8]/40 border-y border-ink">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16 items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="overline text-black/50 mb-6">§ Insights</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em]">
              Written, <span className="italic">not forwarded.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <a href="#" className="pill-btn" data-testid="insights-view-all">
              View archive <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {notes.map((n, i) => (
            <motion.a
              key={n.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group border border-ink p-8 bg-[#f4f1ea] hover:bg-forest hover:text-[#f4f1ea] transition-colors duration-500 min-h-[280px] flex flex-col justify-between"
              data-testid={`insight-card-${i + 1}`}
            >
              <div className="flex items-center justify-between">
                <span className="overline">{n.tag}</span>
                <span className="overline opacity-60">{n.date}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl leading-tight mt-16">
                {n.title}
              </h3>
              <div className="mt-8 flex items-center justify-between">
                <span className="overline opacity-70">{n.read}</span>
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
