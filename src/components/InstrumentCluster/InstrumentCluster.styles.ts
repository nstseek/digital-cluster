import styled, { CSSObject } from 'styled-components/macro';

import { flexAlignCenter } from '../../styled/mixins';
import { clusterSize } from '../../styled/sizes';
import { px } from '../../styled/units/pixels';

export const SContainer = styled.div((): CSSObject => {
  const { width, height } = clusterSize;
  return {
    ...flexAlignCenter,
    position: 'absolute',
    width: px(width),
    height: px(height)
  };
});
