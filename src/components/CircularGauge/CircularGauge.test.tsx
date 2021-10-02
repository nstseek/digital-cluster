import { shallow } from 'enzyme';
import React from 'react';

import CircularGauge from './CircularGauge';

describe('<CircularGauge />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CircularGauge />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
