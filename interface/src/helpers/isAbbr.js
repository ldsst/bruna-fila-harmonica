const isAbbr = word => {
  return /^([A-Z]\.)+$/.test(word)
}

export default isAbbr
