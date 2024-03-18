import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'
import { BscConnector } from '@binance-chain/bsc-connector'
import getNodeUrl from './getRpcUrl'
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { Web3Provider } from "@ethersproject/providers";
import { walletConnectV2 } from "../connectors/walletConnectV2";
import {metaMask} from "../connectors/metaMask"

const ConnectorNames = {
    Injected: "injected",
    WalletConnect: "walletconnect",
}

export const connectorsByName = {
    [ConnectorNames.Injected]: metaMask,
    [ConnectorNames.WalletConnect]: walletConnectV2
}

export const getLibraryForSign = (provider) => {
    const library = new Web3Provider(provider);
    return library
}

export const getLibrary = (provider) => {
    return provider
}