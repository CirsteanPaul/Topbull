import { useEffect } from 'react';
import Web3Modal from 'web3modal';
import { useAppDispatch } from '../store';
import { setBlockchainWeb3ModalAction } from '../store/actions/blockchain-actions';
import { disconnect } from '../utils/disconnectWeb3';
import { addMetamaskIfMissing, providerOptions } from '../utils/providerOptions';

const useWeb3Modal = () => {
  const dispatch = useAppDispatch();
  console.log('Intra');
  useEffect(() => {
    addMetamaskIfMissing();
    localStorage.clear();
    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
      theme: 'dark',
    });
    dispatch(setBlockchainWeb3ModalAction(web3Modal));
  }, [dispatch]);
  // eslint-disable-next-line consistent-return
  //   useEffect(() => {
  //     if (provider?.on) {
  //       const handleAccountsChanged = (accounts: string[]) => {
  //         console.log('accountsChanged', accounts);
  //         // dispatch(updateAccountRequest(accounts[0]));
  //       };

  //       const handleChainChanged = () => {
  //         console.log('disconnect');
  //         disconnect();
  //       };

  //       const handleDisconnect = () => {
  //         console.log('disconnect');
  //         disconnect(web3);
  //       };

  //       provider.on('accountsChanged', handleAccountsChanged);
  //       provider.on('chainChanged', handleChainChanged);
  //       provider.on('disconnect', handleDisconnect);

  //       return () => {
  //         if (provider.removeListener) {
  //           provider.removeListener('accountsChanged', handleAccountsChanged);
  //           provider.removeListener('chainChanged', handleChainChanged);
  //           provider.removeListener('disconnect', handleDisconnect);
  //         }
  //       };
  //     }
  //   }, [provider]);
};
export default useWeb3Modal;
