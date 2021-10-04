import { shallow } from 'enzyme';
import React from 'react';

import Gauge from './Gauge';

describe('<Gauge />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Gauge />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
