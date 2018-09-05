# Change Log
All notable changes to the "rouge-theme" extension will be documented in this file.

## [Released]
---
## [1.5.1] - 2018-09-05
### Added
- editor: Windows/Linux menubar, full color

### Changed
- editor: titlebar now extends to Windows/Linux, polished colors to fit palette
- editor: terminal.ansiBrightBlack & black brightened a bit for readability
- editor: editorSuggestWidget.selectedBackground changed to match new hover background

### Fixed
- syntax: numbers were green instead of yellow after a brief attempt to fix some punctuation coloring issues

## [1.5.0] - 2018-09-02
### Added
- editor:
  - settings (preview) - defined colors from existing palette
  - panel border to match palette [trello card CvzSFwiQ](https://trello.com/c/CvzSFwiQ)
  - paneltitle border, foreground, inactive foreground to match palette
  - editorGroup border color set to match palette

### Changed
- editor:
  - color consolidation: #293a57 from #444955 for better contrast
    - list hover
    - list inactive highlight
    - statusbar item highlight
    - command palette highlight
    - welcome button hover
    - peekViewResult selection background
  - re-enabled activitybar border, same as sidebar #1A2335

### Fixed
- syntax:
  - [GLOBAL/JS] decimal point [trello card tB7lQr3a](https://trello.com/c/tB7lQr3a)
  - [SCSS] comma at-rule each [trello card BQxiiU9o](https://trello.com/c/BQxiiU9o)
- editor:
  - Error Foreground (i.e. "No Results") made rouge [trello card KISaJIyw](https://trello.com/c/KISaJIyw)
  - [GLOBAL/JS] colon always green [trello card FMwErbYb](https://trello.com/c/FMwErbYb)
  - [Markdown] small issue with <> contained items [trello card 31kJCZub](https://trello.com/c/31kJCZub)
  - [CSS/SCSS] punctuation color match green

## [1.4.7] - 2018-08-31
### Added
- editor:
  - breadcrumbs

### Changed
- editor:
  - list hover made blue
  - list inactive made blue

## [1.4.6] - 2018-07-25
### Changed
- syntax: 
  - React JS/JSX: changed variable property values to match variable color (rouge color)
  - Global: changed support variable property color from support's existing yellow to match other properties (pink)

## [1.4.5] - 2018-07-10
### Changed
- editor: tab border same as editor background
- editor: notifications - dimmed borders separating each notification in notification center, previously same color as border
- editor: notifications - made notification background same as header background to flatten

## [1.4.4] - 2018-06-15
### Added
- editor: OverviewRuler - colors that appear in the area with the scrollbar [trello card: b7SN0H4I](https://trello.com/c/b7SN0H4I)
  - findMatchForeground - same as highlight
  - modifiedForeground - same as editorGutter
  - addedForeground - same as editorGutter
  - deletedForeground - transparent error color
  - errorForeground - same as editorGutter
  - infoForeground - same as info colors
- editor: Line number active foreground - brighter color of line number foreground [trello card: UuRoc1D8](https://trello.com/c/UuRoc1D8)
- editor: list error foreground - same color as editorGutter errors
- editor: list warning foreground - orange color used for syntactical methods
- editor: `editorGroup.dropBackground` - drag-n-drop color of tabs to editor panes, similar color to button hover backgrounds w/ 40% opacity

### Changed
- editorSuggestWidget.selectedBackground - changed to #7580954d from #c6797e4d [trello card: IrxvtriA](https://trello.com/c/IrxvtriA)

## [1.4.3] - 2018-06-14
### Changed
- editor: terminal black and bright black were too dark to be readable, brightened [trello card: sAFF8f3t](https://trello.com/c/sAFF8f3t)
- editor: welcome page button background color too dark, brightened [trello card: ixUQmuH2](https://trello.com/c/ixUQmuH2)
- editor: blockquote background too dark, brightened [trello card: ixUQmuH2](https://trello.com/c/ixUQmuH2)

## [1.4.2] - 2018-05-26
## [1.4.2.2] - 2018-05-26
### Added
- ProgressBar background **untested**
- list.invalidItemForeground **untested**
- SQL [trello card: 6xQyBtal](https://trello.com/c/6xQyBtal)
  - database name: generic text color
  - table name: generic text color

### Changed
- Notifications [trello card: zTdzW8lu](https://trello.com/c/zTdzW8lu)
  - changed waffle background to match welcome page
- input validation background (error, warning, info): #1A2335 [trello card: 5KflBR0T](https://trello.com/c/5KflBR0T)
- Markdown
  - changed bold to flatten, #bbb [trello card: vvSdT0Wx](https://trello.com/c/vvSdT0Wx)


## [1.4.2.1] - 2018-05-21
### Added
- editor: base colors
  - contrastBorder
  - widget.shadow 
  - descriptionForeground (displays on welcome page)
  - errorForeground **untested**
- editor: rulers
- editor: indent guides

### Changed
- PickerGroup (command palette)
  - changed border color to match input border

## [1.4.1] - 2018-05-06
### Added
- Whitespace coloring [trello card: XRkiwG7a](https://trello.com/c/XRkiwG7a)

### Changed
- Input validation backgrounds and borders to fit flush with theme [trello card: 5KflBR0T](https://trello.com/c/5KflBR0T)
- Text background on inline code items in hover widget [trello card: y8DvbAgj](https://trello.com/c/y8DvbAgj)

## [1.4.0] - 2018-03-27
### Added
- Pug/Jade support
  - punctuation made bright green
    - string interpolation
    - argument brackets
    - attribute brackets
    - variable assignments, constants
  - equals sign darkened to match HTML
  - italicized attribute names
  - darkened class and ID names to match CSS selectors
- editor: Text Colors
  - links: base and hover
  - blockquote: border and background
  - text foreground: `#bbb`
### Changed
- welcome screen button backgrounds, gave subtle background to easily discern

## [1.3.6] - 2018-03-23
### Added
- syntax: JS `instanceof` italicized

### Changed
- editor: suggest widget background and text to match peek view widget

## [1.3.5] - 2018-03-13
### Added
- editor: *New* Notification Center
- editor: list focus background and foreground
- editor: focus border coloring to match hover border
- syntax: better XML support, styled like HTML
- symtax: JS typeof italicized

### Changed
- editor: debugging background: reduced alpha

## [1.3.4] - 2018-03-05
### Added
- syntax: Markdown - inline code rendered with punctuation color (bright green) for visibility

### Fixed
- syntax: better JSON property name support
- syntax: CSS property name support
- syntax: Markdown fenced code support
- syntax: Markdown - embedded JSON support

## [1.3.3] - 2018-02-23
### Changed
- editor: brightened hover widget background to match peek view results background
- editor: changed hover widget border to pale blue to ease readability and to easily discern from underlying code
- editor: removed rouge color on activity bar icons to flatten the appearance
- editor: removed activity bar border to flatten appearance
- editor: removed tab group border to flatten appearance

## [1.3.2] - 2018-02-21
### Changed
- syntax: CSS URL's that are not strings - changed to string color to ease readability
- syntax: CSS punctuation on class, ID, and pseudo-selectors - changed to match coloring of selector
- syntax: CSS punctuation on keywords (i.e. `import`) - changed to match coloring of keyword
- syntax: GLOBAL object literal keys - changed to match CSS property keys

### Fixed
- syntax: CSS class selector coloring was not affecting CSS within HTML style tags - fixed to reflect display in CSS files
- syntax: CSS pseudo-class selector coloring within HTML style tags - fixed to reflect display in CSS files
- syntax: SCSS/LESS property values - fixed due to some commas and values in property values getting styling from meta (same color as tag selectors)

## [1.3.1] - 2018-02-20
### Fixed
- syntax: object properties inside an object literal

## [1.3.0] - 2018-02-13
### Added
- editor: Peek view coloring - all settings
- editor: Git Decorations

### Changed
- syntax: GLOBAL italicized `new` operator
- syntax: GLOBAL italicized `this` variable
- editor: button background and hover background - removed rouge color in favor of flatter, blue-grey color
- editor: extensions button background and hover background - applied buttons a 75% alpha background, 100% on hover
- editor: status bar buttons - applied similar hover colors, 100% alpha on active color
- editor: prominent status bar button - applied 50% alpha on background, 100% on hover
- editor: reduced alpha on current merge color by 10% for readability of changes
- editor: Walkthrough embedded editor background changed to match peek view background

### Fixed
- syntax: GLOBAL comment block with code styled to match comment coloring rather than using code coloring
- syntax: JS/JSX split out tag styling properties from object literal key colors. Object literal key colors reverted to the tags' pink, property keys kept #bbb coloring

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
