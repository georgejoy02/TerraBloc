const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    matic: {
      provider: () => new HDWalletProvider(process.env.MM_MNEMONIC, process.env.MUMBAI_RPC_URL),
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
  contracts_directory: './contracts/',
  contracts_build_directory: "./artifacts/",
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
