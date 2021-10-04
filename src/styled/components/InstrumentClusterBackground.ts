import styled, { CSSObject } from 'styled-components/macro';

import { backgroundColors } from '../colors';
import { flexAlignCenter } from '../mixins';
import { clusterSize } from '../sizes';
import { px } from '../units/pixels';

export const SInstrumentClusterBackground = styled.div((): CSSObject => {
  const { width, height } = clusterSize;
  return {
    ...flexAlignCenter,
    position: 'absolute',
    width: px(width),
    height: px(height),
    backgroundImage: `radial-gradient(ellipse at 50% 90%, ${backgroundColors.brightBlue} 0, ${backgroundColors.darkBlue} 30%, ${backgroundColors.black} 80%)`,
    backgroundSize: `${px(width * 2)} ${px(height)}`,
    backgroundPosition: '50% 0%'
  };
});
