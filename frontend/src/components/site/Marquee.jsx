import FastMarquee from "react-fast-marquee";
import { Asterisk } from "@phosphor-icons/react";

const words = [
  "Discipline",
  "Patience",
  "Research",
  "Compounding",
  "Clarity",
  "Stewardship",
  "Prudence",
  "Consistency",
];

export default function Marquee() {
  return (
    <section
      data-testid="editorial-marquee"
      className="border-y border-ink py-8 md:py-10 bg-[#e8e3d8]/50 overflow-hidden"
      aria-label="Guiding principles"
    >
      <FastMarquee speed={30} gradient={false} pauseOnHover>
        <div className="flex items-center marquee-track text-6xl md:text-8xl text-black/80 gap-14 pr-14">
          {words.map((w, i) => (
            <span key={i} className="flex items-center gap-14">
              <span className="italic">{w}</span>
              <Asterisk size={36} className="text-terracotta shrink-0" weight="thin" />
            </span>
          ))}
        </div>
      </FastMarquee>
    </section>
  );
}
