export const BRAND = {
  name: "DhanGrow Capital",
  short: "DhanGrow",
  founder: "Arpankumar Naik",
  phone: "+91 70168 62861",
  whatsapp: "917016862861",
  email: "naikarpan11.an@gmail.com",
  city: "Surat, Gujarat",
  arn: "AMFI-Registered MFD",
  euin: "NISM Series V-A",
  logo: "https://customer-assets-lxgj4vgw.emergentagent.net/job_mutual-fund-pro-9/artifacts/yxo0cjh6_Logo.jpg",
  portrait:
    "https://customer-assets-lxgj4vgw.emergentagent.net/job_mutual-fund-pro-9/artifacts/48l5bjds_WhatsApp%20Image%202026-07-30%20at%2010.08.19%20PM.jpeg",
  brochure:
    "https://customer-assets-lxgj4vgw.emergentagent.net/job_mutual-fund-pro-9/artifacts/u1d55f4o_DhanGrow%20Capital%20Brochure.pdf",
  linkedin: "https://www.linkedin.com/in/arpankumar-naik-0134502a1/",
};

const DEFAULT_MSG = "I want to begin my Financial Freedom. How can we start?";

export const whatsappHref = (msg = DEFAULT_MSG) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`;

export const inr = (n) => {
  if (!Number.isFinite(n)) return "₹0";
  const abs = Math.abs(n);
  if (abs >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
  if (abs >= 1e5) return `₹${(n / 1e5).toFixed(2)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
};
