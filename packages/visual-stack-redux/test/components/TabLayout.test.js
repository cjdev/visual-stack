import React from 'react';
import R from 'ramda';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import { InternalTabLayout, mapDispatchToProps, mapStateToProps } from '../../src/components/TabLayout';
import { TabLayout as BaseTabLayout, Tab as BaseTab } from '@cjdev/visual-stack/lib/components/TabLayout';

describe('TabLayout', () => {
  const makeProps = override => (
    {
      tabLayoutId: 'ID123',
      floatingHeader: false,
      headerWidth: '100%',
      headerHeight: '20px',
      themeColor: 'grey',
      onTabClick: () => {},
      tabLayouts: { ID123: { index: 0 } },
      ...override,
    });

  it('should render TabLayout', () => {
    shallow(<InternalTabLayout tabLayoutId={'ID123'} />);
  });

  it('should propagate props and children to VisualStack TabLayout', () => {
    const wrapperProps = makeProps();
    const wrapper = shallow(
      <InternalTabLayout {...wrapperProps}>
        <BaseTab />
      </InternalTabLayout>
    );

    const vsTabLayoutProps = wrapper.find(BaseTabLayout).props();
    const vsTabLayoutPassedProps = R.omit(['selectTab', 'selectedIndex', 'children'], vsTabLayoutProps);
    const expectedProps = R.omit(['tabLayoutId', 'tabLayouts'], wrapperProps);

    expect(vsTabLayoutPassedProps).to.deep.equal(expectedProps);
    expect(vsTabLayoutProps.selectedIndex).to.equal(R.view(R.lensPath([wrapperProps.tabLayoutId, 'index']), wrapperProps.tabLayouts));
    expect(wrapper.find(BaseTab)).to.have.length(1);
  });

  it('should set tab index to first non-disabled tab', () => {
    const selectTabSpy = sinon.spy();
    const wrapperProps = makeProps({ selectTab: selectTabSpy });
    mount(
      <InternalTabLayout {...wrapperProps}>
        <BaseTab disabled = {true}/>
        <BaseTab />
      </InternalTabLayout>
    );
    expect(selectTabSpy).to.have.been.calledOnce;
    expect(selectTabSpy).to.have.been.calledWith({ tabLayoutId: 'ID123', index: 1 });
  });

  it('should set not set tab index if tabLayoutId is undefined', () => {
    const selectTabSpy = sinon.spy();
    const wrapperProps = makeProps({ selectTab: selectTabSpy, tabLayoutId: undefined });
    mount(
      <InternalTabLayout {...wrapperProps}>
        <BaseTab />
      </InternalTabLayout>
    );
    expect(selectTabSpy).to.have.been.notCalled;
  });

  it('should update index on tab click', () => {
    const selectTabSpy = sinon.spy();
    const wrapperProps = makeProps({ selectTab: selectTabSpy });
    const wrapper = mount(
      <InternalTabLayout {...wrapperProps}>
        <BaseTab />
        <BaseTab />
      </InternalTabLayout>
    );
    wrapper.find(BaseTabLayout).props().selectTab({}, 1);
    expect(selectTabSpy).to.have.been.calledTwice;
    expect(selectTabSpy.secondCall.args[0]).to.deep.equal({ tabLayoutId: 'ID123', index: 1 });
  });
});

describe('mapDispatchToProps', () => {
  it('should map selectTab to dispatch wrapped call', () => {
    const dispatchSpy = sinon.spy();
    mapDispatchToProps(dispatchSpy).selectTab();
    expect(dispatchSpy).to.have.been.calledOnce;
  });
});

describe('mapStateToProps', () => {
  it('should map tabLayout state to tabLayouts prop', () => {
    const state = { visualStack: { tabLayout: { ID123: { index: 0 } } } };
    expect(mapStateToProps(state)).to.deep.equal({ tabLayouts: { ID123: { index: 0 } } });
  });
});
