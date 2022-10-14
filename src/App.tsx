import useEmitters from './hooks/useEmitters';
import useModalIsOpen from './hooks/useModallsOpen';
import useWeb3Modal from './hooks/useWeb3Modal';
import Home from './modules/home';

const App = (): JSX.Element => {
  useWeb3Modal();
  useEmitters();
  useModalIsOpen();

  return <Home />;
};

export default App;
