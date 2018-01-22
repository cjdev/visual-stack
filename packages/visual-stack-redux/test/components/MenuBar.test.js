import React from 'react';
import ReactDOM from 'react-dom';
import { spy } from 'sinon';
import { mount } from 'enzyme';

import { InternalMenuBarDropdown } from '../../src/components/MenuBar';

describe('MenuBarDropdown', () => {
  const context = { menuBarName: 'test-menu-bar' };
  const options = { context, attachTo: global.mountPoint };

  const component = props =>
    <InternalMenuBarDropdown
      name="test-dropdown"
      title="Test Dropdown"
      {...props} />;

  let wrapper;

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
      wrapper = undefined;
    }
  });

  it('opens when clicked', () => {
    const openDropdown = spy();
    const props = { menuBars: {}, openDropdown };
    wrapper = mount(component(props), options);

    ReactDOM.findDOMNode(wrapper.instance()).click();
    expect(openDropdown).to.have.been.calledOnce;
  });

  it('closes when clicked a second time', () => {
    const closeDropdown = spy();
    const props = {
      menuBars: { 'test-menu-bar': { 'test-dropdown': { open: true } } },
      closeDropdown,
    };
    wrapper = mount(component(props), options);

    ReactDOM.findDOMNode(wrapper.instance()).click();
    expect(closeDropdown).to.have.been.calledOnce;
  });

  it('closes when clicked outside the dropdown', () => {
    const closeDropdown = spy();
    const props = { menuBars: {}, closeDropdown };
    wrapper = mount(component(props), options);

    document.body.click();
    expect(closeDropdown).to.have.been.calledOnce;
  });
});
