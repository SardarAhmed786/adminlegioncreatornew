import React from "react";
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from 'react-redux';
import store from './redux/store/store'
import 'react-toastify/dist/ReactToastify.css';
import { Web3ReactProvider } from "@web3-react/core";
import { hooks as walletConnectV2Hooks, walletConnectV2 } from './connectors/walletConnectV2.js';
import { hooks as metaMaskHooks, metaMask } from './connectors/metaMask';
import App from './App';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const connectors = [
  [walletConnectV2, walletConnectV2Hooks],
  [metaMask, metaMaskHooks]
]

root.render(
  <Provider store={store}>
    <Web3ReactProvider connectors={connectors}>
      <App />
    </Web3ReactProvider>
  </Provider>,
  document.getElementById('root')
);