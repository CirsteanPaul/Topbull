import React from 'react';
import { BannerButton, BannerButtonsWrapper, BannerContainer, BannerInformation, BannerText, BannerTitle, BannerTitleHighlighted } from './styles';

const Banner = (): JSX.Element => {
  const handleMintClick = () => {
    console.log('Mint');
  };
  const handleDiscoverClick = () => {
    console.log('Discover');
  };
  return (
    <BannerContainer>
      <BannerInformation>
        <BannerTitle>
          The All in One <BannerTitleHighlighted>LaunchPad</BannerTitleHighlighted>
          for NFT Enthusiasts
        </BannerTitle>
        <BannerText>Become a part of the future leading platform for web3 startups</BannerText>
        <BannerButtonsWrapper>
          <BannerButton onClick={handleMintClick}>mint now</BannerButton>
          <BannerButton onClick={handleDiscoverClick} isHighlighted>
            Discover more
          </BannerButton>
        </BannerButtonsWrapper>
      </BannerInformation>
    </BannerContainer>
  );
};

export default Banner;
