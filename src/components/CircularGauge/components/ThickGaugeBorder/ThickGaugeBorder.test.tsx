import { shallow } from 'enzyme';
import React from 'react';

import ThickGaugeBorder from './ThickGaugeBorder';

describe('<ThickGaugeBorder />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ThickGaugeBorder />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
