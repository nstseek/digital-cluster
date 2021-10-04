import styled, { CSSObject } from 'styled-components/macro';

import { getScaleFactor, innerContentStyles } from '../../utils';

export const SGaugeContainer: any = styled.div<{
  width: number;
  height: number;
}>(({ width, height }): CSSObject => {
  // offsets from border
  width -= 20;
  height -= 20;

  const [scaleFactor, maxDimension, minDimension] = getScaleFactor(width, height);

  return {
    ...innerContentStyles(10),
    position: 'absolute',
    width: `${minDimension}px`,
    height: `${minDimension}px`,
    transform: `scale${maxDimension === width ? 'X' : 'Y'}(${scaleFactor})`
  };
});

export const SRedGaugeBorder = styled.div((): CSSObject => {
  return {
    ...innerContentStyles(-100),
    width: '100%',
    height: '100%'
  };
});

export const SGrayGaugeBorder = styled.div(
  (): CSSObject => ({
    ...innerContentStyles(10),
    position: 'absolute',
    backgroundImage: `radial-gradient(ellipse at center, #111 70%, #ddd 71.5%)`
  })
);

export const SGaugeBackgroundReset = styled.div((): CSSObject => innerContentStyles(13, true));
