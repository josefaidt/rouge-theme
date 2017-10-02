# Change Log
All notable changes to the "rouge-theme" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]
---
## [0.0.3] - 2017-10-02
### Added
- *new* name: Rouge Theme
- list/tree coloring:
  - hover
  - active/inactive
- terminal color palette, moving to QA

### Changed
- editor coloring:
  - status bar hover colors faded for ease of reading text
  - welcome page button colors edited for flat look
  - notification button colors edited to match welcome page
  - changed dropdown control background, got rid of alpha use in favor of straight color to avoid dropdown choices being brighter than the initial background (dropdown choices ignore alpha)

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
