import React from 'react';
import { EbCardContainer, EbcImage, EbcText, EbcTitle } from './styles';
import IEbCardProps from './types';

const EbCard = (props: IEbCardProps): JSX.Element => {
  const { title, text, image } = props;
  return (
    <EbCardContainer>
      <EbcImage src={image} />
      <EbcTitle>{title}</EbcTitle>
      <EbcText>{text}</EbcText>
    </EbCardContainer>
  );
};

export default EbCard;
