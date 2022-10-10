import Footer from '../../components/footer';
import Banner from './components/banner';
import Exclusive from './components/exclusive';
import MintSection from './components/mint-section';
import Roadmap from './components/roadmap';
import { HomeContainer } from './styles';

const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <Banner />
      <Exclusive />
      <MintSection />
      <Roadmap />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
