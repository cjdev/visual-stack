# Upcoming

## New Component

- Add Tooltip based on HoverPopover

# 6.9.0

## New Component

- Add PureCollapsiblePanel so that you can manage the state outside the component

# 6.8.2

## New Feature

- CollapsiblePanel: add onToggleCollapse prop

# 6.8.1

## Bug Fix

- Tree: fix warnings in tree component

# 6.8.0

## New Feature

- SlidngPanel: support badges in sliding panel

# 6.7.14

## Bug Fix

- SlidngPanel: fix warnings

# 6.7.13

## Updates

- Input: fix onChange invocation when onBlur

# 6.7.12

## Updates

- Box: fix class names typo

# 6.7.11

## Updates

- Box: fix class names

# 6.7.10

## Updates

- Box: Add 2xl, 3xl, and 4xl paddings and gaps.

# 6.7.9

## Updates

- Box: Add xl and xxl paddings. Rename align and justify props. Normalize padding and gap props to use string values. Improve Box docs.

# 6.7.8

## Bug Fix

- SideNav: omit VS props from being passed to SideNav ul to avoid react console warnings

# 6.7.7

## Bug Fix

- ChoiceInput: Separate onClick prop for ChoiceInput and pass it only to actual Input, so the handler runs only once

# 6.7.6

## Updates

- TextArea: Add trimmed prop to trim value on blur

# 6.7.5

## Updates

- Input: Add trimmed prop to trim value on blur

# 6.7.4

## Updates

- Box: Remove wrap prop since it doesn't work well with gap
- Box: Add nested boxes example
- Text: Add error and error-small types
- Button: Make min-width fit-content so it plays well with flexbox

# 6.7.3

## Updates

- Box component: Add more accepted values for alignItems and justifyContent props
- Box component: Add wrap prop

# 6.7.2

## Bug Fix

- Spread only rest props in CollapsiblePanel

## Updates

- Refactor to use classNames in CollapsiblePanel

# 6.7.1

## New Feature

- Added a new Button Type - Raised Solid White

## Updates

- Improved restProps support in all components

# 6.7.0

## New Feature

- Add experimental Tree and TriStateCheckbox components

# 6.6.0

## Updated styling

- Update disabled button style

# 6.5.0

## New Feature

- Add experimental Box component as a layout primitive with standardized styling props

## Updates

- Improved PropTypes on Text component

# 6.4.0

## New Feature

- Add experimental Text component to render text without relying on globals
- Split Form.js so that components can be imported independently

# 6.3.0

## Updated styling

- Add padding option to panel and collapsible panel
- Changing padding between icon and text in collapsible panel

# 6.2.0

## New Feature

- Enhance Collapsible Panel to accept an icon

# 6.1.2

## Bug Fix

- SelectField passes options to Select and not to Field/Label

# 6.1.1

## Bug Fix

- Change SideNav height to fit-content instead of a fixed height

# 6.1.0

## New Feature

- Pass id prop to TextField, ChoiceInput and SelectField and it will be passed as `for` prop to label to help with
  accessibility and testing-library getByLabel.

# 6.0.0

## Update Dependency

- updating react-select from 2 to 3. This fixes `componentWillReceiveProps has been renamed` warnings

# 5.1.3

## Bug Fix

- Fix BlankSlate errors
- Fix required sign padding

# 5.1.2

## Bug Fix

- SelectField passes react-select props only to react-select

# 5.1.1

## Bug Fix

- Additional Popover props are now being passed to the correct sub-component

# 5.1.0

## Update Dependency

- Use react-inlinesvg instead of react-svg

# 5.0.1

## New Feature

- Support required label in choice input and form field

# 5.0.0

## Updated styling

- Update select styles
- Update `<pre>` and `<code>` styles
- Update Collapsible Panel header title styles
- Update modal styles

## New Feature

- Add CJ logo icon

# 4.15.0

## New Feature

- Added Popover component
- Also included a stateful HoverPopover that shows the popover on hover
- add solid-primary-raised and outline-secondary-raised button types

# 4.14.5

## Updated styling

- update analytic cards to use css grid
- update style in basic card

# 4.14.4

## Bug Fixes

- Revert change for Escape handler on Modal because it does not work with hooks

# 4.14.3

## Bug Fixes

