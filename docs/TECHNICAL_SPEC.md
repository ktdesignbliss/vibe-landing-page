# AXON Core — Global Style Guide
## Technical Specification v1.0

**Brand Vibe:** Performance Editorial | High-contrast | Elite | Cinematic  
**Design Philosophy:** Premium Fitness × Luxury Performance Tech

---

## 1. Typography System (Editorial Scale)

### Font Families
| Role | Font | Usage |
|------|------|-------|
| **Display** | Archivo Black (condensed, bold) | Headlines, hero text, magazine-style impact |
| **Display Alt** | Inter Tight | Secondary display, subheads when tighter spacing needed |
| **UI / Body** | Inter | Body copy, UI labels, highly readable at all sizes |

### Type Scale (1.333 Perfect Fourth)
Base: `1rem` (16px)

| Token | Ratio | Size (px) | clamps | Line-Height | Letter-Spacing |
|-------|-------|-----------|--------|-------------|----------------|
| H1 | 3.16 | ~50px | clamp(2.5rem, 5vw + 2rem, 3.16rem) | 1.1 | -0.02em |
| H2 | 2.37 | ~38px | clamp(2rem, 4vw + 1.5rem, 2.37rem) | 1.1 | -0.02em |
| H3 | 1.78 | ~28px | clamp(1.5rem, 3vw + 1rem, 1.78rem) | 1.1 | -0.02em |
| H4 | 1.33 | ~21px | clamp(1.25rem, 2vw + 0.75rem, 1.33rem) | 1.1 | -0.02em |
| Body | 1.00 | 16px | 1rem | 1.5 | 0 |
| Small | 0.75 | 12px | 0.75rem | 1.4 | 0 |

### Typography Rules
- **Headers:** Use `font-display` family, `tracking-tight` (-0.02em), `leading-tight` (1.1)
- **Body:** Use `font-sans` (Inter), default line-height 1.5
- **Display text:** All-caps optional for hero/impact moments

---

## 2. Color DNA — The "Volt" Palette

### Primary Palette
| Token | Hex | Usage |
|-------|-----|-------|
| **void** | `#000000` | Primary backgrounds, "Void" effect |
| **volt** | `#CEFF00` | CTAs, critical data, highlights |
| **volt-muted** | `#9ECC00` | Hover states, secondary accents |

### Neutral Scale (Monochromatic)
| Token | Hex | Usage |
|-------|-----|-------|
| **neutral-50** | `#FAFAFA` | Off-white, subtle backgrounds |
| **neutral-100** | `#F5F5F5` | Borders, dividers (light) |
| **neutral-200** | `#E5E5E5` | Secondary borders |
| **neutral-400** | `#A3A3A3` | Tertiary text |
| **neutral-500** | `#737373` | Secondary text |
| **neutral-700** | `#404040` | Muted text on light |
| **charcoal** | `#1A1A1A` | Near-black surfaces |
| **charcoal-800** | `#262626` | Elevated containers on void |

### Accessibility
- **Volt (#CEFF00) on Void (#000000):** ~15:1 contrast ✓ WCAG AAA
- **Neutral-400 on Void:** Use sparingly; prefer neutral-500+ for body
- **Void text:** Primary text on void = volt or neutral-50/100

---

## 3. Spacing & Grid Engine

### 8pt Base Scale
| Token | Value | Usage |
|-------|-------|-------|
| 0 | 0 | Reset |
| 1 | 4px | Micro spacing |
| 2 | 8px | Tight spacing |
| 3 | 12px | Compact |
| 4 | 16px | Default |
| 5 | 20px | |
| 6 | 24px | Section padding (mobile) |
| 8 | 32px | **Gutter (desktop)** |
| 10 | 40px | |
| 12 | 48px | Section padding |
| 16 | 64px | Large sections |
| 20 | 80px | Hero spacing |
| 24 | 96px | Major sections |

### Grid
- **Desktop gutter:** 32px minimum (ultra-wide for expansive feel)
- **Max content width:** 1440px (optional constraint)
- **Grid columns:** 12-column with 32px gutters

---

## 4. Component Lingua Franca

### Buttons
- **Radius:** 0px (sharp) or 2px max — no pills
- **Border:** 1px solid, high-contrast
- **Primary CTA:** Void bg, Volt text → Hover: Volt bg, Void text (instant inversion)
- **Secondary:** Transparent/outline → Hover: Volt fill

### Borders
- **Width:** 1px
- **Color:** High-contrast (neutral-200 on light, neutral-700 on void)
- **No heavy shadows** — flat, sharp containers

### Hover Logic
- **Instant color inversion** — no soft fades
- Transition: 150ms for interactive states (optional, minimal)

---

## 5. Global Effects & Motion

### Signature Vibe
- **Grainy Film Noise:** Subtle overlay (4–8% opacity) for cinematic texture
- **Image Treatment:** Black & white with selective Volt color pop

### Motion Foundation
| Token | Value | Usage |
|-------|-------|-------|
| **ease-power-snap** | cubic-bezier(0.19, 1, 0.22, 1) | Section transitions, reveals |
| **duration-section** | 500ms | Major section animations |
| **duration-micro** | 150ms | Hover, focus (minimal) |

---

## 6. Implementation Reference

### Tech Stack
- Next.js 16
- Tailwind CSS v4
- CSS Variables + `@theme` inline

### File Structure
```
app/
  globals.css     # Design tokens, @theme, utilities
  layout.tsx      # Font loading (Archivo Black, Inter Tight, Inter)
```

### Tailwind Class Conventions
- Display: `font-display`, `text-h1` through `text-h4`
- Volt: `text-volt`, `bg-volt`, `border-volt`
- Void: `bg-void`, `text-void`
- Motion: `ease-power-snap`, `duration-500`

---

## Appendix A: Tailwind v3 Config Snippet

*For projects using Tailwind v3, use this `tailwind.config.js` snippet:*

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'selector'
  theme: {
    extend: {
      colors: {
        void: "#000000",
        volt: "#CEFF00",
        "volt-muted": "#9ECC00",
        charcoal: "#1A1A1A",
        "charcoal-800": "#262626",
      },
      fontFamily: {
        display: ["var(--font-archivo-black)", "ui-sans-serif", "system-ui", "sans-serif"],
        "display-alt": ["var(--font-inter-tight)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["clamp(2.5rem, 5vw + 2rem, 3.16rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["clamp(2rem, 4vw + 1.5rem, 2.37rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h3: ["clamp(1.5rem, 3vw + 1rem, 1.78rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h4: ["clamp(1.25rem, 2vw + 0.75rem, 1.33rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      spacing: {
        gutter: "2rem",
        section: "3rem",
        hero: "5rem",
      },
      borderRadius: {
        button: "0",
        container: "2px",
      },
      transitionTimingFunction: {
        "power-snap": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      transitionDuration: {
        section: "500ms",
      },
    },
  },
};
```

---

## Appendix B: Button Component Example

*Instant inversion hover (Black ↔ Volt):*

```tsx
<button
  className="
    bg-void text-volt border border-volt
    px-6 py-3 rounded-[0px]
    font-display text-sm tracking-tight
    hover:bg-volt hover:text-void hover:border-void
    transition-colors duration-150
  "
>
  LAUNCH
</button>
```
