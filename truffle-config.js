const HDWalletProvider = require('@truffle/hdwallet-provider');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    matic: {
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    advanced: {
      websockets: true
    },
    loc_test_test: {
      network_id: "*",
      port: 8545,
      host: "127.0.0.1"
    }
  },
  contracts_build_directory: "./src/contracts/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      version: "^0.8.0"
    }
  }
};
