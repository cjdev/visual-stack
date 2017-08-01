import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import sinon from 'sinon';

// import { TopNav, SecondaryNav, DropdownItem } from '@cjdev/visual-stack/lib/components/TopNav';
import { InternalTopNav, InternalUserMenu } from '../../src/components/TopNav';

describe('TopNav', () => {
  it('should propagate secondaryNav', () => {
    const secondaryNav = <span>SECONDNAV</span>;
    const wrapper = mount(
      <InternalTopNav
        secondaryNav={secondaryNav}
      />
    );
    expect(wrapper.contains(secondaryNav)).to.equal(true);
  });

  it('should propagate the active state to SecondNav: false', () => {
    const wrapper = mount(
      <InternalTopNav secondNavActive={false} />
    );
    expect(wrapper.find('.topnav-secondary.active')).to.have.length(0);
  });

  it('should propagate the logo to the MainNav', () => {
    const logo = <span>LOGO</span>;
    const wrapper = mount(
      <InternalTopNav logo={logo} />
    );
    expect(wrapper.contains(logo)).to.equal(true);
  });

  it('should propagate the appName to the MainNav', () => {
    const appName = 'APP_NAME';
    const wrapper = mount(
      <InternalTopNav appName={appName} />
    );
    expect(wrapper.find('.topnav-left-app-name').text()).to.equal(appName);
  });

  it('should propagate onSecondNavToggle click handler', () => {
    const handleSecondNavToggle = sinon.spy();
    const secondNav = <span>SECONDNAV</span>;
    const wrapper = mount(
      <InternalTopNav
        toggleSecondNav={handleSecondNavToggle}
        secondaryNav={secondNav}
      />
    );
    wrapper.find('.fa-ellipsis-v').simulate('click');
    expect(handleSecondNavToggle).to.have.property('callCount', 1);
  });

  it('should propagate userMenu', () => {
    const userMenu = <span>USERMENU</span>;
    const wrapper = mount(
      <InternalTopNav
        userMenu={userMenu}
      />
    );
    expect(wrapper.contains(userMenu)).to.equal(true);
  });

  it('should propagate title to visual stack usermenu', () => {
    const title = 'TITLE';
    const wrapper = mount(
      <InternalUserMenu
        title={title}
      />
    );
    expect(wrapper.find('.username').text()).to.equal(title);
  });


  it('should propagate open state to visual stack usermenu', () => {
    const wrapper = mount(
      <InternalUserMenu
        userMenuState={
          { open: true }
        }
      />
    );
    expect(wrapper.find('.user-menu.active')).to.have.length(1);
  });

  it('should propagate children to visual stack usermenu', () => {
    const wrapper = mount(
      <InternalUserMenu>
        <div className="whatever" />
      </InternalUserMenu>
    );
    expect(wrapper.find('.whatever')).to.have.length(1);
  });

  it('should propagate undefined open state to visual stack usermenu', () => {
    const wrapper = mount(
      <InternalUserMenu
        userMenuState={undefined}
      />
    );
    expect(wrapper.find('.user-menu')).to.have.length(1);
    expect(wrapper.find('.user-menu.active')).to.have.length(0);
  });

  it('should call open when closed and clicked', () => {
    // given
    const fakeOpenTopNavDropdown = sinon.spy();
    const fakeListener = sinon.spy(document, 'addEventListener');
    const wrapper = mount(
      <InternalUserMenu
        userMenuState={{ open: false }}
        openTopNavDropdown={fakeOpenTopNavDropdown}
      />
    );
    // when
    const callback = fakeListener.lastCall.args[1];
    const target = ReactDOM.findDOMNode(wrapper.find('.topnav-icon.fa-user-circle').root.component);
    const click = { target };
    callback(click);

    // then
    expect(fakeOpenTopNavDropdown).to.have.property('callCount', 1);
    document.addEventListener.restore();
  });

  it('should call close when open and clicked', () => {
    const fakeCloseTopNavDropdown = sinon.spy();
    const fakeListener = sinon.spy(document, 'addEventListener');
    const wrapper = mount(
      <InternalUserMenu
        userMenuState={{ open: true }}
        closeTopNavDropdown={fakeCloseTopNavDropdown}
        />
    );
    // when
    const callback = fakeListener.lastCall.args[1];
    const target = ReactDOM.findDOMNode(wrapper.find('.topnav-icon.fa-user-circle').root.component);
    const click = { target };
    callback(click);

    // then
    expect(fakeCloseTopNavDropdown).to.have.property('callCount', 1);
    document.addEventListener.restore();
  });

  it('should call close when open and something else is clicked', () => {
    const fakeCloseTopNavDropdown = sinon.spy();
    const fakeListener = sinon.spy(document, 'addEventListener');
    const wrapper = mount(
      <InternalUserMenu
        userMenuState={{ open: true }}
        closeTopNavDropdown={fakeCloseTopNavDropdown}
      />
    );
    // wrapper.find('.topnav-dropdown').simulate('click');
    const callback = fakeListener.lastCall.args[1];
    const target = ReactDOM.findDOMNode(wrapper.find('.topnav-dropdown').root.component);
    const click = { target };
    callback(click);

    expect(fakeCloseTopNavDropdown).to.have.property('callCount', 1);
    document.addEventListener.restore();
  });
});

