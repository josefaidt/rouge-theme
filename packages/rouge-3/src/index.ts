import { palette, withAlpha } from "./palette"

export { palette } from "./palette"

export default {
  name: "Rouge 3",
  type: "dark",
  colors: {
    focusBorder: palette.black.light,
    "editor.foreground": palette.black.lighter,
    "editor.background": palette.black.dark,
    "sideBar.background": palette.black.base,
    "editorGroupHeader.noTabsBackground": palette.black.darker,
    "editorCursor.background": palette.green.base,
    "editorCursor.foreground": palette.green.base,
    "editorBracketMatch.background": withAlpha(palette.black.light, 20),
    "editorBracketMatch.border": palette.green.darker,
    "progressBar.background": palette.red.dark,

    // EDITOR
    "editorLineNumber.foreground": withAlpha(palette.black.light, 70),
    "editorLineNumber.activeForeground": palette.black.lighter,
    "editor.lineHighlightBackground": withAlpha(palette.cyan.base, 13),
    "editor.wordHighlightBackground": withAlpha(palette.cyan.base, 60),
    "editor.wordHighlightStrongBackground": withAlpha(palette.cyan.base, 85),
    "editor.selectionBackground": withAlpha(palette.cyan.base, 60),
    "editor.selectionForeground": palette.cyan.base,
    "editor.inactiveSelectionBackground": withAlpha(palette.cyan.base, 30),
    "editorWarning.foreground": withAlpha(palette.brightRed.base, 90),
    "editorError.foreground": withAlpha(palette.red.base, 90),

    // ACTIVITY BAR
    "activityBar.background": palette.black.base,
    "activityBar.foreground": palette.black.lighter,
    "activityBarBadge.background": palette.red.base,
    "activityBarBadge.foreground": palette.red.lightest,
    "activityBar.border": palette.black.dark,

    // SIDEBAR
    "sideBar.border": withAlpha(palette.magenta.dark, 40),
    "sideBar.foreground": palette.black.lighter,
    "sideBarSectionHeader.background": palette.black.base,
    "sideBarSectionHeader.foreground": palette.black.lightest,

    // TABS
    "editorGroupHeader.tabsBackground": palette.black.base,
    "editorGroupHeader.tabsBorder": withAlpha(palette.magenta.dark, 60),
    "tab.activeBackground": withAlpha(palette.black.light, 30),
    "tab.activeForeground": palette.black.lightest,
    "tab.inactiveBackground": palette.black.base,
    "tab.inactiveForeground": palette.black.lighter,
    "tab.border": withAlpha(palette.magenta.dark, 40),

    // STATUSBAR
    "statusBar.background": palette.black.base,
    "statusBar.foreground": palette.black.lighter,
    "statusBar.debuggingBackground": palette.green.dark,
    "statusBar.debuggingForeground": palette.green.lightest,
    "statusBar.noFolderBackground": palette.red.dark,
    "statusBar.noFolderForeground": palette.red.lightest,

    // TITLE BAR
    "titleBar.activeBackground": palette.black.base,
    "titleBar.activeForeground": palette.black.lighter,
    "titleBar.inactiveBackground": withAlpha(palette.red.dark, 85),
    "titleBar.inactiveForeground": palette.red.lighter,

    // LIST
    "list.activeSelectionBackground": withAlpha(palette.red.base, 75),
    "list.activeSelectionForeground": palette.red.lightest,
    "list.hoverBackground": withAlpha(palette.black.light, 30),
    "list.hoverForeground": palette.black.lightest,

    // INPUT
    "input.background": palette.black.base,
    "input.border": palette.red.dark,
    "input.foreground": palette.black.lighter,
    "input.placeholderForeground": palette.black.light,

    // SCROLLBAR
    "scrollbarSlider.activeBackground": withAlpha(palette.red.base, 75),
    "scrollbarSlider.background": withAlpha(palette.red.dark, 60),
    "scrollbarSlider.hoverBackground": withAlpha(palette.red.base, 60),

    // BUTTONS
    "button.foreground": palette.cyan.lightest,
    "button.background": palette.cyan.base,
    "button.hoverBackground": palette.cyan.light,

    // DROPDOWNS
    "dropdown.background": palette.black.base,
    "dropdown.border": palette.red.base,
    "dropdown.foreground": palette.black.lighter,

    // PANELS
    "panel.background": palette.black.base,
    "panel.border": withAlpha(palette.magenta.dark, 40),
    "panelTitle.activeForeground": palette.black.lighter,
    "panelTitle.inactiveForeground": palette.black.light,

    // TERMINAL COLORS
    "terminal.background": palette.black.base,
    "terminal.foreground": palette.black.lighter,
    "terminalCursor.background": palette.green.base,
    "terminalCursor.foreground": palette.green.base,
    "terminal.ansiBlack": palette.black.light,
    "terminal.ansiBlue": palette.blue.base,
    "terminal.ansiCyan": palette.cyan.light,
    "terminal.ansiGreen": palette.green.base,
    "terminal.ansiMagenta": palette.magenta.base,
    "terminal.ansiRed": palette.red.base,
    "terminal.ansiWhite": palette.black.lightest,
    "terminal.ansiYellow": palette.yellow.base,
    "terminal.ansiBrightBlack": palette.black.lighter,
    "terminal.ansiBrightBlue": palette.blue.light,
    "terminal.ansiBrightCyan": palette.cyan.lighter,
    "terminal.ansiBrightGreen": palette.green.light,
    "terminal.ansiBrightMagenta": palette.magenta.light,
    "terminal.ansiBrightRed": palette.red.base,
    "terminal.ansiBrightWhite": palette.black.lightest,
    "terminal.ansiBrightYellow": palette.yellow.light,

    // BADGES
    "badge.background": palette.red.base,
    "badge.foreground": palette.red.lightest,

    "widget.shadow": palette.black.darker,
    "selection.background": withAlpha(palette.cyan.base, 60),
    descriptionForeground: palette.black.light,
    errorForeground: palette.red.dark,
  },

  tokenColors: [
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment", "unused.comment", "wildcard.comment"],
      settings: {
        fontStyle: "italic",
        foreground: palette.black.light,
      },
    },
    {
      name: "Constant",
      scope: "constant",
      settings: {
        foreground: palette.brightRed.light,
      },
    },
    {
      name: "Entity & Function",
      scope: ["entity", "entity.name.function"],
      settings: {
        foreground: palette.red.light,
      },
    },
    {
      name: "Entity Name",
      scope: ["entity.name"],
      settings: {
        foreground: palette.red.base,
      },
    },
    {
      name: "Entity Name Type",
      scope: ["entity.name.type"],
      settings: {
        foreground: palette.red.light,
      },
    },
    {
      name: "Keyword",
      scope: "keyword",
      settings: {
        foreground: palette.magenta.light,
        fontStyle: "italic",
      },
    },
    {
      name: "Operators",
      scope: "keyword.operator",
      settings: {
        foreground: palette.magenta.light,
        fontStyle: "regular",
      },
    },
    {
      name: "`New` Operator",
      scope: "keyword.operator.new",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "`This` Variable",
      scope: "variable.language.this",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Object Keys",
      scope: ["meta.object-literal.key"],
      settings: {
        foreground: palette.black.lighter,
      },
    },
    {
      name: "Variable",
      scope: "variable",
      settings: {
        foreground: palette.red.base,
      },
    },
    {
      name: "Support",
      scope: "support",
      settings: {
        foreground: palette.yellow.base,
      },
    },
    {
      name: "Support Functions",
      scope: "support.function",
      settings: {
        foreground: palette.red.light,
      },
    },
    {
      name: "Punctuation",
      scope: "punctuation",
      settings: {
        foreground: palette.magenta.light,
      },
    },
    {
      name: "String",
      scope: ["string", "punctuation.definition.string"],
      settings: {
        foreground: palette.green.base,
      },
    },
    {
      name: "Params",
      scope: ["variable.parameter", "meta.parameter"],
      settings: {
        foreground: palette.red.base,
      },
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: palette.magenta.light,
        fontStyle: "italic",
      },
    },
    {
      name: "[HTML] Entity",
      scope: ["entity.name.tag", "entity.name.tag.other.html"],
      settings: {
        foreground: palette.red.base,
      },
    },
    {
      name: "[HTML] Entity Attributes",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: palette.yellow.base,
        fontStyle: "italic",
      },
    },
    {
      name: "[CSS] Property Names",
      scope: ["support.type.property-name.css", "support.type.property-name.scss"],
      settings: {
        foreground: palette.black.lighter,
      },
    },
    {
      name: "[CSS] Property Values",
      scope: [
        "support.constant.property-value.css",
        "meta.property-value.css",
        "source.css support.constant",
        "source.css keyword.other.unit",
      ],
      settings: {
        foreground: palette.green.base,
        fontStyle: "none",
      },
    },
    {
      name: "[MARKDOWN] - Heading Name Section",
      scope: [
        "entity.name.section.markdown",
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown",
      ],
      settings: {
        foreground: palette.red.dark,
        fontStyle: "bold",
      },
    },
    {
      name: "[MARKDOWN] - Paragraph",
      scope: ["meta.paragraph.markdown"],
      settings: {
        foreground: palette.black.lighter,
      },
    },
    {
      name: "[MARKDOWN] - Inline Code",
      scope: "markup.inline.raw.string.markdown",
      settings: {
        foreground: palette.green.base,
      },
    },
    {
      name: "[JS/JSX] - React Tag Names",
      scope: [
        "source.js entity.name.tag.js",
        "source.jsx entity.name.tag.js",
        "entity.name.tag.js",
      ],
      settings: {
        foreground: palette.red.base,
      },
    },
    {
      name: "[JS/JSX] - Custom React Tag Names",
      scope: [
        "source.js support.class.component",
        "source.jsx support.class.component",
        "support.class.component.js",
      ],
      settings: {
        foreground: palette.red.light,
      },
    },
  ],
}
