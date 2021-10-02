import React, { useEffect, useState } from 'react';

import InstrumentClusterPosition from '../../contexts/layout/InstrumentClusterPosition';
import { SInstrumentClusterBackground } from '../../styled/components/InstrumentClusterBackground';
import CircularGauge from '../CircularGauge';
import { InstrumentClusterId, Props } from './InstrumentCluster.model';
import { SContainer } from './InstrumentCluster.styles';

const InstrumentCluster: React.FC<Props> = () => {
  const [x, setX] = useState<number | undefined>();
  const [y, setY] = useState<number | undefined>();

  useEffect(() => {
    const clusterRect = document.getElementById(InstrumentClusterId)?.getBoundingClientRect();
    setX(clusterRect?.x);
    setY(clusterRect?.y);
  }, []);

  return (
    <InstrumentClusterPosition.Provider value={{ x, y }}>
      <SContainer id={InstrumentClusterId}>
        <SInstrumentClusterBackground>
          <CircularGauge />
        </SInstrumentClusterBackground>
      </SContainer>
    </InstrumentClusterPosition.Provider>
  );
};

export default InstrumentCluster;
