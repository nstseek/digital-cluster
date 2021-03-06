import { brightOrangeRed, defaultRed } from '../../../../styled/colors';
import degreeToRadians from '../../../../utils';
import { getNeedleAngle } from '../../utils';

export const calculateGaugeClipPath = (percentage: number) => {
  /**
   * Central vector coordinates
   */
  const centralVector = {
    x: 50,
    y: 50
  };
  /**
   * Needle vector coordinates
   */
  const needleVector = {
    x: 100,
    y: 100
  };
  /**
   * Bottom right vector coordinates
   */
  const vector0 = {
    x: 100,
    y: 100
  };
  /**
   * Top right vector coordinates
   */
  const vector1 = {
    x: 100,
    y: 0
  };
  /**
   * Top left vector coordinates
   */
  const vector2 = {
    x: 0,
    y: 0
  };
  /**
   * Bottom left vector coordinates
   */
  const vector3 = {
    x: 0,
    y: 100
  };

  // quadrant calculation
  let actualQuadrant: 1 | 2 | 3 | 4 | null = null;

  const angle = getNeedleAngle(percentage);

  if (angle >= 0 && angle < 90) {
    actualQuadrant = 1;
  } else if (angle >= 90 && angle < 180) {
    actualQuadrant = 2;
  } else if (angle >= 180 && angle < 270) {
    actualQuadrant = 3;
  } else {
    actualQuadrant = 4;
  }

  // sin/cos calculation
  const radians = degreeToRadians(angle);
  const angleSin = Math.sin(radians);
  const angleCos = Math.cos(radians);

  if (actualQuadrant === 1) {
    vector0.x = 0;
    vector0.y = 0;
    vector1.x = 0;
    vector1.y = 0;
  } else if (actualQuadrant === 2) {
    vector0.x = 100;
    vector0.y = 0;
  } else if (actualQuadrant === 4) {
    vector0.x = 0;
    vector1.x = 0;
    vector2.x = 0;
    vector3.x = 0;
    vector0.y = 100;
    vector1.y = 100;
    vector2.y = 100;
    vector3.y = 100;
  }

  needleVector.x = 100 - (50 + 50 * angleCos);
  needleVector.y = 100 - (50 + 50 * angleSin);

  return `polygon(${centralVector.x}% ${centralVector.y}%, ${needleVector.x}% ${needleVector.y}%, ${vector0.x}% ${vector0.y}%, ${vector1.x}% ${vector1.y}%, ${vector2.x}% ${vector2.y}%, ${vector3.x}% ${vector3.y}%)`;
};

export const calculateGaugeConicGradient = (percentage: number) => {
  const angle = getNeedleAngle(percentage);

  return `conic-gradient(from ${angle - 90}deg, ${defaultRed} 330deg, ${brightOrangeRed})`;
};
