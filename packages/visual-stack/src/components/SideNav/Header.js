/** @prettier */
import React, { PropTypes } from 'react';

export const Header = ({ children }) => (
  <li className="sidenav-entry sidenav-header">{children}</li>
);
Header.propTypes = {
  children: PropTypes.string.isRequired,
};
