const { notAgain } = require("qc-core")
const feint = require("feint")

function createNoop() {
  return feint(() => notAgain()) 
}

module.exports = createNoop
