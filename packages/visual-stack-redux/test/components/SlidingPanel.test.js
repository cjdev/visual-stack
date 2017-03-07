import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import { InternalSlidingPanel, InternalToggleIcon } from '../../src/components/SlidingPanel';
import { SlidingPanel, SlidingPanelHeader } from '@cjdev/visual-stack/lib/components/SlidingPanel';


describe('SlidingPanel', () => {
  describe('SlidingPanel', () => {
    it('should render VisualStack SlidingPanel default active false', () => {
      const wrapper = shallow(
        <InternalSlidingPanel />
      );
      expect(wrapper.find(SlidingPanel).prop('active')).to.be.false;
    });

    it('should render VisualStack SlidingPanel passing on active prop', () => {
      const wrapper = shallow(
        <InternalSlidingPanel active={true} />
      );
      expect(wrapper.find(SlidingPanel).prop('active')).to.be.true;
    });

    it('should propagate children to VisualStack SlidingPanel', () => {
      const wrapper = shallow(
        <InternalSlidingPanel active={true}>
          <SlidingPanelHeader />
        </InternalSlidingPanel>
      );
      expect(wrapper.find(SlidingPanelHeader)).to.have.length(1);
    });
  });

  describe('ToggleIcon', () => {
    it('should render VisualStack ToggleIcon', () => {
      const wrapper = mount(
        <InternalToggleIcon />
      );
      expect(wrapper.find('.sliding-panel-toggle-icon')).to.have.length(1);
    });
    it('should provide onClick to VisualStack ToggleIcon', () => {
      const handleToggleSlidingPanel = sinon.spy();
      const wrapper = mount(
        <InternalToggleIcon toggleSlidingPanel={handleToggleSlidingPanel} />
      );
      wrapper.find('.sliding-panel-toggle-icon').simulate('click');
      expect(handleToggleSlidingPanel).to.have.property('callCount', 1);
    });
  });
});
