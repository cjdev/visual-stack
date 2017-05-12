import React from 'react';
import { shallow } from 'enzyme';
import { equal } from 'assert';
import { Row } from '../../src/components/Table';

describe('Row', () => {
  it('should render not seleactable Row by default', () => {
    const wrapper = shallow(
        <Row>
            Test Row
        </Row>
    );
    equal(wrapper.prop('children'), 'Test Row');
    equal(wrapper.hasClass('table-row-selected'), false);
    equal(wrapper.hasClass('table-row-selectable'), false);
  });

  it('should include class name table-row-selected if selected', () => {
    const wrapper = shallow(
        <Row selected>
            Test Row
        </Row>
    );
    equal(wrapper.hasClass('table-row-selected'), true);
  });

  it('should include class name table-row-selectable if onClick exist', () => {
    const wrapper = shallow(
        <Row onClick={() => {}}>
            Test Row
        </Row>
    );
    equal(wrapper.hasClass('table-row-selectable'), true);
  });

  it('should click if Row is clicked', () => {
    let click = false;
    const wrapper = shallow(
        <Row onClick={() => {
          click = true;
        }}>
            Test Row
        </Row>
    );
    wrapper.simulate('click');
    equal(click, true);
  });
});
