import React from 'react';
import './style.css';
import SvgIcon from '@material-ui/core/SvgIcon';

import Account from 'mdi-react/AccountCircleIcon';
import Logout from 'mdi-react/LogoutIcon';
import Settings from 'mdi-react/SettingsIcon';
import Product from 'mdi-react/PackageVariantClosedIcon';

export const AccountIcon = Account;
export const LogoutIcon = Logout;
export const SettingsIcon = Settings;
export const ProductIcon = Product;

const Icon = ({ children }) =>
  <SvgIcon className="mdi-icon" width="24" height="24" viewBox="0 0 24 24">
    {children}
  </SvgIcon>;

export const BarGraphIcon = props =>
  <Icon {...props} >
    <path d="M18.3,3H5.7C4.2,3,3,4.2,3,5.7c0,0,0,0,0,0v12.6C3,19.8,4.2,21,5.7,21h12.6c1.5,0,2.7-1.2,2.7-2.7V5.7C21,4.2,19.8,3,18.3,3 z M9.2,16.5H7.5v-6.2h1.7V16.5z M12.8,16.5h-1.7v-9h1.7V16.5z M16.5,16.5h-1.7V12h1.7V16.5z" />
  </Icon>;

export const PercentIcon = () =>
    <Icon>
      <path d="M17.6,12.9c2.1,0,3.7,1.6,3.7,3.6s-1.7,3.6-3.7,3.6s-3.7-1.6-3.7-3.6S15.5,12.9,17.6,12.9z M6.4,3.9 c2.1,0,3.7,1.6,3.7,3.6s-1.7,3.6-3.7,3.6S2.7,9.5,2.7,7.5S4.3,3.9,6.4,3.9z M19.5,4.8L18.7,4L4.8,19.2L5.7,20L19.5,4.8z"/>
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
      <path className={className} d="M17.5,21.2c2,0,3.7-1.7,3.7-3.7s-1.6-3.7-3.7-3.7s-3.7,1.7-3.7,3.7S15.5,21.2,17.5,21.2z M6.5,21.2 c2,0,3.7-1.7,3.7-3.7s-1.6-3.7-3.7-3.7s-3.7,1.7-3.7,3.7S4.4,21.2,6.5,21.2z M6.5,10.2c2,0,3.7-1.7,3.7-3.7S8.5,2.8,6.5,2.8 S2.8,4.4,2.8,6.5S4.4,10.2,6.5,10.2z"/>
      <path className={className} d="M17.9,11.5h-2.2V8.2h-3.3V6.1h3.3V2.8h2.2v3.3h3.3v2.2h-3.3V11.5z"/>
    </Icon>
  );
};

export const AppIcon = () =>
	<Icon>
		<path fill="#ffffff" d="M12.9,1.2l8,4.1C21.6,5.6,22,6.4,22,7.1v9.7c0,0.8-0.4,1.5-1.1,1.8l-8,4.1c-0.6,0.3-1.2,0.3-1.8,0l-8-4.1 c-0.7-0.3-1.1-1-1.1-1.7V7.1c0-0.8,0.4-1.5,1.1-1.8l8-4.1C11.7,0.9,12.3,0.9,12.9,1.2z"/>
	<path fill="#254A5D" d="M12,24c-0.5,0-0.9-0.1-1.4-0.3l-8-4.1C1.6,19.1,1,18,1,16.9V7.1C1,6,1.6,4.9,2.7,4.4l8-4.1 c0.8-0.4,1.8-0.4,2.7,0l0,0l8,4.1C22.4,4.9,23,6,23,7.1v9.7c0,1.2-0.6,2.2-1.7,2.7l-8,4.1C12.9,23.9,12.5,24,12,24z M12,2 c-0.1,0-0.3,0-0.4,0.1l-8,4.1C3.2,6.4,3,6.7,3,7.1v9.7c0,0.4,0.2,0.8,0.6,1l8,4.1c0.3,0.1,0.6,0.1,0.9,0l8-4.1 c0.3-0.2,0.6-0.5,0.6-0.9V7.1c0-0.4-0.2-0.8-0.6-0.9l-8-4.1C12.3,2,12.1,2,12,2z"/>
	<path fill="#49C5B1" d="M19.2,7l-6.3-3.2l0,0c-0.8-0.4-1-0.4-1.9,0L4.8,7C4.6,7.1,4.5,7.3,4.5,7.4s0.1,0.4,0.3,0.4 c2.5,1.4,5.5,3,6.8,3.5v0.1V20c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-8.5v-0.1c1.2-0.5,4.2-2.1,6.8-3.5c0.2-0.1,0.3-0.3,0.3-0.4 S19.4,7.1,19.2,7z"/>
	</Icon>;

