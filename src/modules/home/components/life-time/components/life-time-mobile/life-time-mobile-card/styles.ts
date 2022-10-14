import styled from '../../../../../../../theme';

export const LtmContainer = styled.section`
  display: flex;
  padding: 30px;
  flex-direction: column;
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  width: 93vw;
  align-self: center;
`;
export const LtmTitle = styled.h3`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fontSize.xLarge};
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
  padding-bottom: 20px;
  padding-left: 5px;
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;
export const LtmInfo = styled.p<{ isRed?: boolean }>`
  background-color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.medium};
  font-family: ${props => props.theme.fonts.regular};
  border-radius: 20px;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  text-transform: uppercase;
  @media screen and (max-width: 690px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  @media screen and (max-width: 512px) {
    min-width: 200px;
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;
export const LtmiImage = styled.img`
  align-self: center;
  height: 20px;
  width: 20px;
`;
