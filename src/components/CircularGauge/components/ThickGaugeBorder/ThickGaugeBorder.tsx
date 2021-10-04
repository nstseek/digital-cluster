import React, { useEffect, useState } from 'react';

import { SInstrumentClusterBackground } from '../../../../styled/components/InstrumentClusterBackground';
import GaugeSize from '../../contexts/GaugeSize';
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
  const [{ width, height }, setGaugeSize] = useState({
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
    <GaugeSize.Provider value={{ width, height }}>
      <SBrightThickBorder>
        <SBrighterThinBorder>
          <SBrightThickBorder inner id={gaugeContainerId}>
            <ResetBackground />
            <Gauge width={width} height={height} />
          </SBrightThickBorder>
        </SBrighterThinBorder>
      </SBrightThickBorder>
    </GaugeSize.Provider>
  );
};

export default ThickGaugeBorder;
