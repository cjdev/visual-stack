import React from 'react';
import { shallow, mount } from 'enzyme';
import { SideNav, ToggleIcon, Header, LinkGroup, Link, UserIcon } from '../';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CategoryLabel } from '../../../../lib/components/SideNav';
Enzyme.configure({ adapter: new Adapter() });

describe('SideNav', () => {
  test('should render', () => {
    const wrapper = mount(<SideNav onClick={() => {}} userMenu={<div />} />);
    wrapper.update();
    expect(wrapper.find('.vs-sidenav')).toHaveLength(1);
  });

  test('should render active', () => {
    const wrapper = mount(<SideNav onClick={() => {}} collapsed={false} />);
    wrapper.update();
    expect(wrapper.find('.vs-sidenav.active')).toHaveLength(1);
  });

  test('should render collapsed', () => {
    const wrapper = mount(<SideNav onClick={() => {}} collapsed={true} />);
    wrapper.update();
    expect(wrapper.find('.vs-sidenav.collapsed')).toHaveLength(1);
  });

  test('should give default home page if no homeLink is given', () => {
    const wrapper = mount(<SideNav onClick={() => {}} collapsed={true} />);
    wrapper.update();
    expect(wrapper.find('a.vs-sidenav-container-row').props().href).toEqual(
      '/'
    );
  });

  test('should correctly set the homeLink if one is given', () => {
    const homeLink = 'somewhere/else';
    const wrapper = mount(
      <SideNav onClick={() => {}} collapsed={true} homeLink={homeLink} />
    );
    wrapper.update();
    expect(wrapper.find('a.vs-sidenav-container-row').props().href).toEqual(
      homeLink
    );
  });

  test('should omit VS properties from propagating to DOM ul', () => {
    const wrapper = mount(
      <SideNav
        onClick={() => {}}
        userMenu={<div />}
        initializedCollapsed={false}
        logoBackground={<div />}
        toggleSideNav={() => {}}
        matches={false}
      />
    );
    wrapper.update();
    const ul = wrapper.find('ul');
    expect(ul).toHaveLength(1);
    expect(ul.prop('initializedCollapsed')).toBeUndefined();
    expect(ul.prop('logoBackground')).toBeUndefined();
    expect(ul.prop('matches')).toBeUndefined();
    expect(ul.prop('toggleSideNav')).toBeUndefined();
  });

  describe('Header', () => {
    test('should render with children', () => {
      const wrapper = mount(
        <Header>
          <div className="dummy">something</div>
        </Header>
      );
      wrapper.update();
      expect(wrapper.find('.vs-sidenav-entry')).toHaveLength(1);
      expect(wrapper.find('.vs-sidenav-entry').children()).toHaveLength(1);
    });
  });

  describe('LinkGroup', () => {
    test('should render with default icon if none is given', () => {
      const wrapper = mount(
        <LinkGroup
          label="nothing"
          onClick={() => {}}
          toggleSideNav={() => {}}
        />
      );
      wrapper.update();
      expect(wrapper.find('.vs-sidenav-entry')).toHaveLength(1);
      expect(wrapper.find('.fa-stack.vs-stacked-icon')).toHaveLength(1);
    });

    test('should render with passed in icon', () => {
      const wrapper = mount(
        <LinkGroup
          label="nothing"
          icon={<div className="fake-icon" />}
          onClick={() => {}}
          toggleSideNav={() => {}}
        />
      );
      wrapper.update();
      expect(wrapper.find('.fake-icon')).toHaveLength(1);
    });
  });

  describe('Link', () => {
    test('should render with children and default Icon', () => {
      const wrapper = mount(
        <Link>
          <a href="mock link for React Router">
            <span>Label without Text</span>
          </a>
        </Link>
      );
      wrapper.update();
      expect(wrapper.find('.vs-sidenav-entry')).toHaveLength(1);
    });
  });

  describe('ToggleIcon', () => {
    test('should render', () => {
      const wrapper = shallow(<ToggleIcon />);
      wrapper.update();
      expect(wrapper.find('.vs-sidenav-toggle-icon')).toHaveLength(1);
    });
  });

  describe('UserIcon', () => {
    test('should render first and last', () => {
      const wrapper = shallow(<UserIcon firstInitial="A" lastInitial="B" />);
      wrapper.update();
      expect(wrapper.text()).toEqual('AB');
    });
  });

  describe('CategoryLabel', () => {
    test('should render when side nav is not collapsed', () => {
      const wrapper = shallow(
        <CategoryLabel collapsed={false}>Text</CategoryLabel>
      );
      expect(wrapper.find('.vs-category-label').text()).toEqual('Text');
    });

    test('should not render when side nav is collapsed', () => {
      const wrapper = shallow(<CategoryLabel collapsed>Text</CategoryLabel>);
      expect(wrapper.find('.vs-category-label').length).toEqual(0);
    });
  });
});
