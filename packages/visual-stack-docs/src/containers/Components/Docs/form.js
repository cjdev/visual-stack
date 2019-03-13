/* eslint */
import React from 'react';
import {Body, Header, Panel} from '@cjdev/visual-stack/lib/components/Panel';
import {Demo, Snippet} from '../../../components/Demo';
import "./form.css";
/* s3:start */
import {
  Form,
  FormGroup,
  Label,
  Input,
  Legend,
  TextField,
  Field,
  FieldContent,
  ChoiceInput,
  TextArea,
  Select,
  SelectField,
} from '@cjdev/visual-stack/lib/components/Form';
/* s3:end */

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
                      <FieldContent>
                        <ChoiceInput name="radio1" label="Radio 1" value="radio1" checked={true}/>
                        <ChoiceInput name="radio1" label="Radio 2" value="radio2"/>
                      </FieldContent>
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
                      <FieldContent>
                          <ChoiceInput name="radio2" label="Radio 1" value="radio1"/>
                          <ChoiceInput name="radio2" label="Radio 2" value="radio2"/>
                      </FieldContent>
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
                      <FieldContent>
                          <ChoiceInput name="checkbox1" type="checkbox" label="Checkbox 1" value="checkbox1"/>
                          <ChoiceInput name="checkbox2" type="checkbox" label="Checkbox 2" value="checkbox2"/>
                      </FieldContent>
                  </Field>
              </Form>
              {/* s9:end */}
              <Snippet tag="s9" src={snippets}/>
            </PanelComponent>

          </PanelComponent>
          <PanelComponent header="Dropdown powered by React Select">
            {/* s10:start */}
            <Form>
              <Select
                options={[
                  {value: 'chocolate', label: 'Chocolate'},
                  {value: 'strawberry', label: 'Strawberry'},
                  {value: 'vanilla', label: 'Vanilla'},
                ]}/>
              <SelectField label={"Select Field Component with help"}
                           options={[
                             {value: 'excalibur', label: 'Excalibur'},
                             {value: 'durandal', label: 'Durandal'},
                             {value: 'arondight', label: 'Arondight'},
                           ]}
                           help={"It's dangerous to go alone, take one of these"}/>
              <SelectField label={"Select Field Component with error"}
                           options={[
                             {value: 'dmb', label: 'Darkmoon Blades'},
                             {value: 'sb', label: 'Warriors of Sunlight'},
                             {value: 'gl', label: 'Gravelords'},
                           ]}
                           placeholder={"Choose your faction"}
                           error={"Something is wrong"}/>
            </Form>
            {/* s10:end */}
            <Snippet tag="s10" src={snippets}/>
          </PanelComponent>

        <PanelComponent header="All together with some grid stuff">
            {/* s11:start */}
            <Form>
                <TextField name="name" label="Enter Name" help="Enter first name and last name"
                           placeholder="First Last"/>
                <TextField name="country" label="Country" optional={true} optionalLabel="Optional"
                           value="Degobah" error="Enter valid country name on planet Earth" help="Enter Country"/>
                <div className="grid-it-up">
                    <Field label="# of vacation days" help="Enter vacation rules">
                        <FieldContent>
                            <ChoiceInput name="vacationDays" label="Unlimited" value="unlimited"/>
                            <div>
                                <ChoiceInput name="vacationDays" label="Limit to" value="limitTo"
                                             className="inline-other-text-box-style"/>
                                <Input name="days" className="make-text-box-smaller-style"/>
                                <Label>days</Label>
                            </div>
                        </FieldContent>
                    </Field>
                    <Field name="vacationtypes" label="Vacation Type" help="Choose all applicable"
                           optional={true} optionalLabel="Optional">
                        <FieldContent>
                            <ChoiceInput name="vacationtypes.cruise" type="checkbox" label="Cruise" value="cruise"/>
                            <ChoiceInput name="vacationtypes.hiking" type="checkbox" label="Hiking" value="hiking"/>
                        </FieldContent>
                    </Field>
                    <div/>
                </div>
            </Form>
            {/* s11:end */}
            <Snippet tag="s11" src={snippets}/>
            <Demo srcFile="/samples/src/containers/Components/Docs/form.css">
                {cssSnippet => (
                    <div>css
                    <Snippet tag="s1" src={cssSnippet}/>
                    </div>
                )}
            </Demo>
        </PanelComponent>

          <Panel>
            <Header>
              Text Area
            </Header>
            <Body>
            { /* s12:start */ }
            <Form>
              <FieldContent>
                <TextArea placeholder="Enter some text here..." style={{height: "64px"}}/>
              </FieldContent>
            </Form>
            { /* s12:end */ }
            <Snippet tag="s12" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>;

