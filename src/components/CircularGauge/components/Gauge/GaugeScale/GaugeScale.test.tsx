import { shallow } from 'enzyme';
import React from 'react';

import GaugeScale from './GaugeScale';

describe('<GaugeScale />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<GaugeScale />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
