const { aliasWebpack, aliasJest } = require('react-app-alias')

const aliasMap = {
  '@redux': 'src/redux',
  '@asset': 'src/assets',
  '@color': 'src/colors',
  '@component': 'src/components',
  '@service': 'src/services',
  '@hook': 'src/hooks',
  '@mock': 'src/mocks',
  '@page': 'src/pages',
  '@': 'src'
}

const options = {
  alias: aliasMap
}

module.exports = aliasWebpack(options)
module.exports.jest = aliasJest(options)
