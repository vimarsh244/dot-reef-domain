import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import { Provider, Signer } from "@reef-defi/evm-provider";
import { WsProvider } from "@polkadot/rpc-provider";
import { Contract } from "ethers";
// import GreeterContract from "./contracts/Greeter.json";
// import Uik from "@reef-defi/ui-kit";
// import "@reef-defi/ui-kit/dist/style.css";


import "../styles/reef-index.css";


import React, { useState } from "react";


const URL = "wss://rpc-testnet.reefscan.com/ws";

import Artifact from "../artifacts/contracts/Domain.sol/Domains.json";
import { Domains } from "../artifacts/contracts/contractAddress";

import "./ReefHeader.css";

//import components
import Layout from "../components/layout";

const { chains, provider, webSocketProvider } = configureChains(
  [
    // chain.mainnet,
    // chain.polygon,
    // chain.optimism,
    // chain.arbitrum,
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
    //   ? [chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
    //   : []),
    chain.hardhat,
    chain.polygonMumbai,
  ],
  [
    // alchemyProvider({
    //   // This is Alchemy's default API key.
    //   // You can get your own at https://dashboard.alchemyapi.io
    //   apiKey: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC',
    // }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  // ====================

  const [msgVal, setMsgVal] = useState("");
  const [msg, setMsg] = useState("");
  const [signer, setSigner] = useState();
  const [isWalletConnected, setWalletConnected] = useState(false);

  const checkExtension = async () => {
    let allInjected = await web3Enable("Reef");

    if (allInjected.length === 0) {
      return false;
    }

    let injected;
    if (allInjected[0] && allInjected[0].signer) {
      injected = allInjected[0].signer;
    }

    const evmProvider = new Provider({
      provider: new WsProvider(URL),
    });

    evmProvider.api.on("ready", async () => {
      const allAccounts = await web3Accounts();

      allAccounts[0] && allAccounts[0].address && setWalletConnected(true);

      console.log(allAccounts);

      const wallet = new Signer(evmProvider, allAccounts[0].address, injected);

      // Claim default account
      if (!(await wallet.isClaimed())) {
        console.log(
          "No claimed EVM account found -> claimed default EVM account: ",
          await wallet.getAddress()
        );
        await wallet.claimDefaultAccount();
      }

      setSigner(wallet);
    });
  };

  const checkSigner = async () => {
    if (!signer) {
      await checkExtension();
    }
    return true;
  };

  // ==================

  return (
    // <WagmiConfig client={wagmiClient}>
    //   <RainbowKitProvider chains={chains}>
    //     <Layout>
    //       <Component {...pageProps} />
    //     </Layout>
    //   </RainbowKitProvider>
    // </WagmiConfig>

    <Uik.Button text="Connect Wallet" onClick={checkExtension} />
  );
}

export default MyApp;
