import React from 'react';
import {Button} from '../../components/Button';
import CloseIcon from 'mdi-react/CloseIcon';

import './index.css';
import Spinner from '../../components/Spinner';

function getSubmitButtonText(submitButtonText, showSubmitButtonSpinner) {
  if (showSubmitButtonSpinner) {
    return (
      <React.Fragment>
        <Spinner size="button" /> {submitButtonText}
      </React.Fragment>
    );
  }
  return submitButtonText;
}

export const DialogLayout = ({
                               className,
                               title,
                               cancelButtonText,
                               submitButtonText,
                               disableSubmit,
                               showSubmitButtonSpinner,
                               logo,
                               onCancel,
                               onSubmit,
                               children,
                             }) => (
  <div className={`vs-dialog-layout ${className ? className : ''}`}>
    <div className="vs-dialog-layout-header">
      <div className="vs-dialog-layout-page-title">
        <div className="vs-dialog-layout-logo-container">
          <span className="vs-cj-logo">{logo}</span>
        </div>
        <h1 className="vs-dialog-layout-title">{title}</h1>
        <CloseIcon className="vs-dialog-layout-icon-close" onClick={onCancel}/>
      </div>
    </div>
    <div className="vs-dialog-layout-content">{children}</div>
    <div className="vs-dialog-layout-footer">

      {cancelButtonText &&
      <Button id="vs-dialog-layout-cancel" type="text" onClick={onCancel}>
        {cancelButtonText}
      </Button>}

      {submitButtonText &&
      <Button
        id="vs-dialog-layout-submit"
        type="solid-primary"
        disabled={disableSubmit === true}
        onClick={onSubmit}>

        {getSubmitButtonText(submitButtonText, showSubmitButtonSpinner)}
      </Button>}

    </div>
  </div>
);

export default DialogLayout;
