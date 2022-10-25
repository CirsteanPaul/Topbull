import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setAppIsNavOpenAction } from '../../store/actions/app-actions';
import { appIsNavOpen, appIsScrolledSelector, appWidthSelector } from '../../store/selectors/app-selectors';
import {
  HeaderContainer,
  HeaderLeftSection,
  HeaderLogo,
  HeaderLogoContainer,
  HeaderLogoMobile,
  HeaderLogoNavMenuMobile,
  HeaderMobileMenu,
  HeaderNavContainer,
  HeaderNavIconDiscord,
  HeaderNavIconTwitter,
  HeaderTitle,
  HeaderLogoText,
  InsideLink,
  NavLink,
} from './styles';
import './styles.css';

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isScrolled = useAppSelector(appIsScrolledSelector);
  const width = useAppSelector(appWidthSelector);
  const isOpen = useAppSelector(appIsNavOpen);
  const handleOpenDiscord = () => {
    window.open('');
  };
  const handleOpenTwitter = () => {
    window.open('https://twitter.com/TopBullNFT');
  };
  const handleOpenMedium = () => {
    window.open('https://medium.com/@TopBullNFT');
  };
  const buildButton = (): JSX.Element => {
    return (
      <button style={{ zIndex: 50 }} type="button" onClick={() => dispatch(setAppIsNavOpenAction(!isOpen))} className={`${isOpen ? 'active' : ''} burger`}>
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
        <HeaderLogoContainer>
          <HeaderLogoNavMenuMobile src="assets/logo-silver.png" />
          <HeaderLogoText>Topbull</HeaderLogoText>
        </HeaderLogoContainer>
        {!isOpen && buildButton()}
        <HeaderMobileMenu isOpen={isOpen}>
          <div style={{ position: 'absolute', top: '20px', right: '30px' }}>{buildButton()}</div>
          <HeaderLogoMobile isOpen={isOpen} src="assets/logo-silver.png" />
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="banner">
            Home
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="exclusive">
            Overview
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="mint">
            Mint
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="roadmap">
            Roadmap
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="faq">
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
        <NavLink to="banner">Home</NavLink>
        <NavLink to="exclusive">Overview</NavLink>
        <NavLink to="mint">Mint</NavLink>
        <NavLink to="roadmap">Roadmap</NavLink>
        <NavLink to="faq">Faq</NavLink>
        <HeaderNavIconTwitter onClick={handleOpenTwitter} src="assets/twitter.png" />
        <HeaderNavIconDiscord onClick={handleOpenDiscord} src="assets/discord-black.png" />
        <HeaderNavIconDiscord onClick={handleOpenMedium} src="assets/medium.png" />
      </HeaderNavContainer>
    </HeaderContainer>
  );
};

export default Header;
