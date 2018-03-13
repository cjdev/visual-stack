import React from 'react';
import R from 'ramda';
import './TabLayout.css';

const toArray = maybeArray => R.flatten([maybeArray]);

export class TabLayout extends React.Component {
  constructor(props) {
    super(props);
    this.isSelected = this.isSelected.bind(this);
  }

  isSelected(index) {
    return index === this.props.selectedIndex;
  }

  render() {
    const { floatingHeader, headerHeight, headerWidth } = this.props;
    const children = toArray(this.props.children);
    const tabs = R.filter(R.identity, children);
    const labelMap = tabs.map((tab, index) => {
      return (
        <TabLabel
          {...tab.props}
          key={index}
          tabIndex={index}
          themeColor={this.props.themeColor}
          onTabClick={this.props.onTabClick}
          onSelectClick={this.props.selectTab}
          isSelected={this.isSelected}>
            {tab.props.label}
        </TabLabel>);
    });
    const contentMap = tabs.map((tab, index) => {
      return <div key={index} hidden={!this.isSelected(index)}>
        {tab.props.content}
      </div>;
    });
    return (
      <div>
        <TabHeader floatingHeader={floatingHeader} headerWidth={headerWidth}>{labelMap}</TabHeader>
        <TabBody floatingHeader={floatingHeader} headerHeight={headerHeight}>
          {contentMap}
        </TabBody>
      </div>
    );
  }
}

export const Tab = ({ label, content, disabled }) => {};

class TabLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseOver() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  render() {
    const { children, disabled, tabIndex, onTabClick, onSelectClick, isSelected, themeColor } = this.props;
    const selected = isSelected(tabIndex);

    const labelStateClassName = disabled
      ? 'cj-tab-label-disabled'
      : selected ? 'cj-tab-label-clicked' : '';
    const labelClassName = `cj-tab-label ${labelStateClassName}`;

    const accentColor = themeColor || '#00af65';

    const hoverStyle = disabled
      ? {}
      : selected
        ? { }
        : this.state.hover
          ? { color: accentColor, cursor: 'pointer' }
          : { color: '#888' };

    const labelStyle = selected ? { borderBottom: `4px solid ${accentColor}` } : {};

    return (
      <div className={labelClassName}
        onClick={event => {
          if (!disabled) {
            onSelectClick(event, tabIndex);
            if (onTabClick)
              onTabClick();
          }
        }}
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
        style={hoverStyle}
      >
        <div style={labelStyle}>
          {children}
        </div>
      </div>
    );
  }
}

export const TabLabelContent = props => (
  <div className="cj-tab-label-content standard">
    {props.children}
  </div>
);

const TabHeader = ({ children, floatingHeader, headerWidth }) => {
  const floatingClassName = floatingHeader ? 'cj-tab-header-floating' : '';
  const headerClassName = `cj-tab-header ${floatingClassName}`;
  const headerCss = floatingHeader ? { width: `${headerWidth}` } : {};
  return <div className={headerClassName} style={headerCss}>
    {children}
  </div>;
};

const TabBody = ({ children, floatingHeader, headerHeight }) => {
  const headerHeightCss = floatingHeader ? { paddingTop: `${headerHeight}` } : {};
  return (<div className="cj-tab-body" style={ headerHeightCss }>
    {children}
  </div>);
};

export const TabContent = props => (
  <div className="cj-tab-content standard">
    {props.children}
  </div>
);
