import styled from '../../../../theme';

export const TeamContainer = styled.section`
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  @media screen and(max-width: 512px) {
    margin: 15px 0;
    gap: 25px;
  }
`;

export const TeamTitle = styled.h1`
  text-align: center;
  padding: 0 20px;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.xxLarge};
  font-family: ${props => props.theme.fonts.bold};
  text-transform: uppercase;
  letter-spacing: 1.4px;
  position: relative;
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.xLarge};
    padding: 0 12px;
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.large};
    padding: 0 12px;
  }
`;

export const TeamContainerCards = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  gap: 40px 10px;
  padding: 0 10px;
  @media screen and (max-width: 768px) {
    grid-template: 1fr 1fr 1fr/ 1fr 1fr;
  }
  @media screen and (max-width: 300px) {
    grid-template: 1fr 1fr 1fr/ 1fr;
  }
`;
