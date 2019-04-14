const theme = require('../theme')
const terminalColors = require('./terminal')
const baseColors = require('./base')
const { augment } = theme

module.exports = {
  focusBorder: theme.bg_lightest,
  'editor.foreground': theme.bg_lighter,
  'editor.background': theme.bg,
  'sideBar.background': theme.bg,
  'editorGroupHeader.noTabsBackground': theme.bg_darker,
  'tab.inactiveBackground': theme.bg,
  'editorCursor.background': theme.rouge_dark,
  'editorCursor.foreground': theme.rouge_dark,
  'editorBracketMatch.background': theme.bg,
  'editorBracketMatch.border': theme.rouge_light,
  //
  // EDITOR
  //
  'editorLineNumber.foreground': augment(theme.bg_light, 70),
  'editorLineNumber.activeForeground': theme.bg_lighter,
  'editor.lineHighlightBackground': augment(theme.accent, 13),
  'editor.wordHighlightBackground': augment(theme.accent, 60),
  'editor.wordHighlightStrongBackground': augment(theme.accent, 85),
  'editor.findMatchBackground': augment(theme.accent, 40),
  'editor.findMatchHighlightBackground': augment(theme.accent, 30),
  'editor.findRangeHighlightBackground': augment(theme.accent, 30),
  'editor.hoverHighlightBackground': augment(theme.accent, 30),
  'editor.selectionBackground': augment(theme.accent, 60),
  'editor.selectionForeground': '#91d1bdff',
  'editor.inactiveSelectionBackground': augment(theme.accent, 30),
  'editorLink.activeForeground': '#758095',
  'editorGroup.background': '#172030',
  'editorWarning.foreground': '#CC565Edf',
  'editorError.foreground': '#cc565e',
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
  'list.dropBackground': augment(theme.bg_light, 50),
  'list.focusBackground': augment(theme.bg_light, 60),
  'list.focusForeground': theme.bg_lightest,
  'list.hoverBackground': augment(theme.bg_light, 60),
  'list.hoverForeground': theme.bg_lightest,
  'list.inactiveFocusBackground': augment(theme.bg_light, 30),
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
  'editorWidget.background': augment(theme.bg_light, 50),
  'editorWidget.background': augment(theme.bg_light, 20),
  'editorWidget.border': theme.rouge,
  'editorWidget.resizeBorder': theme.rouge,
  'editorSuggestWidget.background': augment(theme.bg, 90),
  'editorSuggestWidget.border': theme.rouge_darker,
  'editorSuggestWidget.foreground': theme.bg_lighter,
  'editorSuggestWidget.highlightForeground': theme.bg_lighter,
  'editorSuggestWidget.selectedBackground': augment(theme.accent, 60),
  'editorHoverWidget.background': augment(theme.bg, 90),
  'editorHoverWidget.border': theme.rouge_darker,
  'selection.background': theme.accent_light,
  descriptionForeground: theme.bg_light,
  errorForeground: theme.berry_dark,
  //
  // INPUT
  //
  'input.background': theme.bg,
  'input.border': theme.rouge_dark,
  'input.foreground': theme.bg_lighter,
  'inputOption.activeBorder': '#f3f',
  'input.placeholderForeground': '#808799',
  'inputValidation.errorBackground': theme.bg,
  'inputValidation.errorBorder': '#CC565Edf',
  'inputValidation.warningBackground': theme.bg,
  'inputValidation.warningBorder': '#eabe9adf',
  'inputValidation.infoBackground': theme.bg,
  'inputValidation.infoBorder': '#6e94b999',
  //
  // SCROLLBAR
  //
  'scrollbar.shadow': augment(theme.rouge_darker, 10),
  'scrollbarSlider.activeBackground': augment(theme.rouge, 75),
  'scrollbarSlider.background': augment(theme.rouge_dark, 60),
  'scrollbarSlider.hoverBackground': augment(theme.rouge, 60),
  //
  // NOTIFICATIONS
  //
  'notificationCenter.border': theme.rouge_darker,
  'notificationCenterHeader.foreground': theme.bg_lighter,
  'notificationCenterHeader.background': theme.bg_dark,
  'notificationToast.border': theme.rouge_darker,
  'notifications.foreground': theme.bg_lighter,
  'notifications.background': augment(theme.bg, 90),
  'notifications.border': theme.rouge,
  'notificationLink.foreground': theme.rouge,
  //
  // BUTTONS
  //
  'button.foreground': theme.rouge_lightest,
  'button.background': theme.rouge_darker,
  'button.hoverBackground': theme.rouge_dark,
  //
  // TERMINAL COLORS
  //
  ...terminalColors,
}
