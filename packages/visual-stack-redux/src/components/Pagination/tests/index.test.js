import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PaginationPure } from '../index';
import PaginationFromVS from '@cjdev/visual-stack/lib/components/Pagination';

Enzyme.configure({ adapter: new Adapter() });

describe('PaginationPure', () => {
  test('should initialize pagination data', () => {
    // given
    const initializePagniation = jest.fn();
    const paginationId = '123';
    const numberOfRows = 100;

    // when
    mount(
      <PaginationPure
        paginationId={paginationId}
        numberOfRows={numberOfRows}
        initializePagniation={initializePagniation}
      />
    );

    // then
    expect(initializePagniation.mock.calls).toEqual([
      [
        {
          paginationId,
          numberOfRows,
        },
      ],
    ]);
  });

  test('should forward the pagination value to visual stack pagination component', () => {
    const initializePagniation = jest.fn();
    const rowsPerPage = 10;
    const page = 1;
    const setPaginationValue = jest.fn();

    // when
    const wrapper = mount(
      <PaginationPure
        initializePagniation={initializePagniation}
        setPaginationValue={setPaginationValue}
        rowsPerPage={rowsPerPage}
        page={page}
      />
    );

    expect(wrapper.find(PaginationFromVS).props()).toEqual({
      rowsPerPage,
      page,
      onChange: expect.any(Function),
    });
  });
});
