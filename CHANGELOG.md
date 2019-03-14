## Upcoming
#### Upgrades
- New text-link button type
#### New components
- Added Select and SelectField components

# 3.5.0 (Mar 13, 2019)
#### Upgrades
- React and ReactDOM upgraded to v16
- Enzyme React adapter upgraded to v16
- Jest upgraded to v24.3.0
- Ramda upgraded to v0.26
#### New Components
- Added CollapsiblePanel component
- Added TextArea component

# 3.4.2 (Feb 21, 2019)
## Updated styling - z-index issues and more bottom margin on Field
- Style changes for form Fields
- Add z-index for DialogLayout components
- Add disableSubmit prop on DialogLayout

# 3.4.1 (Feb 14, 2019)
## change styles for field components
- Add fontWeight for FieldContent
- Add paddingSize for Panel
- Add media based width for FieldContent

# 3.4.0 (Feb 8, 2019)
## Add components
- Add form field components
- Add dialog layout component

# 3.3.0 (Feb 4, 2019)
## Styling Changes
- broke the dependency on bootstrap node module
- update font weights

## Component Updates
- add id prop to SlidingPanelDropdown

# 3.2.0 (Jan 31, 2019)
## Styling Changes
- UserMenu places LogoutLink in last position
- Updated layout metrics

## Component Updates
- Modal accepts onBackgroundClick prop

# 3.1.0 (Nov 30, 2018)
## Styling Changes
- Updated Button UI

## Component Update
- Added homeLink prop to SideNav that defaults to /

# 3.0.4 (Nov 16, 2018)
## New Component 
- Added Card Component

# 3.0.3 (Nov 14, 2018)
## Bug Fixes
- Fixed issue where if multiple pages have active sliding panels, they stay active on page load instead of toggling. 

# 3.0.2 (Nov 13, 2018)
## Icon Updates
- Added an issue icon

# 3.0.1 (Nov 2, 2018)
## Styling Changes  
- Update sliding panel css

# 3.0.0 (Oct 29, 2018)
## Styling Changes
- Updated sidenav styles.
- Updated topnav styles.
- Forced all Areas to use CJTeal.  

# 2.7.6 (Oct 1, 2018)
## Bug Fixes
- Fixed pixel width issue on right side of application.

# 2.7.5 (Sept 28, 2018)
## Bug Fixes
- Updated Aapplication Layout so when Sliding panel is displayed it doesn't collapse the header.

# 2.7.4 (Sept 20, 2018)
## Upgrades 
- Upgraded material-ui so build no longer breaks.

# 2.7.3 (Aug 13, 2018)
## Bug Fixes
- Fix css styling for sidenav toggle.

# 2.7.2 (Aug 9, 2018)
- Css fix for page content so that header now stacks on top of page content.
- Added package-lock.json

# 2.7.1 (Aug 1, 2018)
- Bug fix for form component which was incorrectly name-spacing bootstrap css.
- Added demo for form component in visual-stack docs site

# 2.7.0 (July 31, 2018)
- Reverted css changes that were made in the incorrect package.
- Namespaced css in visual-stack components.

# 2.6.0 (July 19, 2018)
- Version bump
- Fixed linting errors

# 2.5.4 (July 18, 2018)

## Bug Fixes
- fix ToggleIcon redux wrapper

# 2.5.3 (July 18, 2018)

## Bug Fixes
- add props to allow overrides of hard-coded labels

# 2.5.2 (June 14, 2018)

## CSS Updates
- CSS updates to SideNav and PageHeader

# 2.5.1 (March 13, 2018)

## New Feature
- Standard exports for TabLabelContent / TabContent

# 2.5.0 (March 12, 2018)

## New Feature
- Created and added TabLayout Component
  - Takes any number of Tab child Components.
  - Styling is minimal to allow flexibility.
  - Label and Content of component can take any type of Component.
  - TabLayout also allows for fixed position header.

# 2.4.1 (February 15, 2018)

## Bug Fixes
- Fix issue with last elements in side nav being hidden in long lists

# 2.4.0 (January 19, 2018)

## New Feature
- Table improvements
  - All components accept a className prop
  - All components accept and forward unhandled props to the underlying React component
  - Adds right, center, and nowrap shorthand props to Td and Th
  - Removes the TdRight component in favor of <Td right>
  - Renames all CSS classes with a vs- prefix
  - Expands the documentation to explain the changes

# 2.3.0 (January 2, 2018)

## New Feature
- Added UserMenuLink component for the UserMenu.

# 2.2.4 (November 20, 2017)

## Styling Change
- Localized H1,Ul,Li css from base

# 2.2.3 (November 17, 2017)

## Styling Changed
- Updated Sliding Panel button styling

## Bug Fixes
- Fixed sliding panel height when expanded dropdowns are more than the height of the page

# 2.2.2 (November 14, 2017)

