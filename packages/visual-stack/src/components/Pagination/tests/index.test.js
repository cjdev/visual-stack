import React from 'react';
import Pagination from '../index';
import Enzyme, { mount } from 'enzyme';
import Select from '../../Select';
import { Button } from '../../Button';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const numberOfRows = 200;
const makeProps = (overrides = {}) => ({
  numberOfRows,
  rowsPerPage: 10,
  page: 1,
  ...overrides,
});

class Tester {
  paginationValue = null;
  page = null;
  wrapper = null;
  rowsPerPageSelectWrapper = null;
  pagingInformationWrapper = null;

  constructor(props) {
    const onChange = value => {
      // eslint-disable-next-line no-invalid-this
      this.paginationValue = value;
    };
    const onPageChange = value => {
      this.page = value;
    };
    this.wrapper = mount(
      <Pagination {...makeProps({ onChange, onPageChange, ...props })} />
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

  changeRowsPerPage = value => {
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

  clickOnNextPage = () => {
    // eslint-disable-next-line no-invalid-this
    this.wrapper
      .find(Button)
      .filterWhere(node => node.props().className === 'vs-next-page')
      .props()
      .onClick();
  };

  clickOnPreviousPage = () => {
    // eslint-disable-next-line no-invalid-this
    this.wrapper
      .find(Button)
      .filterWhere(node => node.props().className === 'vs-previous-page')
      .props()
      .onClick();
  };

  getNextPage = () => {
    // eslint-disable-next-line no-invalid-this
    return this.page;
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

  it('should set rows per page', () => {
    const rowsPerPage = 25;
    const tester = createTesterWithOptions({
      rowsPerPage,
    });
    expect(tester.getRowsPerPageDropdownValue()).toEqual({
      value: 25,
      label: '25 per page',
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
    // given
    const numberOfRows = 50;

    // when
    const tester = createTesterWithOptions({ numberOfRows });

    // then
    expect(tester.getPagingInformation()).toEqual('1/5');
  });

  it('should display paging information that cant be divided evenly', () => {
    // given
    const numberOfRows = 52;

    // when
    const tester = createTesterWithOptions({ numberOfRows });

    // then
    expect(tester.getPagingInformation()).toEqual('1/6');
  });

  it('should display paging information for different rowsPerPage', () => {
    // given
    const rowsPerPage = 25;
    const numberOfRows = 100;

    // when
    const tester = createTesterWithOptions({
      rowsPerPage,
      numberOfRows,
    });

    // then
    expect(tester.getPagingInformation()).toEqual('1/4');
  });

  it('should display the current page', () => {
    // given
    const numberOfRows = 100;
    const page = 2;

    // when
    const tester = createTesterWithOptions({
      numberOfRows,
      page,
    });

    // then
    expect(tester.getPagingInformation()).toEqual('2/10');
  });

  it('should callback with the selecting rowsPerPage value', () => {
    // given
    const tester = createTester();

    // when
    tester.changeRowsPerPage(50);

    // then
    expect(tester.paginationValue).toEqual({ rowsPerPage: 50, page: 1 });
  });

  it('should onPageChange with next page', () => {
    // given
    const page = 2;
    const rowsPerPage = 25;
    const numberOfRows = 1000;

    // when
    const tester = createTesterWithOptions({
      page,
      rowsPerPage,
      numberOfRows,
    });
    tester.clickOnNextPage();

    // then
    expect(tester.paginationValue).toEqual({ page: 3, rowsPerPage: 25 });
  });

  it('should onChange with previous page', () => {
    // given
    const page = 2;

    // when
    const tester = createTesterWithOptions({
      page,
    });
    tester.clickOnPreviousPage();

    // then
    expect(tester.paginationValue).toEqual({
      page: 1,
      rowsPerPage: 10,
    });
  });

  it('should not call onChange when page number is below 1', () => {
    // given
    const page = 1;

    // when
    const tester = createTesterWithOptions({
      page,
    });
    tester.clickOnPreviousPage();

    // then
    expect(tester.paginationValue).toEqual(null);
  });

  it('should not call onChange when next page number is above the max allowed page number', () => {
    // given
    const page = 5;
    const numberOfRows = 125;
    const rowsPerPage = 25;

    // when
    const tester = createTesterWithOptions({
      page,
      numberOfRows,
      rowsPerPage,
    });
    tester.clickOnNextPage();

    // then
    expect(tester.paginationValue).toEqual(null);
  });

  it('should change page back to the first page e when I change rowsPerPage', () => {
    // given
    const page = 9;
    const numberOfRows = 100;
    const rowsPerPage = 10;

    // when
    const tester = createTesterWithOptions({
      page,
      numberOfRows,
      rowsPerPage,
    });
    tester.changeRowsPerPage(50);

    // then
    expect(tester.paginationValue).toEqual({ page: 1, rowsPerPage: 50 });
  });

  it('should not change the page number when I change rowsPerPage and the current page is not greater than the max allowed page', () => {
    // given
    const page = 1;
    const numberOfRows = 100;
    const rowsPerPage = 10;

    // when
    const tester = createTesterWithOptions({
      page,
      numberOfRows,
      rowsPerPage,
    });
    tester.changeRowsPerPage(50);

    // then
    expect(tester.paginationValue).toEqual({ page: 1, rowsPerPage: 50 });
  });
});
