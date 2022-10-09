import styled from '../../../../../theme';

export const EbContainer = styled.div`
  margin-top: 60px;
  background: linear-gradient(180deg, #df4d4d 0%, #8c2323 100%);
  border-radius: 30px;
  display: flex;
  gap: 180px;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;

  align-items: center;
  padding: 30px 20px;
`;

export const EbTextSection = styled.div`
  margin-top: 20px;
  display: flex;
  text-transform: uppercase;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 80%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const EbText = styled.h5`
  color: ${props => props.theme.colors.textWhite};
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fontSize.medium};
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.small};
    text-align: center;
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.xSmall};
  }
`;

export const EbTitle = styled.h1`
  color: ${props => props.theme.colors.textWhite};
  font-family: ${props => props.theme.fonts.bold};
  letter-spacing: 4px;
  font-size: ${props => props.theme.fontSize.xxLarge};
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.xLarge};
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.medium};
    letter-spacing: 2px;
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.small};
    text-align: center;
  }
`;

export const EbCardsContainer = styled.div`
  display: flex;
  gap: 32px;
`;
