import { WhatsappLogo, ArrowUpRight, Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { BRAND, whatsappHref } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="contact" data-testid="site-footer" className="bg-obsidian text-[#f4f1ea] pt-24 md:pt-32 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="col-span-12">
            <p className="overline text-[#f4f1ea]/50 mb-6">§ Let&apos;s talk</p>
            <h2 className="font-display text-6xl md:text-[9rem] leading-[0.9] tracking-[-0.03em]">
              Start with a<br />
              <span className="italic text-terracotta">15&#8209;minute call.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 border-t border-[#f4f1ea]/15 pt-12">
          <div className="col-span-12 md:col-span-5">
            <div className="font-display text-4xl">{BRAND.name}<span className="text-terracotta">.</span></div>
            <p className="mt-4 max-w-md text-[#f4f1ea]/70 leading-relaxed">
              A research-led boutique mutual fund distribution practice.
              Personally managed. Written reviews. Zero cross-selling.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="pill-btn accent" data-testid="footer-whatsapp">
                <WhatsappLogo size={16} weight="fill" />
                WhatsApp
                <ArrowUpRight size={14} />
              </a>
              <a href={`tel:${BRAND.phone.replace(/\s+/g, "")}`} className="pill-btn" style={{ borderColor: "#f4f1ea", color: "#f4f1ea" }} data-testid="footer-call">
                <Phone size={16} weight="fill" />
                Call
              </a>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="overline text-[#f4f1ea]/50 mb-6">Reach</div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 shrink-0" />
                <a href={`tel:${BRAND.phone.replace(/\s+/g, "")}`} data-testid="footer-phone-link">{BRAND.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeSimple size={16} className="mt-1 shrink-0" />
                <a href={`mailto:${BRAND.email}`} data-testid="footer-email-link">{BRAND.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>{BRAND.city}</span>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4">
            <div className="overline text-[#f4f1ea]/50 mb-6">Navigate</div>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              <li><a href="#manifesto" className="hover:text-terracotta transition-colors duration-300">Manifesto</a></li>
              <li><a href="#services" className="hover:text-terracotta transition-colors duration-300">Services</a></li>
              <li><a href="#calculators" className="hover:text-terracotta transition-colors duration-300">Calculators</a></li>
              <li><a href="#founder" className="hover:text-terracotta transition-colors duration-300">Founder</a></li>
              <li><a href="#insights" className="hover:text-terracotta transition-colors duration-300">Insights</a></li>
              <li><a href="#contact" className="hover:text-terracotta transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#f4f1ea]/15 mt-16 pt-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono-num text-[11px] leading-relaxed text-[#f4f1ea]/55">
              MUTUAL FUND INVESTMENTS ARE SUBJECT TO MARKET RISKS. READ ALL SCHEME
              RELATED DOCUMENTS CAREFULLY BEFORE INVESTING. PAST PERFORMANCE IS
              NOT INDICATIVE OF FUTURE RESULTS. {BRAND.name} IS AN AMFI-REGISTERED
              MUTUAL FUND DISTRIBUTOR (ARN: {BRAND.arn} · EUIN: {BRAND.euin}).
              INFORMATION ON THIS SITE IS FOR EDUCATIONAL PURPOSES ONLY AND DOES
              NOT CONSTITUTE INVESTMENT ADVICE.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <p className="overline text-[#f4f1ea]/50">© {new Date().getFullYear()} {BRAND.name}</p>
            <p className="overline text-[#f4f1ea]/35 mt-2">Crafted with discipline in {BRAND.city.split(",")[0]}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
