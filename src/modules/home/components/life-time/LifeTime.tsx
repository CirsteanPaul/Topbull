import React from 'react';
import LtTable from './components/life-time-table';
import { LifeTimeContainer } from './styles';

const LifeTime = (): JSX.Element => {
  return (
    <LifeTimeContainer>
      <LtTable />
    </LifeTimeContainer>
  );
};

export default LifeTime;
