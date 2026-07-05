// Basic palette: 16 ANSI-named color families (8 base + 8 bright), each
// expanded into a 7-step tint/shade scale. Every color is defined once as a
// base HSL tone; shades, tints, and bright variants are derived by math, not
// hardcoded per step. Only two anchors are picked "by hand" rather than
// derived from an existing rouge2 color: blue (no prior source existed) and
// brightRed (deliberately a distinct warm-orange hue rather than a lighter
// red - see BRIGHT_HUE_OVERRIDES below, following the convention used by
// themes like Solarized).
//
// VS Code's theme JSON format only accepts hex colors (#RRGGBB /
// #RRGGBBAA), so hslToHex/withAlpha exist to compile HSL math down to hex at
// the point of use - author and reason about colors in HSL, emit hex.

export interface Hsl {
  h: number // 0-360
  s: number // 0-100
  l: number // 0-100
}

export type Shade = "darkest" | "darker" | "dark" | "base" | "light" | "lighter" | "lightest"

export type ColorFamily = Record<Shade, string>

export type AnsiName =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white"
  | "brightBlack"
  | "brightRed"
  | "brightGreen"
  | "brightYellow"
  | "brightBlue"
  | "brightMagenta"
  | "brightCyan"
  | "brightWhite"

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export function hslToHex({ h, s, l }: Hsl): string {
  const sat = clamp(s, 0, 100) / 100
  const light = clamp(l, 0, 100) / 100
  const k = (n: number) => (n + h / 30) % 12
  const a = sat * Math.min(light, 1 - light)
  const f = (n: number) => light - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  const toHex = (n: number) =>
    Math.round(f(n) * 255)
      .toString(16)
      .padStart(2, "0")
  return `#${toHex(0)}${toHex(8)}${toHex(4)}`.toUpperCase()
}

// Appends an alpha channel computed from a percentage, rather than a
// hand-picked hex pair (e.g. withAlpha(palette.yellow.base, 90)).
export function withAlpha(hex: string, opacityPercentage: number): string {
  const alphaHex = Math.round((clamp(opacityPercentage, 0, 100) / 100) * 255)
    .toString(16)
    .padStart(2, "0")
  return `${hex}${alphaHex}`.toUpperCase()
}

// Base tone for each of the 8 ANSI colors. Hue/saturation carried over from
// rouge2 where a clear source existed (see git history for the derivation);
// `blue` has no rouge2 source and was picked fresh to complete the set.
const ANSI_BASE: Record<
  "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white",
  Hsl
> = {
  black: { h: 238, s: 24, l: 10 }, // bg - experimental: darker + a touch less saturated, may revert
  red: { h: 353, s: 45, l: 58 }, // rouge + berry merged (same hue, ~356/~351)
  green: { h: 100, s: 6, l: 60 }, // sage
  yellow: { h: 39, s: 30, l: 74 }, // pastel gold - experimental: desaturated further to soften against the rest of the palette, may revert
  blue: { h: 220, s: 45, l: 55 }, // no rouge2 source, picked to fill the set
  magenta: { h: 238, s: 22, l: 38 }, // matches rouge2's purple anchor almost exactly (keyword color)
  cyan: { h: 189, s: 22, l: 29 }, // accent/teal
  white: { h: 240, s: 5, l: 91 }, // bg, light end
}

// Bright variants are the base hue pushed lighter/more saturated, EXCEPT
// brightRed: rather than a lighter red, it's peach's distinct warm-orange
// hue (h=13), matching how Solarized maps its orange into the brightRed slot.
const BRIGHT_HUE_OVERRIDES: Partial<Record<keyof typeof ANSI_BASE, Hsl>> = {
  red: { h: 13, s: 71, l: 71 },
}

function toBright(base: Hsl): Hsl {
  return { h: base.h, s: clamp(base.s + 10, 0, 100), l: clamp(base.l + 15, 3, 96) }
}

