import React from 'react';
import R from 'ramda';
import './TabLayout.css';

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
    const children = this.props.children;
    this.setState({
      selectedIndex: R.findIndex(child => !child.props.disabled, children),
    });
  }

  onSelectClick(event, index) {
    this.setState({
      selectedIndex: index,
    });
    const scrollingContainer = document.getElementsByClassName('application-layout-content')[0];

    if (scrollingContainer) {
      scrollingContainer.scrollTop = 0;
    }
  }

  isSelected(index) {
    // console.log("this.state.selectedIndex", this.state.selectedIndex);
    return index === this.state.selectedIndex;
  }

  render() {
    const { floatingHeader, headerHeight } = this.props;
    const children = this.props.children;
    const tabs = R.filter(R.identity, children);
    const labelMap = tabs.map((tab, index) => (
      <TabLabel
        {...tab.props}
        key={index}
        onTabClick={this.props.onTabClick}
        onSelectClick={this.onSelectClick}
        isSelected={this.isSelected}
      />)
    , tabs);
    const contentMap = tabs.map((tab, index) => (
      <div key={index} hidden={!this.isSelected(index)}>
        {tab.props.content}
      </div>
    ));
    return (
      <div>
        hull
        <TabHeader floatingHeader={floatingHeader}>{labelMap}</TabHeader>
        <TabBody floatingHeader={floatingHeader} headerHeight={headerHeight}>
          {contentMap}
        </TabBody>
      </div>
    );
  }
}

export const Tab = ({ label, content }) => {};

const TabLabel = ({ label, disabled, index, onTabClick, onSelectClick, isSelected }) => (
  <div className="cj-tab"
    disabled={disabled ? disabled: false}
    onClick={event => {
      if (!disabled) {
        onSelectClick(event, index);
        if (onTabClick)
          onTabClick();
      }
    }}
  >
    {label}
  </div>
);

/* clicked={isSelected(index)} */
// styled.div`
//   border-right: 1px solid #e1e1e1;
//   padding-bottom: 4px;
//   background-color: #fff;
//   transition: 0.2s color ease-in-out;
//   user-select: none;
//   display: flex;
//   ${props =>
//     props.disabled
//       ? `color: #cecece;
//         background-color: white`
//       : props.clicked
//         ? `color: #555;
//           padding-bottom: 0px;
//           & > * {
//             border-bottom: 4px solid #048BC6;
//           }`
//         : `color: #888;
//           &:hover {
//           color: #048BC6;
//           cursor: pointer;
//       }`};
// `;

// non VS (CAS only)
// export const TabContent = styled.div`
//   padding-left: 20px;
//   padding-top: 20px;
// `;

const TabHeader = ({ floatingHeader, children }) => {
  return <div className="cj-tab" >
    {children}
  </div>;
}
;


// ;;
// styled.div`
//   ${props =>
//     props.floatingHeader ? 'position: fixed;' : ''} box-shadow: 0 0px 32px 0 rgba(136,136,136,0.25);
//   border-bottom: 1px solid #e1e1e1;
//   display: flex;
//   width: 100%;
//   background-color: white;
// `;

// non VS (CAS only)
// export const TabLabelContent = styled.div`
//   padding: 15px 32px 11px;
//   text-align: center;
// `;



const TabBody = ({ children }) => <div className="cj-tab">{children}</div>;
// styled.div`
//   ${props => (props.floatingHeader ? `padding-top: ${props.headerHeight};` : '')};
// `;
