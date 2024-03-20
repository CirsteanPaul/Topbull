import WalletConnect from '@walletconnect/web3-provider';
import { providers } from 'web3modal';
import Config from '../config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const providerOptions: any = {
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: Config.infuraKey,
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
        name: 'MetaMask',
        description: 'Connect using browser wallet',
      },
      package: {},
      connector: async () => {
        window.open(Config.metamaskLink);
      },
    };
  }
};
