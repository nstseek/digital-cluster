import styled, { CSSObject } from 'styled-components/macro';

import { defaultBlue } from '../../styles/colors';
import { clusterHeight, clusterWidth, sizeFactor } from '../../styles/sizes';
import { px } from '../../styles/units/pixels';

export const SInstrumentClusterBackground = styled.div(
  (): CSSObject => ({
    display: 'flex',
    backgroundColor: defaultBlue,
    width: px(clusterWidth * sizeFactor),
    height: px(clusterHeight * sizeFactor)
  })
);
