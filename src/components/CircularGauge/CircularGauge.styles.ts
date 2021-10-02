/* eslint-disable no-console */
import styled, { CSSObject } from 'styled-components/macro';

import { brightOrangeRed, brightYellow, defaultRed, goldenYellow } from '../../styled/colors';
import { flexAlignCenter } from '../../styled/mixins';
import { circularGaugeHeight, circularGaugeWidth, sizeFactor } from '../../styled/sizes';
import { px } from '../../styled/units/pixels';
import degreeToRadians from '../../utils';

export const SCircularGaugeOuterBorder = styled.div(
  (): CSSObject => ({
    ...flexAlignCenter,
    width: px(circularGaugeWidth * sizeFactor),
    height: px(circularGaugeHeight * sizeFactor),
    borderRadius: '50%',
    backgroundImage: `radial-gradient(circle at top, ${brightYellow} 0, ${goldenYellow} 33%)`,
    position: 'relative'
  })
);

const innerContentStyles = (margin: number, background = false): CSSObject => ({
  ...flexAlignCenter,
  position: background ? 'absolute' : 'relative',
  borderRadius: '50%',
  overflow: 'hidden',
  width: `calc(100% - ${px(margin * 2)})`,
  height: `calc(100% - ${px(margin * 2)})`
});

export const SOuterBorderBackgroundReset = styled.div((): CSSObject => innerContentStyles(3, true));

export const SBrightThickBorder = styled.div<{ inner?: boolean }>(({ inner }): CSSObject => {
  return {
    ...innerContentStyles(inner ? 17 : 7),
    backgroundImage: `radial-gradient(ellipse at top, #bdccdb 0, #101f2d 80%)`
  };
});

export const SBrighterThinBorder = styled.div((): CSSObject => {
  return {
    ...innerContentStyles(5),
    backgroundImage: `radial-gradient(ellipse at top, #eee 0, #051320 60%)`
  };
});

export const SThickBorderBackgroundReset = styled.div((): CSSObject => innerContentStyles(5, true));

export const SGrayGaugeScale = styled.div(
  (): CSSObject => ({
    ...innerContentStyles(10),
    position: 'absolute',
    backgroundImage: `radial-gradient(ellipse at center, #111 70%, #ddd 71.5%)`
  })
);

export const SGaugeContainer = styled.div<{ percentage: number }>(({ percentage }): CSSObject => {
  let bottomRightVector = '100% 100%';
  let topRightVector = '100% 0';
  const topLeftVector = '0 0';
  const bottomLeftVector = '0 100%';
  const centerVector = '50% 50%';

  if (percentage < 1 / 3) {
    topRightVector = '0 0';
  }

  // como caralhos eu vou resolver essa pissa aqui?

  // if (percentage >= 2 / 3) {
  //   const yOffset = (percentage - 2 / 3) * 3 * 100;
  //   bottomRightVector = `100% ${yOffset}%`;
  // } else if (percentage >= 1 / 3) {
  //   const xOffset = (percentage - 1 / 3) * 100 * 3;
  //   bottomRightVector = `${xOffset}% 0%`;
  // }
  if (percentage <= 1 / 6) {
    const quadrantPercentage = 50 + 50 * percentage * 6;
    const firstQuadrantAngle = 90 * (quadrantPercentage / 100);
    const radians = degreeToRadians(firstQuadrantAngle);
    const angleTan = Math.tan(radians);
    console.table({
      percentage,
      quadrantPercentage,
      firstQuadrantAngle,
      radians,
      angleTan
    });
    const yOffset = 50 - 50 * angleTan;
    bottomRightVector = `0% ${100 - yOffset}%`;
  }

  if (percentage >= 2 / 6 && percentage <= 3 / 6) {
    const quadrantPercentage = 50 + 50 * (percentage - 1 / 3) * 6;
    const firstQuadrantAngle = 90 * (quadrantPercentage / 100);
    const angleTan = Math.tan(degreeToRadians(firstQuadrantAngle));

    const yOffset = 50 - 50 * angleTan;
    bottomRightVector = `0% ${100 - yOffset}%`;
  }

  return {
    ...innerContentStyles(10),
    position: 'absolute',
    clipPath: `polygon(${topRightVector}, ${bottomRightVector}, ${centerVector}, ${bottomLeftVector}, ${topLeftVector})`
  };
});

export const SRedGaugeScale = styled.div<{ percentage: number }>(({ percentage }): CSSObject => {
  return {
    ...innerContentStyles(-100),
    width: '120%',
    height: '120%',
    backgroundImage: `conic-gradient(${defaultRed} 330deg, ${brightOrangeRed})`,
    transform: `rotate(${-135 + 270 * percentage}deg)`
  };
});

export const SGaugeBackgroundReset = styled.div((): CSSObject => innerContentStyles(13, true));
