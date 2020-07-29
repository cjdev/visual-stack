import React from 'react';
import { shallow } from 'enzyme';
import { SlidingPanel, ToggleIcon, SlidingPanelDropdown } from '../';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('SlidingPanel', () => {
  test('should render', () => {
    const wrapper = shallow(<SlidingPanel />);
    expect(wrapper.find('.vs-sliding-panel').length).toEqual(1);
  });

  test('should render active', () => {
    const wrapper = shallow(<SlidingPanel active={true} />);
    expect(wrapper.find('.vs-sliding-panel.vs-active').length).toEqual(1);
  });
});

describe("SlidingPanelDropdown", () => {
  test("should render badge", () => {
    const wrapper = shallow(<SlidingPanelDropdown badge="hello" />);
    expect(wrapper.find("Badge")).toHaveLength(1);
    expect(wrapper.find("Badge").prop("children")).toBe("hello");
  })

  test("should not render badge when missing badge prop", () => {
    const wrapper = shallow(<SlidingPanelDropdown />);
    expect(wrapper.find("Badge")).toHaveLength(0);
  })
})

describe('ToggleIcon', () => {
  test('should render', () => {
    const wrapper = shallow(<ToggleIcon onClick={() => { }} />);
    expect(wrapper.find('.vs-sliding-panel-toggle-icon').length).toEqual(1);
  });
});
