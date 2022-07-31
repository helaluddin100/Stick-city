import React from "react";
import Home from './components/Home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import '@rainbow-me/rainbowkit/styles.css';
// import '@rainbow-me/rainbowkit/dist/index.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';
function App() {

  
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [
      alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
      publicProvider()
    ]
  );
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
  });
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })


  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>

      <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
      
      </RainbowKitProvider>
    </WagmiConfig>




    
  );
}

export default App;
