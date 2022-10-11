import styled from '../../theme';

export const BmContainer = styled.div<{ top?: string; left?: string; bottom?: string; right?: string }>`
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 2px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;
export const BmBox = styled.div<{ scaled?: boolean }>`
  width: ${props => (props.scaled ? '16px' : '8px')};
  height: ${props => (props.scaled ? '16px' : '8px')};
  background-color: ${props => props.theme.colors.backgroundBlue};
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 4px;
    height: 4px;
  }
`;
