import React, { useContext } from 'react';

import GaugeSize from '../../../contexts/GaugeSize';
import { SGaugeDash, SGaugeDashContainer, SGaugeScaleContainer } from './GaugeScale.styles';

interface Props {
  maxRpm: number;
  redLine: number;
}

const GaugeScale: React.FC<Props> = ({ maxRpm, redLine }) => {
  const stepSize = 100;
  const highlightSize = 1000;
  const dashCount = Math.ceil(maxRpm / stepSize);
  const degreesBetweenDashes = 270 / dashCount;

  const { width, height } = useContext(GaugeSize);

  const generateDashes = (quantity: number, redLine: number) => {
    const dashes = [];
    let angle = -45;
    for (let i = 1; i <= quantity; i++) {
      if ((i * stepSize) % highlightSize === 0) {
        dashes.push(
          <SGaugeDashContainer key={i} rotation={angle} width={width ?? 0} height={height ?? 0}>
            <SGaugeDash primary />
          </SGaugeDashContainer>
        );
      } else if (i * stepSize >= redLine) {
        dashes.push(
          <SGaugeDashContainer key={i} rotation={angle} width={width ?? 0} height={height ?? 0}>
            <SGaugeDash red />
          </SGaugeDashContainer>
        );
      } else {
        dashes.push(
          <SGaugeDashContainer key={i} rotation={angle} width={width ?? 0} height={height ?? 0}>
            <SGaugeDash />
          </SGaugeDashContainer>
        );
      }
      angle += degreesBetweenDashes;
    }
    return dashes;
  };

  return <SGaugeScaleContainer>{generateDashes(dashCount, redLine)}</SGaugeScaleContainer>;
};

export default GaugeScale;
