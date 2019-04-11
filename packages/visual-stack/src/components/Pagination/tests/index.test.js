import React from 'react';
import Pagination from '../index';
import Enzyme, { mount } from 'enzyme';
import Select from '../../Select';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const numberOfRows = 200;
const makeProps = (overrides = {}) => ({
  numberOfRows,
  ...overrides,
});

class Tester {
  pagingValue = -1;
  wrapper = null;
  rowsPerPageSelectWrapper = null;
  pagingInformationWrapper = null;

  constructor({ numberOfRows }) {
    const onPageChange = value => {
      // eslint-disable-next-line no-invalid-this
      this.pagingValue = value;
    };
    this.wrapper = mount(
      <Pagination {...makeProps({ onPageChange, numberOfRows })} />
    );

    this.rowsPerPageSelectWrapper = this.wrapper
      .find(Select)
      .filterWhere(node => node.props().name === 'rows-per-page');
    this.pagingInformationWrapper = this.wrapper.find(
      'div.vs-pagination-paging'
    );
    this.paginationTotalRecordsWrapper = this.wrapper.find(
      'div.vs-pagination-total-records'
    );
  }

  getRowsPerPageOptions = () => {
    // eslint-disable-next-line no-invalid-this
    return this.rowsPerPageSelectWrapper.props().options;
  };

  changePageValue = value => {
    // eslint-disable-next-line no-invalid-this
    const rowsPerPageSelectWrapper = this.rowsPerPageSelectWrapper;
    const { onChange } = rowsPerPageSelectWrapper.props();
    onChange({ value });
  };

  getTotalRecords = () => {
    // eslint-disable-next-line no-invalid-this
    return this.paginationTotalRecordsWrapper.text();
  };

  getRowsPerPageDropdownValue = () => {
    // eslint-disable-next-line no-invalid-this
    return this.rowsPerPageSelectWrapper.props().value;
  };

  getPagingInformation = () => {
    // eslint-disable-next-line no-invalid-this
    return this.pagingInformationWrapper.text();
  };
}

const defaultOptions = {
  numberOfRows: 20,
};

const createTesterWithOptions = options =>
  new Tester({ ...defaultOptions, ...options });

const createTester = () => createTesterWithOptions({});

const createTesterWithNumberOfRows = numberOfRows =>
  createTesterWithOptions({ numberOfRows });

describe('Pagination', () => {
  it('should display total records', () => {
    const tester = createTesterWithNumberOfRows(27);
    expect(tester.getTotalRecords()).toEqual(`27 total records`);
  });

  it('should have default value for rows per page', () => {
    const tester = createTester();
    expect(tester.getRowsPerPageDropdownValue()).toEqual({
      value: 10,
      label: '10 per page',
    });
  });

  it('should display the rows per page options', () => {
    // given
    const tester = createTester();

    // then
    expect(tester.getRowsPerPageOptions()).toEqual([
      {
        value: 10,
        label: '10 per page',
      },
      {
        value: 25,
        label: '25 per page',
      },
      {
        value: 50,
        label: '50 per page',
      },
    ]);
  });

  it('should display paging information', () => {
    const numberOfRows = 50;
    const tester = createTesterWithOptions({ numberOfRows });
    expect(tester.getPagingInformation()).toEqual('1/5');
  });

  it('should display paging information that cant be divided evenly', () => {
    const numberOfRows = 52;
    const wrapper = mount(<Pagination {...makeProps({ numberOfRows })} />);
    const paging = wrapper.find('div.vs-pagination-paging').text();
    expect(paging).toEqual('1/6');
  });

  it('should callback with the selected paging value', () => {
    // given
    const tester = createTester();

    // when
    tester.changePageValue(50);

    // then
    expect(tester.pagingValue).toEqual(50);
  });
});
