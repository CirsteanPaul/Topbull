import { RootState } from '..';
import IContractData from '../../types/IContractData';
import ISalePhase from '../../types/ISalePhase';

export const contractLoadingSelector = (state: RootState): boolean => state.contract.loading;
export const contractReferralSelector = (state: RootState): string => state.contract.referral;
export const contractDataSelector = (state: RootState): IContractData => state.contract.data;
export const contractSalePhaseSelector = (state: RootState): ISalePhase => state.contract?.data?.salePhase;

export const contractIsPresaleOpen = (state: RootState): boolean => {
  const salePhase = contractSalePhaseSelector(state);
  switch (salePhase) {
    case ISalePhase.ALPHA_PRESALE:
    case ISalePhase.OPEN_ALPHA_PRESALE:
    case ISalePhase.OPEN_GENESIS_PRESALE:
    case ISalePhase.GENESIS_PRESALE:
      return true;
    default:
      return false;
  }
};
