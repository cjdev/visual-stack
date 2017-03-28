import R from 'ramda';
import React from 'react';
import { mount } from 'enzyme';
import { equal, deepEqual } from 'assert';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { MultiSelectFilter } from '../../src/components/Filters';

chai.use(chaiEnzyme());

describe('Filters', () => {
  describe('MultiSelectFilter', () => {
    it('should render all values passed in as checkboxes', () => {
      const options = [
        { label: 'Company1', value: 1234 },
        { label: 'Company2', value: 5678 },
        { label: 'Company3', value: 9101 },
      ];
      const filter = mount(<MultiSelectFilter
        values={options}
        onFilterChange={() => {
        }}/>);

      const checkboxes = filter.find('.checkboxes');
      equal(filter.find('[type="checkbox"]').length, options.length + 1); // one extra for Select All
      equal(checkboxes.find('[type="checkbox"]').length, options.length);
    });

    it('should render all values as visually selected by default', () => {
      const options = [
        { label: 'Company1', value: 1234 },
        { label: 'Company2', value: 5678 },
        { label: 'Company3', value: 9101 },
      ];
      const filter = mount(<MultiSelectFilter
        values={options}
        onFilterChange={ () => {} }
        defaultChecked={true}/>);

      filter.find('[type="checkbox"]').forEach(checkbox => {
        equal(checkbox.props().defaultChecked, true);
      });
    });

    it('no values should be selected when toggle Select All from true (default) to false', () => {
      const options = [
        { label: 'company1', value: 1234 },
        { label: 'company2', value: 5678 },
        { label: 'company3', value: 9101 },
      ];

      const assertOnValues = values => deepEqual(values, []);
      const filter = mount(<MultiSelectFilter
        values={options}
        onFilterChange={assertOnValues}
        defaultChecked={true} />);

      const checkboxes = filter.find('[type="checkbox"]');

      const allCheckbox = checkboxes.first();
      equal(allCheckbox.props().defaultChecked, true);

      allCheckbox.simulate('change', { target: { checked: false } });
    });

    it('all values should be selected when toggle Select All from false (default) to true', () => {
      const options = [
        { label: 'company1', value: 1234 },
        { label: 'company2', value: 5678 },
        { label: 'company3', value: 9101 },
      ];

      const assertOnValues = values => deepEqual(values, R.pluck('value', options));
      const filter = mount(<MultiSelectFilter
        values={options}
        onFilterChange={assertOnValues}
        defaultChecked={false} />);

      const checkboxes = filter.find('[type="checkbox"]');

      const allCheckbox = checkboxes.first();
      equal(allCheckbox.props().defaultChecked, false);

      allCheckbox.simulate('change', { target: { checked: true } });
    });

  });
});
