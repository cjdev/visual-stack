import * as R from 'ramda';
import { createAction, handleActions } from 'redux-actions';
import { sortData } from '@cjdev/visual-stack/lib/components/Table/DataTable/sortingHelper';

const defaultToEmpty = R.defaultTo({});
const defaultToEmptyArray = R.defaultTo([]);
const collapse = R.set(R.lensProp('expanded'), false);

const OPEN_MODAL = '@cjdev/visual-stack-redux/OPEN_MODAL';
const CLOSE_MODAL = '@cjdev/visual-stack-redux/CLOSE_MODAL';

export const openModal = createAction(OPEN_MODAL, (component, props) => ({
  component,
  props,
}));
export const closeModal = createAction(CLOSE_MODAL);

const emptyModalState = { component: undefined, props: undefined };

const OPEN_ALERT = '@cjdev/visual-stack-redux/OPEN_ALERT';
const CLOSE_ALERT = '@cjdev/visual-stack-redux/CLOSE_ALERT';

export const openAlert = createAction(OPEN_ALERT, (component, props) => ({
  component,
  props,
}));
export const closeAlert = createAction(CLOSE_ALERT);

const emptyAlertState = { component: undefined, props: undefined };

const REGISTER_DROPDOWN = '@cjdev/visual-stack-redux/REGISTER_DROPDOWN';
const TOGGLE_DROPDOWN = '@cjdev/visual-stack-redux/TOGGLE_DROPDOWN';

export const createNavGroupKey = createAction(REGISTER_DROPDOWN);
export const toggleNavGroup = createAction(TOGGLE_DROPDOWN);

const TOGGLE_SIDENAV = '@cjdev/visual-stack-redux/TOGGLE_SIDENAV';
export const toggleSideNav = createAction(TOGGLE_SIDENAV, collapsed => ({
  collapsed,
}));
export const selectCollaspedStateFromSideNav = state =>
  state.visualStack.sideNav.collapsed;

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

const HIDE_SLIDING_PANEL_FILTER_DROPDOWN =
  '@cjdev/visual-stack-redux/HIDE_SLIDING_PANEL_FILTER_DROPDOWN';
export const hideFilterDropdown = createAction(
  HIDE_SLIDING_PANEL_FILTER_DROPDOWN,
  filterLabel => ({ filterLabel })
);

const EXPAND_SLIDING_PANEL_FILTER_DROPDOWN =
  '@cjdev/visual-stack-redux/EXPAND_SLIDING_PANEL_FILTER_DROPDOWN';
