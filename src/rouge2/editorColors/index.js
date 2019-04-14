const theme = require('../theme')
const terminalColors = require('./terminal')
const baseColors = require('./base')
const { augment } = theme

module.exports = {
  focusBorder: theme.bg_lightest,
  foreground: theme.bg_lighter,
  'editor.background': theme.bg,
  'sideBar.background': theme.bg,
  'editorGroupHeader.noTabsBackground': theme.bg_darker,
  'tab.inactiveBackground': theme.bg,
  // ...baseColors,
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
  'list.dropBackground': '#75809566',
  'list.focusBackground': '#293a57',
  'list.focusForeground': '#c6cad2',
  'list.hoverBackground': augment(theme.bg_light, 60),
  'list.hoverForeground': theme.bg_lightest,
  'list.inactiveFocusBackground': theme.bg_dark,
  'list.inactiveFocusForeground': theme.bg_light,
  'list.inactiveSelectionBackground': augment(theme.bg_light, 30),
  'list.inactiveSelectionForeground': augment(theme.bg_lightest, 90),
  'list.invalidItemForeground': '#CC565E',
  'list.errorForeground': '#CC565E',
  'list.warningForeground': '#F9B5ACcc',
  'listFilterWidget.background': theme.bg,
  'listFilterWidget.outline': theme.rouge,
  'listFilterWidget.noMatchesOutline': theme.rouge_darker,
  //
  // WIDGETS
  //
  'widget.shadow': theme.bg_darker,
  'editorWidget.background': augment(theme.bg_light, 50),
  'editorWidget.background': augment(theme.bg_light, 20),
  'editorWidget.border': '#c6797e',
  'editorWidget.resizeBorder': theme.rouge,
  'editorSuggestWidget.background': '#1F2A3F',
  'editorSuggestWidget.border': '#758095',
  'editorSuggestWidget.foreground': '#c6cad2',
  'editorSuggestWidget.highlightForeground': '#eabe9a',
  'editorSuggestWidget.selectedBackground': '#293a57',
  'editorHoverWidget.background': '#1F2A3F',
  'editorHoverWidget.border': '#758095',
  'selection.background': '#f3f',
  descriptionForeground: '#f3f',
  errorForeground: '#f3f',
  //
  // INPUT
  //
  'input.background': theme.bg,
  'input.border': theme.rouge_dark,
  'input.foreground': theme.bg_lightest,
  'inputOption.activeBorder': '#b8bcc6',
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
  // TERMINAL COLORS
  //
  ...terminalColors,
}
