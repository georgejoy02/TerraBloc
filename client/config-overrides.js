/* config-overrides.js */
/* eslint-disable react-hooks/rules-of-hooks */
const { useBabelRc, override } = require('customize-cra');

module.exports = override(useBabelRc());
module.exports = function override(config) {
    return {
      ...config,
      ignoreWarnings: [
        {
          module: /node_modules\/web3/,
        },
      ],
    }
  }
