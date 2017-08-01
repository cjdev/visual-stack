import React from 'react';
import { connect } from 'react-redux';
import { ApplicationLayout as BaseApplicationLayout } from '@cjdev/visual-stack/lib/layouts/ApplicationLayout';

export class InternalApplicationLayout extends React.Component {
  render() {
    return (
      <BaseApplicationLayout
        sideNav={this.props.sideNav}
        topNav={this.props.topNav}
        sideNavState={!this.props.collapsed}
        >
          { this.props.children }
      </BaseApplicationLayout>
    );
  }
}

export const ApplicationLayout = connect(state => ({ collapsed: state.visualStack.sideNav.collapsed }))(InternalApplicationLayout);

export default ApplicationLayout;

