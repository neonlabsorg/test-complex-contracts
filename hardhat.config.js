require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  etherscan: {
    apiKey: {
      //sepolia: process.env.ETHERSCAN_API_KEY,
      neonevm: "test",
    },
    customChains: [
      {
        network: "neonevm",
        chainId: 245022926,
        urls: {
          apiURL: "https://devnet-api.neonscan.org/hardhat/verify",
          browserURL: "https://devnet.neonscan.org",
        },
      },
      /*{
        network: "neonevm",
        chainId: 245022926,
        urls: {
          apiURL: "https://neon-devnet.blockscout.com/api",
          browserURL: "https://neon-devnet.blockscout.com",
        },
      },*/
    ],
  },
  networks: {
    neondevnet: {
      url: "https://devnet.neonevm.org",
      accounts: [process.env.PRIVATE_KEY_OWNER],
      chainId: 245022926,
      allowUnlimitedContractSize: false,
      gas: "auto",
      gasPrice: "auto",
      isFork: true,
    },
    neonmainnet: {
      url: "https://neon-proxy-mainnet.solana.p2p.org",
      accounts: [process.env.PRIVATE_KEY_OWNER],
      chainId: 245022934,
      allowUnlimitedContractSize: false,
      gas: "auto",
      gasPrice: "auto",
      isFork: true,
    },
    sepolia: {
      url: "https://rpc.ankr.com/eth_sepolia",
      accounts: [process.env.PRIVATE_KEY_OWNER],
      tags: ["test"],
    },
  },
  mocha: {
    timeout: 180000,
  },
  sourcify: {
    enabled: false,
  },
};
