const rouge = {
  rouge_darkest: '#3B2426',
  rouge_darker: '#77494C',
  rouge_dark: '#B26D71',
  rouge: '#C6797E',
  rouge_light: '#D7A1A5',
  rouge_lighter: '#E8C9CB',
  rouge_lightest: '#F9F2F2',
}

const kindarouge = {
  kindarouge_darkest: '#342021',
  kindarouge_darker: '#684042',
  kindarouge_dark: '#9C5F63',
  kindarouge: '#AD6A6E',
  kindarouge_light: '#C6979A',
  kindarouge_lighter: '#DEC3C5',
  kindarouge_lightest: '#F7F0F1',
}

const berry = {
  berry_darkest: '#42181D',
  berry_darker: '#84303A',
  berry_dark: '#C64856',
  berry: '#DC5060',
  berry_light: '#E78590',
  berry_lighter: '#F1B9BF',
  berry_lightest: '#FCEEEF',
}

const bg_classic = {
  bg_darkest: '#070A0E',
  bg_darker: '#0E131D',
  bg_dark: '#151D2B',
  bg: '#172030',
  bg_light: '#5D636E',
  bg_lighter: '#A2A6AC',
  bg_lightest: '#E8E9EA',
}

const bg2 = {
  bg_darkest: '#07070D',
  bg_darker: '#0E0E1A',
  bg_dark: '#151627',
  bg: '#17182B',
  bg_light: '#5D5D6B',
  bg_lighter: '#A2A3AA',
  bg_lightest: '#E8E8EA',
}

const purple = {
  purple_darkest: '#171724',
  purple_darker: '#2E2F48',
  purple_dark: '#44466C',
  purple: '#4C4E78',
  purple_light: '#8283A1',
  purple_lighter: '#B7B8C9',
  purple_lightest: '#EDEDF2',
}

const peach = {
  peach_darkest: '#462E27',
  peach_darker: '#8C5B4D',
  peach_dark: '#D38974',
  peach: '#EA9881',
  peach_light: '#F0B7A7',
  peach_lighter: '#F7D6CD',
  peach_lightest: '#FDF5F2',
}

const grapple = {
  grapple_darkest: '#423E33',
  grapple_darker: '#837B67',
  grapple_dark: '#C5B99A',
  grapple: '#DBCDAB',
  grapple_light: '#E6DCC4',
  grapple_lighter: '#F1EBDD',
  grapple_lightest: '#FBFAF7',
}

const green = {
  green_darkest: '#2D2F2C',
  green_darker: '#5A5F58',
  green_dark: '#878E83',
  green: '#969E92',
  green_light: '#B6BBB3',
  green_lighter: '#D5D8D3',
  green_lightest: '#F5F5F4',
}

const colors = {
  // rouge: '#c6797e',
  // bg: '#121A2E',
  // bg: '#c6797e',
  red: '#CC565E',
  // purple: '#b18bb1',
  yellow: '#eabe9a',
  // green: '#9BBA9A',
  highlight: '#14333B',

  grey: '#494E4E',
  orange: '#EAAA77',
  // green: '#DCE8BD',

  ...rouge,
  ...bg2,
  ...peach,
  ...grapple,
  ...purple,
  ...berry,
  ...green,
  ...kindarouge,
  // ...bg_classic,
}

const augment = (color, opacityPercentage) => {
  let c = ''
  if (typeof color === 'string' && color[0] === '#') {
    c = color
  } else {
    c = colors[color]
  }
  const opacityHex = Math.floor((opacityPercentage / 100) * 255).toString(16)
  return `${c}${opacityHex}`
}

module.exports = {
  augment,
  ...colors,
}
