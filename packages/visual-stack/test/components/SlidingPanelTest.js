import React from 'react';
import { shallow } from 'enzyme';
import { equal } from 'assert';
import { SlidingPanel, ToggleIcon } from '../../src/components/SlidingPanel';

describe('SlidingPanel', () => {
  it('should render', () => {
    const wrapper = shallow(
      <SlidingPanel />
    );
    equal(wrapper.find('.vs-sliding-panel').length, 1);
  });

  it('should render active', () => {
    const wrapper = shallow(
      <SlidingPanel active={true} />
    );
    equal(wrapper.find('.vs-sliding-panel.active').length, 1);
  });
});

describe('ToggleIcon', () => {
  it('should render', () => {
    const wrapper = shallow(
      <ToggleIcon />
    );
    equal(wrapper.find('.vs-sliding-panel-toggle-icon').length, 1);
  });
});
