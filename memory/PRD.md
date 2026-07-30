# DhanGrow Capital — PRD

## Problem Statement
Marketing website for DhanGrow Capital, a boutique mutual fund distribution business run by a CFA L2 cleared / MBA Finance / NISM Research Analyst founder. Currently ₹50L AUM, 15+ clients, 6 months old. Needs a visually appealing, Awwwards-level design.

## User Choices
- Type: Marketing + investment calculators
- Vibe: Modern fintech (executed as Neo-Editorial Wealth — warm sand + obsidian + terracotta accent, Cormorant Garamond serif)
- Contact: WhatsApp + phone CTAs only (no form storage)
- Copy: SEBI-compliant placeholder copy

## Architecture
- React 19 + TailwindCSS + Shadcn UI
- framer-motion for scroll reveals & masked hero
- lenis for momentum smooth scrolling
- react-fast-marquee for editorial ticker
- recharts for calculator visualisation
- @phosphor-icons/react for icons
- Backend unchanged (template FastAPI + MongoDB)

## Sections Implemented
- Navbar (glass, sticky, WhatsApp CTA)
- Hero — kinetic masked line reveal + parallax abstract background
- Editorial marquee (Discipline · Patience · Research…)
- Manifesto — 4 numbered chapters (I-IV) with off-grid asymmetry & clipped photo
- Services — Tetris bento grid, 6 services incl dark forest hero card
- Calculators — SIP / Lumpsum / Retirement / Education tabs with live recharts area chart
- Founder & Trust — dark forest section, clipped portrait, credentials, animated counters
- Insights — 3 placeholder editorial cards
- Floating WhatsApp + Phone CTAs
- Footer — huge editorial "Let's talk" + SEBI disclaimer

## Placeholders to Replace
- Founder name (`BRAND.founder` in `/app/frontend/src/lib/site.js`)
- Phone / WhatsApp number
- ARN / EUIN codes
- Real photography (currently curated Unsplash/Pexels)

## Backlog (P1/P2)
- P1: Replace placeholder founder photo + real number/ARN
- P1: Testimonial carousel
- P1: Real blog CMS integration
- P2: Appointment booking (Calendly / Google Calendar)
- P2: Lead capture form with Resend email notification
- P2: Client login portal (portfolio dashboard)
