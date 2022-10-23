import IContractPrices from './IContractPrices';
import ISalePhase from './ISalePhase';

interface IContractData {
  balance: number;
  salePhase: ISalePhase;
  mintedNftsByUser: number;
  reveal: boolean;
  maxPerWallet: number;
  currentPrice: string;
  currentSupply: number;
  prices: IContractPrices;
}

export default IContractData;
