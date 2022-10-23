import React from 'react';
import { BannerButton, BannerButtonsWrapper, BannerContainer, BannerInformation, BannerText, BannerTitle, BannerTitleHighlighted } from './styles';

const Banner = (): JSX.Element => {
  return (
    <BannerContainer>
      <BannerInformation>
        <BannerTitle>
          The All in One <BannerTitleHighlighted>LaunchPad</BannerTitleHighlighted>
          for NFT Enthusiasts
        </BannerTitle>
        <BannerText>Become a part of the future leading platform for web3 startups</BannerText>
        <BannerButtonsWrapper>
          <BannerButton to="mint">mint now</BannerButton>
          <BannerButton isHighlighted to="exclusive">
            Discover more
          </BannerButton>
        </BannerButtonsWrapper>
      </BannerInformation>
    </BannerContainer>
  );
};

export default Banner;
