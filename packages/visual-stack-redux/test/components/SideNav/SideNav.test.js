/** @prettier */
import React from 'react';
import { mount, shallow } from 'enzyme';

import { InternalSideNav } from '../../../src/components/SideNav/SideNav';
import { SideNav, Header } from '@cjdev/visual-stack/lib/components/SideNav';

describe('SideNav', () => {
  it('should propagate the active state to VisualStack SideNav', () => {
    const wrapper = shallow(
      <InternalSideNav collapsed={true} userMenu={<div/>}/>
    );
    wrapper.debug();
    expect(wrapper.find(SideNav).prop('collapsed')).to.be.true;
  });

  it('should propagate children to VisualStack SideNav', () => {
    const wrapper = shallow(
      <InternalSideNav userMenu={<div/>}>
          <Header label="whatever" />
      </InternalSideNav>
    );
    expect(wrapper.find(SideNav).find(Header)).to.have.length(1);
    expect(wrapper.find(SideNav).find(Header).prop('label')).to.equal('whatever');
  });

  it('should propagate children to VisualStack SideNav', () => {
    const wrapper = shallow(
      <InternalSideNav>
          <Header label="whatever" />
      </InternalSideNav>
    );
    expect(wrapper.find(SideNav).find(Header)).to.have.length(1);
    expect(wrapper.find(SideNav).find(Header).prop('label')).to.equal('whatever');
  });

  it('should propagate the logo to the SideNav', () => {
    const logo = <span>LOGO</span>;
    const wrapper = mount(
      <InternalSideNav logo={logo} toggleSideNav={() => {}} />
    );
    expect(wrapper.contains(logo)).to.equal(true);
  });
});
