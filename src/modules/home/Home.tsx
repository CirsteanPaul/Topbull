import { Element } from 'react-scroll';
import AppLoaderOverlay from '../../components/app-loader-overlay';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { useAppSelector } from '../../store';
import { blockchainLoadingSelector } from '../../store/selectors/blockchain-selectors';
import Banner from './components/banner';
import Exclusive from './components/exclusive';
import Faq from './components/faq';
import LifeTime from './components/life-time';
import MintSection from './components/mint-section';
import Roadmap from './components/roadmap';
import Team from './components/team';
import { HomeContainer } from './styles';

const Home = (): JSX.Element => {
  const blockchainLoading = useAppSelector(blockchainLoadingSelector);

  return (
    <HomeContainer>
      <AppLoaderOverlay isLoading={blockchainLoading} />
      <Header />
      <Element name="banner">
        <Banner />
      </Element>
      <Exclusive />
      <LifeTime />
      <Element name="mint">
        <MintSection />
      </Element>
      <Element name="roadmap">
        <Roadmap />
      </Element>
      <Element name="faq">
        <Faq />
      </Element>
      <Team />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
