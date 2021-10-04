import React, { useCallback, useState } from 'react';

import { SInstrumentClusterBackground } from '../../../../styled/components/InstrumentClusterBackground';
import {
  SGaugeBackgroundReset,
  SGaugeContainer,
  SGrayGaugeBorder,
  SRedGaugeBorder
} from './Gauge.styles';
import { calculateGaugeClipPath, calculateGaugeConicGradient } from './GaugeFill.logic';
import GaugeScale from './GaugeScale';

interface Props {
  width: number;
  height: number;
}

const Gauge: React.FC<Props> = ({ width, height }) => {
  const maxRpm = 8000;

  const redLine = 6500;

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
      <SInstrumentClusterBackground onClick={() => setInterval(accelerate, 1)} />
    </SGaugeBackgroundReset>
  );
  return (
    <>
      <SGrayGaugeBorder />
      <SGaugeContainer
        style={{ clipPath: calculateGaugeClipPath(percentage) }}
        width={width}
        height={height}
      >
        <SRedGaugeBorder style={{ backgroundImage: calculateGaugeConicGradient(percentage) }} />
      </SGaugeContainer>
      <ResetBackground />
      <GaugeScale maxRpm={maxRpm} redLine={redLine} />
    </>
  );
};

export default Gauge;
