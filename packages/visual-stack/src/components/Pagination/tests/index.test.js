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

describe('Pagination', () => {
  it('should display total records', () => {
    const wrapper = mount(<Pagination {...makeProps()} />);
    const pagninationInformation = wrapper
      .find('div.vs-pagination-total-records')
      .text();
    expect(pagninationInformation).toEqual(`${numberOfRows} total records`);
  });

  it('should have default value for rows per page', () => {
    const wrapper = mount(<Pagination {...makeProps()} />);
    const rowsPerPage = wrapper
      .find(Select)
      .filterWhere(node => node.props().name === 'rows-per-page')
      .props().value;
    expect(rowsPerPage).toEqual({
      value: 10,
      label: '10 per page',
    });
  });

  it('should display the rows per page options', () => {
    const wrapper = mount(<Pagination {...makeProps()} />);
    const { options } = wrapper
      .find(Select)
      .filterWhere(node => node.props().name === 'rows-per-page')
      .props();
    expect(options).toEqual([
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
    const wrapper = mount(<Pagination {...makeProps({ numberOfRows })} />);
    const paging = wrapper.find('div.vs-pagination-paging').text();
    expect(paging).toEqual('1/5');
  });

  it('should display paging information that cant be divided evenly', () => {
    const numberOfRows = 52;
    const wrapper = mount(<Pagination {...makeProps({ numberOfRows })} />);
    const paging = wrapper.find('div.vs-pagination-paging').text();
    expect(paging).toEqual('1/6');
  });
});
