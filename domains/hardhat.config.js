require("@nomicfoundation/hardhat-toolbox");


// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };

module.exports = {
  solidity: "0.8.4",
  networks: {
    // Mainnet reef network configuration
    reef_mainnet: {
      url: "wss://rpc.reefscan.com/ws",
      scanUrl: "https://reefscan.com",
      seeds: {
        "MyAccount": "",
      }
    },
    // Testnet reef network configuration
    reef_testnet: {
      url: "wss://rpc-testnet.reefscan.com/ws",
      scanUrl: "https://reefscan.com",
      seeds: {
        "MyAccount": "canvas city repeat error fork enable lobster analyst album year can van",
      }
    },
    // Localhost reef network configuration
    reef: {
      url: "ws://127.0.0.1:9944",
      scanUrl: "http://localhost:3000",
      seeds: {
        "MyAccount": "",
      }
    },
  },
};
