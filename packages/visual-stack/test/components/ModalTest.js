import React from 'react';
import { Modal, Header } from '../../src/components/Modal';
import { mount } from 'enzyme';
import { equal } from 'assert';

describe('Modal', () => {
  it('should call onBackgroundClick when background is clicked', () => {
    let onBackgroundClickCalls = 0;
    const mockOnBackgroundClick = () => {
      onBackgroundClickCalls += 1;
    };

    const wrapper = mount(
      <Modal onBackgroundClick={ mockOnBackgroundClick }/>
    );

    wrapper.find(Modal).simulate('click');

    equal(onBackgroundClickCalls, 1);
  });

  it('should not call onBackgroundClick when modal is clicked', () => {
    let onBackgroundClickCalls = 0;
    const mockOnBackgroundClick = () => {
      onBackgroundClickCalls += 1;
    };

    const wrapper = mount(
      <Modal onBackgroundClick={mockOnBackgroundClick}>
        <Header />
      </Modal>
    );

    wrapper.find(Header).simulate('click');

    equal(onBackgroundClickCalls, 0);
  });
});
