# CJ Affiliate Visual Stack

[![Build Status](https://travis-ci.org/cjdev/visual-stack.svg?branch=master)](https://travis-ci.org/cjdev/visual-stack)

This package includes a set of React components with a consistent visual style that can be consumed in other React applications. The components are unbiased and generally stateless, composed primarily of visual styles rather than functionality.

## Installation

```
$ npm install --save @cjdev/visual-stack bootstrap-loader bootstrap-sass
```

## Usage

This package includes both a set of components and a global stylesheet composed of global styles. To include the global styles, require the `@cjdev/visual-stack/lib/global` module, or add it as a webpack entry point or similar.

The individual components are provided under the `@cjdev/visual-stack/lib/components/` path. It may be worthwhile to add a shorter alias for this require path to keep imports short.


### Example

```js
import React from 'react';
import ReactDOM from 'react-dom';

import '@cjdev/visual-stack/lib/global';

import { Button } from '@cjdev/visual-stack/lib/components/Button';
import { Panel, Body } from '@cjdev/visual-stack/lib/components/Panel';

ReactDOM.render(
  <Panel>
    <Body>
      <h1>Hello, world!</h1>
      <Button type="primary" onClick={() => console.log('clicked!')}>Click Me</Button>
    </Body>
  </Panel>,
  document.getElementById('application')
);
```

# Version 1.0 Breaking Changes
Various components have been updated to increase their functionality, however upgrading to 1.0 will break existing layout and usage of certain components.
### Components
###### SideNav
* Link Names must now be wrapped in ```<span>``` tags to give them the correct styling
* SideNavIcon can now take an extra prop 'letter', which will create an Icon with the letter passed into it

```js
import { SideNav, Link as SideNavLink, LinkGroup, SideNavIcon } from '@cjdev/visual-stack-redux/lib/components/SideNav';

ReactDOM.render(
    <SideNav>
        <LinkGroup label="Something" icon={<SideNavIcon type="square" />} >
            <SideNavLink>
                <WhateverRoutingWrapperYouWantToUse>
                    <SideNavIcon type="circle" />
                    <span>Link Name</span> // Link Names need to be wrapped in a span to
                                           // give it the correct styling
                </WhateverRoutingWrapperYouWantToUse>
            </SideNavLink>
            <SideNavLink>
                <WhateverRoutingWrapperYouWantToUse>
                    <span>Link Name</span> // If no Icon is given, the default will be the
                                           // first letter of the link name will be used to
                                           // make an icon
                </WhateverRoutingWrapperYouWantToUse>
            </SideNavLink>
        </LinkGroup>
        <SideNavLink>
            <WhateverRoutingWrapperYouWantToUse>
                <SideNavIcon type="circle" />
                <span>Link Name</span>
            </WhateverRoutingWrapperYouWantToUse>
        </SideNavLink>
    </SideNav>
)
```

###### Application Layout
* *Import for this presentational component in visual-stack has changed*, it no longer is the default export, but instead named. If things are borked, look there first.
* Now has a redux component, which should be used if with the Redux SideNav. This will allow for your page container to resize correctly when the SideNav is collapsed.
* The Redux Wrapper for this component is a *default export* not named like the presentational component.

```js
// example code below is for use of the redux Applcation Layout (default export),
// which is the suggested use if redux SideNav is also used
import Layout from '@cjdev/visual-stack-redux/lib/layouts/ApplicationLayout';
import { SideNav } from '@cjdev/visual-stack-redux/lib/components/SideNav';

const AppLayout = ({children}) =>
    <Layout
        topNav={<TopNav appName="My Awesome App" logo={<CJLogo/>} />}
        sideNav={<SideNav></SideNav>}
        >
        {children}
    </Layout>
```


## Contributing

Initial scripts to start:
`npm install`
`npm run bootstrap`

To run Visual Stack Documentation site:

`cd packages/visual-stack-docs/`
`npm run docs`

A new server should run and open the site

Watch scripts for visual-stack and visual-stack-redux
- While developing, these scripts will automatically build and update your code on the visual-stack-docs site

`cd packages/visual-stack/`
`npm run watch`

`cd packages/visual-stack-redux/`
`npm run watch`

Publishing

To publish, you must have lerna installed globally
`npm install lerna -g`

Publish steps:
- Update CHANGELOG.md with notes and version number
- Push/merge into master
- `lerna publish`
