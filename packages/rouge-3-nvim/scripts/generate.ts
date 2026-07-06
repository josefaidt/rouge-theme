#!/usr/bin/env bun
// Generates colors/rouge3.lua from the shared Rouge palette. Don't hand-edit
// the generated file - edit the color choices below (or packages/palette's
// anchors) and re-run `bun run build`.

import * as fs from "node:fs/promises"
import * as path from "node:path"
import { mutedGrey, palette } from "@rouge/palette"

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "")
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  }
}

function rgbToHex({ r, g, b }: { r: number; g: number; b: number }) {
  const toHex = (n: number) => Math.round(n).toString(16).padStart(2, "0")
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
}

// Neovim highlights take solid RGB, unlike VS Code's rgba theme colors, so
// translucent UI accents (selection, line highlight, diffs) are pre-blended
// against a backdrop here to approximate the same look.
function blend(fg: string, bg: string, fgWeight: number): string {
  const a = hexToRgb(fg)
  const b = hexToRgb(bg)
  return rgbToHex({
    r: a.r * fgWeight + b.r * (1 - fgWeight),
    g: a.g * fgWeight + b.g * (1 - fgWeight),
    b: a.b * fgWeight + b.b * (1 - fgWeight),
  })
}

const bg = palette.black.dark

// Mirrors the semantic color choices in packages/rouge-3/rouge-3.ts so the
// editor UI and terminal match the VS Code theme.
const c = {
  bg,
  bgAlt: palette.black.base,
  bgDarker: palette.black.darker,
  fg: palette.black.lighter,
  fgDim: blend(palette.black.light, bg, 0.7),
  fgDimmer: blend(palette.black.light, bg, 0.4),
  fgBright: palette.black.lightest,
  border: blend(palette.magenta.dark, bg, 0.4),
  comment: mutedGrey,
  red: palette.red.base,
  redDark: palette.red.dark,
  redLight: palette.red.light,
  redLightest: palette.red.lightest,
  brightRed: palette.brightRed.base,
  brightRedLight: palette.brightRed.light,
  green: palette.green.base,
  yellow: palette.yellow.base,
  yellowLight: palette.yellow.light,
  blue: palette.blue.base,
  blueLight: palette.blue.light,
  magenta: palette.magenta.base,
  magentaLight: palette.magenta.light,
  cyan: palette.cyan.base,
  cyanLight: palette.cyan.light,
  cyanLighter: palette.cyan.lighter,
  white: palette.black.lightest,
}

type HlOpts = Record<string, string | boolean>

