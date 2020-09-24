import React from 'react';
import { Tooltip } from '../index';
import Enzyme, { mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Tooltip', () => {
  it('should show when hovered over and hide when mouse leaves', () => {
    const wrapper = mount(
      <Tooltip content="I'm a tooltip!">
        <div className="tooltip-test" />
      </Tooltip>
    );

    expect(wrapper.find('.tooltip-test').length).toEqual(1);
    expect(wrapper.find('.vs-tooltip .vs-popover-content').length).toEqual(0);

    wrapper.find('.vs-popover-wrapper').simulate('mouseOver');

    expect(wrapper.find('.tooltip-test').length).toEqual(1);
    expect(wrapper.find('.vs-tooltip .vs-popover-content').length).toEqual(1);
    expect(wrapper.find('.vs-tooltip .vs-popover-content').text()).toEqual(
      "I'm a tooltip!"
    );

    wrapper.find('.vs-popover-wrapper').simulate('mouseLeave');

    expect(wrapper.find('.tooltip-test').length).toEqual(1);
    expect(wrapper.find('.vs-tooltip .vs-popover-content').length).toEqual(0);
  });
});