export const expandFilterDropdown = createAction(
  EXPAND_SLIDING_PANEL_FILTER_DROPDOWN,
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

export const forDatepicker = R.assocPath(['payload', 'datePickerId']);
export const datepickerLensForId = R.memoizeWith(R.identity, id =>
  R.lensPath(['visualStack', 'datePicker', id])
);
const UPDATE_CALENDAR_RANGE = '@cjdev/visual-stack-redux/UPDATE_CALENDAR_RANGE';
export const updateCalendarRanges = createAction(
  UPDATE_CALENDAR_RANGE,
  selectedRanges => ({
    selectedRanges,
  })
);

const UPDATE_NAMED_CALENDAR_RANGES =
  '@cjdev/visual-stack-redux/UPDATE_NAMED_CALENDAR_RANGES';
export const updateNamedCalendarRanges = createAction(
  UPDATE_NAMED_CALENDAR_RANGES,
  selectedNamedRanges => ({
    selectedNamedRanges,
  })
);

const findSortingIndex = (sortingOption, columns) =>
  R.findIndex(R.propEq('label', sortingOption.label))(columns);

const getDataTableData = ({ columns, data, sortingOption }) => {
  const dataWithSelectedProp = defaultToEmptyArray(data).map((row, index) => {
    return { id: index, row, selected: false };
  });
  if (!sortingOption) return dataWithSelectedProp;

  const sortingIndex = findSortingIndex(sortingOption, columns);
  return sortData(sortingIndex, sortingOption.order, dataWithSelectedProp);
};

const INITIALIZE_DATA_TABLE = '@cjdev/visual-stack-redux/INITIALIZE_DATA_TABLE';
export const initializeDataTable = createAction(INITIALIZE_DATA_TABLE);

const SET_DATA_TABLE_PAGE = '@cjdev/visual-stack-redux/SET_DATA_TABLE_PAGE';
export const setDataTablePage = createAction(SET_DATA_TABLE_PAGE);

const SET_DATA_TABLE_SORTING_OPTION =
  '@cjdev/visual-stack-redux/SET_DATA_TABLE_SORTING_OPTION';
export const setDataTableSortingOption = createAction(
  SET_DATA_TABLE_SORTING_OPTION
);

const SET_DATA_TABLE_ROWS = '@cjdev/visual-stack-redux/SET_DATA_TABLE_ROWS';
export const setDataTableRows = createAction(SET_DATA_TABLE_ROWS);

export const selectDataTable = id => state => {
  const dataTable = R.view(R.lensPath(['visualStack', 'dataTable', id]))(state);
  const defaultTable = { data: [], pagination: {} };
  return dataTable || defaultTable;
};

const RESET_CALENDAR_SELECTION =
  '@cjdev/visual-stack-redux/RESET_CALENDAR_SELECTION';
export const resetCalendarSelection = createAction(RESET_CALENDAR_SELECTION);

export default handleActions(
  {
    [OPEN_MODAL]: (state, { payload }) =>
      R.set(R.lensProp('modal'), payload, state),

    [CLOSE_MODAL]: state => R.set(R.lensProp('modal'), emptyModalState, state),

    [OPEN_ALERT]: (state, { payload }) =>
      R.set(R.lensProp('alert'), payload, state),

    [CLOSE_ALERT]: state => R.set(R.lensProp('alert'), emptyAlertState, state),

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
    [HIDE_SLIDING_PANEL_FILTER_DROPDOWN]: (
      state,
      { payload: { filterLabel } }
    ) =>
      R.set(
        R.lensPath(['slidingPanel', filterLabel, 'expanded']),
        false,
        state
      ),
    [EXPAND_SLIDING_PANEL_FILTER_DROPDOWN]: (
      state,
      { payload: { filterLabel } }
    ) =>
      R.set(R.lensPath(['slidingPanel', filterLabel, 'expanded']), true, state),
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

    [UPDATE_CALENDAR_RANGE]: (
      state,
      { payload: { datePickerId, selectedRanges } }
    ) =>
      R.set(
        R.lensPath(['datePicker', datePickerId, 'selectedRanges']),
        selectedRanges,
        state
      ),

    [UPDATE_NAMED_CALENDAR_RANGES]: (
      state,
      { payload: { datePickerId, selectedNamedRanges } }
    ) =>
      R.set(
        R.lensPath(['datePicker', datePickerId, 'selectedNamedRanges']),
        selectedNamedRanges,
        state
      ),
    [RESET_CALENDAR_SELECTION]: (state, { payload: { datePickerId } }) =>
      R.set(R.lensPath(['datePicker', datePickerId]), {}, state),
    [INITIALIZE_DATA_TABLE]: (state, { payload }) => {
      return R.set(
        R.lensPath(['dataTable', payload.id]),
        {
          data: getDataTableData(payload),
          pagination: {
            page: 1,
            rowsPerPage: 10,
          },
          sortingOption: R.compose(
            R.defaultTo({}),
            R.prop('sortingOption')
          )(payload),
        },
        state
      );
    },
    [SET_DATA_TABLE_PAGE]: (state, { payload: { id, pagination } }) =>
      R.set(R.lensPath(['dataTable', id, 'pagination']), pagination, state),
    [SET_DATA_TABLE_SORTING_OPTION]: (
      state,
      { payload: { id, sortingOption } }
    ) => {
      return R.set(
        R.lensPath(['dataTable', id, 'sortingOption']),
        sortingOption,
        state
      );
    },
    [SET_DATA_TABLE_ROWS]: (state, { payload: { id, data } }) => {
      return R.set(R.lensPath(['dataTable', id, 'data']), data, state);
    },
  },
  {
    menuBar: {},
    modal: emptyModalState,
    alert: emptyAlertState,
    navGroupDropdown: {},
    sideNav: {},
    slidingPanel: {},
    tabLayout: {},
    pagination: {},
    datePicker: {},
    dataTable: {},
  }
);
