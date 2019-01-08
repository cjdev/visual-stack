import React from 'react';
import { connect } from 'react-redux';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Button } from '@cjdev/visual-stack/lib/components/Button';
import { Demo, Snippet } from '../../../components/Demo';

/* s1:start */
// import the actions, mountPoint and Modal pieces
import { openModal, closeModal } from '@cjdev/visual-stack-redux';
import { ModalMountPoint } from '@cjdev/visual-stack-redux/lib/components/Modal';
import * as M from '@cjdev/visual-stack/lib/components/Modal';
/* s1:end */

/* s2:start */
// Create the modal
const ModalDialog = ({ takeAction, closeModal }) =>
  <M.Modal>
    <M.Dialog>
      <M.Content>
        <M.Header title="Header Title"/>
        <M.Body>Header Body goes here</M.Body>
        <M.Footer>
          <Button type="primary" onClick={() => closeModal() }>Cancel</Button>
          <Button type="danger" onClick={() => { takeAction(); closeModal(); }}>Take Action</Button>
        </M.Footer>
      </M.Content>
    </M.Dialog>
  </M.Modal>;
/* s2:end */

/* s3:start */
// The openModal action takes the dialog component and its props
const ModalButton = ({ openModal, closeModal, takeAction }) =>
    <Button type="primary" onClick={() => openModal(ModalDialog, { takeAction, closeModal })}>Open Modal</Button>;

// Hook up the actions to the button and dialog
const OpenModalButton = connect(null, { openModal, closeModal })(ModalButton);
/* s3:end */

/* s6:start */
const OptionsModalDialog = ({ takeAction, closeModal }) =>
  <M.Modal onBackgroundClick={closeModal}>
    <M.Dialog>
      <M.Content>
        <M.Header title="Header Title" />
        <M.Body>Click outside the modal to close me</M.Body>
        <M.Footer>
          <Button type="primary" onClick={() => closeModal()}>Cancel</Button>
          <Button type="danger" onClick={() => { takeAction(); closeModal(); }}>Take Action</Button>
        </M.Footer>
      </M.Content>
    </M.Dialog>
  </M.Modal>;
/* s6:end */

const OptionsModalButton = ({ openModal, closeModal, takeAction }) =>
  <Button type="primary" onClick={() => openModal(OptionsModalDialog, { takeAction, closeModal })}>Open Options Modal</Button>;

const OpenOptionsModalButton = connect(null, { openModal, closeModal })(OptionsModalButton);

export default () =>
  <Demo srcFile="/samples/src/containers/Components/Docs/modal.js">
    { snippets => {
      return (
        <div>
          <Panel>
            <Header>
              Modal
            </Header>
            <Body>

              { /* s4:start */ }
              { /* Render the mount point somewhere in the page */ }
              <ModalMountPoint />
              { /* s4:end */ }

              { /* s5:start */ }
              { /* Render the button / link / etc. to launch the modal */ }
              <OpenModalButton takeAction={() => { /* console.log('action taken!'); */ }} />
              { /* s5:end */ }

              <Snippet tag="s1" src={snippets} />
              <Snippet tag="s2" src={snippets} />
              <Snippet tag="s3" src={snippets} />
              <Snippet tag="s4" src={snippets} />
              <Snippet tag="s5" src={snippets} />
            </Body>
          </Panel>
          <Panel>
            <Header>
              Modal Options
            </Header>
            <Body>
              <div>
                The Modal component can be passed an 'onBackgroundClick' prop (function) to define what should happen when a click occurs outside the Modal.
                Typically this would be used to pass in the 'closeModal' function.
              </div>
              <OpenOptionsModalButton/>
              <Snippet tag="s6" src={snippets} />

            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>;


