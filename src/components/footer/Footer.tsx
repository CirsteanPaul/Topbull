import React from 'react';
import BackgroundMatrix from '../background-matrix';
import FooterPopup from './components';
import {
  FooterContainer,
  FooterCopyRight,
  FooterIcon,
  FooterLogo,
  FooterLogoImg,
  FooterLogoTitle,
  FooterMenuContainer,
  FooterMenuItem,
  FooterMenuWrapper,
  FooterWrapper,
} from './styles';

const Footer = (): JSX.Element => {
  const handleOpenDiscord = () => {
    window.open('');
  };
  const handleOpenTwitter = () => {
    window.open('');
  };
  return (
    <FooterContainer>
      <FooterPopup />
      <FooterWrapper>
        <FooterLogo>
          <FooterLogoImg src="assets/logo-silver.png" />
          <FooterLogoTitle>topbull</FooterLogoTitle>
        </FooterLogo>
        <FooterCopyRight>Copyright © 2022 TOPBULL All rights reserved.</FooterCopyRight>
        <FooterMenuWrapper>
          <FooterMenuContainer>
            <FooterMenuItem to="banner">Home</FooterMenuItem>
            <FooterMenuItem to="exclusive">Overview</FooterMenuItem>
          </FooterMenuContainer>
          <FooterMenuContainer>
            <FooterMenuItem to="mint">mint</FooterMenuItem>
            <FooterMenuItem to="roadmap">roadmap</FooterMenuItem>
            <FooterMenuItem to="faq">faq</FooterMenuItem>
          </FooterMenuContainer>
          <FooterIcon onClick={handleOpenTwitter} src="assets/twitter.png" />
          <FooterIcon onClick={handleOpenDiscord} src="assets/discord.png" />
        </FooterMenuWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
