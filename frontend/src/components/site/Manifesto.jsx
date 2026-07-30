import { motion } from "framer-motion";

const chapters = [
  {
    num: "I.",
    title: "Discipline over prediction",
    body:
      "Markets reward patience, not cleverness. We architect portfolios that behave predictably in unpredictable years — asset-allocated, rebalanced, and quietly automated so life doesn't have to pause for volatility.",
  },
  {
    num: "II.",
    title: "Research before recommendation",
    body:
      "Every fund on our shelf has to earn its place through rolling returns, downside capture, style consistency and manager tenure. As a NISM-certified Research Analyst, we don't chase last year's star — we study this decade's evidence.",
  },
  {
    num: "III.",
    title: "One family, one plan",
    body:
      "Retirement, a child's education, a first home — each goal gets its own dedicated bucket, its own SIP, its own review cadence. No commingling. No confusion. Just a plan you can point at.",
  },
  {
    num: "IV.",
    title: "Small AUM, senior attention",
    body:
      "We're deliberately boutique. Every client works directly with the founder — CFA Level 2 cleared, MBA in Finance — and every rupee is treated with the same fiduciary care we'd give our own family.",
  },
];

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      data-testid="manifesto-section"
      className="relative py-24 md:py-40"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <p className="overline text-black/50">§ Manifesto</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em]"
            >
              Four principles we<br />
              <span className="italic">refuse</span> to compromise on.
            </motion.h2>
          </div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {chapters.map((c, i) => (
            <motion.article
              key={c.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="grid grid-cols-12 gap-8 border-t border-ink pt-10 md:pt-14"
              data-testid={`manifesto-chapter-${i + 1}`}
            >
              <div className="col-span-12 md:col-span-4">
                <div className="chapter-num text-8xl md:text-9xl text-black/85 leading-none">
                  {c.num}
                </div>
                {i === 1 && (
                  <div className="mt-8 clipped-frame overflow-hidden max-w-[280px]">
                    <img
                      src="https://images.pexels.com/photos/10436618/pexels-photo-10436618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="Nurtured growth"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="col-span-12 md:col-span-7 md:col-start-6">
                <h3 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-6 font-body text-base md:text-lg text-black/70 leading-relaxed max-w-xl">
                  {c.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
