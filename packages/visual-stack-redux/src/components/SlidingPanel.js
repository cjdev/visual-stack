import React, { Component, PropTypes } from 'react';
import R from 'ramda';
import { connect } from 'react-redux';
import {
  SlidingPanel as BaseSlidingPanel,
  SlidingPanelHeader as BaseSlidingPanelHeader,
  SlidingPanelSection as BaseSlidingPanelSection,
  SlidingPanelDropdown as BaseSlidingPanelDropdown,
  ToggleIcon as BaseToggleIcon,
} from '@cjdev/visual-stack/lib/components/SlidingPanel';
import { toggleSlidingPanel, toggleFilterDropdown } from '../actions';

export class InternalSlidingPanel extends Component {
  static propTypes = {
    active: PropTypes.bool,
    initialActive: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.handleClick = e => {
      const clickInPanel = this.panelRef.contains(e.target);
      if (!clickInPanel && this.props.active) {
        this.props.toggleSlidingPanel();
      }
    };
    if (this.props.initialActive)  {
      this.props.toggleSlidingPanel();
    }
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }
  render() {
    return (
      <div ref={panel => { this.panelRef = panel; }}>
        <BaseSlidingPanel
          active={this.props.active || false} >
          { this.props.children }
        </BaseSlidingPanel>
      </div>
    );
  }
}
export const SlidingPanel = connect(
  state => ({ active: state.visualStack.slidingPanel.active }),
  { toggleSlidingPanel }
)(InternalSlidingPanel);

export class InternalToggleIcon extends Component {
  constructor(props) {
    super(props);
    const eventSupportsPropagation = R.view(R.lensPath(['nativeEvent', 'stopImmediatePropagation']));
    this.handleClick = e => {
      if (eventSupportsPropagation(e)) e.nativeEvent.stopImmediatePropagation();
      this.props.toggleSlidingPanel();
    };
  }
  render() {
    return (
      <BaseToggleIcon onClick={this.handleClick} toggleIconState={this.props.toggleIconState}/>
    );
  }
}

export class InternalSlidingPanelDropdown extends Component {
  static propTypes = {
    slidingPanel: PropTypes.object,
    id: PropTypes.string.isRequired,
    initialActive: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    if (this.props.initialActive)  {
      this.props.toggleFilterDropdown(this.props.id);
    }
  }
  render() {
    const expanded = R.view(R.lensPath([this.props.id, 'expanded']), this.props.slidingPanel);
    return (
      <BaseSlidingPanelDropdown
        label={this.props.label}
        expanded={expanded}
        onClick={() => this.props.toggleFilterDropdown(this.props.id)}
        >
        { this.props.children }
      </BaseSlidingPanelDropdown>
    );
  }
}
export const SlidingPanelDropdown = connect(
  state => ({ slidingPanel: state.visualStack.slidingPanel }),
    { toggleFilterDropdown }
)(InternalSlidingPanelDropdown);


export const ToggleIcon = connect(
  state => ({ toggleIconState: state.visualStack.slidingPanel.active }),
  { toggleSlidingPanel }
)(InternalToggleIcon);

export const SlidingPanelHeader = BaseSlidingPanelHeader;
export const SlidingPanelSection = BaseSlidingPanelSection;


