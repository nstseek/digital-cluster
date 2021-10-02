import styled, { CSSObject } from 'styled-components/macro';

import { flexAlignCenter } from '../../styled/mixins';
import { clusterHeight, clusterWidth, sizeFactor } from '../../styled/sizes';
import { px } from '../../styled/units/pixels';

export const SContainer = styled.div(
  (): CSSObject => ({
    ...flexAlignCenter,
    position: 'absolute',
    width: px(clusterWidth * sizeFactor),
    height: px(clusterHeight * sizeFactor)
  })
);
