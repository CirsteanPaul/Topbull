import React from 'react';
import BubbleEdge from '../../components/bubble-edge';
import Roadmap from './components/roadmap';
import { HomeContainer } from './styles';

const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <Roadmap />
    </HomeContainer>
  );
};

export default Home;
