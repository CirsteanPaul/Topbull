import { themesList } from 'web3modal';
import { FAQ_CARD_HEIGHT } from '../../../../constants/styles-constants';
import styled, { css } from '../../../../theme';

export const FaqContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 0 40px;
  margin: 40px 0;
`;

export const FaqLine = styled.div`
  width: 80%;
  height: 8px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.primary};
  @media screen and (max-width: 512px) {
    width: 100%;
  }
`;

export const FaqTitle = styled.h1`
  text-align: center;
  padding: 0 20px;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.xxLarge};
  font-family: ${props => props.theme.fonts.bold};
  text-transform: uppercase;
  letter-spacing: 1.4px;
  margin-top: 40px;
  position: relative;
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.xLarge};
    padding: 0 12px;
    margin-bottom: 22px;
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.large};
    padding: 0 12px;
    margin-bottom: 16px;
  }
`;

export const FaqData = styled.div`
  display: flex;
  width: 90%;
  gap: 10px;
  align-items: center;
  @media screen and (max-width: 950px) {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const FaqImage = styled.img`
  align-self: center;
  height: 300px;
  width: 400px;
  @media screen and (max-width: 1000px) {
    height: 250px;
    width: 350px;
  }
  @media screen and (max-width: 600px) {
    height: 200px;
    width: 250px;
  }
`;
export const FaqWrapper = styled.div`
  flex: 1;
  display: flex;
  padding-top: 20px;
  align-self: flex-start;
  flex-direction: column;
`;
export const FaqSectionTitle = styled.h3`
  color: ${props => props.theme.colors.textWhite};
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.fonts.bold};
  margin-bottom: 30px;
  @media screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;
export const FaqSectionLine = styled.div<{ marginTop?: boolean }>`
  background-color: ${props => props.theme.colors.white};
  height: 2px;
  width: 100%;
  margin-top: ${props => (props.marginTop ? '22px' : '0')};
`;
export const FaqCard = styled.article`
  display: flex;
  padding-top: 25px;
  flex-direction: column;
`;
export const FaqCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  align-items: center;
`;
export const FaqCardTitle = styled.h6<{ isHighlighted?: boolean }>`
  color: ${props => (props.isHighlighted ? props.theme.colors.primary : props.theme.colors.textWhite)};
  font-size: ${props => props.theme.fontSize.medium};
  font-family: ${props => props.theme.fonts.regular};
  max-width: 90%;
  @media screen and (max-width: 600px) {
    max-width: 85%;
    font-size: ${props => props.theme.fontSize.small};
  }
`;
export const FaqCardButton = styled.button`
  align-self: center;
`;
export const FaqCardText = styled.p<{ isActive?: boolean }>`
  height: 0;
  visibility: hidden;
  transition: height 0.4s ease-in-out;
  margin-top: 7px;
  color: ${props => props.theme.colors.textWhite};
  opacity: 0.85;
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.inter};
  max-width: 95%;
  ${props =>
    props.isActive &&
    css`
      transition: height 0.4s ease-in, visibility 1.4s ease-in;
      height: 150px;
      visibility: visible;
    `}
  @media screen and (max-width: 950px) {
    ${props =>
      props.isActive &&
      css`
        transition: height 0.4s ease-in, visibility 0.8s ease-in;
        height: 100px;
        visibility: visible;
      `}
  }
  @media screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSize.mSmall};
    max-width: 90%
      ${props =>
        props.isActive &&
        css`
          transition: height 0.1s ease-in, visibility 0.8s ease-in;
          height: 120px;
          visibility: visible;
        `};
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.xSmall};
    ${props =>
      props.isActive &&
      css`
        transition: height 0.1s ease-in, visibility 3s ease-in;
        height: 160px;
        visibility: visible;
      `}
  }
`;
