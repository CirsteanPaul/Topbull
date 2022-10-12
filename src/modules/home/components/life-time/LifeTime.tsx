import React from 'react';
import LtTable from './components/life-time-table';
import { LifeTimeContainer, LifeTimeData, LifeTimeDataRed, LifeTimeTitle, LifeTimeTitleContainer, LifeTimeTitleDataContainer, LifeTimeTitleWrapper } from './styles';

const LifeTime = (): JSX.Element => {
  return (
    <LifeTimeContainer>
      <LifeTimeTitleWrapper>
        <LifeTimeTitleContainer>
          <LifeTimeTitle>Your lifetime access to</LifeTimeTitle>
          <LifeTimeTitle isHighlighted>topbull</LifeTimeTitle>
        </LifeTimeTitleContainer>
        <LifeTimeTitleDataContainer>
          <LifeTimeData>Benefit from all the features Top Bull has to offer without limitations.</LifeTimeData>
          <LifeTimeDataRed>BE AHEAD OF THE GAME</LifeTimeDataRed>
        </LifeTimeTitleDataContainer>
      </LifeTimeTitleWrapper>

      <LtTable />
    </LifeTimeContainer>
  );
};

export default LifeTime;
