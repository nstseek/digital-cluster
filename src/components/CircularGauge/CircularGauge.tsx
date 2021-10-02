/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import { SInstrumentClusterBackground } from '../../styled/components/InstrumentClusterBackground';
import {
  SBrighterThinBorder,
  SBrightThickBorder,
  SCircularGaugeOuterBorder,
  SGaugeBackgroundReset,
  SGaugeContainer,
  SGrayGaugeScale,
  SOuterBorderBackgroundReset,
  SRedGaugeScale,
  SThickBorderBackgroundReset
} from './CircularGauge.styles';

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
      <ThickBorder />
    </SCircularGaugeOuterBorder>
  );
};

const ThickBorder = () => {
  const ResetBackground: React.FC = () => (
    <SThickBorderBackgroundReset>
      <SInstrumentClusterBackground />
    </SThickBorderBackgroundReset>
  );
  return (
    <SBrightThickBorder>
      <SBrighterThinBorder>
        <SBrightThickBorder inner>
          <ResetBackground />
          <GaugeScale />
        </SBrightThickBorder>
      </SBrighterThinBorder>
    </SBrightThickBorder>
  );
};

const GaugeScale = () => {
  const maxRpm = 8000;

  const [actualRpm] = useState(maxRpm / 6 - 200);

  const percentage = actualRpm / maxRpm;

  useEffect(() => {
    // const accelerate = () => {
    //   setActualRpm((data) => {
    //     if (data < 8000) {
    //       return data + 10;
    //     } else {
    //       return data - 10;
    //     }
    //   });
    //   setTimeout(accelerate, 1);
    // };
    // setTimeout(accelerate, 1);
  }, []);

  const ResetBackground: React.FC = () => (
    <SGaugeBackgroundReset>
      <SInstrumentClusterBackground />
    </SGaugeBackgroundReset>
  );
  return (
    <>
      <SGrayGaugeScale />
      <SGaugeContainer percentage={percentage}>
        <SRedGaugeScale percentage={percentage} />
      </SGaugeContainer>
      <ResetBackground />
    </>
  );
};

export default CircularGauge;
