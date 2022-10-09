import styled from '../../../../theme';
import bgImage from './bg-lines.png';

export const RoadmapContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-position: right;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${bgImage});
  align-items: center;
  margin-top: 44px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;
export const RoadmapTitle = styled.h1`
  text-align: center;
  padding: 0 20px;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.xxLarge};
  font-family: ${props => props.theme.fonts.bold};
  text-transform: uppercase;
  margin-bottom: 40px;
  position: relative;
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.large};
    padding: 0 12px;
    margin-bottom: 32px;
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.medium};
    padding: 0 12px;
    margin-bottom: 32px;
  }
`;
export const RoadmapInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  @media screen and (max-width: 768px) {
    gap: 32px;
  }
`;
