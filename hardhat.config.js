require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://goerli.infura.io/v3/7c1d1a7f91514d199a84af9dea9e1b9e',
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  paths: {
    artifacts: './build',
  },
  mocha: {
    timeout: 20000,
  },
  scripts: {
    faucet: 'scripts/faucet.js',
  },
};
