import React from 'react';
import Select, { CreatableSelect } from '../index';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Select', () => {
  const testOptions = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
  ];

  test('should pass options to React Select', () => {
    const shallowWrapper = shallow(<Select options={testOptions}/>);

    expect(shallowWrapper.find('.vs-default-react-select').prop("options")).toBe(testOptions);
  });

  test('should have the vs-input-error classname when an error is passed', () => {
    const shallowWrapper = shallow(<Select options={testOptions} error={true}/>);

    expect(shallowWrapper.find('.vs-default-react-select').hasClass('vs-input-error')).toBe(true);
  });

  test('should pass additional arbitrary parameters to react select', () => {
    const shallowWrapper = shallow(<Select options={testOptions}
                                           className="additional-classname"
                                           otherProp={'another prop'}/>);

    expect(shallowWrapper.find('.vs-default-react-select').hasClass('additional-classname')).toBe(true);
    expect(shallowWrapper.find('.vs-default-react-select').prop("otherProp")).toBe("another prop");
  });

  test('should isDisabled to React Select when given disabled', () => {
    const shallowWrapper = shallow(<Select options={testOptions} disabled={true}/>);

    expect(shallowWrapper.find('.vs-default-react-select').prop("isDisabled")).toBe(true);
  });
});

describe('CreatableSelect', () => {
  test('should render', () => {
      const wrapper = mount(<CreatableSelect/>);
      expect(wrapper.find(CreatableSelect).length).toEqual(1);
  });

  test('should accept props', () => {
    const placeholder = "Test placeholder...";
    const handleUpdateFunction = jest.fn(x => x);
    const component = mount(
        <CreatableSelect handleUpdate={handleUpdateFunction} placeholder={placeholder} handleNums/>
    );
    const componentProps = component.props();


    expect(componentProps.placeholder).toBe(placeholder);
    expect(componentProps.handleNums).toBe(true);
    component.instance().handleChange();
    expect(handleUpdateFunction.mock.calls.length).toBe(1);
  });
});


