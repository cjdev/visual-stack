import React from 'react';
import './style.css';
import SvgIcon from 'material-ui/SvgIcon';

import Account from 'mdi-react/AccountCircleIcon';
import Logout from 'mdi-react/LogoutIcon';
import Product from 'mdi-react/PackageVariantClosedIcon';

export const AccountIcon = Account;
export const LogoutIcon = Logout;
export const ProductIcon = Product;

const Icon = ({ children }) =>
  <SvgIcon className="mdi-icon" height="24" viewBox="0 0 24 24">
    {children}
  </SvgIcon>;

export const BarGraphIcon = props =>
  <Icon {...props} >
    <path d="M18.3,3H5.7C4.2,3,3,4.2,3,5.7c0,0,0,0,0,0v12.6C3,19.8,4.2,21,5.7,21h12.6c1.5,0,2.7-1.2,2.7-2.7V5.7C21,4.2,19.8,3,18.3,3 z M9.2,16.5H7.5v-6.2h1.7V16.5z M12.8,16.5h-1.7v-9h1.7V16.5z M16.5,16.5h-1.7V12h1.7V16.5z" />
  </Icon>;

export const PercentIcon = () =>
    <Icon>
      <path d="M17.6,12.9c2.1,0,3.7,1.6,3.7,3.6s-1.7,3.6-3.7,3.6s-3.7-1.6-3.7-3.6S15.5,12.9,17.6,12.9z M6.4,3.9
        c2.1,0,3.7,1.6,3.7,3.6s-1.7,3.6-3.7,3.6S2.7,9.5,2.7,7.5S4.3,3.9,6.4,3.9z M19.5,4.8L18.7,4L4.8,19.2L5.7,20L19.5,4.8z"/>
    </Icon>;

export const CompareIcon = () =>
    <Icon>
      <g transform="translate(-291.000000, -463.000000)">
        <path d="M301,474l4,4l-4,4v-3h-7v-2h7V474L301,474z M301,472l4-4v3h7v2h-7v3L301,472L301,472z"/>
      </g>
    </Icon>;

export const CountedIcon = ({ className }) => {
  return (
    <Icon>
      <path className={className} d="M17.5,21.2c2,0,3.7-1.7,3.7-3.7s-1.6-3.7-3.7-3.7s-3.7,1.7-3.7,3.7S15.5,21.2,17.5,21.2z M6.5,21.2
        c2,0,3.7-1.7,3.7-3.7s-1.6-3.7-3.7-3.7s-3.7,1.7-3.7,3.7S4.4,21.2,6.5,21.2z M6.5,10.2c2,0,3.7-1.7,3.7-3.7S8.5,2.8,6.5,2.8
        S2.8,4.4,2.8,6.5S4.4,10.2,6.5,10.2z"/>
      <path className={className} d="M17.9,11.5h-2.2V8.2h-3.3V6.1h3.3V2.8h2.2v3.3h3.3v2.2h-3.3V11.5z"/>
    </Icon>
  );
};
