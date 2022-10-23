import { BigNumber } from 'ethers';
import IContractPrices from '../types/IContractPrices';
import IContractPricesResponse from '../types/responses/IContractPricesResponse';

export const mapFromBigNumberToNumber = (data: BigNumber): number => data.toNumber();
export const mapBooleanToBoolean = (data: boolean): boolean => Boolean(data);
export const mapBigNumberToString = (data: BigNumber): string => data.toString();

export const mapFromPricesToPrices = (data: IContractPricesResponse): IContractPrices => ({
  alphaCost: mapBigNumberToString(data?.alphaCost),
  alphaPresaleCost: mapBigNumberToString(data?.alphaPresaleCost),
  genesisCost: mapBigNumberToString(data?.genesisCost),
  genesisPresaleCost: mapBigNumberToString(data?.genesisPresaleCost),
});
