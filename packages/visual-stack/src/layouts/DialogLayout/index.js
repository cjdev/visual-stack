import React from 'react';
import { Button } from "../../components/Button";
import CloseIcon from 'mdi-react/CloseIcon';

import "./index.css";

export const DialogLayout = ({className, title, cancelButtonText, submitButtonText, onCancel, onSubmit, logo, children}) =>(
    <div className={`vs-dialog-layout ${className ? className : ''}`}>
        <div className="vs-dialog-layout-header">
            <div className="vs-dialog-layout-page-title">
                <div className="vs-dialog-layout-logo-container">
                    <span className="vs-cj-logo">
                        {logo}
                    </span>
                </div>
                <h1 className="vs-dialog-layout-title">{title}</h1>
                <CloseIcon className="vs-dialog-layout-icon-close" onClick={onCancel}/>
            </div>
        </div>
        <div className="vs-dialog-layout-content">
              {children}
        </div>
        <div className="vs-dialog-layout-footer">
            <Button id="vs-dialog-layout-cancel" type="text" onClick={onCancel}>{cancelButtonText}</Button>
            <Button id="vs-dialog-layout-submit" type="solid-primary" onClick={onSubmit}>{submitButtonText}</Button>
        </div>
    </div>
);

export default DialogLayout;
