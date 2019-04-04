const colors = {
  rouge: '#c6797e',
  // bg: '#121A2E',
  bg: '#c6797e',
  red: '#CC565E',
  yellow: '#eabe9a',
  green: '#9BBA9A',
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
