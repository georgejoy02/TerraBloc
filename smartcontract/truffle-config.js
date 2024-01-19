const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();
const mnemonic = process.env.HDWALLET_MNEMONIC;
const rpcUrl = process.env.RPC_URL;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    matic: {
      provider: () => new HDWalletProvider(mnemonic, rpcUrl),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    advanced: {
      websockets: true,
    },
    loc_test_test: {
      network_id: "*",
      port: 8545,
      host: "127.0.0.1",
    },
  },
  contracts_directory: "./contracts/",
  contracts_build_directory: "./artifacts/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      version: "^0.8.0",
    },
  },
};
