const theme = require('../theme')
const terminalColors = require('./terminal')
const baseColors = require('./base')
const { augment } = theme

module.exports = {
  focusBorder: theme.bg_lightest,
  foreground: theme.bg_lightest,
  'widget.shadow': theme.bg_dark,
  'selection.background': '#fff',
  descriptionForeground: '#fff',
  errorForeground: '#fff',
  'editor.background': theme.bg,
  'sideBar.background': theme.bg,
  'editorGroupHeader.noTabsBackground': theme.bg_darker,
  'tab.inactiveBackground': theme.bg,
  // ...baseColors,
  //
  // ACTIVITY BAR
  //
  'activityBar.background': theme.bg_dark,
  'activityBar.foreground': theme.bg_lighter,
  'activityBarBadge.background': theme.rouge,
  'activityBarBadge.foreground': theme.rouge_lightest,
  'activityBar.border': theme.bg_dark,
  //
  // SIDEBAR
  //
  'sideBar.background': theme.bg,
  'sideBar.border': theme.bg_Dark,
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
  'tab.activeBorder': theme.rouge_light,
  // 'tab.activeBorderTop': theme.rouge,
  // 'tab.hoverBackground': augment(theme.bg_light, 10),
  'tab.hoverBorder': theme.rouge_darker,
  // 'tab.activeModifiedBorder': theme.rouge_lightest,
  // 'tab.inactiveModifiedBorder': theme.rouge_lightest,
  'tab.unfocusedInactiveForeground': theme.bg_light,
  'tab.unfocusedActiveForeground': theme.bg_lighter,
  'tab.unfocusedActiveBorder': theme.rouge_darker,
  // 'tab.unfocusedActiveBorderTop': theme.rouge_darker,
  // 'tab.unfocusedHoverBackground': augment(theme.bg_light, 10),
  'tab.unfocusedHoverBorder': theme.rouge_darker,
  // 'tab.unfocusedActiveModifiedBorder': theme.rouge_lightest,
  // 'tab.unfocusedInactiveModifiedBorder': theme.rouge_lightest,
  'editorPane.background': '#fff',
  //
  // LIST
  //
  'list.activeSelectionBackground': theme.rouge_dark,
  'list.activeSelectionForeground': theme.rouge_lightest,
  'list.dropBackground': '#75809566',
  'list.focusBackground': '#293a57',
  'list.focusForeground': '#c6cad2',
  'list.hoverBackground': augment(theme.bg_light, 60),
  'list.hoverForeground': theme.bg_lightest,
  'list.inactiveFocusBackground': theme.bg_dark,
  'list.inactiveFocusForeground': theme.bg_light,
  'list.inactiveSelectionBackground': augment(theme.bg_light, 30),
  'list.inactiveSelectionForeground': theme.bg_lightest,
  'list.invalidItemForeground': '#CC565E',
  'list.errorForeground': '#CC565E',
  'list.warningForeground': '#F9B5ACcc',
  'listFilterWidget.background': theme.bg,
  'listFilterWidget.outline': theme.rouge,
  'listFilterWidget.noMatchesOutline': theme.rouge_darker,
  ...terminalColors,
}
