const postcssJs = require('postcss-js')
const autoprefixer = require('autoprefixer')
const prefixer = postcssJs.sync([autoprefixer])
const oneOf = (value, validList) => {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

export { prefixer, oneOf }
