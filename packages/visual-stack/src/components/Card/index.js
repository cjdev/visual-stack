import React from 'react';
import './Card.css';

import * as R from 'ramda';

const isPropEmpty = (prop) => (R.isNil(prop) || R.isEmpty(prop));

export default (props) => (isPropEmpty(props.href)) ? 
  <div className="vs-card" {...props}>{props.children}</div> :
  <a className="vs-card-clickable" {...props}>{props.children}</a>;