// Absolute floor/ceiling no step's lightness can cross.
const LIGHTNESS_FLOOR = 4
const LIGHTNESS_CEILING = 96

// Steps darker than base interpolate from the floor up to base.l; steps
// lighter than base interpolate from base.l up to the ceiling. Using a
// fraction of each anchor's own headroom (rather than a flat +/- offset)
// keeps every step distinct even when base.l already sits close to an
// extreme (e.g. white's base.l=91 leaves little room to go lighter, so its
// light/lighter/lightest steps compress near the ceiling instead of
// collapsing into duplicates).
const DARK_SIDE_FACTOR: Record<"darkest" | "darker" | "dark", number> = {
  darkest: 0.18,
  darker: 0.42,
  dark: 0.72,
}
const LIGHT_SIDE_FACTOR: Record<"light" | "lighter" | "lightest", number> = {
  light: 0.35,
  lighter: 0.65,
  lightest: 0.88,
}

// Saturation multiplier per step: peaks at base, tapers toward both
// extremes so shadows and tints read as shadow/tint rather than a neon
// version of the hue.
const SAT_FACTOR: Record<Shade, number> = {
  darkest: 0.55,
  darker: 0.75,
  dark: 0.92,
  base: 1,
  light: 0.85,
  lighter: 0.55,
  lightest: 0.3,
}

function stepLightness(baseLightness: number, shade: Shade): number {
  if (shade === "base") return baseLightness
  if (shade in DARK_SIDE_FACTOR) {
    const factor = DARK_SIDE_FACTOR[shade as keyof typeof DARK_SIDE_FACTOR]
    return LIGHTNESS_FLOOR + (baseLightness - LIGHTNESS_FLOOR) * factor
  }
  const factor = LIGHT_SIDE_FACTOR[shade as keyof typeof LIGHT_SIDE_FACTOR]
  return baseLightness + (LIGHTNESS_CEILING - baseLightness) * factor
}

function buildFamily(base: Hsl): ColorFamily {
  const family = {} as ColorFamily
  for (const shade of Object.keys(SAT_FACTOR) as Shade[]) {
    family[shade] = hslToHex({
      h: base.h,
      s: clamp(base.s * SAT_FACTOR[shade], 0, 100),
      l: clamp(stepLightness(base.l, shade), LIGHTNESS_FLOOR, LIGHTNESS_CEILING),
    })
  }
  return family
}

function baseTone(name: keyof typeof ANSI_BASE): Hsl {
  return ANSI_BASE[name]
}

function brightTone(name: keyof typeof ANSI_BASE): Hsl {
  return BRIGHT_HUE_OVERRIDES[name] ?? toBright(ANSI_BASE[name])
}

// A muted neutral grey used for de-emphasized text (code comments, secondary
// copy) - independent of the black family's tint/shade scale, so it stays
// stable if the black anchor's hue/saturation is retuned later.
export const mutedGrey = hslToHex({ h: 238, s: 20, l: 36 })

export const palette: Record<AnsiName, ColorFamily> = {
  black: buildFamily(baseTone("black")),
  red: buildFamily(baseTone("red")),
  green: buildFamily(baseTone("green")),
  yellow: buildFamily(baseTone("yellow")),
  blue: buildFamily(baseTone("blue")),
  magenta: buildFamily(baseTone("magenta")),
  cyan: buildFamily(baseTone("cyan")),
  white: buildFamily(baseTone("white")),
  brightBlack: buildFamily(brightTone("black")),
  brightRed: buildFamily(brightTone("red")),
  brightGreen: buildFamily(brightTone("green")),
  brightYellow: buildFamily(brightTone("yellow")),
  brightBlue: buildFamily(brightTone("blue")),
  brightMagenta: buildFamily(brightTone("magenta")),
  brightCyan: buildFamily(brightTone("cyan")),
  brightWhite: buildFamily(brightTone("white")),
}

export default palette
