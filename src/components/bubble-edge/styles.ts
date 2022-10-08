import styled from '../../theme';
import { BUBBLE_WIDTH_LARGE, BUBBLE_WIDTH_SMALL } from '../../constants/styles-constants';

export const BeImageLayoutLeft = styled.div`
  height: 100px;
  width: ${BUBBLE_WIDTH_LARGE}px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  @media screen and (max-width: 768px) {
    width: ${BUBBLE_WIDTH_SMALL}px;
    height: 60px;
  }
  @media screen and (max-width: 312px) {
    display: none;
  }
`;
export const BeTextLeft = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.large};
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;
export const BeImageLayoutRight = styled.div`
  height: 100px;
  width: ${BUBBLE_WIDTH_LARGE}px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  @media screen and (max-width: 768px) {
    width: ${BUBBLE_WIDTH_SMALL}px;
    height: 60px;
  }
  @media screen and (max-width: 312px) {
    display: none;
  }
`;
