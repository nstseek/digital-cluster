import styled, { CSSObject } from 'styled-components/macro';

import { defaultRed } from '../../../../../styled/colors';
import { circularGaugeDashSize } from '../../../../../styled/sizes';
import { px } from '../../../../../styled/units/pixels';
import { getScaleFactor, innerContentStyles } from '../../../utils';

export const SGaugeScaleContainer = styled.div(
  (): CSSObject => ({
    ...innerContentStyles(12)
  })
);

export const SGaugeDashContainer = styled.div<{ rotation: number; height: number; width: number }>(
  ({ rotation, height, width }): CSSObject => {
    const [scaleFactor] = getScaleFactor(height, width);
    return {
      width: `${px(height - 35)}`,
      position: 'absolute',
      justifyContent: 'flex-start',
      transform: `scaleX(${scaleFactor}) rotate(${rotation}deg)`
    };
  }
);

export const SGaugeDash = styled.div<{ primary?: boolean; red?: boolean }>(
  ({ primary, red }): CSSObject => {
    const { width, height } = circularGaugeDashSize;
    return {
      display: 'flex',
      backgroundColor: red ? defaultRed : 'white',
      opacity: primary ? 1 : red ? 0.8 : 0.6,
      width: `${px(width)}`,
      height: `${px(Math.round(primary ? height : height / 2))}`
    };
  }
);
