import reducer, {
  toggleSideNav,
  toggleSideNavLinkGroup,
  toggleSlidingPanel,
  selectTab,
} from '../src/actions';

describe('reducer', () => {
  it('should toggle SideNav with given state', () => {
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
    expect(reducer(beforeState, toggleSideNav(true))).to.deep.equal(afterState);
    expect(reducer(afterState, toggleSideNav(false))).to.deep.equal(beforeState);
  });

  it('should toggle LinkGroup expansion', () => {
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
    expect(reducer(beforeState, toggleSideNavLinkGroup(true, 'linkGroup1'))).to.deep.equal(afterState);
  });

  it('should collapse existing expanded LinkGroups', () => {
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
    expect(reducer(beforeState, toggleSideNavLinkGroup(true, 'linkGroup1'))).to.deep.equal(afterState);
  });

  it('should toggle SlidingPanel', () => {
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
    expect(reducer(beforeState, toggleSlidingPanel())).to.deep.equal(afterState);
    expect(reducer(afterState, toggleSlidingPanel())).to.deep.equal(beforeState);
  });

  it('should update index by tabLayoutId', () => {
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
    expect(reducer(beforeState, selectTab({ tabLayoutId: 'ID123', index: 0 }))).to.deep.equal(afterState);
  });
});
