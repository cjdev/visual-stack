import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import classNames from 'classnames';
import logoSvg from '../../src/images/ui-kit/new-cj-logo-icon.svg';
import './CJLogo.css';

const CJLogo = ({ className }) =>
  <ReactSVG
    path={logoSvg}
    className={classNames('vs-cj-logo', className)}
  />;

CJLogo.propTypes = {
  className: PropTypes.string,
};

export default CJLogo;
