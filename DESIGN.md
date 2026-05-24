# Infinode — Design System

## Scene
A founder is on her 14" laptop at 11pm, comparing studios. The site has to feel like a serious modern technology product, not a literary brochure. Cool, calm, confident. Linear / Vercel / Cursor energy.

## Color Strategy: **Restrained, monochrome cool**
Dark navy carries 80%+ of the surface. Whites are tinted cool. There is no warm accent. No orange. No ember. If emphasis is needed, it comes from contrast, scale, or motion — not color.

### Tokens (OKLCH)
| Token | Value | Use |
|---|---|---|
| `--ink-0` | `oklch(0.14 0.025 245)` | Deepest surface, footer, contact, scroll-scene |
| `--ink-1` | `oklch(0.18 0.030 245)` | Page background |
| `--ink-2` | `oklch(0.24 0.035 245)` | Elevated card / nav blur |
| `--ink-3` | `oklch(0.32 0.040 245)` | Borders, dividers |
| `--mist-1` | `oklch(0.96 0.008 245)` | Primary text |
| `--mist-2` | `oklch(0.80 0.012 245)` | Secondary text |
| `--mist-3` | `oklch(0.58 0.018 245)` | Tertiary text / labels |

Selection, focus, primary CTA: all use `--mist-1` against `--ink-0`. No accent color in the system.

## Typography
**One family: Geist** (via the `geist` npm package — `GeistSans` and `GeistMono`).

- `GeistSans` carries everything: display, body, UI.
- `GeistMono` is reserved for indices, labels, captions (`/01`, `phase 02`, `est. 2023`).
- **No serif anywhere.** No Instrument Serif, no Cormorant, no Playfair. The serif "editorial / artisan" voice was reviewed and rejected.

### Scale
| Step | Size | Use |
|---|---|---|
| display-xl | `clamp(3.5rem, 10vw, 11rem)` | Hero word |
| display-lg | `clamp(2.5rem, 7vw, 6.5rem)` | Section openers |
| display-md | `clamp(1.75rem, 4.5vw, 4rem)` | Manifesto, big copy |
| body-lg | `clamp(1.05rem, 1.25vw, 1.25rem)` | Lead paragraphs |
| body | `1rem` (16px) | Default |
| label | `0.72rem`, tracking +0.16em, uppercase | Mono indices |

Tracking is tight: `-0.04em` to `-0.025em` on display, `-0.01em` on body. Modern-tech aesthetic.

## Motion
- **Framer Motion** for entrances, interactions, scroll-driven scrubs.
- Hero loop video: muted autoplay loop background.
- Scroll scene: `video.currentTime = scrollProgress * duration` — scrubbing a Seedance video tied to scroll.

### Easing
- Default: `cubic-bezier(0.16, 1, 0.3, 1)` — ease-out-expo.
- Sharp: `cubic-bezier(0.65, 0, 0.35, 1)`.
- No bounce, no elastic.

### Durations
- Hover: 200–280ms
- Reveal: 700–1100ms
- Scroll scrub: tied 1:1 to scroll progress

`prefers-reduced-motion`: opacity-only fades, no transforms, no video autoplay scrub.

## Visuals
- **Hero centerpiece is a Seedance loop video** (`/public/media/hero-loop.mp4`), not a hand-coded SVG or CSS orb.
- **A scroll-driven Seedance scene** (`/public/media/scroll-scene.mp4`) lives between Manifesto and Services.
- **No custom decorative SVG illustrations.** If a section needs imagery, use Higgsfield-generated stills/videos or a real product asset.
- Service cards are typography-only with thin dividing borders. No icons by default.

## Composition Laws
- Hero: `min-h-[100svh]`, other sections `py-28 lg:py-40`.
- Spacing rhythm: 8 → 16 → 24 → 40 → 64 → 96 → 160. Vary.
- Containers: max-width `1440px`. Gutters `clamp(1.5rem, 5vw, 5rem)`.
- Sections divided by thin `border-ink-3/40` lines, not by background swaps.

## Anti-patterns (banned)
- Serif display type.
- Warm accent colors (orange, amber, ember, gold).
- Custom hand-coded SVG illustrations.
- Decorative abstract objects with no meaning (e.g., the orb).
- Gradient text, side-stripe borders, glassmorphism as default.
- Hero stat rows. Identical icon-card grids. Modals.
- Emoji in UI.

## Reduced-motion fallback
Video elements `loop muted autoplay playsInline`. Scroll scrub still updates `video.currentTime` because that's user-driven, not auto. Entrance animations collapse to opacity-only.
