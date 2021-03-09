import React from 'react';
import PropTypes from 'prop-types';
import { withErrorBoundary } from '../../components/ErrorBoundary';
import * as R from 'ramda';

export class TriStateCheckbox extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this._updateInnerCheckBoxState();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.alwaysUpdateInnerCheckboxState || (prevProps.value !== this.props.value)) {
      this._updateInnerCheckBoxState();
    }
  }

  onBoxClick(ev) {
    return this.props.onClick ? this.props.onClick(ev) : null;
  }

  render() {
    const currentProps = R.omit(['alwaysUpdateInnerCheckboxState'], this.props);
    return (
      <input
        {...currentProps}
        className={`vs-tristatecheckbox ${currentProps.className}`}
        type="checkbox"
        onClick={ev => this.onBoxClick(ev)}
        ref={this.inputRef}
      />
    );
  }

  _updateInnerCheckBoxState() {
    if (!this.inputRef.current) {
      return;
    }
    const checkbox = this.inputRef.current;

    switch (this.props.value) {
      case 0:
        checkbox.checked = false;
        checkbox.indeterminate = false;
        break;
      case 1:
        checkbox.checked = true;
        checkbox.indeterminate = false;
        break;
      default:
        checkbox.checked = false;
        checkbox.indeterminate = true;
        break;
    }
  }
}

TriStateCheckbox.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  alwaysUpdateInnerCheckboxState: PropTypes.bool,
};

TriStateCheckbox.defaultProps = {
  alwaysUpdateInnerCheckboxState: false,
}

export default withErrorBoundary(TriStateCheckbox);