## Styling Changed
- Updated Sliding Panel width

## Bug Fixes
- Fixed checkbox sizes in MultiSelectFilter

# 2.2.1 (November 9, 2017)

## Bug Fixes
- Updated Sliding Panel redux component so it can be rendered anywhere, and the Application Layout is only subscribed to its state.

# 2.2.0 (November 9, 2017)

## Build Changes
- Upgraded to Webpack 3

## Style Changes
- Updated Sliding Panel redux component to push application content to
the side when expanded. Presentational Sliding Panel functionality is still
the same.

# 2.1.3 (October 23, 2017)

## Bug Fixes
- Fixed SideNav to handle use case were no UserMenu is passed in.

# 2.1.2 (October 23, 2017)

## Styling Updates
- Updated styling for Sliding Panel.
- Updated UserMenu to get UserIcon color from SideNav.

# 2.1.1 (October 18, 2017)

## New Features
- Added simple Table component.

# 2.1.0 (October 9, 2017)

## New Features
- Migrate from React.PropTypes to separate prop-types lib
- Added compare Icon

## Styling Updates
- Update styling for SlidingPanel not that TopNav is gone
- Update SideNav colors from grays to blackish-blues
- Update CJ Logo, removing trademark

# 2.0.0 (October 2, 2017)

## Breaking Changes
- Application Layout no longer accepts TopNav and related components.
- TopNav component removed.

## New Features
- UserMenu refactored to work within SideNav component.
- SideNav documentation added to doc site.
- Icon documentation added to doc site.
- `npm run watch` command now starts with a `npm run build`.

## Bug Fixes
- Fix horizontal overflow issue in Application Layout.

# 1.2.3 (September 22, 2017)

## Bug Fixes

- Adjusted Sliding Panel top height.
- Adjusted Secondary Header top height.

# 1.2.2 (September 12, 2017)

## New Features

- Allow SideNav component to set initial state via props.

# 1.2.1 (September 6, 2017)

## Bug Fixes

- Fix SideNav text wrapping
- Re-export SideNav components through visual-stack-redux

# 1.2.0 (September 6, 2017)

## New Features

- Material UI Icons

## Styling Update

- SideNav label wrapping
- TopNav background color

# 1.1.0 (September 1, 2017)

# Upgrade

- Upgraded React to 15.6.1

## Styling Update

- Updated SideNav to now display logo instead of Top Nav.

# 1.0.1 (August 3, 2017)
## Major Version Update
- SideNav Component is now collapsable
- Application Layout now has Redux wrapper component
- Tooltips added in patch update
- See README.md for documentation on breaking changes

# 0.17.16 (July 6, 2017)

## Styling Update

- Modal box-shadow, border-radius, padding and margins.

# 0.17.15 (June 20, 2017)

## Bug Fixes

- Sliding Panel shifted down to accomidate new Top Nav.

# 0.17.14 (June 20, 2017)

## Bug Fixes

- Header z-index bumped up to prevent AmCharts overlapping.

# 0.17.13 (June 16, 2017)

## Styling Update

-  Updated CJ Logo

## Bug Fix

- Fixed but so that right aligned Page Header content is not cut off.

# 0.17.12 (June 16, 2017)

## Styling Update

- Made PageHeader component fixed.

# 0.17.11 (June 7, 2017)

## Bug Fix

- Added Sliding Panel Tooltip to Visual Stack Redux
- Fixed bug in zero state for MultiSelectFilter

# 0.17.10 (June 7, 2017)

## Bug Fix

- Made sliding panel icon remain highlighted when sliding panel is active.

# 0.17.9 (June 5, 2017)

## New Feature

- Added ability to set initial state for Sliding Panel Redux and Sliding Panel Dropdown Redux.

# 0.17.8 (June 1, 2017)

## Bug Fix

- Fixed allcheckbox null bug when no selectAllCheckbox is present

# 0.17.7 (June 1, 2017)

## Breaking Change

- Select All checkboxes in MultiSelectFilter is changed to now be optional

# 0.17.6 (May 23, 2017)

## Bug Fixes

- Moved Sliding Panel down to show Page Header
- Added Tool Tip to Toggle Icon for Sliding Panel
- Fixed MultiSelectFilter's zero state

# 0.17.5 (May 17, 2017)

## Versioning Issues

# 0.17.4 (May 17, 2017)

## Bug Fix

- Checkbox filter scrolling bug.

# 0.17.3 (April 27, 2017)

## Bug Fix

- Sliding Panel sizing bug.

# 0.17.1 (April 7, 2017)

## Bug Fix

- Changed Sliding Panel Dropdown chevron direction.

# 0.16.0 (April 7, 2017)

## Breaking Change

- Updated Sliding Panel Dropdown to take mandatory id to allow for label translations.

# 0.15.3 (March 31, 2017)

## Bugfixes

- Fixed css styles in SlidingPanelDropdown

