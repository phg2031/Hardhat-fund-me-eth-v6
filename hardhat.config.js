require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("solidity-coverage");
require("hardhat-deploy");

const CmC_Api_Key = process.env.CmC_Api_Key;
const Sepolia_RPC = process.env.SepoliaRPC;
const pK = process.env.PK;
const apiKey = process.env.api_etherscan;
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: Sepolia_RPC,
      accounts: [pK],
      chainId: 11155111,
      blockConfirmations: 6,
    },
  },
  etherscan: {
    apiKey: apiKey,
    // customChains: [], // uncomment this line if you are getting a TypeError: customChains is not iterable
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
  mocha: {
    timeout: 500000,
  },
  gasReporter: {
    enabled: false,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: CmC_Api_Key,
  },
};
