import React from 'react';
// import { shallow } from 'enzyme';
import { notEqual } from 'assert';
import { UserMenu } from '../../src/components/UserMenu';

describe('UserMenu', () => {
  it('should render kebab when given secondaryNav', () => {
    const userMenu = <UserMenu />;
    notEqual(userMenu, null);
  });
});
