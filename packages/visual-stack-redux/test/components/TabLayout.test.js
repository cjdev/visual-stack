import React from 'react';
import * as R from 'ramda';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import {
  InternalTabLayout,
  mapDispatchToProps,
  mapStateToProps,
} from '../../src/components/TabLayout';
import {
  TabLayout as BaseTabLayout,
  Tab as BaseTab,
} from '@cjdev/visual-stack/lib/components/TabLayout';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('TabLayout', () => {
  const makeProps = override => ({
    tabLayoutId: 'ID123',
    floatingHeader: false,
    headerWidth: '100%',
    headerHeight: '20px',
    themeColor: 'grey',
    onTabClick: () => {},
    tabLayouts: { ID123: { index: 0 } },
    selectTab: () => {},
    lazy: true,
    ...override,
  });

  test('should render TabLayout', () => {
    shallow(<InternalTabLayout tabLayoutId={'ID123'} selectTab={() => {}} />);
  });

  test('should propagate props and children to VisualStack TabLayout', () => {
    const wrapperProps = makeProps();
    const wrapper = shallow(
      <InternalTabLayout {...wrapperProps}>
        <BaseTab />
      </InternalTabLayout>
    );

    const vsTabLayoutProps = wrapper.find(BaseTabLayout).props();
    const vsTabLayoutPassedProps = R.omit(
      ['selectTab', 'selectedIndex', 'children'],
      vsTabLayoutProps
    );
    const expectedProps = R.omit(
      ['tabLayoutId', 'tabLayouts', 'selectTab'],
      wrapperProps
    );

    expect(vsTabLayoutPassedProps).toEqual(expectedProps);
    expect(vsTabLayoutProps.selectedIndex).toEqual(
      R.view(
        R.lensPath([wrapperProps.tabLayoutId, 'index']),
        wrapperProps.tabLayouts
      )
    );
    expect(wrapper.find(BaseTab)).toHaveLength(1);
  });

  test('should set tab index to first non-disabled tab', () => {
    const selectTabSpy = sinon.spy();

    const wrapperProps = makeProps({ selectTab: selectTabSpy });
    mount(
      <InternalTabLayout {...wrapperProps}>
        <BaseTab disabled={true} />
        <BaseTab />
      </InternalTabLayout>
    );
    expect(selectTabSpy.calledOnce).toBeTruthy();
    expect(
      selectTabSpy.calledWith({ tabLayoutId: 'ID123', index: 1 })
    ).toBeTruthy();
  });

  test('should set not set tab index if tabLayoutId is undefined', () => {
    const selectTabSpy = sinon.spy();
    const wrapperProps = makeProps({
      selectTab: selectTabSpy,
      tabLayoutId: undefined,
    });
    mount(
      <InternalTabLayout {...wrapperProps}>
        <BaseTab />
      </InternalTabLayout>
    );
    expect(selectTabSpy.notCalled).toBeTruthy();
  });

  test('should update index on tab click', () => {
    const selectTabSpy = sinon.spy();
    const wrapperProps = makeProps({ selectTab: selectTabSpy });
    const wrapper = mount(
      <InternalTabLayout {...wrapperProps}>
        <BaseTab />
        <BaseTab />
      </InternalTabLayout>
    );
    wrapper
      .find(BaseTabLayout)
      .props()
      .selectTab({}, 1);
    expect(selectTabSpy.calledTwice).toBeTruthy();
    expect(selectTabSpy.secondCall.args[0]).toEqual({
      tabLayoutId: 'ID123',
      index: 1,
    });
  });
});

describe('mapDispatchToProps', () => {
  test('should map selectTab to dispatch wrapped call', () => {
    const dispatchSpy = sinon.spy();
    mapDispatchToProps(dispatchSpy).selectTab({
      tabLayoutId: 'ID123',
      index: 1,
    });
    expect(dispatchSpy.calledOnce).toBeTruthy();
    expect(dispatchSpy.firstCall.args[0].payload).toEqual({
      tabLayoutId: 'ID123',
      index: 1,
    });
    expect(dispatchSpy.firstCall.args[0].type).toEqual(
      '@cjdev/visual-stack-redux/SELECT_TAB'
    );
  });
});

describe('mapStateToProps', () => {
  test('should map tabLayout state to tabLayouts prop', () => {
    const state = { visualStack: { tabLayout: { ID123: { index: 0 } } } };
    expect(mapStateToProps(state)).toEqual({
      tabLayouts: { ID123: { index: 0 } },
    });
  });
});
