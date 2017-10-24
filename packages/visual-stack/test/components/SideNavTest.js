import React from 'react';
import { shallow, mount } from 'enzyme';
import { equal } from 'assert';
import { SideNav, ToggleIcon, Header, LinkGroup, Link, UserIcon } from '../../src/components/SideNav';

describe('SideNav', () => {
  it('should render', () => {
    const wrapper = mount(
      <SideNav
        onClick={() => {}}
        userMenu={<div/>}
      />
    );
    equal(wrapper.find('.sidenav').length, 1);
  });

  it('should render active', () => {
    const wrapper = mount(
      <SideNav
        onClick={() => {}}
        collapsed={false}
        />
    );
    equal(wrapper.find('.sidenav .active').length, 1);
  });

  it('should render collapsed', () => {
    const wrapper = mount(
      <SideNav
        onClick={() => {}}
        collapsed={true}
        />
    );
    equal(wrapper.find('.sidenav .collapsed').length, 1);
  });

  describe('Header', () => {
    it('should render with children', () => {
      const wrapper = mount(
        <Header>
          <div className="dummy">something</div>
        </Header>
      );
      equal(wrapper.find('.sidenav-entry').length, 1);
      equal(wrapper.find('.sidenav-entry').children().length, 1);
    });
  });

  describe('LinkGroup', () => {
    it('should render with default icon if non is given', () => {
      const wrapper = mount(
        <LinkGroup label="nothing" />
      );
      equal(wrapper.find('.sidenav-entry').length, 1);
      equal(wrapper.find('.fa-stack .stacked-icon').length, 1);
    });

    it('should render with passed in icon', () => {
      const wrapper = mount(
        <LinkGroup label="nothing" icon={<div className="fake-icon"/>}/>
      );
      equal(wrapper.find('.fake-icon').length, 1);
    });
  });

  describe('Link', () => {
    it('should render with children and default Icon', () => {
      const wrapper = mount(
        <Link inLinkGroup={false}>
          <a href="mock link for React Router">
            <span>Label without Text</span>
          </a>
        </Link>
      );
      equal(wrapper.find('.sidenav-entry').length, 1);
    });
  });

  describe('ToggleIcon', () => {
    it('should render', () => {
      const wrapper = shallow(
        <ToggleIcon />
      );
      equal(wrapper.find('.sidenav-toggle-icon').length, 1);
    });
  });

  describe('UserIcon', () => {
    it('should render first and last', () => {
      const wrapper = shallow(<UserIcon firstInitial="A" lastInitial="B" />);
      equal(wrapper.text(), 'AB');
    });
  });
});

