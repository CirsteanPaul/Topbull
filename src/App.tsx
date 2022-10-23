import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useEmitters from './hooks/useEmitters';
import useModalIsOpen from './hooks/useModallsOpen';
import useWeb3Modal from './hooks/useWeb3Modal';
import Home from './modules/home';

const App = (): JSX.Element => {
  useWeb3Modal();
  useEmitters();
  useModalIsOpen();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
