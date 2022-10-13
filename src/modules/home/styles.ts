import styled from '../../theme';

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
`;
