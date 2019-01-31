import React from 'react';
import { Button } from "../../components/Button";
import { Panel } from "../../components/Panel";
import CloseIcon from 'mdi-react/CloseIcon';

import "./index.css";

export const DialogLayout = ({title, cancelButtonText, submitButtonText, onCancel, onSubmit, Logo, children}) =>(
    <div>
        <div className="dialog-header">
            <div className="page-title">
                <div className="logo-container">
                    <Logo className="vs-cj-logo" />
                </div>
                <h1 className="title">{title}</h1>
                <CloseIcon className="icon-close" onClick={onCancel}/>
            </div>
        </div>
        <div className="dialog-content">
            <Panel>
                {children}
            </Panel>
        </div>
        <div className="dialog-footer">
            <Button type="text" onClick={onCancel}>{cancelButtonText}</Button>
            <Button type="solid-primary" onClick={onSubmit}>{submitButtonText}</Button>
        </div>
    </div>
);

export default DialogLayout;
