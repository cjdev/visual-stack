import React from 'react';
import { mount } from 'enzyme';
import { equal, deepEqual } from 'assert';
import { MultiSelectFilter } from '../../src/components/Filters';

describe('Filters', () => {
  describe('MultiSelectFilter', () => {
    it('should render all values passed in as checkboxes', () => {
      const checkboxList = [
        { label: 'Company1', value: 1234 },
        { label: 'Company2', value: 5678 },
        { label: 'Company3', value: 9101 },
      ];
      const filter = mount(<MultiSelectFilter
        values={checkboxList}
        onFilterChange={() => {}} />);

      const checkboxes = filter.find('.checkboxes');
      equal(filter.find('[type="checkbox"]').length, 4);
      equal(checkboxes.find('[type="checkbox"]').length, 3);
    });

    it('should render all values as selected by default', () => {
      const checkboxList = [
        { label: 'Company1', value: 1234 },
        { label: 'Company2', value: 5678 },
        { label: 'Company3', value: 9101 },
      ];
      const filter = mount(<MultiSelectFilter
        values={checkboxList}
        onFilterChange={(val) => console.log(val)}
        defaultChecked={true}/>);

      equal(filter.find('[type="checkbox"]').first().props().checked, true);
    });

    it('should toggle the values correctly when clicked', () => {
      const checkboxList = [
        { label: 'company1', value: 1234 },
        { label: 'company2', value: 5678 },
        { label: 'company3', value: 9101 }
      ];

      const assertOnValues = values => deepEqual(values, []);
      const filter = mount(<MultiSelectFilter
        values={checkboxList}
        onFilterChange={assertOnValues}
        defaultChecked={true}/>);

      const selectAllCheckbox = filter.find('[type="checkbox"]').first();
      equal(selectAllCheckbox.props().checked, true);
      selectAllCheckbox.simulate('change');
    });
  });
});
