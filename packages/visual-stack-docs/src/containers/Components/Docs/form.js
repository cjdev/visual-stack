/* eslint */
import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
/* s3:start */
import { Form, FormGroup, Label, Input, Legend, InputField, LabeledComponent, ChoiceField } from '@cjdev/visual-stack/lib/components/Form';
/* s3:end */

/* s7:start */
// Styles used above
const inlineOtherTextBoxStyle = {
  display: "inline",
  marginRight: "8px"
};

const makeTextBoxSmallerStyle = {
  width: "50px",
  display: "inline"
};
/* s7:end */

export default () =>
    <Demo srcFile="/samples/src/containers/Components/Docs/form.js">
    { snippets => {
      return (
        <div>
          <Panel>
            <Header>
              Default Buttons
            </Header>
            <Body>
              { /* s2:start */ }
              <Form vertical={false}>
                <FormGroup vertical={false}>
                  <Label required={true}>Some Label</Label>
                  <Input/>
                </FormGroup>
              </Form>
              { /* s2:end */ }
              <Snippet tag="s3" src={snippets} />
              <Snippet tag="s2" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Header>
              Large Buttons
            </Header>
            <Body>
              { /* s1:start */ }
              <Form vertical={false}>
                <FormGroup vertical={false}>
                  <Label required={true}>Some Label</Label>
                  <Input/>
                  <Legend>Something</Legend>
                </FormGroup>
              </Form>
              { /* s1:end */ }
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Header>
              InputField Labeled Components
            </Header>
            <Body>
              { /* s4:start */ }
              <Form vertical={false}>
                  <InputField label="Some Label"
                              help="this is some field"
                              placeholder="this is where you should enter stuff"/>

                  <InputField label="Another Label (Does not display help when error)"
                              value="value with validation error"
                              error="Please enter correct value"
                              help="this will not display when error is present"/>

                  <InputField label="Not required"
                              optional={true}
                              optionalLabel="Optional"
                              help="this is some field"
                              placeholder="this is where you should enter stuff"/>
              </Form>
              { /* s4:end */ }
              <Snippet tag="s4" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Header>
              Labeled Components
            </Header>
            <Body>
            { /* s5:start */ }
            <Form vertical={false}>
              <LabeledComponent label="Simple radio group"
                          help="A group of radio buttons">
                <ChoiceField name="radio1" label="Radio 1" value="radio1" checked={true}/>
                <ChoiceField name="radio1" label="Radio 2" value="radio2"/>
              </LabeledComponent>

              <LabeledComponent label="Radio group with error"
                                help="A group of radio buttons"
                                error="Somehow something went wrong">
                <ChoiceField name="radio2" label="Radio 1" value="radio1"/>
                <ChoiceField name="radio2" label="Radio 2" value="radio2"/>
              </LabeledComponent>

              <LabeledComponent label="Checkbox group with optional label"
                                help="A group of Checkboxes"
                                optional={true}
                                optionalLabel="Optional">
                <ChoiceField name="checkbox1" type="checkbox" label="Checkbox 1" value="checkbox1"/>
                <ChoiceField name="checkbox2" type="checkbox" label="Checkbox 2" value="checkbox2"/>
              </LabeledComponent>
            </Form>
            { /* s5:end */ }
            <Snippet tag="s5" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Header>
              Complicated Labeled Components
            </Header>
            <Body>
            { /* s6:start */ }
            <Form vertical={false}>
              <LabeledComponent label="Some complicated stuff goin' on here"
                                help="A group of radio buttons with complications">
                <ChoiceField label="To be" value="complicated"/>
                <div style={inlineOtherTextBoxStyle}>
                  <ChoiceField label="Not to be" value="simple" style={inlineOtherTextBoxStyle}/>
                  <Input name="numberOfReferrals.days" style={makeTextBoxSmallerStyle}/> <Label>something</Label>
                </div>
              </LabeledComponent>
            </Form>
            { /* s6:end */ }
            <Snippet tag="s6" src={snippets} />
            <Snippet tag="s7" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>;

