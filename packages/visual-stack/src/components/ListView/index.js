import React from 'react';
import { isNil, defaultTo, isEmpty } from 'ramda';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withErrorBoundary } from '../ErrorBoundary';
import Spinner from '../Spinner';
import { BlankSlate } from '../BlankSlate';

import './style.css';

const renderDefaultEmptyState = () => <BlankSlate />;

const ListView = ({
  data,
  renderContent,
  onClick,
  renderHeader,
  renderFooter,
  isLoading,
  renderEmptyState = renderDefaultEmptyState,
  ...restProps
}) => {
  const isDataEmpty = isEmpty(data);
  const isClickable = !isNil(onClick);
  const header = renderHeader && (
    <div className="vs-list-view-header">{renderHeader()}</div>
  );
  const spinner = (
    <div className="vs-list-view-spinner-wrapper">
      <Spinner size="extra-large" />
    </div>
  );
  const listViewContent = (
    <div className="vs-list-view">
      {defaultTo([])(data).map((item, index) => (
        <div
          key={item.id || index}
          className={classNames({
            'vs-list-item': true,
            'vs-list-item-clickable': isClickable,
          })}
          onClick={isClickable ? () => onClick(item) : undefined}
        >
          {renderContent(item)}
        </div>
      ))}
    </div>
  );
  const footer = renderFooter && !isDataEmpty && (
    <div className="vs-list-view-footer">{renderFooter()}</div>
  );
  return (
    <div {...restProps} className="vs-list-view-container">
      {header}
      {isLoading && spinner}
      {isDataEmpty && renderEmptyState()}
      {!isLoading && listViewContent}
      {footer}
    </div>
  );
};

ListView.propTypes = {
  data: PropTypes.array,
  renderContent: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func,
  renderEmptyState: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
};

ListView.defaultProps = {
  isLoading: false,
};

export default withErrorBoundary(ListView);
