import { motion } from 'framer-motion/dist/framer-motion';
import useWeb3Modal from './hooks/useWeb3Modal';
import { useAppDispatch } from './store';
import { fecthBlockchainDataActionAsync } from './store/actions/blockchain-actions';
import styled from './theme';

const Container = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.medium};
`;
const App = () => {
  useWeb3Modal();
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(fecthBlockchainDataActionAsync());
  };
  return (
    <motion.div
      transition={{ width: { duration: 1 }, opacity: { duration: 0.7 }, default: { ease: 'linear' } }}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: '100%', opacity: 1 }}
      exit={{ width: '0', opacity: 0, transition: { duration: 0.7 } }}
    >
      <Container>
        test
        <button type="button" onClick={handleClick}>
          Connect
        </button>
      </Container>
    </motion.div>
  );
};

export default App;
