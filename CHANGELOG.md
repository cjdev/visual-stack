# 0.17.13 (June 16, 2017)

## Bug Fix

- Fixed but so that right aligned Page Header content is not cut off.

# 0.17.12 (June 16, 2017)

## Stying Update

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
