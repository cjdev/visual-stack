import { lensPath, lensProp, set, assoc, not, over } from 'ramda';
import { createAction, handleActions } from 'redux-actions';

const OPEN_DROPDOWN = '@cjdev/visual-stack-redux/OPEN_DROPDOWN';
const CLOSE_DROPDOWN = '@cjdev/visual-stack-redux/CLOSE_DROPDOWN';

export const openDropdown = createAction(OPEN_DROPDOWN, (menuBarName, dropDownName) => ({ menuBarName, dropDownName }));
export const closeDropdown = createAction(CLOSE_DROPDOWN, (menuBarName, dropDownName) => ({ menuBarName, dropDownName }));

const OPEN_MODAL = '@cjdev/visual-stack-redux/OPEN_MODAL';
const CLOSE_MODAL = '@cjdev/visual-stack-redux/CLOSE_MODAL';

export const openModal = createAction(OPEN_MODAL, (component, props) => ({ component, props }));
export const closeModal = createAction(CLOSE_MODAL);

const emptyModalState = { component: undefined, props: undefined };

const REGISTER_DROPDOWN = '@cjdev/visual-stack-redux/REGISTER_DROPDOWN';
const TOGGLE_DROPDOWN = '@cjdev/visual-stack-redux/TOGGLE_DROPDOWN';

export const createNavGroupKey = createAction(REGISTER_DROPDOWN);
export const toggleNavGroup = createAction(TOGGLE_DROPDOWN);

const TOGGLE_SIDENAV = '@cjdev/visual-stack-redux/TOGGLE_SIDENAV';
export const toggleSideNav = createAction(TOGGLE_SIDENAV, collapsed => ({ collapsed }));

const TOGGLE_SIDENAV_LINKGROUP = '@cjdev/visual-stack-redux/TOGGLE_SIDENAV_LINKGROUP';
export const toggleSideNavLinkGroup= createAction(TOGGLE_SIDENAV_LINKGROUP, (expanded, linkGroupName) => ({ expanded, linkGroupName }));

const TOGGLE_SECONDNAV = '@cjdev/visual-stack-redux/TOGGLE_SECONDNAV';
export const toggleSecondNav = createAction(TOGGLE_SECONDNAV);

const OPEN_TOPNAV_DROPDOWN = '@cjdev/visual-stack-redux/OPEN_TOPNAV_DROPDOWN';
export const openTopNavDropdown = createAction(OPEN_TOPNAV_DROPDOWN, dropDownName => ({ dropDownName }));

const CLOSE_TOPNAV_DROPDOWN = '@cjdev/visual-stack-redux/CLOSE_TOPNAV_DROPDOWN';
export const closeTopNavDropdown = createAction(CLOSE_TOPNAV_DROPDOWN, dropDownName => ({ dropDownName }));

const TOGGLE_TOPNAV_DROPDOWN = '@cjdev/visual-stack-redux/TOGGLE_TOPNAV_DROPDOWN';
export const toggleTopNavDropDown = createAction(TOGGLE_TOPNAV_DROPDOWN, dropDownName => ({ dropDownName }));

const TOGGLE_SLIDING_PANEL = '@cjdev/visual-stack-redux/TOGGLE_SLIDING_PANEL';
export const toggleSlidingPanel = createAction(TOGGLE_SLIDING_PANEL);

const TOGGLE_SLIDING_PANEL_FILTER_DROPDOWN = '@cjdev/visual-stack-redux/TOGGLE_SLIDING_PANEL_FILTER_DROPDOWN';
export const toggleFilterDropdown = createAction(TOGGLE_SLIDING_PANEL_FILTER_DROPDOWN, filterLabel => ({ filterLabel }));

export default handleActions({
  [OPEN_DROPDOWN]: (state, { payload: { menuBarName, dropDownName } }) =>
    set(lensPath(['menuBar', menuBarName, dropDownName, 'open']), true, state),

  [CLOSE_DROPDOWN]: (state, { payload: { menuBarName, dropDownName } }) =>
    set(lensPath(['menuBar', menuBarName, dropDownName, 'open']), false, state),

  [OPEN_MODAL]: (state, { payload }) =>
    set(lensProp('modal'), payload, state),

  [CLOSE_MODAL]: state =>
    set(lensProp('modal'), emptyModalState, state),

  [REGISTER_DROPDOWN]: (state, { payload }) =>
    over(lensProp('navGroupDropdown'), assoc(payload, false), state),

  [TOGGLE_DROPDOWN]: (state, { payload }) =>
    over(lensPath(['navGroupDropdown', payload]), not, state),

  [TOGGLE_SIDENAV]: (state, { payload: { collapsed } }) =>
    set(lensPath(['sideNav', 'collapsed']), collapsed, state),

  [TOGGLE_SIDENAV_LINKGROUP]: (state, { payload: { expanded, linkGroupName } }) =>
    set(lensPath(['sideNav', 'linkGroups', linkGroupName, 'expanded']), expanded, state),

  [TOGGLE_SECONDNAV]: state =>
    over(lensPath(['topNav', 'secondNavActive']), not, state),

  [OPEN_TOPNAV_DROPDOWN]: (state, { payload: { dropDownName } }) =>
    set(lensPath(['topNav', dropDownName, 'open']), true, state),

  [CLOSE_TOPNAV_DROPDOWN]: (state, { payload: { dropDownName } }) =>
    set(lensPath(['topNav', dropDownName, 'open']), false, state),

  [TOGGLE_TOPNAV_DROPDOWN]: (state, { payload: { dropDownName } }) =>
    over(lensPath(['topNav', dropDownName, 'open']), not, state),

  [TOGGLE_SLIDING_PANEL]: state =>
    over(lensPath(['slidingPanel', 'active']), not, state),

  [TOGGLE_SLIDING_PANEL_FILTER_DROPDOWN]: (state, { payload: { filterLabel } }) =>
    over(lensPath(['slidingPanel', filterLabel, 'expanded']), not, state),

}, {
  menuBar: {},
  modal: emptyModalState,
  navGroupDropdown: {},
  sideNav: {},
  topNav: {},
  slidingPanel: {},
});

