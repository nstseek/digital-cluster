import styled, { CSSObject } from 'styled-components/macro';

import { innerContentStyles } from '../../utils';

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
