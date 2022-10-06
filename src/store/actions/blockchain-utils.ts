import { ethers } from 'ethers';
import alertService from '../../services/alert-service';
import { CONNECTION_ERROR__TITLE } from '../../services/alert-service/alert-errors';
import { getRequestSwitchForm } from '../../constants/switch-network-data';

interface switchNetworkProps {
  library: ethers.providers.Web3Provider;
  network: number;
}

export const switchNetwork = async (props: switchNetworkProps) => {
  const { library, network } = props;
  if (!library || !library.provider || !library.provider.request) {
    alertService.errorAlert({ title: CONNECTION_ERROR__TITLE, message: 'Please refresh the page and try again' });
    return;
  }
  try {
    await library.provider?.request(getRequestSwitchForm(network));
  } catch (switchError: any) {
    console.log(switchError.code, switchError.message);
  }
};
