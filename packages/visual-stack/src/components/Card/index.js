import React from 'react';
import './Card.css';

export default (props) => <a className="vs-card" {...props}>{props.children}</a>;
