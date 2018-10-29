import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import { InternalSlidingPanel, InternalToggleIcon, InternalSlidingPanelDropdown } from '../../src/components/SlidingPanel';
import { SlidingPanel, SlidingPanelHeader, SlidingPanelDropdown } from '@cjdev/visual-stack/lib/components/SlidingPanel';

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
      expect(wrapper.find('.vs-sliding-panel-toggle-icon')).to.have.length(1);
    });
    it('should provide onClick to VisualStack ToggleIcon', () => {
      const handleToggleSlidingPanel = sinon.spy();
      const wrapper = mount(
        <InternalToggleIcon toggleSlidingPanel={handleToggleSlidingPanel} />
      );
      wrapper.find('.vs-sliding-panel-toggle-icon').simulate('click');
      expect(handleToggleSlidingPanel).to.have.property('callCount', 1);
    });
  });

  describe('SlidingPanelDropdown', () => {
    it('should render VisualStack SlidingPanelDropdown with label', () => {
      const title = 'My CIDs';
      const slidingPanel = shallow(
        <InternalSlidingPanel>
          <InternalSlidingPanelDropdown label={title} />
        </InternalSlidingPanel>
      );
      const dropdown = slidingPanel.find(InternalSlidingPanelDropdown);
      expect(dropdown).to.have.length(1);
      expect(dropdown.props().label).to.equal(title);
    });

    it('should render children when Dropdown is expanded', () => {
      const handleDropdown = sinon.spy();
      const slidingPanel = mount(
        <InternalSlidingPanelDropdown
          label="MyCids"
          toggleFilterDropdown={handleDropdown}
         >
          <div>Something</div>
        </InternalSlidingPanelDropdown>
      );
      const dropdown = slidingPanel.find(SlidingPanelDropdown);
      dropdown.find('a.vs-sliding-panel-section-container-label').simulate('click');
      expect(dropdown.find('div.vs-sliding-panel-section-options')).to.have.length(1);
      expect(handleDropdown).to.have.property('callCount', 1);
    });
  });
});

