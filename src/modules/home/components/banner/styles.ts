import styled from '../../../../theme';
import bannerImage from './banner-image.png';

export const BannerContainer = styled.section`
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${bannerImage});
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 512px) {
    align-items: center;
  }
`;

export const BannerInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 80%;
  padding: 0 80px;
  padding-right: 10px;
  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 0 20px;
  }
  @media screen and (max-width: 512px) {
    align-items: center;
  }
  @media screen and (max-width: 312px) {
    align-items: center;
    width: 100%;
  }
`;

export const BannerTitle = styled.h1`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: ${props => props.theme.colors.textWhite};
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fontSize.xxLarge};
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.large};
  }
  @media screen and (max-width: 512px) {
    text-align: center;
    align-self: center;
    flex-direction: column;
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;

export const BannerTitleHighlighted = styled.span`
  padding: 0 8px;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.fontSize.xxLarge};
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.large};
  }
  @media screen and (max-width: 512px) {
    text-align: center;
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.small};
    padding: 0 4px;
  }
`;

export const BannerText = styled.h4`
  color: ${props => props.theme.colors.textWhite};
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fontSize.medium};
  width: 60%;
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  @media screen and (max-width: 512px) {
    text-align: center;
    width: 90%;
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
    flex-direction: column;
    gap: 16px;
  }
`;

export const BannerButton = styled.button<{ isHighlighted?: boolean }>`
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
    font-size: ${props => props.theme.fontSize.xSmall};
    padding: ${props => (props.isHighlighted ? '10px 12px' : '10px 28px')};

    border-radius: 16px;
  }
`;
