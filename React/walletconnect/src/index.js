import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = '2e31eb755bf20ae6956c4f75bae3fc3b'

const root = ReactDOM.createRoot(document.getElementById('root'));

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)
 

root.render(
  <>
      <WagmiConfig client={wagmiClient}>
        <App />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
);
