import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import * as dotenv from "dotenv";
dotenv.config(".env");

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    fuji: {
            url: "https://api.avax-test.network/ext/bc/C/rpc",
            gasPrice: 225000000000,
            chainId: 43113,
            accounts: [process.env.PK!]
        },
  }
};

export default config;
