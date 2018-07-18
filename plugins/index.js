const fs = require('fs-extra')
function getConfigurationByFile (file) {
  return fs.readJson('/Users/nkopychina/cypress/config/'+file+'.json')
}

module.exports = (on, config) => {
  const file = config.env.configFile || 'dev'
  return getConfigurationByFile(file)
}
