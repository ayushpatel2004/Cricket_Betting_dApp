require("@nomiclabs/hardhat-waffle");
//https://eth-mainnet.g.alchemy.com/v2/VcxnX9djzACDyhjkKyXjZZbzgaE-GPJs

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks:{
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/8axu-Zih4HTY46EaIsYfd3Dm3Ed-5LYN',
      accounts:['e5ef67e9d4366829026727365f729e02918966b8a0c885617dcc0bff1a9d5114']
    }
  }
};
