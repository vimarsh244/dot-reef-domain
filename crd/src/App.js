import React, { useState } from "react";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import { Provider, Signer } from "@reef-defi/evm-provider";
import { WsProvider } from "@polkadot/rpc-provider";
import { Contract } from "ethers";
import GreeterContract from "./contracts/Greeter.json";
import Uik from "@reef-defi/ui-kit";

const FactoryAbi = GreeterContract.abi;
const factoryContractAddress = GreeterContract.address;

const URL = "wss://rpc-testnet.reefscan.com/ws";

function App() {
  const [msgVal, setMsgVal] = useState("");
  const [msg, setMsg] = useState("");
  const [signer, setSigner] = useState();
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [wallet, setWallet] = useState("");

  const [secondTab, setSecondTab] = useState("mint");

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

      setWallet(allAccounts[0].address);

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

  const getGreeting = async () => {
    await checkSigner();
    const factoryContract = new Contract(
      factoryContractAddress,
      FactoryAbi,
      signer
    );
    const result = await factoryContract.getRecord();
    setMsg(result);
  };

  const setGreeting = async () => {
    await checkSigner();
    const factoryContract = new Contract(
      factoryContractAddress,
      FactoryAbi,
      signer
    );
    await factoryContract.setGreeting(msgVal);
    setMsgVal("");
    getGreeting();
  };

  return (
    <Uik.Container className="main">
      <Uik.Container vertical>
        <Uik.Container>
          <Uik.Text text=".reef domains" type="headline" />
        </Uik.Container>

        {isWalletConnected ? (
          <Uik.Container vertical className="container">
            <Uik.Tabs
              value={secondTab}
              onChange={(value) => setSecondTab(value)}
              options={[
                { value: "mint", text: "Mint" },
                { value: "view", text: "View" },
                { value: "update", text: "Update" },

                { value: "resolve", text: "Resolve" },
              ]}
            />

            {secondTab === "mint" ? (
              <>
                <Uik.Container>
                  <Uik.Input
                    // label="Domain Name"
                    required
                    placeholder="domain"
                    // value={value}
                    // onInput={(e) => setValue(e.target.value)}
                  />

                  <Uik.Button text=".reef" disabled />
                </Uik.Container>

                <Uik.Input
                  label="Web IPFS Hash"
                  required
                  placeholder="ipfs/hash"
                />
                <Uik.Input label="Description" placeholder="Some text ..." />
                <Uik.Input
                  label="Spotify Profile"
                  placeholder="https://open.spotify.com/user/r22wj5ojljff8heui9tgt1scq"
                />
              </>
            ) : (
              <></>
            )}

            {secondTab === "view" ? <></> : <></>}

            {secondTab === "update" ? (
              <>
                <Uik.Container>
                  <Uik.Input
                    // label="Domain Name"
                    required
                    placeholder="search for domain"
                    // value={value}
                    // onInput={(e) => setValue(e.target.value)}
                  />

                  <Uik.Button text=".reef" disabled />

                  <Uik.Button text="Get Details" rounded fill size="large" />
                </Uik.Container>

                <Uik.Input
                  label="Current Hash : loading..."
                  required
                  placeholder="ipfs/hash"
                />
                <Uik.Input
                  label="Currenet Description : loading..."
                  placeholder="Some text ..."
                />
                <Uik.Input
                  label="Current Spotify Profile"
                  placeholder="https://open.spotify.com/user/r22wj5ojljff8heui9tgt1scq"
                />

                {/* <Uik.Button text="Update Domain" neomorph /> */}

                <Uik.Button
                  success
                  neomorph
                  text="Update Domain"
                  size="large"
                  onClick={() => Uik.notify.success("Successfully updated.")}
                />
              </>
            ) : (
              <></>
            )}
            {secondTab === "resolve" ? (
              <>
              <Uik.Container>

                <Uik.Input placeholder="domain.reef"/>
                <Uik.Button text='Go'/>

                </Uik.Container>
              </>
            ) : (
              <></>
            )}
            <></>
          </Uik.Container>
        ) : (
          <>
            <Uik.Container vertical className="container">
              <Uik.Text
                className="title"
                text="Create your own reef domains"
                type="title"
              />
            </Uik.Container>
            <br />
            <Uik.Button text="Connect Wallet" onClick={checkExtension} />
          </>
        )}
      </Uik.Container>
    </Uik.Container>
  );
}

export default App;
