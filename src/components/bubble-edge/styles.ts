import styled from '../../theme';
import { BUBBLE_WIDTH_LARGE, BUBBLE_WIDTH_MEDIUM, BUBBLE_WIDTH_SMALL, BUBBLE_WIDTH_XSMALL } from '../../constants/styles-constants';
import BubbleEdge from './BubbleEdge';

export const BeImageLayoutLeft = styled.div`
  height: 220px;
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
  @media screen and (max-width: 924px) {
    width: ${BUBBLE_WIDTH_MEDIUM}px;

    height: 150px;
  }
  @media screen and (max-width: 768px) {
    width: ${BUBBLE_WIDTH_SMALL}px;
    height: 110px;
  }
  @media screen and (max-width: 400px) {
    width: ${BUBBLE_WIDTH_XSMALL}px;
    height: 90px;
  }
  @media screen and (max-width: 380px) {
    display: none;
  }
`;
export const BeTextLeft = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.xGigant};
  font-weight: bold;
  @media screen and (max-width: 924px) {
    font-size: ${props => props.theme.fontSize.gigant};
  }
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.xLarge};
  }
  @media screen and (max-width: 400px) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;
export const BeImageLayoutRight = styled.div`
  height: 220px;
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
  @media screen and (max-width: 924px) {
    width: ${BUBBLE_WIDTH_MEDIUM}px;
    height: 150px;
  }
  @media screen and (max-width: 768px) {
    width: ${BUBBLE_WIDTH_SMALL}px;
    height: 110px;
  }
  @media screen and (max-width: 400px) {
    width: ${BUBBLE_WIDTH_XSMALL}px;
    height: 90px;
  }
  @media screen and (max-width: 380px) {
    display: none;
  }
`;
