import React from 'react';
import CreatableSelect from '../index';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});


const testOptions = [
    {value: 'value1', label: 'Value 1'},
    {value: 'value2', label: 'Value 2'},
    {value: 'value3', label: 'Value 3'},
];


describe('CreatableSelect', () => {
    test('should render', () => {
        const wrapper = mount(<CreatableSelect/>);
        expect(wrapper.find(CreatableSelect).length).toEqual(1);
    });

    test('should pass additional arbitrary parameters to react creatable select', () => {
        const shallowWrapper = shallow(<CreatableSelect options={testOptions}
                                               className="additional-classname"
                                               otherProp={'another prop'}/>);

        expect(shallowWrapper.find('.vs-default-react-select-creatable').hasClass('additional-classname')).toBe(true);
        expect(shallowWrapper.find('.vs-default-react-select-creatable').prop("otherProp")).toBe("another prop");
    });
});
