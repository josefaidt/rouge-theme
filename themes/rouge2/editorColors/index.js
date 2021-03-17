const theme = require('../theme')
const terminalColors = require('./terminal')
const baseColors = require('./base')
const { opac } = theme

module.exports = {
  focusBorder: theme.bg_light,
  'editor.foreground': theme.bg_lighter,
  'editor.background': theme.bg_dark,
  'sideBar.background': theme.bg,
  'editorGroupHeader.noTabsBackground': theme.bg_darker,
  // 'editorCursor.background': theme.rouge_dark,
  'editorCursor.background': theme.green,
  // 'editorCursor.foreground': theme.rouge_dark,
  'editorCursor.foreground': theme.green,
  'editorBracketMatch.background': opac(theme.bg_light, 20),
  // 'editorBracketMatch.border': theme.berry_light,
  'editorBracketMatch.border': theme.green_darker,
  'progressBar.background': theme.rouge_dark,
  //
  // EDITOR
  //
  'editorLineNumber.foreground': opac(theme.bg_light, 70),
  'editorLineNumber.activeForeground': theme.bg_lighter,
  'editor.lineHighlightBackground': opac(theme.accent, 13),
  'editor.wordHighlightBackground': opac(theme.accent, 60),
  'editor.wordHighlightStrongBackground': opac(theme.accent, 85),
  'editor.symbolHighlightBackground': opac(theme.accent, 60),
  'editor.findMatchBackground': opac(theme.accent, 60),
  'editor.findMatchHighlightBackground': opac(theme.accent, 60),
  'editor.findRangeHighlightBackground': opac(theme.accent, 30),
  'editor.hoverHighlightBackground': opac(theme.accent, 30),
  'editor.selectionBackground': opac(theme.accent, 60),
  'editor.selectionForeground': theme.accent,
  'editor.inactiveSelectionBackground': opac(theme.accent, 30),
  'editorLink.activeForeground': theme.bg_lighter,
  'editorGroup.background': theme.bg,
  // 'editorWarning.background': theme.berry,
  'editorWarning.foreground': opac(theme.peach, 90),
  'editorError.foreground': opac(theme.berry, 90),
  'editorCodeLens.foreground': '#758095',
  //
  // EDITOR GUTTER
  //
  'editorGutter.background': theme.bg_dark,
  'editorGutter.addedBackground': opac(theme.green, 80),
  'editorGutter.deletedBackground': opac(theme.berry, 80),
  'editorGutter.modifiedBackground': opac(theme.grapple, 80),
  //
  // EDITOR OVERVIEW RULER **NEEDS TESTING**
  //
  // 'editorOverviewRuler.selectionHighlightForeground': '#91d1bd66',
  'editorOverviewRuler.selectionHighlightForeground': opac(theme.accent, 40),
  // 'editorOverviewRuler.border': '#293a57cc',
  'editorOverviewRuler.border': opac(theme.bg_light, 30),
  'editorOverviewRuler.findMatchForeground': theme.accent_dark,
  'editorOverviewRuler.modifiedForeground': theme.grapple_dark,
  'editorOverviewRuler.addedForeground': theme.green_dark,
  'editorOverviewRuler.deletedForeground': theme.berry_dark,
  'editorOverviewRuler.errorForeground': theme.berry,
  'editorOverviewRuler.infoForeground': theme.blue_light,
  // 
  // 
  // 
  'editorLightBulbAutoFix.background': theme.peach,
  // 'editorGutter.commentRangeForeground':  // Editor gutter decoration color for commenting ranges.
  // 'editorGutter.foldingControlForeground': // Color of the folding control in the editor gutter.
  'sash.hoverBorder': theme.rouge,
  // 
  // MARKER NAVI
  // 
  'editorMarkerNavigation.background': theme.bg,
  'editorMarkerNavigationError.background': opac(theme.berry, 40),
  'editorMarkerNavigationWarning.background': opac(theme.peach, 40),
  'editorMarkerNavigationInfo.background': opac(theme.purple, 40),
  //
  // ACTIVITY BAR
  //
  'activityBar.background': theme.bg,
  'activityBar.foreground': theme.bg_lighter,
  'activityBarBadge.background': theme.rouge,
  'activityBarBadge.foreground': theme.rouge_lightest,
  'activityBar.border': theme.bg_dark,
  //
  // BADGES
  //
  'badge.background': theme.rouge,
  'badge.foreground': theme.rouge_lightest,
  //
  // SIDEBAR
  //
  'sideBar.background': theme.bg,
  // 'sideBar.border': opac(theme.bg_light, 20),
  'sideBar.border': opac(theme.purple_dark, 40),
  'sideBar.dropBackground': theme.rouge,
  'sideBar.foreground': theme.bg_lighter,
  'sideBarSectionHeader.background': theme.bg,
  'sideBarSectionHeader.foreground': theme.bg_lightest,
  //
  // TABS
  //
  'editorGroupHeader.noTabsBackground': theme.bg,
  // 'editorGroupHeader.noTabsBackground': opac(theme.bg_light, 30),
  'editorGroupHeader.tabsBackground': theme.bg,
  'editorGroupHeader.tabsBorder': opac(theme.purple_dark, 60),
  // 'editorGroupHeader.tabsBackground': opac(theme.bg_light, 30),
  // 'tab.activeBackground': opac(theme.rouge_dark, 85),
  'tab.activeBackground': opac(theme.bg_light, 30),
  'tab.activeForeground': theme.bg_lightest,
  // 'tab.inactiveBackground': opac(theme.bg_light, 30),
  'tab.inactiveBackground': theme.bg,
  'tab.inactiveForeground': theme.bg_lighter,
  'tab.border': opac(theme.purple_dark, 40),
  // 'tab.border': opac(theme.bg_light, 20),
  // 'tab.activeBorder': opac(theme.rouge, 85),
  // 'tab.activeBorderTop': theme.rouge,
  // 'tab.hoverBackground': opac(theme.bg_light, 40),
  // 'tab.hoverBorder': theme.rouge_darker,
  // 'tab.activeModifiedBorder': theme.rouge_lightest,
  // 'tab.inactiveModifiedBorder': theme.rouge_lightest,
  'tab.unfocusedInactiveForeground': theme.bg_light,
  'tab.unfocusedActiveForeground': opac(theme.bg_lightest, 50),
  // 'tab.unfocusedActiveBorder': theme.rouge_darker,
  // 'tab.unfocusedActiveBorderTop': theme.rouge_darker,
  // 'tab.unfocusedHoverBackground': opac(theme.bg_light, 10),
  // 'tab.unfocusedHoverBorder': theme.rouge_darker,
  // 'tab.unfocusedActiveModifiedBorder': theme.rouge_lightest,
  // 'tab.unfocusedInactiveModifiedBorder': theme.rouge_lightest,
  // 'editorPane.background': '#f3f',
  //
  // BREADCRUMBS
  //
  'textLink.foreground': theme.accent_light,
  'textLink.activeForeground': theme.rouge_lighter,
  // 'breadcrumb.foreground': theme.bg_light,
  'breadcrumb.foreground': theme.bg_lighter,
  'breadcrumb.background': theme.bg_dark,
  // 'breadcrumb.focusForeground': theme.bg_lightest,
  'breadcrumb.focusForeground': theme.rouge_lighter,
  // 'breadcrumb.activeSelectionForeground': theme.rouge,
  'breadcrumb.activeSelectionForeground': theme.rouge,
  'breadcrumbPicker.background': theme.bg_dark,
  //
  // LIST
  //
  'list.activeSelectionBackground': opac(theme.rouge, 75),
  'list.activeSelectionForeground': theme.rouge_lightest,
  'list.dropBackground': opac(theme.bg_light, 30),
  'list.focusBackground': opac(theme.bg_light, 50),
  'list.focusForeground': theme.bg_lightest,
  'list.hoverBackground': opac(theme.bg_light, 30),
  'list.hoverForeground': theme.bg_lightest,
  'list.inactiveFocusBackground': opac(theme.bg_light, 15),
  'list.inactiveFocusForeground': theme.bg_light,
  'list.inactiveSelectionBackground': opac(theme.bg_light, 30),
  'list.inactiveSelectionForeground': opac(theme.bg_lightest, 90),
  'list.invalidItemForeground': theme.berry_dark,
  'list.errorForeground': theme.berry_dark,
  'list.warningForeground': opac(theme.berry, 80),
  'listFilterWidget.background': theme.bg,
  'listFilterWidget.outline': theme.rouge,
  'listFilterWidget.noMatchesOutline': theme.rouge_darker,
  // 'tree.indentGuidesStroke': opac(theme.bg_light, 50),
  'list.filterMatchBackground': opac(theme.bg_light, 50),
  'tree.indentGuidesStroke': theme.purple_dark,
  'list.highlightForeground': theme.rouge_light,
  //
  // WIDGETS
  //
  'widget.shadow': theme.bg_darker,
  // 'editorWidget.background': opac(theme.bg_light, 50),
  // 'editorWidget.background': theme.bgb_dark,
  'editorWidget.background': theme.bg,
  'editorWidget.border': theme.rouge,
  'editorWidget.resizeBorder': theme.rouge,
  // 'editorSuggestWidget.background': theme.bgb_dark,
  'editorSuggestWidget.background': theme.bg,
  'editorSuggestWidget.border': theme.purple_dark,
  // 'editorSuggestWidget.border': theme.rouge_darker,
  'editorSuggestWidget.foreground': theme.bg_lighter,
  'editorSuggestWidget.highlightForeground': theme.rouge_light,
  'editorSuggestWidget.selectedBackground': opac(theme.bg_light, 30),
  // 'editorHoverWidget.background': opac(theme.bg, 90),
  // 'editorHoverWidget.background': theme.bgb_dark,
  'editorHoverWidget.background': theme.bg_dark,
  'editorHoverWidget.border': theme.purple_dark,
  'selection.background': opac(theme.accent, 60),
  descriptionForeground: theme.bg_light,
  errorForeground: theme.berry_dark,
  //
  // INPUT
  //
  'input.background': theme.bg,
  'input.border': theme.rouge_dark,
  'input.foreground': theme.bg_lighter,
  'inputOption.activeBorder': theme.rouge,
  'input.placeholderForeground': theme.bg_light,
  'inputValidation.errorBackground': theme.berry_darker,
  'inputValidation.errorForeground': theme.berry_lighter,
  // 'inputValidation.errorBorder': theme.berry_lighter,
  // 'inputValidation.warningBackground': theme.peach_darker,
  // 'inputValidation.warningForeground': theme.peach_lighter,
  // 'inputValidation.warningBorder': theme.peach_lighter,
  'inputValidation.infoBackground': theme.bgb_dark,
  'inputValidation.infoForeground': theme.bgb_lighter,
  // 'inputValidation.infoBorder': theme.bgb_lighter,
  //
  // SCROLLBAR
  //
  'scrollbar.shadow': opac(theme.rouge_darker, 10),
  'scrollbarSlider.activeBackground': opac(theme.rouge, 75),
  'scrollbarSlider.background': opac(theme.rouge_dark, 60),
  'scrollbarSlider.hoverBackground': opac(theme.rouge, 60),
  //
  // STATUSBAR
  //
  'statusBar.background': theme.bg,
  'statusBar.foreground': theme.bg_lighter,
  // 'statusBar.border': '',
  'statusBar.debuggingBackground': theme.green_dark,
  'statusBar.debuggingForeground': theme.green_lightest,
  'statusBarItem.activeBackground': theme.rouge,
  'statusBarItem.activeForeground': theme.rouge_lightest,
  'statusBarItem.hoverBackground': opac(theme.bg_light, 50),
  'statusBarItem.prominentBackground': theme.purple,
  'statusBarItem.prominentHoverBackground': opac(theme.purple_light, 60),
  'statusBar.noFolderBackground': theme.rouge_dark,
  'statusBar.noFolderForeground': theme.rouge_lightest,
  //
  // TITLE BAR
  //
  'titleBar.activeBackground': theme.bg,
  'titleBar.activeForeground': theme.bg_lighter,
  'titleBar.inactiveBackground': opac(theme.rouge_dark, 85),
  'titleBar.inactiveForeground': theme.rouge_lighter,
  // 'titleBar.border': '',
  //
  // PICKER GROUP (COMMAND PALETTE)
  //
  'pickerGroup.border': theme.purple_light,
  'pickerGroup.foreground': theme.rouge_light,
  // 'quickInput.background': opac(theme.bg_light, 50),
  // 'quickInput.foreground': 
  // 'quickInputTitle.background': 
  'quickInput.list.focusBackground': opac(theme.bg_light, 50),
  //
  // NOTIFICATIONS
  //
  // 'notificationCenter.border': theme.rouge_darker,
  'notificationCenter.border': theme.purple_dark,
  'notificationCenterHeader.foreground': theme.bg_lighter,
  'notificationCenterHeader.background': theme.bgb_darker,
  // 'notificationToast.border': theme.rouge_darker,
  'notificationToast.border': theme.purple_dark,
  'notifications.foreground': theme.bg_lighter,
  // 'notifications.background': opac(theme.bg, 90),
  'notifications.background': theme.bgb_dark,
  'notifications.border': theme.rouge_darker,
  'notifications.border': theme.purple_dark,
  'notificationLink.foreground': theme.accent_light,
  //
  // BUTTONS
  //
  'button.foreground': theme.accent_lightest,
  'button.background': theme.accent,
  // 'button.hoverBackground': opac(theme.rouge_lighter, 50),
  'button.hoverBackground': theme.accent_light,
  //
  // EXTENSION BUTTONS
  //
  'extensionButton.prominentForeground': theme.accent_lightest,
  'extensionButton.prominentBackground': theme.accent,
  'extensionButton.prominentHoverBackground': theme.accent_light,
  //
  // DROPDOWNS
  //
  'dropdown.background': theme.bg,
  'dropdown.listBackground': theme.bg,
  'dropdown.border': theme.rouge,
  'dropdown.foreground': theme.bg_lighter,
  //
  // TEXT COLORS
  //
  // 'textLink.foreground': theme.rouge,
  'textLink.foreground': theme.accent_light,
  'textLink.activeForeground': theme.rouge_lighter,
  'textBlockQuote.background': opac(theme.accent, 30),
  'textBlockQuote.border': theme.accent,
  'textCodeBlock.background': theme.bg_darkest,
  'textPreformat.foreground': theme.rouge,
  // 'textSeparator.foreground': '',
  //
  // MENU BAR
  //
  // 'menubar.selectionForeground': '',
  // 'menubar.selectionBackground': '',
  // 'menubar.selectionBorder': '',
  // 'menu.foreground': '',
  // 'menu.background': '',
  // 'menu.selectionForeground': '',
  // 'menu.selectionBackground': '',
  // 'menu.selectionBorder': '',
  // 'menu.separatorBackground': '',
  //
  // WELCOME PAGE
  //
  'welcomePage.background': theme.bg_dark,
  'welcomePage.buttonBackground': theme.bg_dark,
  'welcomePage.buttonHoverBackground': opac(theme.accent, 30),
  'walkThrough.embeddedEditorBackground': theme.bg_dark,
  //
  // SETTINGS
  //
  'settings.headerForeground': theme.bg_lighter,
  'settings.modifiedItemIndicator': theme.rouge,
  'settings.inactiveSelectedItemBorder': opac(theme.purple_dark, 60),
  'settings.dropdownBackground': theme.bg,
  'settings.dropdownForeground': theme.bg_lighter,
  'settings.dropdownBorder': opac(theme.purple_dark, 90),
  'settings.checkboxBackground': theme.bg,
  'settings.checkboxForeground': theme.bg_lighter,
  'settings.checkboxBorder': opac(theme.purple_dark, 90),
  'settings.textInputBackground': theme.bg,
  'settings.textInputForeground': theme.bg_lighter,
  'settings.textInputBorder': opac(theme.purple_dark, 90),
  'settings.numberInputBackground': theme.bg,
  'settings.numberInputForeground': theme.bg_lighter,
  'settings.numberInputBorder': opac(theme.purple_dark, 90),
  //
  // GIT DECORATIONS
  //
  'gitDecoration.modifiedResourceForeground': theme.grapple_dark,
  'gitDecoration.deletedResourceForeground': theme.berry_dark,
  'gitDecoration.untrackedResourceForeground': theme.green_dark,
  'gitDecoration.ignoredResourceForeground': theme.bg_light,
  'gitDecoration.conflictingResourceForeground': theme.purple_light,
  // 'gitDecoration.submoduleResourceForeground': ,
  //
  // PANELS
  //
  'panel.background': theme.bg,
  'panel.border': opac(theme.purple_dark, 40),
  'panel.dropBackground': opac(theme.bg_light, 10),
  'panelTitle.activeBorder': theme.purple_light,
  'panelTitle.activeForeground': theme.bg_lighter,
  'panelTitle.inactiveForeground': theme.bg_light,
  //
  // DEBUG
  //
  'debugExceptionWidget.background': theme.bg,
  'debugExceptionWidget.border': opac(theme.rouge_dark, 40),
  'debugToolBar.background': theme.bg,
  'debugToolBar.border': opac(theme.green, 60),
  'debugConsole.infoForeground': theme.blue,
  'debugConsole.warningForeground': theme.peach,
  'debugConsole.errorForeground': theme.berry,
  'debugConsole.sourceForeground': theme.bg_lighter,
  //
  // DIFF
  //
  'diffEditor.insertedTextBackground': opac(theme.green_dark, 30),
  // 'diffEditor.insertedTextBorder': theme.green_dark,
  'diffEditor.removedTextBackground': opac(theme.berry_dark, 30),
  // 'diffEditor.removedTextBorder': theme.berry_dark,
  'diffEditor.border': opac(theme.bg_light, 30),
  'diffEditor.diagonalFill': opac(theme.bg_light, 30),
  //
  // PEEK VIEW
  //
  'peekView.border': theme.purple_dark,
  'peekViewEditor.background': theme.bg,
  'peekViewEditorGutter.background': theme.bg_dark,
  'peekViewEditor.matchHighlightBackground': opac(theme.accent, 50),
  'peekViewEditor.matchHighlightBorder': opac(theme.accent, 80),
  'peekViewResult.matchHighlightBackground': opac(theme.accent, 70),
  'peekViewResult.matchHighlightBorder': opac(theme.accent, 90),
  'peekViewResult.background': theme.bg,
  // 'peekViewResult.fileForeground': '#f3f',
  // 'peekViewResult.lineForeground': '',
  'peekViewResult.selectionBackground': opac(theme.bg_light, 20),
  'peekViewResult.selectionForeground': theme.bg_lightest,
  'peekViewTitle.background': theme.bg_darker,
  'peekViewTitleDescription.foreground': theme.bg_lighter,
  'peekViewTitleLabel.foreground': theme.bg_lightest,
  //
  // MERGE
  //
  'merge.currentHeaderBackground': theme.green_darker,
  'merge.currentContentBackground': opac(theme.accent, 40),
  'merge.incomingHeaderBackground': theme.blue_darker,
  'merge.incomingContentBackground': opac(theme.blue_darker, 40),
  // 'merge.border': ,
  'merge.commonContentBackground': opac(theme.bg_light, 20),
  'merge.commonHeaderBackground': opac(theme.bg_light, 30),
  'editorOverviewRuler.currentContentForeground': theme.bg_lighter,
  'editorOverviewRuler.incomingContentForeground': theme.bg_lighter,
  // 'editorOverviewRuler.commonContentForeground':
  //
  // DEBUG ICONS
  //
  'debugIcon.breakpointForeground': theme.berry,
  'debugIcon.breakpointDisabledForeground': theme.berry_darker,
  'debugIcon.breakpointUnverifiedForeground': theme.grapple_dark,
  'debugIcon.breakpointCurrentStackframeForeground': theme.grapple_dark,
  'debugIcon.startForeground': theme.green_dark,
  'debugIcon.pauseForeground': theme.purple_lighter,
  'debugIcon.stopForeground': theme.berry_dark,
  'debugIcon.disconnectForeground': theme.accent,
  'debugIcon.stepOverForeground': theme.accent,
  'debugIcon.stepIntoForeground': theme.accent,
  'debugIcon.stepOutForeground': theme.accent,
  'debugIcon.continueForeground': theme.accent,
  'debugIcon.stepBackForeground': theme.accent,
  //
  // MINIMAP
  //
  'minimap.findMatchHighlight': theme.accent,
  'minimap.selectionHighlight': theme.bg_light,
  'minimap.errorHighlight': theme.green_dark,
  'minimap.warningHighlight': theme.grapple,
  'minimapGutter.addedBackground': theme.green_dark,
  'minimapGutter.modifiedBackground': opac(theme.grapple_dark, 80),
  'minimapGutter.deletedBackground': theme.berry_dark,

  // "editorUnnecessaryCode.border": opac(theme.purple_light, 40),
  //
  // TERMINAL COLORS
  //
  ...terminalColors,

  // CONTRAST TESTING
  // 'terminal.background': theme.bg_dark,
  // 'panel.background': theme.bg_dark,
}
