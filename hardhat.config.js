
// a new App in its dashboard, and replace "KEY" with its key
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
require('@openzeppelin/hardhat-upgrades');
// require('hardhat-contract-sizer');
// require("hardhat-gas-reporter");

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;
// console.log("ALCHEMY_API_KEY", ALCHEMY_API_KEY, "RINKEBY_PRIVATE_KEY ", RINKEBY_PRIVATE_KEY)

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
   
    },
    bsc_test:{
      url:`https://data-seed-prebsc-2-s2.binance.org:8545/`,
      accounts: [`${RINKEBY_PRIVATE_KEY}`]

    },
 
    goerli: {
      url: `https://goerli.infura.io/v3/49f4d0a86eb84b13871b40d55e2a1cd3`,
      accounts: [`${RINKEBY_PRIVATE_KEY}`]
    },
    poly_testnet:{
      url:`https://rpc-mumbai.maticvigil.com`,
      accounts: [`${RINKEBY_PRIVATE_KEY}`]
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100
      }
    }
  },
  etherscan: { apiKey: process.env.bscScanKey },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
    // only: [':ERC20$'],
  },
  // gasReporter: {
  //   currency: 'USD',
  //   gasPrice: 106,
  //   enabled: (process.env.REPORT_GAS) ? true : false,

  // },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 200000
  }
}
