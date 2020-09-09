import React from 'react';
import { Route, withRouter } from 'react-router';

import { Button } from '@cjdev/visual-stack/lib/components/Button';
import DialogLayout from '@cjdev/visual-stack/lib/layouts/DialogLayout';
import {
  Body,
  Footer,
  Header,
  Panel,
} from '@cjdev/visual-stack/lib/components/Panel';
import {
  ChoiceInput,
  Field,
  Form,
  Input,
  Label,
  TextField,
} from '@cjdev/visual-stack/lib/components/Form';
import { Demo, Snippet } from '../../../components/Demo';
import CJLogo from '@cjdev/visual-stack/lib/components/CJLogo';
import './index.css';
import {
  PageHeader,
  PageTitle,
} from '@cjdev/visual-stack/lib/components/PageHeader';
import PageContent from '@cjdev/visual-stack/lib/components/PageContent';

class DialogLayoutParent extends React.Component {
  render() {
    return (
      <div>
        <Demo srcFile="/samples/src/containers/Layouts/DialogLayout/index.js">
          {snippets => (
            <div>
              <PageHeader>
                <PageTitle>Dialog Layout</PageTitle>
              </PageHeader>
              <PageContent>
                <Panel>
                  <Header>Full page DialogLayout Demo</Header>
                  <Body>
                    <Button
                      type="solid-primary"
                      onClick={() => this.props.router.push('/dialogLayout')}
                    >
                      Show the DialogLayout
                    </Button>
                    <p>
                      You will need to add a route not wrapped by
                      ApplicationLayout. Something like:
                      <Snippet tag="s3" src={snippets} />
                      You can also use this DialogLayout like an
                      ApplicationLayout to wrap your forms in a generic way
                    </p>
                    <Snippet tag="s1" src={snippets} />
                  </Body>
                </Panel>
                <Panel>
                  <Header>Full page wide DialogLayout Demo</Header>
                  <Body>
                    <Button
                      type="solid-primary"
                      onClick={() =>
                        this.props.router.push('/wideDialogLayout')
                      }
                    >
                      Show the DialogLayout with wide width
                    </Button>
                    <p>
                      Sometimes you want the DialogLayout to take the full width
                      of the page. You can pass the contentSize property with
                      value 'wide' to get a full width DialogLayout.
                    </p>
                    <Snippet tag="s6" src={snippets} />
                  </Body>
                </Panel>
                <Panel>
                  <Header>Submitting page DialogLayout Demo</Header>
                  <Body>
                    <Button
                      type="solid-primary"
                      onClick={() =>
                        this.props.router.push('/submittingDialogLayout')
                      }
                    >
                      Show the submitting DialogLayout
                    </Button>
                    <p>
                      When your form is submitting, you can pass a
                      showSubmitButtonSpinner and disableSubmit prop
                    </p>
                    <Snippet tag="s4" src={snippets} />
                  </Body>
                </Panel>
                <Panel>
                  <Header>DialogLayout with no submit/cancel buttons</Header>
                  <Body>
                    <Button
                      type="solid-primary"
                      onClick={() =>
                        this.props.router.push('/noButtonDialogLayout')
                      }
                    >
                      Show the DialogLayout with no submit/cancel button, but
                      instead an X
                    </Button>
                    <p>
                      On readonly views, you might not have an action you want
                      to perform. If you don't pass text for the submit and
                      cancel buttons, they won't render. If neither button is
                      showing, an X will appear instead that will take the
                      behavior of the cancel button.
                    </p>
                    <Snippet tag="s5" src={snippets} />
                  </Body>
                </Panel>
                <Panel>
                  <Header>Dialog content</Header>
                  <Body>
                    <Snippet tag="s2" src={snippets} />
                  </Body>
                  <Demo srcFile="/samples/src/containers/Layouts/DialogLayout/index.css">
                    {cssSnippet => (
                      <Body>
                        <div>css</div>
                        <Snippet tag="s1" src={cssSnippet} />
                      </Body>
                    )}
                  </Demo>
                </Panel>
              </PageContent>
            </div>
          )}
        </Demo>
      </div>
    );
  }
}

/* s1:start */
export const DialogLayoutDemo = ({ router }) => (
  <div>
    <DialogLayout
      title={'Create Program Term'}
      submitButtonText={'Save Program Terms'}
      cancelButtonText={'cancel'}
      onCancel={() => router.push('/layouts/dialogLayout')}
      onSubmit={() => {
        alert('Success!'); // eslint-disable-line no-alert
        router.push('/layouts/dialogLayout');
      }}
      logo={<CJLogo />}
    >
      <DemoForm />
    </DialogLayout>
  </div>
);
/* s1:end */

