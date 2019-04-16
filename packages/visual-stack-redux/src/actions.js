import * as R from 'ramda';
import { createAction, handleActions } from 'redux-actions';

const defaultToEmpty = R.defaultTo({});
const collapse = R.set(R.lensProp('expanded'), false);

const OPEN_MODAL = '@cjdev/visual-stack-redux/OPEN_MODAL';
const CLOSE_MODAL = '@cjdev/visual-stack-redux/CLOSE_MODAL';

export const openModal = createAction(OPEN_MODAL, (component, props) => ({
  component,
  props,
}));
export const closeModal = createAction(CLOSE_MODAL);

const emptyModalState = { component: undefined, props: undefined };

const REGISTER_DROPDOWN = '@cjdev/visual-stack-redux/REGISTER_DROPDOWN';
const TOGGLE_DROPDOWN = '@cjdev/visual-stack-redux/TOGGLE_DROPDOWN';

export const createNavGroupKey = createAction(REGISTER_DROPDOWN);
export const toggleNavGroup = createAction(TOGGLE_DROPDOWN);

const TOGGLE_SIDENAV = '@cjdev/visual-stack-redux/TOGGLE_SIDENAV';
export const toggleSideNav = createAction(TOGGLE_SIDENAV, collapsed => ({
  collapsed,
}));

const TOGGLE_SIDENAV_LINKGROUP =
  '@cjdev/visual-stack-redux/TOGGLE_SIDENAV_LINKGROUP';
export const toggleSideNavLinkGroup = createAction(
  TOGGLE_SIDENAV_LINKGROUP,
  (expanded, linkGroupName) => ({ expanded, linkGroupName })
);

const TOGGLE_SLIDING_PANEL = '@cjdev/visual-stack-redux/TOGGLE_SLIDING_PANEL';
export const toggleSlidingPanel = createAction(TOGGLE_SLIDING_PANEL);

const TOGGLE_SLIDING_PANEL_FILTER_DROPDOWN =
  '@cjdev/visual-stack-redux/TOGGLE_SLIDING_PANEL_FILTER_DROPDOWN';
export const toggleFilterDropdown = createAction(
  TOGGLE_SLIDING_PANEL_FILTER_DROPDOWN,
  filterLabel => ({ filterLabel })
);

const SET_SLIDING_PANEL_ACTIVE_STATE =
  '@cjdev/visual-stack-redux/SET_SLIDING_PANEL_ACTIVE_STATE';
export const setSlidingPanelActiveState = createAction(
  SET_SLIDING_PANEL_ACTIVE_STATE
);

const SELECT_TAB = '@cjdev/visual-stack-redux/SELECT_TAB';
export const selectTab = createAction(SELECT_TAB);

const INITIALIZE_PAGINATION = '@cjdev/visual-stack-redux/INITIALIZE_PAGINATION';
export const initializePagination = createAction(INITIALIZE_PAGINATION);

const SET_PAGINATION_VALUE = '@cjdev/visual-stack-redux/SET_PAGINATION_VALUE';
export const setPaginationValue = createAction(SET_PAGINATION_VALUE);
export const selectPaginationValue = (state, ownProps) =>
  R.defaultTo({ rowsPerPage: 10, page: 1 })(
    state.visualStack.pagination[ownProps.paginationId]
  );

export default handleActions(
  {
    [OPEN_MODAL]: (state, { payload }) =>
      R.set(R.lensProp('modal'), payload, state),

    [CLOSE_MODAL]: state => R.set(R.lensProp('modal'), emptyModalState, state),

    [REGISTER_DROPDOWN]: (state, { payload }) =>
      R.over(R.lensProp('navGroupDropdown'), R.assoc(payload, false), state),

    [TOGGLE_DROPDOWN]: (state, { payload }) =>
      R.over(R.lensPath(['navGroupDropdown', payload]), R.not, state),

    [TOGGLE_SIDENAV]: (state, { payload: { collapsed } }) =>
      R.set(R.lensPath(['sideNav', 'collapsed']), collapsed, state),

    [TOGGLE_SIDENAV_LINKGROUP]: (
      state,
      { payload: { expanded, linkGroupName } }
    ) => {
      const linkGroups = defaultToEmpty(
        R.view(R.lensPath(['sideNav', 'linkGroups']), state)
      );
      const stateWithResetLinkGroups = R.set(
        R.lensPath(['sideNav', 'linkGroups']),
        R.map(v => collapse(v))(linkGroups),
        state
      );
      return R.set(
        R.lensPath(['sideNav', 'linkGroups', linkGroupName, 'expanded']),
        expanded,
        stateWithResetLinkGroups
      );
    },

    [TOGGLE_SLIDING_PANEL]: state =>
      R.over(R.lensPath(['slidingPanel', 'active']), R.not, state),

    [TOGGLE_SLIDING_PANEL_FILTER_DROPDOWN]: (
      state,
      { payload: { filterLabel } }
    ) =>
      R.over(
        R.lensPath(['slidingPanel', filterLabel, 'expanded']),
        R.not,
        state
      ),

    [SET_SLIDING_PANEL_ACTIVE_STATE]: (state, { payload: newActiveState }) =>
      R.set(R.lensPath(['slidingPanel', 'active']), newActiveState, state),

    [SELECT_TAB]: (state, { payload: { tabLayoutId, index } }) => {
      return R.set(
        R.lensPath(['tabLayout', tabLayoutId, 'index']),
        index,
        state
      );
    },
    [INITIALIZE_PAGINATION]: (state, { payload: { paginationId } }) => {
      return R.set(
        R.lensPath(['pagination', paginationId]),
        {
          page: 1,
          rowsPerPage: 10,
        },
        state
      );
    },
    [SET_PAGINATION_VALUE]: (
      state,
      { payload: { paginationId, page, rowsPerPage } }
    ) => {
      return R.set(
        R.lensPath(['pagination', paginationId]),
        {
          page,
          rowsPerPage,
        },
        state
      );
    },
  },
  {
    menuBar: {},
    modal: emptyModalState,
    navGroupDropdown: {},
    sideNav: {},
    slidingPanel: {},
    tabLayout: {},
    pagination: {},
  }
);
