import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers"; 
import dotenv from 'dotenv';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28", 
  networks: {
    'lisk-sepolia': {
      url: 'https://rpc.sepolia-api.lisk.com',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
  },
};

export default config;