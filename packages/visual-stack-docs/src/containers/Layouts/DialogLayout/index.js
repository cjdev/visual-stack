import React from 'react';
import { Button } from "@cjdev/visual-stack/lib/components/Button";
import { withRouter } from 'react-router';
import CJLogo from "@cjdev/visual-stack/lib/components/CJLogo";

import "./index.css";
import { Panel, Body } from "@cjdev/visual-stack/lib/components/Panel";
import CloseIcon from 'mdi-react/CloseIcon';
import { ChoiceInput, Field, Form, Input, Label, TextField } from "@cjdev/visual-stack/lib/components/Form";


class DialogLayoutParent extends React.Component {

  showDialogLayout() {
    this.props.router.push("/dialog-layout");
  }

  render() {
    return (
      <div>
        <Button type="solid-primary" onClick={this.showDialogLayout}>Create Something New</Button>
      </div>
    );
  }
}

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

export class DialogLayout extends React.Component {
  cancel() {
    this.props.router.push("/");
  }

  render() {
    return (
      <div>
        <div className="dialog-header">
          <div className="page-title">
            <div className="logo-container">
              <CJLogo className="vs-cj-logo" />
            </div>
            <h1 className="title">Create Program Term</h1>
            <CloseIcon className="icon-close" onClick={this.cancel}/>
          </div>
        </div>
        <div className="dialog-content">
          <Panel>
            <Body>
          <h2>I am here, in this layout</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Body>
            <Body>
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
            </Body>
          </Panel>
        </div>

        <div className="dialog-footer">
            <Button type="text" onClick={this.cancel}>Cancel</Button>
            <Button type="solid-primary" onClick={this.cancel}>Save Program Term</Button>
        </div>

      </div>
    );
  }
}

export default withRouter(DialogLayoutParent);
