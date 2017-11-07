import React from 'react';
import { connect } from 'react-redux';
import BaseApplicationLayout from '@cjdev/visual-stack/lib/layouts/ApplicationLayout';

export class InternalApplicationLayout extends React.Component {
  render() {
    return (
      <BaseApplicationLayout
        sideNav={this.props.sideNav}
        sideNavState={!this.props.collapsed}
        slidingPanel={this.props.slidingPanel}
        slidingPanelState={this.props.slidingPanelState}
        >
          { this.props.children }
      </BaseApplicationLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  collapsed: state.visualStack.sideNav.collapsed,
  slidingPanelState: state.visualStack.slidingPanel.active
});

export const ApplicationLayout = connect(mapStateToProps, state => ({}))(InternalApplicationLayout);

export default ApplicationLayout;

