import DialogLayout from '../../src/layouts/DialogLayout';
import React from 'react';
import { ok, equal } from 'assert';
import { mount, shallow } from 'enzyme';

describe("DialogLayout", () => {
    it("should render", () => {
        let onClickCalled = false;
        const onClickFake = () => {
            onClickCalled = true;
        };

        const component = mount(<DialogLayout
            title="titleFromTest"
            cancelButtonText="testCancelButtonText"
            submitButtonText="testSubmitButtonText"
            logo={<div id="test-logo">I am a logo</div>}
            onCancel={onClickFake}>

            <div id="test-children">I am a child</div>

        </DialogLayout>);

        equal("titleFromTest", component.find(".vs-dialog-layout-title").prop('children'));
        equal("testCancelButtonText", component.find("#vs-dialog-layout-cancel").prop('children'));
        equal("testSubmitButtonText", component.find("#vs-dialog-layout-submit").prop('children'));
        equal("I am a child", component.find("#test-children").prop('children'));
        equal("I am a logo", component.find("#test-logo").prop('children'));
    });

    it("should call cancel handler when cancel button is clicked", () => {
        let onCancel = false;
        const onClickFake = () => {
            onCancel = true;
        };

        const component = shallow(<DialogLayout onCancel={onClickFake} />);

        const cancelButton = component.find("#vs-dialog-layout-cancel");

        cancelButton.simulate("click");

        ok(onCancel);
    });

    it("should call cancel handler when cancel logo is clicked", () => {
        let onCancelCalled = false;
        const onClickFake = () => {
            onCancelCalled = true;
        };

        const component = shallow(<DialogLayout onCancel={onClickFake} />);

        const closeIcon = component.find(".vs-dialog-layout-icon-close");

        closeIcon.simulate("click");

        ok(onCancelCalled);
    });

    it("should call submit handler when submit button is clicked", () => {
        let onSubmitCalled = false;
        const onClickFake = () => {
            onSubmitCalled = true;
        };

        const component = shallow(<DialogLayout onSubmit={onClickFake} />);

        const submitButton = component.find("#vs-dialog-layout-submit");

        submitButton.simulate("click");

        ok(onSubmitCalled);
    });
});
