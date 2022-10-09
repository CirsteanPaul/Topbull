import Banner from './components/banner';
import Exclusive from './components/exclusive';
import Roadmap from './components/roadmap';
import { HomeContainer } from './styles';

const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <Banner />
      <Exclusive />
      <Roadmap />
    </HomeContainer>
  );
};

export default Home;
