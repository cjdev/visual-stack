import React from 'react';
import R from 'ramda';
import { mount } from 'enzyme';
import { equal,  deepEqual } from 'assert';
import { TabLayout, Tab } from '../../src/components/TabLayout';


describe('TabLayout', () => {
  describe('functionality', () => {
    it('should render', () => {
      const wrapper = mount(
        <TabLayout/>
      );
      equal(wrapper.find(TabLayout).length, 1);
    });

    it('should render tab header', () => {
      const wrapper = mount(
        <TabLayout/>
      );
      equal(wrapper.find('.cj-tab-header').length, 1);
    });

    it('should render child tabs', () => {
      const wrapper = mount(
        <TabLayout tabLayoutId={'tabLayout1'}>
          <Tab label={<div>Tab1</div>} content={<div>Tab Content 1</div>}/>
          <Tab label={<div>Tab2</div>} content={<div>Tab Content 2</div>}/>
          <Tab label={<div>Tab3</div>} content={<div>Tab Content 3</div>}/>
        </TabLayout>
      );
      equal(wrapper.find(TabLayout).length, 1);
      equal(wrapper.find('.cj-tab-label').length, 3);
      deepEqual(R.map(label => label.text(), wrapper.find('.cj-tab-label')), ['Tab1', 'Tab2', 'Tab3']);
      equal(wrapper.find('.cj-tab-body').children().length, 3);
      deepEqual(R.map(content => content.text(), wrapper.find('.cj-tab-body').children()), ['Tab Content 1', 'Tab Content 2', 'Tab Content 3']);
    });

    it('should only show content for selected tab', () => {
      const wrapper = mount(
        <TabLayout tabLayoutId={'tabLayout1'} selectedIndex={0}>
          <Tab label={<div>Tab1</div>} content={<div>Tab Content 1</div>}/>
          <Tab label={<div>Tab2</div>} content={<div>Tab Content 2</div>}/>
          <Tab label={<div>Tab3</div>} content={<div>Tab Content 3</div>}/>
        </TabLayout>
      );
      deepEqual(R.map(content => content.props().hidden, wrapper.find('.cj-tab-body').children()), [false, true, true]);
    });

    it('should call selectTab when tab clicked', () => {
      let clicks = 0;
      let clicksIndex = [];
      const mockSelectTab = (event, index) => {
        clicks += 1;
        clicksIndex = R.concat(clicksIndex, index);
      };
      const wrapper = mount(
        <TabLayout tabLayoutId={'tabLayout1'} selectedIndex={0} selectTab={mockSelectTab}>
          <Tab label={<div>Tab</div>} content={<div>Tab Content</div>}/>
        </TabLayout>
      );
      const tabLabel = wrapper.find('.cj-tab-label').at(0);
      tabLabel.simulate('click');
      equal(clicks, 1);
      equal(clicksIndex.length, 1);
      equal(clicksIndex[0], 0);
    });

    it('should not call selectTab if tab is disabled', () => {
      let clicks = 0;
      let clicksIndex = [];
      const mockSelectTab = (event, index) => {
        clicks += 1;
        clicksIndex = R.concat(clicksIndex, index);
      };
      const wrapper = mount(
        <TabLayout tabLayoutId={'tabLayout1'} selectedIndex={0} selectTab={mockSelectTab}>
          <Tab label={<div>Tab</div>} content={<div>Tab Content</div>} disabled={true}/>
        </TabLayout>
      );
      const tabLabel = wrapper.find('.cj-tab-label').at(0);
      tabLabel.simulate('click');
      equal(clicks, 0);
      equal(clicksIndex.length, 0);
    });

    it('should call onTabClick when tab clicked and function exists', () => {
      let clicks = 0;
      const mockOnTabClick = () => {
        clicks += 1;
      };
      const wrapper = mount(
        <TabLayout tabLayoutId={'tabLayout1'} selectedIndex={0} onTabClick={mockOnTabClick} selectTab={() => {}}>
          <Tab label={<div>Tab</div>} content={<div>Tab Content</div>}/>
        </TabLayout>
      );
      const tabLabel = wrapper.find('.cj-tab-label').at(0);
      tabLabel.simulate('click');
      equal(clicks, 1);
    });

    it('should not call onTabClick if tab disabled', () => {
      let clicks = 0;
      const mockOnTabClick = () => {
        clicks += 1;
      };
      const wrapper = mount(
        <TabLayout tabLayoutId={'tabLayout1'} selectedIndex={0} onTabClick={mockOnTabClick} selectTab={() => {}}>
          <Tab label={<div>Tab</div>} content={<div>Tab Content</div>} disabled={true}/>
        </TabLayout>
      );
      const tabLabel = wrapper.find('.cj-tab-label').at(0);
      tabLabel.simulate('click');
      equal(clicks, 0);
    });
  });

  describe('styling', () => {
    it('should render tab underline with theme color when tab selected', () => {
      const wrapper = mount(
        <TabLayout tabLayoutId={'tabLayout1'} selectedIndex={0}>
          <Tab label={<div>Tab1</div>} content={<div>Tab Content 1</div>}/>
          <Tab label={<div>Tab2</div>} content={<div>Tab Content 2</div>}/>
        </TabLayout>
      );

      const tabLabelClicked = wrapper.find('.cj-tab-label.cj-tab-label-clicked');
      const tabLabelContent = tabLabelClicked.at(0);
      const tabLabelContentWrapper = tabLabelContent.children().at(0);
      deepEqual(tabLabelContentWrapper.props().style, { borderBottom: '4px solid #00af65' });

      const tabLabelInactive = wrapper.find('.cj-tab-label');
      const tabLabelContentInactive = tabLabelInactive.at(1);
      const tabLabelContentWrapperInactive = tabLabelContentInactive.children().at(0);
      deepEqual(tabLabelContentWrapperInactive.props().style, { });
    });

    it('should highlight text on hover', () => {
      const wrapper = mount(
        <TabLayout tabLayoutId={'tabLayout1'} selectedIndex={0}>
          <Tab label={<div>Tab1</div>} content={<div>Tab Content 1</div>}/>
          <Tab label={<div>Tab2</div>} content={<div>Tab Content 2</div>}/>
        </TabLayout>
      );

      const tabLabels = wrapper.find('.cj-tab-label');
      const tabLabelInactive = tabLabels.at(1);
      tabLabelInactive.simulate('mouseOver');
      deepEqual(tabLabelInactive.props().style, { color: '#00af65', cursor: 'pointer' });

      tabLabelInactive.simulate('mouseLeave');
      deepEqual(tabLabelInactive.props().style, { color: '#888' });
    });

    it('should take custom accent color', () => {
      const themeColor = 'grey';

      const wrapper = mount(
        <TabLayout tabLayoutId={'tabLayout1'} selectedIndex={0} themeColor={themeColor}>
          <Tab label={<div>Tab1</div>} content={<div>Tab Content 1</div>}/>
          <Tab label={<div>Tab2</div>} content={<div>Tab Content 2</div>}/>
        </TabLayout>
      );

      const tabLabels = wrapper.find('.cj-tab-label');
      const tabLabelInactive = tabLabels.at(1);
      tabLabelInactive.simulate('mouseOver');
      deepEqual(tabLabelInactive.props().style, { color: themeColor, cursor: 'pointer' });
    });

    it('should not apply hover styling on selected tab', () => {
      const wrapper = mount(
        <TabLayout tabLayoutId={'tabLayout1'} selectedIndex={0}>
          <Tab label={<div>Tab1</div>} content={<div>Tab Content 1</div>}/>
          <Tab label={<div>Tab2</div>} content={<div>Tab Content 2</div>}/>
        </TabLayout>
      );

      const tabLabels = wrapper.find('.cj-tab-label');
      const tabLabelInactive = tabLabels.at(0);
      tabLabelInactive.simulate('mouseOver');
      deepEqual(tabLabelInactive.props().style, { });
    });

    it('should apply disabled class to disabled tab', () => {
      const wrapper = mount(
        <TabLayout tabLayoutId={'tabLayout1'} selectedIndex={0}>
          <Tab label={<div>Tab1</div>} content={<div>Tab Content 1</div>} disabled={true}/>
        </TabLayout>
      );
      const tabLabels = wrapper.find('.cj-tab-label.cj-tab-label-disabled');
      equal(tabLabels.length, 1);
    });

    it('should apply styles for floating header', () => {
      const headerHeight = '10px';
      const headerWidth = '100px';
      const wrapper = mount(
        <TabLayout tabLayoutId={'tabLayout1'} selectedIndex={0} floatingHeader={true} headerHeight={headerHeight} headerWidth={headerWidth}>
          <Tab label={<div>Tab1</div>} content={<div>Tab Content 1</div>} disabled={true}/>
        </TabLayout>
      );

      const floatingHeader = wrapper.find('.cj-tab-header.cj-tab-header-floating');
      const tabBody = wrapper.find('.cj-tab-body');

      equal(floatingHeader.length, 1);
      equal(floatingHeader.at(0).props().style.width, headerWidth);

      equal(tabBody.at(0).props().style.paddingTop, headerHeight);
    });
  });
});
