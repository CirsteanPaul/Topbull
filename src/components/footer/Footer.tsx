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
      <BackgroundMatrix top="-200px" left="0" />
      <FooterWrapper>
        <FooterLogo>
          <FooterLogoImg src="assets/logo-silver.png" />
          <FooterLogoTitle>topbull</FooterLogoTitle>
        </FooterLogo>
        <FooterCopyRight>Copyright © 2022 TOPBULL All rights reserved.</FooterCopyRight>
        <FooterMenuWrapper>
          <FooterMenuContainer>
            <FooterMenuItem>Home</FooterMenuItem>
            <FooterMenuItem>Overview</FooterMenuItem>
          </FooterMenuContainer>
          <FooterMenuContainer>
            <FooterMenuItem>mint</FooterMenuItem>
            <FooterMenuItem>roadmap</FooterMenuItem>
            <FooterMenuItem>faq</FooterMenuItem>
          </FooterMenuContainer>
          <FooterIcon onClick={handleOpenTwitter} src="assets/twitter.png" />
          <FooterIcon onClick={handleOpenDiscord} src="assets/discord.png" />
        </FooterMenuWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
