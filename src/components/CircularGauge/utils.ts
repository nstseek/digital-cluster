import { CSSObject } from 'styled-components';

import { flexAlignCenter } from '../../styled/mixins';
import { px } from '../../styled/units/pixels';

export const getNeedleAngle = (percentage: number) => {
  // angle calculation
  let angle = 270 * percentage - 45;
  if (angle < 0) {
    angle = 360 + angle;
  }
  return Number(angle.toFixed(2));
};

export const innerContentStyles = (margin: number, background = false): CSSObject => ({
  ...flexAlignCenter,
  position: background ? 'absolute' : 'relative',
  borderRadius: '50%',
  overflow: 'hidden',
  width: `calc(100% - ${px(margin * 2)})`,
  height: `calc(100% - ${px(margin * 2)})`
});
