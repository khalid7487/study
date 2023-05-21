import { useState } from "react";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { bsc, mainnet } from 'wagmi/chains';

import "./App.css";
import { Profile } from "./Profile";

const { chains, webSocketPublicClient, publicClient } = configureChains(
  [bsc,mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: {
        projectId: "2e31eb755bf20ae6956c4f75bae3fc3b",
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

function App() {
  return (
    <WagmiConfig config={config}>
      <Profile />
    </WagmiConfig>
  );
}

export default App;
