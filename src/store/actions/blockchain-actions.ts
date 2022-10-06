import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { BLOCKCHAIN__SET_ACCOUNT, BLOCKCHAIN__SET_LOADING, BLOCKCHAIN__FETCH, BLOCKCHAIN__SET_WEB3MODAL } from '../constants';
import { RootState } from '..';
import { blockchainWeb3ModalSelector } from '../selectors/blockchain-selectors';
import Config from '../../config';
import { switchNetwork } from './blockchain-utils';

export const setBlockchainLoadingAction = createAction<boolean>(BLOCKCHAIN__SET_LOADING);
export const setBlockchainAccountAction = createAction<string>(BLOCKCHAIN__SET_ACCOUNT);
export const setBlockchainWeb3ModalAction = createAction<Web3Modal>(BLOCKCHAIN__SET_WEB3MODAL);

export const fecthBlockchainDataActionAsync = createAsyncThunk<void, never, { state: RootState }>(BLOCKCHAIN__FETCH, async (__: never, thunkApi) => {
  const web3Modal = blockchainWeb3ModalSelector(thunkApi.getState());
  thunkApi.dispatch(setBlockchainLoadingAction(true));
  try {
    console.log('connect');
    const mainProvider = await web3Modal.connect();
    const library = new ethers.providers.Web3Provider(mainProvider);
    const accounts = await library.listAccounts();
    const network = await library.getNetwork();
    console.log(network, Config.networkChainId);
    const customProvider = library.provider as unknown as any;
    if (network.chainId !== Config.networkChainId) {
      const x = 'https://bridge.walletconnect.org';
      if (customProvider?.bridge !== x && !customProvider?.isFortmatic) {
        console.log('switch is happening');
        await switchNetwork({ library, network: Config.networkChainId });
      }
    }
    // something to be fetched
  } catch (err) {
    console.log(err);
    // swallow exception
  } finally {
    thunkApi.dispatch(setBlockchainLoadingAction(false));
  }
});