const highlights: Record<string, HlOpts> = {
  // Editor UI
  Normal: { fg: c.fg, bg: c.bg },
  NormalFloat: { fg: c.fg, bg: c.bgAlt },
  FloatBorder: { fg: c.border, bg: c.bgAlt },
  Cursor: { fg: c.bg, bg: c.green },
  CursorLine: { bg: blend(c.cyan, c.bg, 0.13) },
  CursorColumn: { bg: blend(c.cyan, c.bg, 0.13) },
  CursorLineNr: { fg: c.fg, bold: true },
  LineNr: { fg: c.fgDim },
  SignColumn: { fg: c.fgDimmer, bg: c.bg },
  ColorColumn: { bg: c.bgAlt },
  Visual: { bg: blend(c.cyan, c.bg, 0.6) },
  VisualNOS: { bg: blend(c.cyan, c.bg, 0.6) },
  Search: { bg: blend(c.cyan, c.bg, 0.6), fg: c.fgBright },
  IncSearch: { bg: blend(c.cyan, c.bg, 0.85), fg: c.fgBright },
  CurSearch: { bg: blend(c.cyan, c.bg, 0.85), fg: c.fgBright },
  MatchParen: { bg: blend(c.blueLight, c.bg, 0.2), bold: true },
  StatusLine: { fg: c.fg, bg: c.bgAlt },
  StatusLineNC: { fg: c.fgDim, bg: c.bgAlt },
  WinBar: { fg: c.fg, bg: c.bg },
  WinBarNC: { fg: c.fgDim, bg: c.bg },
  TabLine: { fg: c.fg, bg: c.bgAlt },
  TabLineFill: { bg: c.bgAlt },
  TabLineSel: { fg: c.fgBright, bg: blend(c.blueLight, c.bg, 0.3) },
  Pmenu: { fg: c.fg, bg: c.bgAlt },
  PmenuSel: { fg: c.redLightest, bg: blend(c.red, c.bg, 0.75) },
  PmenuSbar: { bg: c.bgAlt },
  PmenuThumb: { bg: c.fgDimmer },
  WinSeparator: { fg: c.border },
  VertSplit: { fg: c.border },
  FoldColumn: { fg: c.fgDim, bg: c.bg },
  Folded: { fg: c.fgDim, bg: c.bgAlt },
  Directory: { fg: c.cyanLight },
  Title: { fg: c.redLight, bold: true },
  ErrorMsg: { fg: c.red },
  WarningMsg: { fg: c.brightRed },
  ModeMsg: { fg: c.fg },
  MoreMsg: { fg: c.green },
  Question: { fg: c.green },
  NonText: { fg: c.fgDimmer },
  EndOfBuffer: { fg: c.bg },
  SpecialKey: { fg: c.magentaLight },
  Whitespace: { fg: c.fgDimmer },
  WildMenu: { fg: c.redLightest, bg: c.red },
  Conceal: { fg: c.fgDim },
  QuickFixLine: { bg: c.bgAlt },

  // Diff
  DiffAdd: { bg: blend(c.green, c.bg, 0.25) },
  DiffChange: { bg: blend(c.yellow, c.bg, 0.2) },
  DiffDelete: { fg: c.red, bg: blend(c.red, c.bg, 0.25) },
  DiffText: { bg: blend(c.yellow, c.bg, 0.35) },

  // Spelling
  SpellBad: { sp: c.red, underline: true },
  SpellCap: { sp: c.blueLight, underline: true },
  SpellLocal: { sp: c.cyanLight, underline: true },
  SpellRare: { sp: c.magentaLight, underline: true },

  // Syntax (legacy groups)
  Comment: { fg: c.comment, italic: true },
  Constant: { fg: c.brightRedLight },
  String: { fg: c.green },
  Character: { fg: c.green },
  Number: { fg: c.brightRedLight },
  Boolean: { fg: c.brightRedLight },
  Float: { fg: c.brightRedLight },
  Identifier: { fg: c.red },
  Function: { fg: c.redLight },
  Statement: { fg: c.magentaLight, italic: true },
  Conditional: { fg: c.magentaLight, italic: true },
  Repeat: { fg: c.magentaLight, italic: true },
  Label: { fg: c.magentaLight },
  Operator: { fg: c.magentaLight },
  Keyword: { fg: c.magentaLight, italic: true },
  Exception: { fg: c.magentaLight, italic: true },
  PreProc: { fg: c.yellow },
  Include: { fg: c.magentaLight, italic: true },
  Define: { fg: c.magentaLight },
  Macro: { fg: c.yellow },
  PreCondit: { fg: c.yellow },
  Type: { fg: c.redLight },
  StorageClass: { fg: c.magentaLight, italic: true },
  Structure: { fg: c.redLight },
  Typedef: { fg: c.redLight },
  Special: { fg: c.yellow },
  SpecialChar: { fg: c.yellow },
  Tag: { fg: c.red },
  Delimiter: { fg: c.magentaLight },
  SpecialComment: { fg: c.comment, italic: true },
  Debug: { fg: c.brightRed },
  Underlined: { fg: c.cyanLight, underline: true },
  Ignore: { fg: c.fgDim },
  Error: { fg: c.red, bg: blend(c.red, c.bg, 0.15) },
  Todo: { fg: c.yellow, bold: true, italic: true },

  // Treesitter
  ["@comment"]: { link: "Comment" },
  ["@string"]: { link: "String" },
  ["@string.escape"]: { fg: c.yellow },
  ["@number"]: { link: "Number" },
  ["@boolean"]: { link: "Boolean" },
  ["@constant"]: { link: "Constant" },
  ["@constant.builtin"]: { fg: c.brightRedLight, italic: true },
  ["@keyword"]: { link: "Keyword" },
  ["@keyword.function"]: { link: "Keyword" },
  ["@keyword.return"]: { link: "Keyword" },
  ["@keyword.operator"]: { fg: c.magentaLight },
  ["@conditional"]: { link: "Conditional" },
  ["@repeat"]: { link: "Repeat" },
  ["@function"]: { link: "Function" },
  ["@function.builtin"]: { fg: c.yellow },
  ["@function.call"]: { link: "Function" },
  ["@method"]: { link: "Function" },
  ["@constructor"]: { fg: c.redLight },
  ["@parameter"]: { fg: c.red },
  ["@variable"]: { fg: c.red },
  ["@variable.builtin"]: { fg: c.magentaLight, italic: true },
  ["@property"]: { fg: c.fg },
  ["@field"]: { fg: c.fg },
  ["@type"]: { link: "Type" },
  ["@type.builtin"]: { fg: c.redLight, italic: true },
  ["@tag"]: { link: "Tag" },
  ["@tag.attribute"]: { fg: c.yellow, italic: true },
  ["@tag.delimiter"]: { fg: c.magentaLight },
  ["@punctuation.delimiter"]: { fg: c.magentaLight },
  ["@punctuation.bracket"]: { fg: c.magentaLight },
  ["@punctuation.special"]: { fg: c.magentaLight },
  ["@operator"]: { link: "Operator" },
  ["@markup.heading"]: { fg: c.redDark, bold: true },
  ["@markup.strong"]: { bold: true },
  ["@markup.italic"]: { italic: true },
  ["@markup.raw"]: { fg: c.green },
  ["@markup.link"]: { fg: c.cyanLight, underline: true },
  ["@markup.list"]: { fg: c.magentaLight },

  // LSP diagnostics
  DiagnosticError: { fg: c.red },
  DiagnosticWarn: { fg: c.brightRed },
  DiagnosticInfo: { fg: c.cyanLight },
  DiagnosticHint: { fg: c.green },
  DiagnosticOk: { fg: c.green },
  DiagnosticUnderlineError: { sp: c.red, underline: true },
  DiagnosticUnderlineWarn: { sp: c.brightRed, underline: true },
  DiagnosticUnderlineInfo: { sp: c.cyanLight, underline: true },
  DiagnosticUnderlineHint: { sp: c.green, underline: true },
  LspReferenceText: { bg: c.bgAlt },
  LspReferenceRead: { bg: c.bgAlt },
  LspReferenceWrite: { bg: c.bgAlt },
  LspInlayHint: { fg: c.fgDim, bg: c.bgAlt, italic: true },
}

