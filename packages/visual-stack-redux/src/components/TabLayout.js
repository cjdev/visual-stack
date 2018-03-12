import React, { Component } from 'react';
import R from 'ramda';
import { TabLayout as BaseTabLayout, Tab as BaseTab } from '@cjdev/visual-stack/lib/components/TabLayout';
import { connect } from 'react-redux';
import { selectTab } from '../actions';
import PropTypes from 'prop-types';

const toArray = maybeArray => R.flatten([maybeArray]);

const createPayload = (tabLayoutId, index) => ({
  tabLayoutId: tabLayoutId,
  index: index,
});

export class InternalTabLayout extends Component {
  static propTypes = {
    tabLayoutId: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.onSelectClick = this.onSelectClick.bind(this);
    this.updateTabIndex = this.updateTabIndex.bind(this);
  }

  componentDidMount() {
    const children = toArray(this.props.children);
    const firstIndex = R.findIndex(child => !child.props.disabled, children);
    this.updateTabIndex(firstIndex);
  }

  onSelectClick(event, index) {
    this.updateTabIndex(index);
  }

  updateTabIndex(index) {
    const { tabLayoutId } = this.props;
    if (!R.isNil(tabLayoutId) && !R.isEmpty(tabLayoutId)) {
      const payload = createPayload(tabLayoutId, index);
      this.props.selectTab(payload);
    }
  }

  render() {
    return (
      <BaseTabLayout
        floatingHeader={this.props.floatingHeader}
        headerWidth={this.props.headerWidth}
        headerHeight={this.props.headerHeight}
        themeColor={this.props.themeColor}
        onTabClick={this.props.onTabClick}
        selectTab={this.onSelectClick}
        selectedIndex={R.view(R.lensPath([this.props.tabLayoutId, 'index']), this.props.tabLayouts)}
        >
        {this.props.children}
      </BaseTabLayout>
    );
  }
}

export const Tab = ({ ...props }) => <BaseTab {...props}/>;

export const mapDispatchToProps = dispatch => ({
  selectTab: index => dispatch(selectTab(index)),
});

export const mapStateToProps = state => ({
  tabLayouts: state.visualStack.tabLayout,
});

export const TabLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(InternalTabLayout);
