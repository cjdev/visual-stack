import React from 'react';
import ReactSVG from 'react-svg';
import classNames from 'classnames';
import logoSvg from '../../src/images/ui-kit/new-cj-logo-icon.svg';
import './CJLogo.css';

const CJLogo = ({ className }) =>
  <ReactSVG
    path={logoSvg}
    className={classNames('cj-logo', className)}
  />;

CJLogo.propTypes = {
  className: React.PropTypes.string,
};

export default CJLogo;
