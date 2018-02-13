# Change Log
All notable changes to the "rouge-theme" extension will be documented in this file.

## [Released]
---
## [1.2.4] - 2018-02-12
### Added
- syntax: SCSS puntuation in mixins and keyframes

## [1.2.3] - 2018-02-12
### Added
- syntax: JS/JSX React styling properties to reflect CSS styling
- syntax: JS/JSX React styling property values to reflect CSS styling
- syntax: JS/JSX React text within tags to reflect HTML styling
- syntax: JS/JSX React tag brackets < and > to reflect HTML styling
- syntax: MARKDOWN meta characters in paragraphs set to reflect text color

### Changed
- syntax: JS/JSX Changed meta selector to default #bbb, includes object literal key coloring

## [1.2.1] - 2018-02-12
### Added
- syntax: JS/JSX React tag name colors to reflect HTML styling
- syntax: JS/JSX React tag attributes italicized to reflect HTML styling

## [1.2.0] - 2017-12-06
### Added
- syntax: GLOBAL terminator punctuation coloring
- syntax: JS string interpolation
- syntax: JS arrow function
- syntax: punctuation (braces, brackets, semicolons, etc.) coloring
- syntax: HTML normalized yellow on HTML with JS
- syntax: normalized pink color across languages

### Changed
- global: removed and unlinked base-dark-vs.json
- syntax: JS gave color to variables for distinction
- syntax: JS normalized coloring on support classes, modules, native functions
- syntax: CSS variables darkened to match JS variables
- syntax: CSS gave color to operators and braces for flow
- syntax: CSS changed color of numeric constants to match support functions (orange)
- syntax: GLOBAL brightened color on strings for readability
- syntax: GLOBAL italicized storage and operator keywords (function, if, try, typeof, etc.)
- syntax: GLOBAL changed "invalid" text to match text color (previously white)
- syntax: MARKDOWN brightened blockquotes' green to match comments
- editor: gave scrollbar 80% opacity on inactive, 95% active

### Fixed
- `editorSuggestWidget.highlightForeground` - changed back to yellow from grey
- syntax code refactoring - condensed heavily-scoped entries
- syntax: CSS fixed issues with `meta` tags and pseudoclasses


## [1.1.2] - 2017-10-26
### Fixed
- Parse error in syntax, line 343 had a comma on the last line

### Changed
- editor: drop background changed to match hover background


## [1.1.1] - 2017-10-13
### Changed
- SCSS/LESS/CSS logical operators changed to match media


## [1.1.0] - 2017-10-11
### Added
- icon: removed blankspace
- editor: text selection background added
- editor: input validation (error, warning, info)
- editor: input option active border darkened to match
- editor: badge coloring
- editor: code lense to match line numbers
- editor: editor overview selection highlight to match selection highlight background
- editor: embedded editor coloring set to 4% darker than editor background

### Changed
- editor: flattened sidebar headers for contrast (option added to reverse)
- editor: flipped button colors (hover/background were backwards)
- editor: list drop background color changed to match hover color

## [1.0.2] - 2017-10-11
### Changed
- shrunk icon to match 400x400 icons of other projects
- updated readme with smaller screenshots and options

## [1.0.1] - 2017-10-11
### Added
- editor: option for flattening sidebar header

## [1.0.0] - 2017-10-10
### Added
- editor: gutter coloring
- editor: diff editor coloring
- editor: warning squigly
- editor: error squigly
- editor: merge colors
- SCSS/LESS/CSS fixed vendored property names

### Changed
- Markup inserted color to lighter green to identify against strings
- CSS curly braces and parenthesis to match text
- HTML unbolded tag names
- HTML fixed 'id' attribute coloring
- SCSS/LESS/CSS logical operators to match text
- SCSS/LESS/CSS keyword operators (ex: =, ^=) to match text color
- SCSS/LESS/CSS attribute selector brackets
- SCSS/LESS/CSS changed property values to match string text
- SCSS/LESS/CSS unit keywords changed to match property values
- SCSS/LESS/CSS flipped tag names to match HTML tag color

## [Unreleased]
---
## [0.0.5] - 2017-10-07
### Added
- editor: suggest widget coloring
- editor: hover widget coloring
- editor: bracket match coloring
- syntax: CSS attribute names (:after)
- syntax: Java/C# keyword italics

### Changed
- editor: dropdown background, foreground, and border changed to match input control
- editor: pickergroup and list highlighting changed to yellow
- editor: brightened inactive selection background by 5%
- syntax: CSS unit color to match numeric
- syntax: CSS brightened property values for visibility

## [0.0.4] - 2017-10-05
### Added
- syntax: fixed 'typeof' keyword coloring in JS
- syntax: normalized CSS selector colors (class, tag, id)
- syntax: SCSS/LESS logical operator color
- syntax: SCSS/LESS keyword color
- syntax: Markdown overhaul
  - Heading color to match tag
  - Bullet/lists color to match heading
  - Link (underline) color
  - Link text, image alt text
  - Bold color & font style
  - Inline code color
  - Blockquotes color & font style
  - invalid, changed, error, deleted, deprecated

### Changed
- syntax: CSS/SCSS selector colors
- syntax: Changed variable colors to match default text color
- syntax: JS dropped alpha of function declarations to 95%
- syntax: brightened support function and keyword operator by 7% for readability
- editor: brightened highlight background for visibility
- editor: brightened 'find' match highlight for visibility
- editor: brightened word selection highlight for visibility

## [0.0.3] - 2017-10-02
### Added
- *new* name: Rouge Theme
- list/tree coloring:
  - hover
  - active/inactive
  - drop background
- terminal color palette, moving to QA

### Changed
- editor coloring:
  - status bar hover colors faded for ease of reading text
  - welcome page button colors edited for flat look
  - notification button colors edited to match welcome page
  - changed dropdown control background, got rid of alpha use in favor of straight color to avoid dropdown choices being brighter than the initial background (dropdown choices ignore alpha)
  - sidebar drop background to match color scheme (added df as alpha)

### Removed
- renamed theme files to match new name

## [0.0.2] - 2017-09-30
### Added
- editor coloring:
  - title bar (macOS)
  - input
  - dropdown
  - picker group
  - extension buttons
  - debugging toolbar
- started terminal colors
  - need to create color palette

### Changed
- editor coloring
  - status bar (changed to dark)
  - title bar
  - terminal background
  - inactive title bar
  - inactive tabs

## [0.0.1] - 2017-09-29
### Added
- initial syntax coloring (primarily JS)
  - issue with 'typeof'
- essential editor colors
- declared theming colors
- editor coloring:
  - editor
  - tabs
  - activity bar
  - sidebar
  - buttons
    - welcomePage
    - notifications
  - scrollbar
