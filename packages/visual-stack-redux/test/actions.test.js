import reducer, {
  toggleSideNav,
  toggleSideNavLinkGroup,
  toggleSlidingPanel,
  setSlidingPanelActiveState,
  selectTab,
  initializePagination,
  setPaginationValue,
} from '../src/actions';

describe('reducer', () => {
  test('initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toEqual({
      menuBar: {},
      modal: expect.any(Object),
      navGroupDropdown: {},
      sideNav: {},
      slidingPanel: {},
      tabLayout: {},
      pagination: {},
    });
  });

  test('should toggle SideNav with given state', () => {
    const beforeState = {
      sideNav: {
        collapsed: false,
      },
    };
    const afterState = {
      sideNav: {
        collapsed: true,
      },
    };
    expect(reducer(beforeState, toggleSideNav(true))).toEqual(afterState);
    expect(reducer(afterState, toggleSideNav(false))).toEqual(beforeState);
  });

  test('should toggle LinkGroup expansion', () => {
    const beforeState = {
      sideNav: {
        linkGroups: {
          linkGroupShouldntChange: {
            expanded: false,
          },
        },
      },
    };
    const afterState = {
      sideNav: {
        linkGroups: {
          linkGroup1: {
            expanded: true,
          },
          linkGroupShouldntChange: {
            expanded: false,
          },
        },
      },
    };
    expect(
      reducer(beforeState, toggleSideNavLinkGroup(true, 'linkGroup1'))
    ).toEqual(afterState);
  });

  test('should collapse existing expanded LinkGroups', () => {
    const beforeState = {
      sideNav: {
        linkGroups: {
          linkGroupShouldBeReset: {
            expanded: true,
          },
        },
      },
    };
    const afterState = {
      sideNav: {
        linkGroups: {
          linkGroup1: {
            expanded: true,
          },
          linkGroupShouldBeReset: {
            expanded: false,
          },
        },
      },
    };
    expect(
      reducer(beforeState, toggleSideNavLinkGroup(true, 'linkGroup1'))
    ).toEqual(afterState);
  });

  test('should toggle SlidingPanel', () => {
    const beforeState = {
      slidingPanel: {
        active: false,
      },
    };
    const afterState = {
      slidingPanel: {
        active: true,
      },
    };
    expect(reducer(beforeState, toggleSlidingPanel())).toEqual(afterState);
    expect(reducer(afterState, toggleSlidingPanel())).toEqual(beforeState);
  });

  test('should update index by tabLayoutId', () => {
    const beforeState = {
      tabLayout: {},
    };
    const afterState = {
      tabLayout: {
        ID123: {
          index: 0,
        },
      },
    };
    expect(
      reducer(beforeState, selectTab({ tabLayoutId: 'ID123', index: 0 }))
    ).toEqual(afterState);
  });

  test('should set SlidingPanel active state to desired state', () => {
    const beforeState = {
      slidingPanel: {
        active: false,
      },
    };
    const afterState = {
      slidingPanel: {
        active: true,
      },
    };
    expect(reducer(beforeState, setSlidingPanelActiveState(true))).toEqual(
      afterState
    );
    expect(reducer(afterState, setSlidingPanelActiveState(false))).toEqual(
      beforeState
    );
  });

  test('set initial value for pagination', () => {
    const paginationId = 'sample';
    const numberOfRows = 200;
    const beforeState = {
      pagination: {},
    };

    const afterState = reducer(
      beforeState,
      initializePagination({ paginationId, numberOfRows })
    );

    expect(afterState.pagination[paginationId]).toEqual({
      numberOfRows,
      page: 1,
      rowsPerPage: 10,
    });
  });

  test('set pagination value', () => {
    const paginationId = 'sample';
    const rowsPerPage = 10;
    const page = 2;
    const beforeState = {
      pagination: {
        paginationId: {},
      },
    };

    const afterState = reducer(
      beforeState,
      setPaginationValue({ paginationId, rowsPerPage, page })
    );

    expect(afterState.pagination[paginationId]).toEqual({
      rowsPerPage,
      page,
    });
  });
});
