/* eslint */
import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
/* s3:start */
import { Form, FormGroup, Label, Input, Legend, TextField, Field, ChoiceInput } from '@cjdev/visual-stack/lib/components/Form';
/* s3:end */

/* s11:start */
// Styles used above
const inlineOtherTextBoxStyle = {
  display: "inline",
  marginRight: "8px"
};
const makeTextBoxSmallerStyle = {
  width: "50px",
  display: "inline",
  marginRight: "8px"

};
const gridItUp ={
    display: "grid",
    gridTemplateColumns: "3fr 3fr 3fr",
    gridColumnGap: "8px"
};
/* s11:end */

const PanelComponent =({header, children}) => (
    <Panel>
        {header ? <Header>{header}</Header> : null}
        <Body>
            {children}
        </Body>
    </Panel>
);

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

          <PanelComponent header="TextField Labeled Components">
            <PanelComponent>
              { /* s4:start */ }
              <Form>
                  <TextField label="Some Label"
                              help="this is some field"
                              placeholder="placeholder text"/>
              </Form>
              { /* s4:end */ }
              <Snippet tag="s4" src={snippets} />
            </PanelComponent>
            <PanelComponent>
                { /* s5:start */ }
              <Form>
                  <TextField label="Another Label (Does not display help when error)"
                              value="value with validation error"
                              error="Please enter correct value"
                              help="help will be replaced with error when present"/>
              </Form>
                { /* s5:end */ }
              <Snippet tag="s5" src={snippets} />
            </PanelComponent>
            <PanelComponent>
              { /* s6:start */ }
              <Form>
                <TextField label="Not required"
                                optional={true}
                                optionalLabel="Optional"
                                help="this is some field"
                                placeholder="this is where you should enter stuff"/>
              </Form>
              { /* s6:end */ }
              <Snippet tag="s6" src={snippets} />
            </PanelComponent>
          </PanelComponent>

          <PanelComponent header="Labeled Fields">

            <PanelComponent>
                { /* s7:start */ }
                <Form>
                  <Field label="Simple radio group"
                              help="A group of radio buttons">
                    <ChoiceInput name="radio1" label="Radio 1" value="radio1" checked={true}/>
                    <ChoiceInput name="radio1" label="Radio 2" value="radio2"/>
                  </Field>
                </Form>
                  { /* s7:end */ }
                <Snippet tag="s7" src={snippets} />
            </PanelComponent>

            <PanelComponent>
              {/* s8:start */}
              <Form>
                  <Field label="Radio group with error"
                                    help="A group of radio buttons"
                                    error="Somehow something went wrong">
                      <ChoiceInput name="radio2" label="Radio 1" value="radio1"/>
                      <ChoiceInput name="radio2" label="Radio 2" value="radio2"/>
                  </Field>
              </Form>
              {/* s8:end */}
              <Snippet tag="s8" src={snippets}/>
            </PanelComponent>

            <PanelComponent>
              {/* s9:start */}
              <Form>
                  <Field label="Checkbox group with optional label"
                                    help="A group of Checkboxes"
                                    optional={true}
                                    optionalLabel="Optional">
                      <ChoiceInput name="checkbox1" type="checkbox" label="Checkbox 1" value="checkbox1"/>
                      <ChoiceInput name="checkbox2" type="checkbox" label="Checkbox 2" value="checkbox2"/>
                  </Field>
              </Form>
              {/* s9:end */}
              <Snippet tag="s9" src={snippets}/>
            </PanelComponent>

          </PanelComponent>

        <PanelComponent header="All together with some grid stuff">
            {/* s10:start */}
            <Form>
                <TextField name="name" label="Enter Name" help="Enter first name and last name" placeholder="First Last"/>
                <TextField name="country" label="Country" optional={true} optionalLabel="Optional"
                            value="Degobah" error="Enter valid country name on planet Earth" help="Enter Country"/>
                <div style={gridItUp}>
                    <Field label="# of vacation days" help="Enter vacation rules">
                        <ChoiceInput name="vacationDays" label="Unlimited" value="unlimited"/>
                        <div style={inlineOtherTextBoxStyle}>
                            <ChoiceInput name="vacationDays" label="Limit to" value="limitTo" style={inlineOtherTextBoxStyle}/>
                            <Input name="days" style={makeTextBoxSmallerStyle}/>
                            <Label>days</Label>
                        </div>
                    </Field>
                    <Field name="vacationtypes" label="Vacation Type" help="Choose all applicable"
                                      optional={true} optionalLabel="Optional">
                        <ChoiceInput name="vacationtypes.cruise" type="checkbox" label="Cruise" value="cruise"/>
                        <ChoiceInput name="vacationtypes.hiking" type="checkbox" label="Hiking" value="hiking"/>
                    </Field>
                    <div/>
                </div>
            </Form>
            {/* s10:end */}
            <Snippet tag="s10" src={snippets}/>
            <Snippet tag="s11" src={snippets}/>
        </PanelComponent>
        </div>
      );
    }}
  </Demo>;

