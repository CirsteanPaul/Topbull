import React from 'react';
import { FpButton, FpContainer, FpLittleText, FpTitle } from './styles';

const FooterPopup = (): JSX.Element => {
  const handleClick = () => {
    console.log('da');
  };
  return (
    <FpContainer>
      <FpLittleText>are you ready?</FpLittleText>
      <FpTitle>be a part of the next big thing</FpTitle>
      <FpButton onClick={handleClick}>Purchase A PERMIT NOW</FpButton>
    </FpContainer>
  );
};

export default FooterPopup;
