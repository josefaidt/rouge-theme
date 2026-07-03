const SHADE_SUFFIXES = ["darkest", "darker", "dark", "light", "lighter", "lightest"] as const
const SHADE_ORDER = ["darkest", "darker", "dark", "base", "light", "lighter", "lightest"]

/**
 * Rouge 2's palette module exports a flat `{ opac, rouge, rouge_dark, ... }`
 * object rather than nested families. This regroups it into the same
 * `{ family: { shade: hex } }` shape PaletteSwatches expects, skipping the
 * `opac` function and the stray non-family "100" key bg2 carries forward
 * from the original theme.
 */
export function groupLegacyPalette(
  flat: Record<string, unknown>,
): Record<string, Record<string, string>> {
  const families: Record<string, Record<string, string>> = {}

  for (const [key, value] of Object.entries(flat)) {
    if (typeof value !== "string") continue
    if (!/^[a-z]+(_[a-z]+)?$/.test(key)) continue

    const suffix = SHADE_SUFFIXES.find((s) => key.endsWith(`_${s}`))
    const family = suffix ? key.slice(0, -(suffix.length + 1)) : key
    const shade = suffix ?? "base"

    families[family] ??= {}
    families[family][shade] = value
  }

  for (const family of Object.keys(families)) {
    const shades = families[family] as Record<string, string>
    families[family] = Object.fromEntries(
      SHADE_ORDER.filter((s) => s in shades).map((s) => [s, shades[s] as string]),
    )
  }

  return families
}
