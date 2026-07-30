import { WhatsappLogo, Phone } from "@phosphor-icons/react";
import { BRAND, whatsappHref } from "@/lib/site";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.7 }}
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
      data-testid="floating-cta"
    >
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="h-14 w-14 rounded-full flex items-center justify-center bg-terracotta text-[#f4f1ea] border-2 border-[#0a0a0a] shadow-[4px_4px_0_0_#0a0a0a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-transform duration-200"
        aria-label="Chat on WhatsApp"
        data-testid="floating-whatsapp"
      >
        <WhatsappLogo size={24} weight="fill" />
      </a>
      <a
        href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
        className="h-14 w-14 rounded-full flex items-center justify-center bg-forest text-[#f4f1ea] border-2 border-[#0a0a0a] shadow-[4px_4px_0_0_#0a0a0a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-transform duration-200"
        aria-label="Call"
        data-testid="floating-phone"
      >
        <Phone size={22} weight="fill" />
      </a>
    </motion.div>
  );
}
