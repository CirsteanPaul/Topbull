import Banner from './components/banner';
import Roadmap from './components/roadmap';
import { HomeContainer } from './styles';

const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <Banner />
      <Roadmap />
    </HomeContainer>
  );
};

export default Home;
