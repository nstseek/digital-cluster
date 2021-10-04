/* eslint-disable no-console */
import styled, { CSSObject } from 'styled-components/macro';

import { brightYellow, goldenYellow } from '../../styled/colors';
import { flexAlignCenter } from '../../styled/mixins';
import { circularGaugeSize } from '../../styled/sizes';
import { px } from '../../styled/units/pixels';
import { innerContentStyles } from './utils';

export const SCircularGaugeOuterBorder = styled.div((): CSSObject => {
  const { width, height } = circularGaugeSize;
  return {
    ...flexAlignCenter,
    width: px(width),
    height: px(height),
    borderRadius: '50%',
    backgroundImage: `radial-gradient(circle at top, ${brightYellow} 0, ${goldenYellow} 33%)`,
    position: 'relative'
  };
});

export const SOuterBorderBackgroundReset = styled.div((): CSSObject => innerContentStyles(3, true));