# 0.15.2 (March 28, 2017)

## Bugfixes

- Updated MultiSelectFilter to return entire selected value
- Uping my git commit count

# 0.15.1 (March 28, 2017)

## Bugfixes

- Updated MultiSelectFilter to allow setting default checked state
- Added tests around it

# 0.11.1 (March 24, 2017)

## Bugfixes

- Fixed MultiSelectFilter to handle single select values

# 0.11.0 (March 23, 2017)

## New Features

- Added Sliding Panel & Dropdown component
- Added MultiSelectFilter component

# 0.9.0 (February 20, 2017)

## New Features

- New documentation package.
- New Application Layout component.

## Bugfixes

- Fix SideNav overflow CSS.
- Fix SideNav LinkGroup cursor CSS.

## Other Changes

- Add test step to precommit hook.

# 0.7.10 (January 2, 2017)

## New Features

- New Top Navigation Component.

# 0.7.9 (December 2, 2016)

## New Features

- New Side Navigation Component.

# 0.7.8 (November 7, 2016)

## New Features

- UMD build can now be used with require.js.
- Solid button text color is now white.

## Bugfixes

- Fixed appending og classNames in Button component.

# 0.7.7 (October 21, 2016)

## New Features

- Added a UMD build to allow for usage of the library in a variety of environments.

# 0.7.6 (September 28, 2016)

## Bugfixes

- Fixed malformed CSS.

# 0.7.5 (September 1, 2016)

## New Features

- Added Sidebar component.

# 0.7.3 (June 29, 2016)

## New Features

- Added new style for Button component.

# 0.7.2 (April 27, 2016)

## Bugfixes

- Reinstated some `PageHeader` padding that was removed in 0.7.1.

# 0.7.1 (April 27, 2016)

## Other Changes

- Adjusted the `PageHeader` CSS to work with React 15, which no longer generates `span` wrappers for text interpolation and simply includes text nodes delimited by comment nodes.

# 0.7.0 (April 25, 2016)

## Breaking Changes

- Removed `bootstrap-loader` in favor of just using the plain `bootstrap` package. Including the relevant peer dependencies is no longer necessary. This fixes an issue where a `.bootstraprc` file was required to disable Bootstrap JavaScript to avoid an implicit dependency on jQuery.

# 0.6.0 (April 18, 2016)

## Breaking Changes

- Removed an overly specific global `font-size: small` rule that caused significant problems when attempting to create text styles.

# 0.5.0 (April 4, 2016)

## Breaking Changes

- The way `MenuBar` components are structured has been modified to remove the (previously undeclared) dependency on `react-router`. Instead of providing a link URL via `to` props, a HTML anchor element must be provided as a child. For example, given the following style from previous versions:

   ```js
   <MenuBarItem to="/">Home</MenuBarItem>
   ```

   Starting in version 0.5.0, the link must be passed as a child component:

   ```js
   <MenuBarItem><Link to="/">Home</Link></MenuBarItem>
   ```

   As a side-effect, this allows ordinary HTML anchor elements to be used in place of react-router `Link` components.

   Also, the `MenuBar` component’s API has been altered to accept an optional `onTitleClick` callback prop instead of directly using `Link` within its implementation.

# 0.4.4 (April 1, 2016)

## New Features

- Added support for modal components in `visual-stack/lib/components/Modal`.

# 0.4.3 (March 28, 2016)

## Breaking Changes

- `ActionButton` `additionalClassNames` prop has been changed to `className`. Change the prop accordingly.

# 0.4.2 (March 25, 2016)

## Other Changes

- `Row` can now accept props like id, onClick, and so on.

# 0.4.1 (March 24, 2016)

## Other Changes

- Added a proper margin to the bottom of the `PageHeader` component that matches the original source component.

# 0.4.0 (March 24, 2016)

## New Features

- Added various form components, including `Form`, `FormGroup`, `Input`, `Label`, and `Legend`.

# 0.3.1 (March 23, 2016)

## New Features

- Added `ActionButton` component to be used by `Toolbar` for actions within a List Toolbar.

# 0.3.0 (March 23, 2016)

## Breaking Changes

- The `ExpandedRow` component has been removed in favor of supporting an `expansion` prop on the `Row` component. All code should still work after replacing all instances of `ExpandedRow` with `Row`.

## Bugfixes

- The `react` dependency is now properly listed as a peer dependency. This should not break any existing code, but it may cause version conflicts if using an old version of React.

# 0.2.1 (March 23, 2016)

## Bugfixes

- Click events’ default actions are now properly suppressed when clicking on dropdown menu items, preventing the fragment from being reset.

# 0.2.0 (March 23, 2016)

## New Features

- Enhanced the `MenuBar` component to support right-aligned menu items and (stateless) dropdown menus. The `leftItems` prop can be used *instead of* using passing child elements for consistency with the new `rightItems` prop, but this is optional.
