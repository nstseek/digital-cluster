import React, { useEffect, useState } from 'react';

import { SInstrumentClusterBackground } from '../../../../styled/components/InstrumentClusterBackground';
import Gauge from '../Gauge';
import {
  SBrighterThinBorder,
  SBrightThickBorder,
  SThickBorderBackgroundReset
} from './ThickGaugeBorder.styles';

interface Props {}

const ThickGaugeBorder = () => {
  const ResetBackground: React.FC<Props> = () => (
    <SThickBorderBackgroundReset>
      <SInstrumentClusterBackground />
    </SThickBorderBackgroundReset>
  );
  const gaugeContainerId = 'gauge-container';
  const [gaugeSize, setGaugeSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const gaugeContainer = document.getElementById(gaugeContainerId);
    const { width, height } = gaugeContainer?.getBoundingClientRect() ?? {
      width: 0,
      height: 0
    };
    setGaugeSize({ width, height });
  }, []);

  return (
    <SBrightThickBorder>
      <SBrighterThinBorder>
        <SBrightThickBorder inner id={gaugeContainerId}>
          <ResetBackground />
          <Gauge width={gaugeSize.width} height={gaugeSize.height} />
        </SBrightThickBorder>
      </SBrighterThinBorder>
    </SBrightThickBorder>
  );
};

export default ThickGaugeBorder;
