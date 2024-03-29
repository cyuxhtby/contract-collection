import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('@typechain/hardhat');
require("@nomiclabs/hardhat-ethers");



const config: HardhatUserConfig = {
  solidity: "0.8.18",
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
};

export default config;
