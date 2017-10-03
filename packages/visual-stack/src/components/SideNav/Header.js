/** @prettier */
import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ children }) => (
  <li className="sidenav-entry sidenav-header">{children}</li>
);
Header.propTypes = {
  children: PropTypes.string.isRequired,
};
