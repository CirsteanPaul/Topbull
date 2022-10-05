import styled from './theme';

const Container = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.medium};
`;
const App = () => {
  return <Container>test</Container>;
};

export default App;
