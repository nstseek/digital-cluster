import { CSSObject } from 'styled-components';

import { backgroundColors } from '../colors';
import { clusterHeight, clusterWidth, sizeFactor } from '../sizes';
import { px } from '../units/pixels';

const instrumentClusterBackground: CSSObject = {
  width: px(clusterWidth * sizeFactor),
  height: px(clusterHeight * sizeFactor),
  backgroundImage: `radial-gradient(ellipse at 50% 90%, ${backgroundColors.brightBlue} 0, ${backgroundColors.darkBlue} 30%, ${backgroundColors.black} 80%)`,
  backgroundSize: '200% 100%',
  backgroundPosition: '50% 0%'
};

export default instrumentClusterBackground;
