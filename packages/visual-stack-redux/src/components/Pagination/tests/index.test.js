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

describe('PaginationPure', () => {
  test('should initialize pagination data', () => {
    // given
    const initializePagination = jest.fn();
    const paginationId = '123';
    const numberOfRows = 100;

    // when
    mount(
      <PaginationPure
        paginationId={paginationId}
        numberOfRows={numberOfRows}
        initializePagination={initializePagination}
        paginationValue={paginationValue}
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
    const initializePagination = jest.fn();
    const rowsPerPage = paginationValue.rowsPerPage;
    const page = paginationValue.page;
    const numberOfRows = 100;
    const setPaginationValue = jest.fn();

    // when
    const wrapper = mount(
      <PaginationPure
        numberOfRows={numberOfRows}
        initializePagination={initializePagination}
        setPaginationValue={setPaginationValue}
        paginationValue={paginationValue}
      />
    );

    expect(wrapper.find(PaginationFromVS).props()).toEqual({
      rowsPerPage,
      page,
      numberOfRows,
      onChange: expect.any(Function),
    });
  });

  test('should call setPaginationValue when onChange handler is called from Pagination component', () => {
    const initializePagination = jest.fn();
    const setPaginationValue = jest.fn();
    const paginationId = 'hello';
    const nextPaginationValue = {
      page: 1,
      rowsPerPage: 10,
    };

    // when
    const wrapper = mount(
      <PaginationPure
        numberOfRows={100}
        paginationId={paginationId}
        initializePagination={initializePagination}
        setPaginationValue={setPaginationValue}
        paginationValue={paginationValue}
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
});
