const rouge = {
  rouge_darkest: '#3B2426',
  rouge_darker: '#77494C',
  rouge_dark: '#B26D71',
  rouge: '#C6797E',
  rouge_light: '#D7A1A5',
  rouge_lighter: '#E8C9CB',
  rouge_lightest: '#F9F2F2',
}

const bg = {
  bg_darkest: '#070A0E',
  bg_darker: '#0E131D',
  bg_dark: '#151D2B',
  bg: '#172030',
  bg_light: '#5D636E',
  bg_lighter: '#A2A6AC',
  bg_lightest: '#E8E9EA',
}

const colors = {
  // rouge: '#c6797e',
  // bg: '#121A2E',
  // bg: '#c6797e',
  red: '#CC565E',
  purple: '#b18bb1',
  yellow: '#eabe9a',
  green: '#9BBA9A',
  highlight: '#14333B',

  grey: '#494E4E',
  orange: '#EAAA77',
  green: '#DCE8BD',

  ...rouge,
  ...bg,
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
