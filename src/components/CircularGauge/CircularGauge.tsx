/* eslint-disable no-console */
import React from 'react';

import { SInstrumentClusterBackground } from '../../styled/components/InstrumentClusterBackground';
import { SCircularGaugeOuterBorder, SOuterBorderBackgroundReset } from './CircularGauge.styles';
import ThickGaugeBorder from './components/ThickGaugeBorder';

interface Props {}

const CircularGauge: React.FC<Props> = () => {
  const ResetBackground: React.FC = () => (
    <SOuterBorderBackgroundReset>
      <SInstrumentClusterBackground />
    </SOuterBorderBackgroundReset>
  );

  return (
    <SCircularGaugeOuterBorder>
      <ResetBackground />
      <ThickGaugeBorder />
    </SCircularGaugeOuterBorder>
  );
};

export default CircularGauge;
