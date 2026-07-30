export const BRAND = {
  name: "DhanGrow Capital",
  short: "DhanGrow",
  founder: "Sagar Reddy", // placeholder — replace with real name
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@dhangrow.capital",
  city: "Bengaluru, India",
  arn: "ARN-XXXXXX",
  euin: "EXXXXXX",
};

export const whatsappHref = (msg = "Hi! I'd like to know more about DhanGrow Capital.") =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`;

export const inr = (n) => {
  if (!Number.isFinite(n)) return "₹0";
  const abs = Math.abs(n);
  if (abs >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
  if (abs >= 1e5) return `₹${(n / 1e5).toFixed(2)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
};
