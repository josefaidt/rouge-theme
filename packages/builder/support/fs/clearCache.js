module.exports = function clearCache(fileArray) {
  const cleanupMsg = logger(`🛀🏻  ${chalk.cyan('cleaned cache')}`)
  console.time(cleanupMsg)
  fileArray.forEach(f => delete require.cache[require.resolve(f)])
  console.timeEnd(cleanupMsg)
}