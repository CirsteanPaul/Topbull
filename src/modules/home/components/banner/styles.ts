import * as Scroll from 'react-scroll';
import styled from '../../../../theme';
import bannerGif from './banner-gif.gif';

export const BannerContainer = styled.section`
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${bannerGif});
  height: 100vh;
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
    background-attachment: initial;
  }
`;

export const BannerInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 88%;
  max-width: 800px;
  padding: 0 80px;
  padding-right: 10px;
  @media screen and (min-width: 1412px) {
    max-width: 1200px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 60px;
    padding-right: 10px;
  }
  @media screen and (max-width: 492px) {
    padding: 0 25px;
    padding-right: 0;
  }
  @media screen and (max-width: 312px) {
    align-items: center;
    width: 100%;
    padding: 0 20px;
    padding-right: 10px;
  }
`;

export const BannerTitle = styled.h1`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  color: ${props => props.theme.colors.textWhite};
  font-family: ${props => props.theme.fonts.aldrich};
  font-weight: 400;
  font-size: ${props => props.theme.fontSize.xxLarge};

  @media screen and (min-width: 1412px) {
    font-size: ${props => props.theme.fontSize.xxLarge};
  }
  @media screen and (max-width: 1100px) {
    color: ${props => props.theme.colors.gray};
    text-shadow: 1px 1px black;
  }
  @media screen and (max-width: 768px) {
    width: 88%;
  }
  @media screen and (max-width: 512px) {
    width: 93%;
    font-size: ${props => props.theme.fontSize.xLarge};
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

export const BannerTitleHighlighted = styled.span`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.aldrich};
  font-weight: 400;
  font-size: ${props => props.theme.fontSize.xxLarge};
  @media screen and (min-width: 1412px) {
    font-size: ${props => props.theme.fontSize.xxLarge};
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.xLarge};
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

export const BannerText = styled.h4`
  color: ${props => props.theme.colors.textWhite};
  font-family: ${props => props.theme.fonts.aldrich};
  font-size: ${props => props.theme.fontSize.small};
  width: 60%;
  padding-left: 4px;
  @media screen and (min-width: 1412px) {
    width: 40%;
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media screen and (max-width: 1100px) {
    text-shadow: 0.3px 0.5px black;
    color: ${props => props.theme.colors.gray};
  }
  @media screen and (max-width: 768px) {
    width: 75%;
  }
  @media screen and (max-width: 512px) {
    width: 90%;
  }
  @media screen and (max-width: 312px) {
    padding: 0 8px;
    width: 100%;
  }
`;

export const BannerButtonsWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 32px;
  @media screen and (max-width: 768px) {
    margin-top: 16px;
    gap: 16px;
  }
  @media screen and (max-width: 512px) {
    flex-direction: row;
    gap: 16px;
  }
  @media screen and (max-width: 414px) {
    flex-direction: column;
    padding-right: 20px;
    gap: 16px;
  }
`;

export const BannerButton = styled(Scroll.Link).attrs(() => ({
  spy: true,
  offset: -50,
  smooth: 'easeInOutQuint',
  duratioon: 500,
}))<{ isHighlighted?: boolean }>`
  color: ${props => (props.isHighlighted ? props.theme.colors.white : props.theme.colors.primary)};
  background-color: ${props => (props.isHighlighted ? props.theme.colors.primary : props.theme.colors.white)};
  text-transform: uppercase;
  border-radius: 20px;
  padding: ${props => (props.isHighlighted ? '12px 20px' : '12px 40px')};
  font-family: ${props => props.theme.fonts.bold};
  outline: 0;
  border: 0;
  &:focus {
    outline: 0;
    border: 0;
  }
  &:hover {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  font-size: ${props => props.theme.fontSize.small};
  @media screen and (max-width: 768px) {
    padding: ${props => (props.isHighlighted ? '16px 20px' : '16px 36px')};
    font-size: ${props => props.theme.fontSize.small};

    border-radius: 8px;
  }
  @media screen and (max-width: 334px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;
