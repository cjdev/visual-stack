import React from 'react';
import Account from 'mdi-react/AccountCircleIcon';
import Logout from 'mdi-react/LogoutIcon';
import Product from 'mdi-react/PackageVariantClosedIcon';
import SvgIcon from 'material-ui/SvgIcon';
import './style.css';

const Icon = ({ children }) =>
  <SvgIcon className="mdi-icon" width="24" height="24" viewBox="0 0 24 24">
    {children}
  </SvgIcon>;

export const BarGraphIcon = () =>
  <Icon>
    <path d="M18.3,3H5.7C4.2,3,3,4.2,3,5.7c0,0,0,0,0,0v12.6C3,19.8,4.2,21,5.7,21h12.6c1.5,0,2.7-1.2,2.7-2.7V5.7C21,4.2,19.8,3,18.3,3 z M9.2,16.5H7.5v-6.2h1.7V16.5z M12.8,16.5h-1.7v-9h1.7V16.5z M16.5,16.5h-1.7V12h1.7V16.5z" />
  </Icon>;

export const AccountIcon = Account;
export const LogoutIcon = Logout;
export const ProductIcon = Product;
