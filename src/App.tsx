import useWeb3Modal from './hooks/useWeb3Modal';
import Home from './modals/home';

const App = (): JSX.Element => {
  useWeb3Modal();

  return <Home />;
};

export default App;
