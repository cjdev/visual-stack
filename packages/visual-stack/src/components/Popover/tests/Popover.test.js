import React from 'react';
import Popover, { HoverPopover } from '../index';
import Enzyme, { mount } from 'enzyme';
import { Popper } from 'react-popper';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Popover', () => {
  it('should render when told to show and default placement bottom', () => {
    const wrapper = mount(<Popover shown={true} />);

    expect(wrapper.find('.vs-popover-container')).toHaveLength(1);
    expect(wrapper.find(Popper).prop('placement')).toBe('bottom');
  });

  it('should be hidden when not shown', () => {
    const wrapper = mount(<Popover shown={false} />);

    expect(wrapper.find('.vs-popover-container')).toHaveLength(0);
  });

  it('should accept a placement prop to control default placement', () => {
    const wrapper = mount(<Popover shown={true} placement={'right'} />);

    expect(wrapper.find(Popper).prop('placement')).toBe('right');
  });

  it('should render children as the reference element', () => {
    const expectedChildElement = <div className={'test-target-element'} />;
    const wrapper = mount(
      <Popover shown={false}>{expectedChildElement}</Popover>
    );

    expect(
      wrapper.find('.vs-popover-reference').find('.test-target-element')
    ).toHaveLength(1);
    expect(
      wrapper
        .find('.vs-popover-reference')
        .children()
        .getElement()
    ).toEqual(expectedChildElement);
  });

  it('should render content as the popover content', () => {
    const expectedContentElement = (
      <div className={'test-target-content-element'} />
    );
    const wrapper = mount(
      <Popover shown={true} content={expectedContentElement}>
        <div className={'test-target-element'} />
      </Popover>
    );

    expect(
      wrapper.find('.vs-popover-container').find('.test-target-content-element')
    ).toHaveLength(1);
    expect(
      wrapper
        .find('.vs-popover-content')
        .children()
        .at(0)
        .getElement()
    ).toEqual(expectedContentElement);
  });

  it('should call onMouseOver and onMouseLeave events', () => {
    const onMouseOver = jest.fn();
    const onMouseLeave = jest.fn();

    const wrapper = mount(
      <Popover
        shown={false}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        <div className={'test-target-element'} />
      </Popover>
    );

    wrapper.find('.vs-popover-wrapper').simulate('mouseOver');
    expect(onMouseOver).toHaveBeenCalled();

    wrapper.find('.vs-popover-wrapper').simulate('mouseLeave');
    expect(onMouseLeave).toHaveBeenCalled();
  });

  it('should pass popper props down to popper', () => {
    const eventsEnabled = false;
    const modifiers = {
      flip: {
        enabled: false,
      },
    };
    const positionFixed = false;

    const wrapper = mount(
      <Popover
        shown={true}
        eventsEnabled={eventsEnabled}
        modifiers={modifiers}
        positionFixed={positionFixed}
      >
        <div className={'test-target-element'} />
      </Popover>
    );

    const popper = wrapper.find(Popper);
    expect(popper.prop('eventsEnabled')).toBe(eventsEnabled);
    expect(popper.prop('modifiers')).toBe(modifiers);
    expect(popper.prop('positionFixed')).toBe(positionFixed);
  });
});

describe('HoverPopover', () => {
  it('should show when hovered over and hide when mouse leaves', () => {
    const wrapper = mount(
      <HoverPopover>
        <div className={'test-target-element'} />
      </HoverPopover>
    );

    expect(wrapper.find(Popover).prop('shown')).toBe(false);

    wrapper.find('.vs-popover-wrapper').simulate('mouseOver');
    expect(wrapper.find(Popover).prop('shown')).toBe(true);

    wrapper.find('.vs-popover-wrapper').simulate('mouseLeave');
    expect(wrapper.find(Popover).prop('shown')).toBe(false);
  });
});
