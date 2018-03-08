import React from 'react';
import R from 'ramda';
import './TabLayout.css';

const toArray = (maybeArray) => R.flatten([maybeArray]);

export class TabLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    this.onSelectClick = this.onSelectClick.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  componentDidMount() {
    const children = toArray(this.props.children);
    this.setState({
      selectedIndex: R.findIndex(child => !child.props.disabled, children),
    });
  }

  onSelectClick(event, index) {
    this.setState({
      selectedIndex: index,
    });
  }

  isSelected(index) {
    return index === this.state.selectedIndex;
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
          onTabClick={this.props.onTabClick}
          onSelectClick={this.onSelectClick}
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

const TabLabel = ({ children, disabled, tabIndex, onTabClick, onSelectClick, isSelected }) => {
  const labelStateClassName = disabled
    ? 'cj-tab-label-disabled'
    : isSelected(tabIndex) ? 'cj-tab-label-clicked' : 'cj-tab-label-inactive';
  const labelClassName = `cj-tab-label ${labelStateClassName}`;
  return (
    <div className={labelClassName}
      onClick={event => {
        if (!disabled) {
          onSelectClick(event, tabIndex);
          if (onTabClick)
            onTabClick();
        }
      }}
    >
      {children}
    </div>
  );
};

const TabHeader = ({ children, floatingHeader, headerWidth }) => {
  const floatingClassName = floatingHeader ? 'cj-tab-header-floating' : '';
  const headerClassName = `cj-tab-header ${floatingClassName}`;
  const headerCss = floatingHeader ? { width: `${headerWidth}` } : {};
  return <div className={headerClassName} style={headerCss}>
    {children}
  </div>;
};

const TabBody = ({ children, floatingHeader, headerHeight }) => {
  const headerHeightCss = floatingHeader ? { 'padding-top': `${headerHeight}` } : {};
  return (<div style={ headerHeightCss }>
    {children}
  </div>);
};
