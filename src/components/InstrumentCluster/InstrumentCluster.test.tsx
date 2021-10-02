import { shallow } from 'enzyme';
import React from 'react';

import InstrumentCluster from './InstrumentCluster';

describe('<InstrumentCluster />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<InstrumentCluster />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
