import styled from '../../../../../../theme';

export const EbCardContainer = styled.article`
  border-radius: 30px;
  flex: 1;
  background-color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 70px;
  justify-content: flex-end;
  gap: 8px;
  position: relative;
  @media screen and (max-width: 768px) {
    gap: 15px;
    padding: 20px 20px;
    padding-top: 50px;
    gap: 4px;
  }
`;
export const EbcTitle = styled.h5`
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSize.medium};
  text-transform: uppercase;
  text-align: center;
  font-family: ${props => props.theme.fonts.bold};
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;
export const EbcText = styled.h5`
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSize.small};
  text-align: center;
  font-family: ${props => props.theme.fonts.roboto};
  font-weight: normal;
  @media screen and (max-width: 1000px) {
    font-size: ${props => props.theme.fontSize.xSmall};
  }
`;
export const EbcImage = styled.img`
  object-fit: cover;
  height: 150px;
  position: absolute;
  top: -55%;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width: 1150px) {
    top: -40%;
  }
  @media screen and (max-width: 1000px) {
    top: -30%;
    height: 110px;
  }
  @media screen and (max-width: 768px) {
    top: -40%;
    height: 70px;
  }
`;
