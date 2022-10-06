import WalletConnect from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import { providers } from 'web3modal';

const infuraKey = '5d5a998bf5c8471b90f9cd03561adf5b';
export const providerOptions: any = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: 'TopBull', // Required
      infuraId: infuraKey, // Required unless you provide a JSON RPC url; see `rpc` below
    },
  },
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: infuraKey, // required
    },
    rpc: {
      1: 'https://main‑light.eth.linkpool.io',
    },
    chainId: 1,
  },
};
export const addMetamaskIfMissing = () => {
  if (!window.ethereum) {
    providerOptions['custom-metamask'] = {
      display: {
        logo: providers.METAMASK.logo,
        name: 'Install MetaMask',
        description: 'Connect using browser wallet',
      },
      package: {},
      connector: async () => {
        window.open('https://metamask.io/download/');
        // throw new Error('MetaMask not installed');
      },
    };
  }
};
