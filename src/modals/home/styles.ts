import styled from '../../theme';

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
`;
