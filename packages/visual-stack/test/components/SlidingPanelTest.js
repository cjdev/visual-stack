import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SlidingPanel, ToggleIcon } from '../../src/components/SlidingPanel';

describe('SlidingPanel', () => {
  it('should render', () => {
    const wrapper = shallow(
            <SlidingPanel />
        );
    expect(wrapper.find('.vs-sliding-panel').length).to.equal(1);
  });

  it('should render active', () => {
    const wrapper = shallow(
            <SlidingPanel active={true} />
        );
    expect(wrapper.find('.vs-sliding-panel.vs-active').length).to.equal(1);
  });
});

describe('ToggleIcon', () => {
  it('should render', () => {
    const wrapper = shallow(
            <ToggleIcon />
        );
    expect(wrapper.find('.vs-sliding-panel-toggle-icon').length).to.equal(1);
  });
});