/* s4:start */
export const SubmittingDialogLayoutDemo = ({ router }) => (
  <div>
    <DialogLayout
      title={'Create Program Term'}
      submitButtonText={'Save Program Terms'}
      cancelButtonText={'cancel'}
      onCancel={() => router.push('/layouts/dialogLayout')}
      disableSubmit={true}
      showSubmitButtonSpinner={true}
      onSubmit={() => {
        alert('Success!'); // eslint-disable-line no-alert
        router.push('/layouts/dialogLayout');
      }}
      logo={<CJLogo />}
    >
      <DemoForm />
    </DialogLayout>
  </div>
);
/* s4:end */

/* s5:start */
export const NoButtonDialogLayoutDemo = ({ router }) => (
  <div>
    <DialogLayout
      title={'Create Program Term'}
      onCancel={() => router.push('/layouts/dialogLayout')}
      logo={<CJLogo />}
    >
      <Panel>
        <Header>Panel Header</Header>
        <Body>This is the Panel Body.</Body>
      </Panel>
    </DialogLayout>
  </div>
);
/* s5:end */

/* s6:start */
export const WideDialogLayoutDemo = ({ router }) => (
  <div>
    <DialogLayout
      title={'Create Program Term'}
      submitButtonText={'Save Program Terms'}
      cancelButtonText={'cancel'}
      onCancel={() => router.push('/layouts/dialogLayout')}
      onSubmit={() => {
        alert('Success!'); // eslint-disable-line no-alert
        router.push('/layouts/dialogLayout');
      }}
      logo={<CJLogo />}
      contentSize={'wide'}
    >
      <DemoForm />
    </DialogLayout>
  </div>
);
/* s6:end */

const NotRenderedComponent = () => (
  /* s3:start */
  <>
    <Route path="/dialogLayout" component={DialogLayoutDemo} />
    <Route
      path="/submittingDialogLayout"
      component={SubmittingDialogLayoutDemo}
    />
  </>
  /* s3:end */
);

// Stop Travis from complaining...
NotRenderedComponent.propTypes = {};

/* s2:start */
export const DemoForm = () => (
  <Form>
    <Panel>
      <Body paddingSize="wide">
        <h3>Program Details</h3>
        <TextField
          name="name"
          label="Enter Name"
          help="Enter first name and last name"
          placeholder="First Last"
        />
        <TextField
          name="country"
          label="Country"
          optional={true}
          optionalLabel="Optional"
          value="Degobah"
          error="Enter valid country name on planet Earth"
          help="Enter Country"
        />
        <div className="grid-it-up">
          <Field label="# of vacation days" help="Enter vacation rules">
            <ChoiceInput
              name="vacationDays"
              label="Unlimited"
              value="unlimited"
            />
            <div className="inline-other-text-box-style">
              <ChoiceInput
                name="vacationDays"
                label="Limit to"
                value="limitTo"
                className="inline-other-text-box-style"
              />
              <Input name="days" className="make-text-box-smaller-style" />
              <Label>days</Label>
            </div>
          </Field>
          <Field
            name="vacationtypes"
            label="Vacation Type"
            help="Choose all applicable"
            optional={true}
            optionalLabel="Optional"
          >
            <ChoiceInput
              name="vacationtypes.cruise"
              type="checkbox"
              label="Cruise"
              value="cruise"
            />
            <ChoiceInput
              name="vacationtypes.hiking"
              type="checkbox"
              label="Hiking"
              value="hiking"
            />
          </Field>
          <div />
        </div>
      </Body>
    </Panel>
    <Panel>
      <Body paddingSize="wide">
        <h3>Action Terms</h3>
        <TextField
          name="name"
          label="Enter Name"
          help="Enter first name and last name"
          placeholder="First Last"
        />
        <TextField
          name="country"
          label="Country"
          optional={true}
          optionalLabel="Optional"
          value="Degobah"
          error="Enter valid country name on planet Earth"
          help="Enter Country"
        />
      </Body>
      <Footer>
        <div className="dialog-actions">
          <Button type="text">Cancel</Button>
          <Button type="solid-primary">Add</Button>
        </div>
      </Footer>
    </Panel>
  </Form>
);

export const DemoContent = () => (
  <Body>
    <h2>I am here, in this layout</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </Body>
);
/* s2:end */

export default withRouter(DialogLayoutParent);
