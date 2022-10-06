import { createReducer } from '@reduxjs/toolkit';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { setBlockchainAccountAction, setBlockchainLoadingAction, setBlockchainWeb3ModalAction } from '../actions/blockchain-actions';

interface State {
  loading: boolean;
  account: string;
  exchangeValue: number;
  provider: any;
  splitterContract: any;
  isConnected: boolean;
  transactionLoading: boolean;
  transactionStatus: number;
  contract: any;
  isModalOpen: boolean;
  web3Modal: Web3Modal;
}
const initialState: State = {
  loading: false,
  account: '',
  exchangeValue: 0,
  provider: null,
  splitterContract: null,
  transactionLoading: false,
  transactionStatus: 0,
  isConnected: false,
  contract: null,
  isModalOpen: false,
  web3Modal: null as unknown as Web3Modal,
};

const blockchainReducer = createReducer(initialState, builder =>
  builder
    .addCase(setBlockchainWeb3ModalAction, (state, action) => ({ ...state, web3Modal: action.payload }))
    .addCase(setBlockchainLoadingAction, (state, action) => ({ ...state, loading: action.payload }))
    .addCase(setBlockchainAccountAction, (state, action) => ({ ...state, account: action.payload })),
);
export default blockchainReducer;
