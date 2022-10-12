import useEmitters from './hooks/useEmitters';
import useWeb3Modal from './hooks/useWeb3Modal';
import Home from './modules/home';

const App = (): JSX.Element => {
  useWeb3Modal();
  useEmitters();

  return <Home />;
};

export default App;