// Mirrors packages/rouge-3/rouge-3.ts's terminal.ansi* mapping, so the
// integrated terminal in VS Code and Neovim's built-in terminal agree.
const terminalColors = [
  palette.black.light, // 0
  palette.red.base, // 1
  palette.green.base, // 2
  palette.yellow.base, // 3
  palette.blue.base, // 4
  palette.magenta.base, // 5
  palette.cyan.light, // 6
  palette.black.lightest, // 7
  palette.black.lighter, // 8
  palette.red.base, // 9
  palette.green.light, // 10
  palette.yellow.light, // 11
  palette.blue.light, // 12
  palette.magenta.light, // 13
  palette.cyan.lighter, // 14
  palette.black.lightest, // 15
]

function luaValue(value: string | boolean): string {
  return typeof value === "boolean" ? String(value) : `"${value}"`
}

function serializeHighlights(groups: Record<string, HlOpts>): string {
  return Object.entries(groups)
    .map(([group, opts]) => {
      const fields = Object.entries(opts)
        .map(([key, value]) => `${key} = ${luaValue(value)}`)
        .join(", ")
      return `  ["${group}"] = { ${fields} },`
    })
    .join("\n")
}

const lua = `-- Rouge 3 for Neovim
-- Generated by packages/rouge-3-nvim/generate.ts from @rouge/palette - do
-- not edit by hand, edit the palette/generator and run \`bun run build\`.

vim.cmd("hi clear")
if vim.fn.exists("syntax_on") == 1 then
  vim.cmd("syntax reset")
end

vim.o.termguicolors = true
vim.g.colors_name = "rouge3"

local highlights = {
${serializeHighlights(highlights)}
}

for group, opts in pairs(highlights) do
  vim.api.nvim_set_hl(0, group, opts)
end

local terminal_colors = {
${terminalColors.map((hex) => `  "${hex}",`).join("\n")}
}

for i, hex in ipairs(terminal_colors) do
  vim.g["terminal_color_" .. (i - 1)] = hex
end
`

const outFile = path.join(process.cwd(), "colors", "rouge3.lua")
await fs.mkdir(path.dirname(outFile), { recursive: true })
await fs.writeFile(outFile, lua)
console.log(`wrote ${outFile}`)
