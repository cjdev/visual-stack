import Card from '../../src/components/Card';
import React from 'react';
import { equal } from 'assert';
import { mount } from 'enzyme';

describe("Card", () => {
    it("should render a tag with children", () => {
        const content = "hello";
        const wrapper = mount(<Card>{content}</Card>);
        const aTagChildren = wrapper.find('a').props().children;
        equal(aTagChildren, content);
    });

    it("should forward all the props to a tag", () => {
        const href = 'cj.com';
        const fakeProps = { href };
        const wrapper = mount(<Card {...fakeProps}/>);
        const aTagProps = wrapper.find('a').props();
        equal(aTagProps.href, href);
    });
});