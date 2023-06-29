require('dotenv').config();
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";

export const solidity = '0.8.0';
export const networks = {
  goerli: {
    url: 'https://goerli.infura.io/v3/7c1d1a7f91514d199a84af9dea9e1b9e',
    accounts: {
      mnemonic: process.env.MNEMONIC,
    },
  },
};
export const etherscan = {
  apiKey: process.env.ETHERSCAN_API_KEY,
};
export const paths = {
  artifacts: './build',
};
export const mocha = {
  timeout: 20000,
};
export const scripts = {
  faucet: 'scripts/faucet.js',
};
