# Infinode

## Register
**brand** — this is a marketing site. The design IS the product. Visitors decide whether to hire Infinode in the first 8 seconds.

## Product Purpose
Infinode is a software studio building web platforms, mobile apps, brand systems, and bespoke product engineering for ambitious founders and teams worldwide. The site is a portfolio and a pitch — proof of taste before proof of work.

Tagline: **Infinite Possibilities.**

## Users
- **Founders & operators** evaluating a partner to build their next product (web, mobile, or both).
- **Marketing leads & creative directors** looking for a studio that can ship brand + product, not just code.
- **Global** — clients from anywhere in the world. Geography is not part of the pitch; craft and outcomes are.
- They browse on a mix of laptop (decision-making) and phone (first impression). The site must be exceptional on both.

## Brand & Tone
- **Warm-tech, not corporate-tech.** Confident, a little playful, no jargon, no SaaS-speak.
- **Crafted, not mass-produced.** Every section feels considered, not templated.
- **Global studio voice.** Do not lead with location or origin story. If geography appears at all, it lives quietly in the footer (legal / contact), never in the hero or pitch copy.
- Voice: short sentences. Direct. Occasional dry wit. Never cheesy. Never an em dash.

## Anti-references (what we are NOT)
- Generic dark agency site with neon gradients and "we build digital experiences" copy.
- Crypto neon-on-black aesthetic.
- SaaS-cream + purple-gradient template.
- Identical card grids with stock icons.
- Heavy WebGL hellscape that punishes mobile users.
- Linear/Vercel mimicry — those looks are saturated.

## Strategic Principles
1. **Typography is the hero.** Editorial display type carries identity; visuals support, not vice versa.
2. **Scroll is the medium.** Story unfolds through orchestrated scroll, not stacked sections.
3. **Depth without weight.** Parallax, layered tints, soft glow, CSS 3D — perceptual depth without WebGL cost.
4. **Mobile is first-class.** Same emotion, lower payload. Reduced motion respected.
5. **One personality, one palette.** No color schizophrenia between sections.

## Surfaces in this revamp
Single-page composition: Hero → Manifesto → Services (sticky-pinned) → Testimonials (depth marquee) → Contact → Footer. Splash transitions in, nav floats. Internal links via in-page anchors.

## Constraints
- Next.js 14 App Router, mostly client components (per CLAUDE.md).
- Existing deps: framer-motion, gsap, locomotive-scroll, tailwind, normalize.css.
- No backend changes — contact form already wired.
- No emoji in UI. No Inter as a body font. No `#000` / `#fff` flat blacks/whites.
