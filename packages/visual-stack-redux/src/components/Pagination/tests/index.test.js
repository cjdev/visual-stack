import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PaginationPure } from '../index';
import PaginationFromVS from '@cjdev/visual-stack/lib/components/Pagination';
Enzyme.configure({ adapter: new Adapter() });

const paginationValue = {
  rowsPerPage: 10,
  page: 1,
};

const numberOfRows = 100;

const defaultProps = {
  paginationValue,
  initializePagination: () => {},
  setPaginationValue: () => {},
  onChange: () => {},
  numberOfRows,
};

describe('PaginationPure', () => {
  test('should initialize pagination data', () => {
    // given
    const initializePagination = jest.fn();
    const paginationId = '123';

    // when
    mount(
      <PaginationPure
        {...defaultProps}
        paginationId={paginationId}
        initializePagination={initializePagination}
      />
    );

    // then
    expect(initializePagination.mock.calls).toEqual([
      [
        {
          paginationId,
        },
      ],
    ]);
  });

  test('should forward the pagination value to visual stack pagination component', () => {
    // when
    const wrapper = mount(<PaginationPure {...defaultProps} />);

    expect(wrapper.find(PaginationFromVS).props()).toEqual({
      rowsPerPage: paginationValue.rowsPerPage,
      page: paginationValue.page,
      numberOfRows,
      onChange: expect.any(Function),
    });
  });

  test('should call setPaginationValue when onChange handler is called from Pagination component', () => {
    const setPaginationValue = jest.fn();
    const paginationId = 'hello';
    const nextPaginationValue = {
      page: 1,
      rowsPerPage: 10,
    };

    // when
    const wrapper = mount(
      <PaginationPure
        {...defaultProps}
        paginationId={paginationId}
        setPaginationValue={setPaginationValue}
      />
    );
    wrapper
      .find(PaginationFromVS)
      .props()
      .onChange(nextPaginationValue);

    // then
    expect(setPaginationValue.mock.calls).toEqual([
      [
        {
          ...nextPaginationValue,
          paginationId,
        },
      ],
    ]);
  });

  it('should call onChange with pagination value when pagination changes', () => {
    // given
    const onChange = jest.fn();
    const wrapper = mount(
      <PaginationPure {...defaultProps} onChange={onChange} />
    );
    const nextPaginationValue = {
      page: 1,
      rowsPerPage: 10,
    };

    // when
    wrapper
      .find(PaginationFromVS)
      .props()
      .onChange(nextPaginationValue);

    // then
    expect(onChange.mock.calls).toEqual([[nextPaginationValue]]);
  });
});
