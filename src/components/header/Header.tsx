import React, { useState } from 'react';
import { useAppSelector } from '../../store';
import { appIsScrolledSelector, appWidthSelector } from '../../store/selectors/app-selectors';
import {
  HeaderContainer,
  HeaderLeftSection,
  HeaderLogo,
  HeaderLogoMobile,
  HeaderMobileMenu,
  HeaderNavContainer,
  HeaderNavIconDiscord,
  HeaderNavIconTwitter,
  HeaderTitle,
  InsideLink,
} from './styles';
import './styles.css';

const Header = (): JSX.Element => {
  const isScrolled = useAppSelector(appIsScrolledSelector);
  const width = useAppSelector(appWidthSelector);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenDiscord = () => {
    window.open('');
  };
  const handleOpenTwitter = () => {
    window.open('');
  };
  const buildButton = (): JSX.Element => {
    return (
      <button style={{ zIndex: 50 }} type="button" onClick={() => setIsOpen(prev => !prev)} className={`${isOpen ? 'active' : ''} burger`}>
        <div className={`${isOpen ? 'active' : ''} strip burger-strip-4`}>
          <div />
          <div />
          <div />
        </div>
      </button>
    );
  };
  if (width < 900) {
    return (
      <HeaderContainer isScrolled={isScrolled}>
        <HeaderLogo src="assets/logo-silver.png" />

        {!isOpen && buildButton()}
        <HeaderMobileMenu isOpen={isOpen}>
          <div style={{ position: 'absolute', top: '20px', right: '30px' }}>{buildButton()}</div>
          <HeaderLogoMobile isOpen={isOpen} src="assets/logo-silver.png" />
          <InsideLink isOpen={isOpen} onClick={() => setIsOpen(false)} to="banner">
            Home
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => setIsOpen(false)} to="exclusive">
            Overview
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => setIsOpen(false)} to="mint">
            Mint
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => setIsOpen(false)} to="roadmap">
            Roadmap
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => setIsOpen(false)} to="faq">
            Faq
          </InsideLink>
        </HeaderMobileMenu>
      </HeaderContainer>
    );
  }
  return (
    <HeaderContainer isScrolled={isScrolled}>
      <HeaderLeftSection>
        <HeaderLogo src="assets/logo-silver.png" />
        <HeaderTitle>Top</HeaderTitle>
        <HeaderTitle isRed>Bull</HeaderTitle>
      </HeaderLeftSection>
      <HeaderNavContainer>
        <InsideLink to="banner">Home</InsideLink>
        <InsideLink to="exclusive">Overview</InsideLink>
        <InsideLink to="mint">Mint</InsideLink>
        <InsideLink to="roadmap">Roadmap</InsideLink>
        <InsideLink to="faq">Faq</InsideLink>
        <HeaderNavIconTwitter onClick={handleOpenTwitter} src="assets/twitter.png" />
        <HeaderNavIconDiscord onClick={handleOpenDiscord} src="assets/discord-black.png" />
      </HeaderNavContainer>
    </HeaderContainer>
  );
};

export default Header;
