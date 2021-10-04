import React, { useCallback, useState } from 'react';

import { SInstrumentClusterBackground } from '../../../../styled/components/InstrumentClusterBackground';
import { SGaugeBackgroundReset, SGrayGaugeScale } from '../../CircularGauge.styles';
import { SGaugeContainer, SRedGaugeScale } from './Gauge.styles';

interface Props {
  width: number;
  height: number;
}

const Gauge: React.FC<Props> = ({ width, height }) => {
  const maxRpm = 8000;

  const [actualRpm, setActualRpm] = useState(0);

  const accelerate = useCallback(() => {
    setActualRpm((data) => {
      if (data < maxRpm) {
        return data + 12;
      }
      return data;
    });
  }, []);

  const percentage = actualRpm / maxRpm;

  const ResetBackground: React.FC = () => (
    <SGaugeBackgroundReset>
      <SInstrumentClusterBackground onClick={() => setInterval(accelerate, 50)} />
    </SGaugeBackgroundReset>
  );
  return (
    <>
      <SGrayGaugeScale />
      <SGaugeContainer width={width} height={height} percentage={percentage}>
        <SRedGaugeScale percentage={percentage} />
      </SGaugeContainer>
      <ResetBackground />
    </>
  );
};

export default Gauge;
