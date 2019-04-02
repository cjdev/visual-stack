import React from 'react';
import CreatableSelect from '../index';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('CreatableSelect', () => {
    test('should render', () => {
        const wrapper = mount(<CreatableSelect/>);
        expect(wrapper.find(CreatableSelect).length).toEqual(1);
    });

    test('should pass handleUpdateFunction to react creatable select', () => {
        const handleUpdateFunction = jest.fn(x => x);
        const component = mount(
            <CreatableSelect handleUpdate={handleUpdateFunction}/>
        );

        component.instance().handleChange();
        expect(handleUpdateFunction.mock.calls.length).toBe(1);
    });

    test('should pass placeholder to react creatable select', () => {
        const placeholder = "Test placeholder...";

        const component = mount(
            <CreatableSelect handleUpdate={() => "doesn't matter"} placeholder={placeholder}/>
        );
        const componentProps = component.props();

        expect(componentProps.placeholder).toBe(placeholder);
    });

    test('should pass handleNums to react creatable select', () => {
        const component = mount(
            <CreatableSelect handleUpdate={() => "doesn't matter"} handleNums={true}/>
        );

        const componentProps = component.props();
        expect(componentProps.handleNums).toBe(true);

    });
});