export const CodeIcon = () =>
	<Icon>
		<path className="code-chevron-left" fill="#49C5B1" d="M9,17c-0.2,0-0.4-0.1-0.6-0.2l-6-4C2.2,12.6,2,12.3,2,12s0.2-0.6,0.4-0.8l6-4C8.9,6.9,9.5,7,9.8,7.4 c0.3,0.5,0.2,1.1-0.3,1.4L4.8,12l4.8,3.2c0.5,0.3,0.6,0.9,0.3,1.4C9.6,16.8,9.3,17,9,17z"/>
		<path className="code-chevron-right" fill="#254A5D" d="M15,17c-0.3,0-0.6-0.2-0.8-0.4c-0.3-0.5-0.2-1.1,0.3-1.4l4.8-3.2l-4.8-3.2c-0.5-0.3-0.6-0.9-0.3-1.4 c0.3-0.5,0.9-0.6,1.4-0.3l6,4c0.3,0.2,0.4,0.5,0.4,0.8s-0.2,0.6-0.4,0.8l-6,4C15.4,16.9,15.2,17,15,17z"/>
	</Icon>;

export const DocIcon = () =>
	<Icon>
		<path className="doc-bg" fill="#FFFFFF" d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z"/>
		<path className="doc-outline" fill="#254A5D" d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M18,20H6V4h7v5h5V20z"/>
		<path className="doc-text" fill="#49C5B1" d="M15,16H9c-0.6,0-1,0.4-1,1s0.4,1,1,1h6c0.6,0,1-0.4,1-1S15.6,16,15,16z"/>
		<path className="doc-text" fill="#49C5B1" d="M9,14h6c0.6,0,1-0.4,1-1s-0.4-1-1-1H9c-0.6,0-1,0.4-1,1S8.4,14,9,14z"/>
	</Icon>;

export const TokenIcon = () =>
	<Icon>
		<path className="icon-token-outline" fill="#254A5D" d="M12,23.5C5.7,23.5,0.5,18.3,0.5,12C0.5,5.7,5.7,0.5,12,0.5c6.3,0,11.5,5.2,11.5,11.5 C23.5,18.3,18.3,23.5,12,23.5z M12,2.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5s9.5-4.3,9.5-9.5S17.2,2.5,12,2.5z"/>
		<path className="icon-token-key" fill="#49C5B1" d="M12.3,10.8C11.8,9.5,10.5,8.5,9,8.5c-1.9,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5c1.5,0,2.8-1,3.3-2.3h2.5 v2.3h2.3v-2.3h1.2v-2.3H12.3z M9,13.2c-0.6,0-1.2-0.5-1.2-1.2s0.5-1.2,1.2-1.2s1.2,0.5,1.2,1.2S9.6,13.2,9,13.2z"/>
	</Icon>;

export const LegacyIcon = () =>
	<Icon>
		<path className="archive-bg" fill="#ffffff" points="3,4.5 3,8.5 5,8.5 5,19.5 19,19.5 19,8.5 21,8.5 21,4.5 "/>
		<path className="archive-outline" fill="#254A5D" d="M21,3.5H3c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h1v10c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-10h1 c0.6,0,1-0.4,1-1v-4C22,3.9,21.6,3.5,21,3.5z M18,18.5H6v-9h12V18.5z M20,7.5H4v-2h16V7.5z"/>
		<path className="archive-handle" fill="#49C5B1" d="M14,12.5h-4c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1S14.6,12.5,14,12.5z"/>
	</Icon>;
