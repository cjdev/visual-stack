import React from 'react';
import {Route, withRouter} from 'react-router';

import { Button } from "@cjdev/visual-stack/lib/components/Button";
import DialogLayout from '@cjdev/visual-stack/lib/layouts/DialogLayout';
import { Body, Header, Panel } from "@cjdev/visual-stack/lib/components/Panel";
import {
    ChoiceInput,
    Field,
    Form,
    Input,
    Label,
    TextField
} from "@cjdev/visual-stack/lib/components/Form";
import {Demo, Snippet} from "../../../components/Demo";
import CJLogo from '@cjdev/visual-stack/lib/components/CJLogo';

class DialogLayoutParent extends React.Component {
  render() {
    return (
        <Demo srcFile="/samples/src/containers/Layouts/DialogLayout/index.js">
            {snippets => (
                <div>
                    <Panel>
                        <Header>
                            Full page DialogLayout Demo
                        </Header>
                        <Body>
                        <Button type="solid-primary" onClick={() => this.props.router.push("/dialogLayout")}>Show the DialogLayout</Button>
                        <p>
                            You will need to add a route not wrapped by ApplicationLayout. Something like:
                            <Snippet tag="s3" src={snippets} />
                            You can also use this DialogLayout like an ApplicationLayout to wrap your forms in a generic way
                        </p>
                        <Snippet tag="s1" src={snippets} />
                        </Body>
                    </Panel>
                    <Panel>
                        <Header>
                            Dialog content example
                        </Header>
                        <Body>
                        <Snippet tag="s2" src={snippets}/>
                        </Body>
                    </Panel>

                </div>
            )}
        </Demo>
    );
  }
}

/* s1:start */
export class DialogLayoutDemo extends React.Component {
    render() {
        return (
            <div>
                <DialogLayout title={"Create Program Term"}
                              submitButtonText={"Save Program Terms"}
                              cancelButtonText={"cancel"}
                              onCancel={() => this.props.router.push("/layouts/dialogLayout")}
                              logo={<CJLogo/>}>
                    <Panel>
                      <DemoContent/>
                    </Panel>
                    <Panel>
                      <DemoForm/>
                    </Panel>
                </DialogLayout>
            </div>
        );
    }
}
/* s1:end */

const NotRenderedComponent = () => (
    <div>
        { /* s3:start */ }
        <Route path="/dialogLayout" component={DialogLayoutDemo}/>
        { /* s3:end */ }
    </div>
);
// Stop Travis from complaining...
NotRenderedComponent.propTypes = {
};

/* s2:start */
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

export const DemoForm = () => (
    <Body>
        <Form>
            <TextField name="name" label="Enter Name" help="Enter first name and last name"
                       placeholder="First Last"/>
            <TextField name="country" label="Country" optional={true} optionalLabel="Optional"
                       value="Degobah" error="Enter valid country name on planet Earth" help="Enter Country"/>
            <div style={gridItUp}>
                <Field label="# of vacation days" help="Enter vacation rules">
                    <ChoiceInput name="vacationDays" label="Unlimited" value="unlimited"/>
                    <div style={inlineOtherTextBoxStyle}>
                        <ChoiceInput name="vacationDays" label="Limit to" value="limitTo"
                                     style={inlineOtherTextBoxStyle}/>
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
);

export const DemoContent = () => (
    <Body>
        <h2>I am here, in this layout</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.</p>
    </Body>
);
/* s2:end */

export default withRouter(DialogLayoutParent);
