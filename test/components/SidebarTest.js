import React from 'react';
import { shallow } from 'enzyme';
import { equal, ok } from 'assert';
import { Sidebar, NavGroup, NavItem } from '../../src/components/Sidebar';

describe('Sidebar', () => {
  it('should render Sidebar wrapper', () => {
    const shallowWrapper = shallow(<Sidebar/>);
    equal(shallowWrapper.hasClass('side-nav'), true);
  });
  describe('NavGroup', () => {
    let shallowWrapper, hasBeenClicked, navItem;
    describe('without dropdown', () => {
      const clickDummy = () => { hasBeenClicked = true; };
      beforeEach(() => {
        hasBeenClicked = false;
        shallowWrapper = shallow(<NavGroup label="something" onNavGroupClick={clickDummy}></NavGroup>);
      });
      it('should render NavGroup', () => {
        equal(shallowWrapper.hasClass('nav-group'), true);
      });
      it('should handle an onClick function', () => {
        shallowWrapper.find('button').simulate('click');
        ok(hasBeenClicked);
      });
    });
    describe('with dropdown', () => {
      beforeEach(() => {
        hasBeenClicked = false;
        navItem = <NavItem label="something"/>;
        shallowWrapper = shallow(<NavGroup label="something" open={true}>{navItem}</NavGroup>);
      });
      it('should render internal NavItem', () => {
        equal(shallowWrapper.contains(navItem), true);
      });
    });
    describe('should render no children if open prop passed in is false', () => {
      beforeEach(() => {
        navItem = <NavItem label="something"/>;
        shallowWrapper = shallow(<NavGroup label="something" open={false}>{navItem}</NavGroup>);
      });
      it('should render internal NavItem', () => {
        equal(shallowWrapper.contains(navItem), false);
      });
    });
  });
  it('should render NavItem independent of NavGroup', () => {
    const shallowWrapper = shallow(<NavItem label="something" />);
    equal(shallowWrapper.hasClass('nav-item'), true);
  });
});

