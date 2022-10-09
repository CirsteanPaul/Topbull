import { BUBBLE_WIDTH_LARGE, BUBBLE_WIDTH_SMALL } from '../../../../../constants/styles-constants';
import styled, { css } from '../../../../../theme';

export const RiContainer = styled.article<{ isRight?: boolean }>`
  display: flex;
  width: 100vw;
  flex-direction: column;
  gap: 20px;
  position: relative;
  padding: 0 ${BUBBLE_WIDTH_LARGE + 40}px;
  ${props =>
    props.isRight &&
    css`
      text-align: right;
      align-items: flex-end;
    `}
  @media screen and (max-width: 768px) {
    padding: 0 ${BUBBLE_WIDTH_SMALL + 20}px;
    gap: 12px;
  }
  @media screen and (max-width: 512px) {
    align-items: center;
  }
  @media screen and (max-width: 312px) {
    align-items: center;
    text-align: center;
    padding: 0 15px;
  }
`;
export const RiTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.xLarge};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;
export const RiText = styled.p`
  max-width: 800px;
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.light};
  color: ${props => props.theme.colors.white};
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.xSmall};
  }
`;
