import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../store';
import { fecthBlockchainDataActionAsync } from '../../../../../store/actions/blockchain-actions';
import { blockchainIsConnectedSelector } from '../../../../../store/selectors/blockchain-selectors';
import {
  McButton,
  McButtonsSection,
  McContainer,
  McImage,
  McInformationContainer,
  McmdpLabel,
  McmdqLabel,
  MCmdqValue,
  McMintDetails,
  McmdpEthereumImage,
  McMintDetailsQuantity,
  McText,
  McTitle,
  McmdpPrice,
  McValue,
  McSection,
  McSub,
  McAdd,
} from './styles';
import IMintCardProps from './types';

const MintCard = (props: IMintCardProps): JSX.Element => {
  const { title, text, image, quantity, price } = props;
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState<number>(1);
  const isConnected = useAppSelector(blockchainIsConnectedSelector);
  const handleAddAmount = () => {
    setAmount(prev => prev + 1);
  };
  const handleSubAmount = () => {
    setAmount(prev => prev - 1);
  };
  const handleConnect = () => {
    dispatch(fecthBlockchainDataActionAsync());
  };
  const buildMintingOption = () => {
    return (
      <>
        <McButton isMint>Mint</McButton>
        <McSection>
          <McSub disabled={amount === 1} onClick={handleSubAmount}>
            -
          </McSub>
          <McValue>{amount}</McValue>
          <McAdd onClick={handleAddAmount}>+</McAdd>
        </McSection>
      </>
    );
  };
  const buildQuantity = () => {
    return `${quantity}`;
  };

  const buildPrice = () => {
    return `${price} ETH`;
  };

  return (
    <McContainer>
      <McInformationContainer>
        <McTitle>{title}</McTitle>
        <McText>{text}</McText>
        <McMintDetails>
          <McMintDetailsQuantity>
            <McmdqLabel>Quantity</McmdqLabel>
            <MCmdqValue>{buildQuantity()}</MCmdqValue>
          </McMintDetailsQuantity>
          <McMintDetailsQuantity>
            <McmdpLabel>Price</McmdpLabel>
            <McmdpPrice>
              <McmdpEthereumImage src="assets/ethereum-logo.png" />
              <MCmdqValue>{buildPrice()}</MCmdqValue>
            </McmdpPrice>
          </McMintDetailsQuantity>
        </McMintDetails>
        <McButtonsSection>{!isConnected ? <McButton onClick={handleConnect}>connect</McButton> : buildMintingOption()}</McButtonsSection>
      </McInformationContainer>
      <McImage src={image} />
    </McContainer>
  );
};

export default MintCard;
