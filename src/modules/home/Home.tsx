import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';
import AppLoaderOverlay from '../../components/app-loader-overlay';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { emptyAddress } from '../../constants/switch-network-data';
import { useAppDispatch, useAppSelector } from '../../store';
import { setContractRefferalCodeAction } from '../../store/actions/contract-actions';
import { blockchainLoadingSelector } from '../../store/selectors/blockchain-selectors';
import { contractLoadingSelector } from '../../store/selectors/contract-selectors';
import { getReferralFromUri } from '../../utils/convertReferralCode';
import AffiliateProgram from './components/affiliate-program';
import AppPreview from './components/app-preview';
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
  const contractLoading = useAppSelector(contractLoadingSelector);
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const ref = getReferralFromUri(location.pathname);
    if (ref !== emptyAddress) dispatch(setContractRefferalCodeAction(ref));
  }, [location, dispatch]);
  return (
    <HomeContainer>
      <AppLoaderOverlay isLoading={blockchainLoading || contractLoading} />
      <Header />
      <Element name="banner">
        <Banner />
      </Element>
      <Exclusive />
      <AppPreview />
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
      {/* <AffiliateProgram /> */}
      <Footer />
    </HomeContainer>
  );
};

export default Home;
