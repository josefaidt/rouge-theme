# Change Log
All notable changes to the "rouge-theme" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]
---
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