- Fix Escape listener cleanup on Modal

# 4.14.2

## New Feature

- Add onEscapeKeyUp function to Modal

# 4.14.1

## New Feature

- Add rowIndex to DataTable onClick event

# 4.14.0

## New Feature

- Add left-aligned version of blank slate, and new icon
- Update alert styling

# 4.13.0

## New Feature

- Additional BlankSlate functionality

# 4.12.0

## New Feature

- Add LoadingAnimation component
- DataTable supports integrated LoadingAnimation

# 4.11.3

## New Feature

- Add Empty State to List View Component

# 4.11.2

## Bug Fixes

- Fix styling on DataTable cells not matching the corresponding header styles
- Allow SideNav to have more children under the fold
- Pagination with 0 entries now correctly displays total pages

## New Feature

- Better handle empty DataTables with a new configurable message
- Add ability to change hard-coded text in Pagination for customization and translations
- Add ability for DataTables to change hard-coded text in Pagination

## Update Dependency

- Updated react-svg to v10 to fix React 16.9 warnings about deprecated lifecycle methods

# 4.11.1

## Bug Fixes

- Fix glitches that occur when the SlidingPanel component is remounted

## Updated styling

- ExpandingInputButton: add expanding animation and adjust svg sizes, hover interactions

# 4.11.0

## Add Component

- Add Alert component
- Add ExpandingInputButton

# 4.10.1

## New Feature

- Add custom cell option to data table
- Add toolbar option in data table

# 4.10.0

## New Feature

- Add new Data table

# 4.9.3

## New Feature

-Add category label to the side nav

# 4.9.2

## Bug Fixes

-Fix dropdown filter's incorrect state when remounting with the same id

# 4.9.1

## New Feature

-Add optional onClick prop to analytic cards

# 4.9.0

## New Feature

- The callback for the datepicker now gets the ids of the currently selected sidebar ranges

# 4.8.0

## New Feature

- Add Button type "inline-outline-secondary" for Buttons that are lined up in a row with selects.
- Add second argument to the DatePicker's `onApply` callback that receives the selected named ranges.

# 4.7.1

## New Feature

- Add initialActive prop to SideNavLinkGroup to specify that a SideNav section should be expanded on first
  render.

# 4.7.0

## Add Component

- Add AsyncSelect component that lets you get the list of autocomplete options from an asynchronous source.

# 4.6.0 (May 23, 2019)

#### Add component

- Add DatePicker component that lets you select one or two date ranges manually or from a list of predefined ranges.

# 4.5.1 (May 21, 2019)

## Bug Fixes

- Fix issue where props in visual-stack-redux SlidingPanel are not passed through to visual-stack SlidingPanel.

# 4.5.0 (May 20, 2019)

#### Add component

- Add ButtonWithDropdown component that associates a button with an expansible dropdown area.

## New Feature

- SlidingPanel sections take a className prop.

#### Updated styling

- Remove footer from DialogLayout and move buttons to the top, changed colors and add support for wide content.

# 4.4.0 (May 14, 2019)

#### Add component

- Add AnalyticCard Component
- Adding className to SlidingPanel

# 4.3.2 (May 1, 2019)

#### Updated styling

- Add default height to textarea
- Add loading state to List View
- Remove fixed height in List View

# 4.3.1 (April 17, 2019)

## Bug Fixes

- Fix exceeding maximum update depth when using connected renderFooter in List View

# 4.3.0 (April 17, 2019)

#### Add component

- Add Pagination component

# 4.2.1 (April 16, 2019)

#### Updated component

- Make submit and cancel on DialogLayout optional

#### Updated styling

- Add styles for react-select multiselects

# 4.2.0 (April 12, 2019)

#### Add component

- Add List View component

# 4.0.1 (Mar 28, 2019)

#### Updated styling

- Make collapsible panel header non-selectable
- Dialog layout defaults to a smaller width

# 4.0.0 (Mar 20, 2019)

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

- Updated CJ Logo

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
  <MenuBarItem>
    <Link to="/">Home</Link>
  </MenuBarItem>
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

- Enhanced the `MenuBar` component to support right-aligned menu items and (stateless) dropdown menus. The `leftItems` prop can be used _instead of_ using passing child elements for consistency with the new `rightItems` prop, but this is optional.
