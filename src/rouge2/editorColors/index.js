const theme = require('../theme')
const terminalColors = require('./terminal')
const baseColors = require('./base')
const { augment } = theme

module.exports = {
  focusBorder: theme.bg_light,
  'editor.foreground': theme.bg_lighter,
  'editor.background': theme.bg,
  'sideBar.background': theme.bg,
  'editorGroupHeader.noTabsBackground': theme.bg_darker,
  'tab.inactiveBackground': theme.bg,
  'editorCursor.background': theme.rouge_dark,
  'editorCursor.foreground': theme.rouge_dark,
  'editorBracketMatch.background': theme.bg,
  'editorBracketMatch.border': theme.rouge_light,
  'progressBar.background': theme.rouge_dark,
  //
  // EDITOR
  //
  'editorLineNumber.foreground': augment(theme.bg_light, 70),
  'editorLineNumber.activeForeground': theme.bg_lighter,
  'editor.lineHighlightBackground': augment(theme.accent, 13),
  'editor.wordHighlightBackground': augment(theme.accent, 60),
  'editor.wordHighlightStrongBackground': augment(theme.accent, 85),
  'editor.findMatchBackground': augment(theme.accent, 60),
  'editor.findMatchHighlightBackground': augment(theme.accent, 60),
  'editor.findRangeHighlightBackground': augment(theme.accent, 30),
  'editor.hoverHighlightBackground': augment(theme.accent, 30),
  'editor.selectionBackground': augment(theme.accent, 60),
  'editor.selectionForeground': theme.accent,
  'editor.inactiveSelectionBackground': augment(theme.accent, 30),
  'editorLink.activeForeground': theme.bg_lighter,
  'editorGroup.background': theme.bg,
  'editorWarning.foreground': theme.peach,
  'editorError.foreground': theme.berry,
  'editorCodeLens.foreground': '#758095',
  //
  // EDITOR GUTTER
  //
  'editorGutter.background': theme.bg,
  'editorGutter.addedBackground': '#9BBA9Acc',
  'editorGutter.deletedBackground': '#CC565Ecc',
  'editorGutter.modifiedBackground': '#eabe9acc',
  //
  // EDITOR OVERVIEW RULER
  //
  'editorOverviewRuler.selectionHighlightForeground': '#91d1bd66',
  'editorOverviewRuler.border': '#293a57cc',
  'editorOverviewRuler.findMatchForeground': '#91d1bd66',
  'editorOverviewRuler.modifiedForeground': '#eabe9acc',
  'editorOverviewRuler.addedForeground': '#9BBA9Acc',
  'editorOverviewRuler.deletedForeground': '#CC565E40',
  'editorOverviewRuler.errorForeground': '#CC565Ecc',
  'editorOverviewRuler.infoForeground': '#6e94b9cc',
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
  'sideBar.border': theme.bg_dark,
  'sideBar.dropBackground': theme.rouge,
  'sideBar.foreground': theme.bg_lighter,
  'sideBarSectionHeader.background': theme.bg,
  'sideBarSectionHeader.foreground': theme.bg_lightest,
  //
  // TABS
  //
  'editorGroupHeader.noTabsBackground': theme.bg,
  'editorGroupHeader.tabsBackground': theme.bg,
  'tab.activeBackground': augment(theme.rouge_dark, 85),
  'tab.activeForeground': theme.bg_lightest,
  'tab.inactiveBackground': theme.bg,
  'tab.inactiveForeground': theme.bg_lighter,
  'tab.border': theme.bg_dark,
  // 'tab.activeBorder': augment(theme.rouge, 85),
  // 'tab.activeBorderTop': theme.rouge,
  // 'tab.hoverBackground': augment(theme.bg_light, 10),
  // 'tab.hoverBorder': theme.rouge_darker,
  // 'tab.activeModifiedBorder': theme.rouge_lightest,
  // 'tab.inactiveModifiedBorder': theme.rouge_lightest,
  'tab.unfocusedInactiveForeground': theme.bg_light,
  'tab.unfocusedActiveForeground': augment(theme.bg_lightest, 70),
  // 'tab.unfocusedActiveBorder': theme.rouge_darker,
  // 'tab.unfocusedActiveBorderTop': theme.rouge_darker,
  // 'tab.unfocusedHoverBackground': augment(theme.bg_light, 10),
  // 'tab.unfocusedHoverBorder': theme.rouge_darker,
  // 'tab.unfocusedActiveModifiedBorder': theme.rouge_lightest,
  // 'tab.unfocusedInactiveModifiedBorder': theme.rouge_lightest,
  'editorPane.background': '#f3f',
  //
  // LIST
  //
  'list.activeSelectionBackground': augment(theme.rouge, 85),
  'list.activeSelectionForeground': theme.rouge_lightest,
  'list.dropBackground': augment(theme.bg_light, 30),
  'list.focusBackground': augment(theme.bg_light, 50),
  'list.focusForeground': theme.bg_lightest,
  'list.hoverBackground': augment(theme.bg_light, 30),
  'list.hoverForeground': theme.bg_lightest,
  'list.inactiveFocusBackground': augment(theme.bg_light, 15),
  'list.inactiveFocusForeground': theme.bg_light,
  'list.inactiveSelectionBackground': augment(theme.bg_light, 30),
  'list.inactiveSelectionForeground': augment(theme.bg_lightest, 90),
  'list.invalidItemForeground': theme.berry_dark,
  'list.errorForeground': theme.berry_dark,
  'list.warningForeground': augment(theme.berry, 80),
  'listFilterWidget.background': theme.bg,
  'listFilterWidget.outline': theme.rouge,
  'listFilterWidget.noMatchesOutline': theme.rouge_darker,
  //
  // WIDGETS
  //
  'widget.shadow': theme.bg_darker,
  // 'editorWidget.background': augment(theme.bg_light, 50),
  'editorWidget.background': theme.bgb_dark,
  'editorWidget.border': theme.rouge,
  'editorWidget.resizeBorder': theme.rouge,
  'editorSuggestWidget.background': augment(theme.bg, 90),
  'editorSuggestWidget.border': theme.rouge_darker,
  'editorSuggestWidget.foreground': theme.bg_lighter,
  'editorSuggestWidget.highlightForeground': theme.bg_lighter,
  'editorSuggestWidget.selectedBackground': augment(theme.accent, 60),
  // 'editorHoverWidget.background': augment(theme.bg, 90),
  'editorHoverWidget.background': theme.bgb_dark,
  'editorHoverWidget.border': theme.purple_dark,
  'selection.background': augment(theme.accent, 60),
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
  'inputValidation.warningBackground': theme.peach_darker,
  'inputValidation.warningForeground': theme.peach_lighter,
  // 'inputValidation.warningBorder': theme.peach_lighter,
  'inputValidation.infoBackground': theme.bgb_dark,
  'inputValidation.infoForeground': theme.bgb_lighter,
  // 'inputValidation.infoBorder': theme.bgb_lighter,
  //
  // SCROLLBAR
  //
  'scrollbar.shadow': augment(theme.rouge_darker, 10),
  'scrollbarSlider.activeBackground': augment(theme.rouge, 75),
  'scrollbarSlider.background': augment(theme.rouge_dark, 60),
  'scrollbarSlider.hoverBackground': augment(theme.rouge, 60),
  //
  // STATUSBAR
  //
  'statusBar.background': theme.bg,
  'statusBar.foreground': theme.bg_lighter,
  // 'statusBar.border': '',
  'statusBar.debuggingBackground': theme.green,
  'statusBar.debuggingForeground': theme.green_lightest,
  'statusBarItem.activeBackground': theme.rouge,
  'statusBarItem.activeForeground': theme.rouge_lightest,
  'statusBarItem.hoverBackground': augment(theme.bg_light, 50),
  'statusBarItem.prominentBackground': theme.purple,
  'statusBarItem.prominentHoverBackground': augment(theme.purple_light, 60),
  'statusBar.noFolderBackground': theme.rouge_dark,
  'statusBar.noFolderForeground': theme.rouge_lightest,
  //
  // TITLE BAR
  //
  'titleBar.activeBackground': theme.bg,
  'titleBar.activeForeground': theme.bg_lighter,
  'titleBar.inactiveBackground': theme.rouge_dark,
  'titleBar.inactiveForeground': theme.rouge_lighter,
  // 'titleBar.border': '',
  //
  // PICKER GROUP
  //
  'pickerGroup.border': theme.purple_dark,
  'pickerGroup.foreground': theme.rouge_light,
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
  // 'notifications.background': augment(theme.bg, 90),
  'notifications.background': theme.bgb_dark,
  'notifications.border': theme.rouge_darker,
  'notifications.border': theme.purple_dark,
  'notificationLink.foreground': theme.rouge,
  //
  // BUTTONS
  //
  'button.foreground': theme.purple_lightest,
  'button.background': theme.purple,
  'button.hoverBackground': theme.purple_light,
  //
  // TERMINAL COLORS
  //
  ...terminalColors,
}
