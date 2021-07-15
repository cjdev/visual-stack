import * as R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Button } from '../Button';
import { withErrorBoundary } from '../ErrorBoundary';

import { DateTime } from 'luxon';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
  cs,
  de,
  enUS,
  es,
  fr,
  pl,
  zhCN,
  ja,
  pt,
} from 'react-date-range/dist/locale';

import './DatePicker.css';

function SidebarRangeSection({ config, selectedId, onRangeSelect }) {
  const { title, ranges } = config;

  return (
    <>
      <h4 className="date-range-title">{title}</h4>
      <ul>
        {ranges.map(({ id, label }) => (
          <li key={id}>
            <span className={id} onClick={() => onRangeSelect(id)}>
              <input
                type="radio"
                onChange={() => onRangeSelect(id)}
                checked={selectedId === id}
              />
              {label}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

const rangeConfigShape = PropTypes.shape({
  title: PropTypes.string,
  ranges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ),
});

SidebarRangeSection.propTypes = {
  config: rangeConfigShape,
  onRangeSelect: PropTypes.func,
  selectedId: PropTypes.string,
};

const applyRange = R.cond([
  [R.is(Function), (spec, ...args) => spec(...args)],
  [R.is(Array), R.identity],
  [R.T, (_, selectedRanges, idx) => selectedRanges[idx]],
]);

const rangeSpecFor = ({ ranges }, selected) => {
  return R.prop('range', R.find(R.propEq('id', selected), ranges));
};
const rangeSpecsFor = R.zipWith(rangeSpecFor);

const applyRangeSpecs = (rangeSpecs, selectedRanges, namedRangeIds) =>
  R.addIndex(R.reduce)(
    (newSelectedRanges, rangeSpec, idx) =>
      R.update(
        idx,
        applyRange(rangeSpec, newSelectedRanges, idx, namedRangeIds),
        newSelectedRanges
      ),
    selectedRanges,
    rangeSpecs
  );

const doSidebarRangeSelect = R.curry(
  (
    rangeConfigs,
    selectedNamedRanges,
    updateNamedCalendarRanges,
    updateCalendarRanges,
    selectedRanges,
    index,
    selection
  ) => {
    const newSelectedNamedRanges = R.update(
      index,
      selection,
      selectedNamedRanges
    );

    const newSelectedRanges = applyRangeSpecs(
      rangeSpecsFor(rangeConfigs, newSelectedNamedRanges),
      selectedRanges,
      newSelectedNamedRanges
    );

    updateCalendarRanges(newSelectedRanges);
    updateNamedCalendarRanges(newSelectedNamedRanges);
  }
);

const DatePickerSidebar = ({
  rangeConfig,
  selectedSidebarRanges,
  onNamedRangeSelect,
  ...restProps
}) => {
  const domProps = R.omit(
    ['dispatch', 'selectedRanges', 'onCalendarRangeUpdate'],
    restProps
  );
  
  return (
    <div {...domProps} className={'vs-date-picker-sidebar'}>
      {R.addIndex(R.zipWith)(
        (config, selected, index) => (
          <SidebarRangeSection
            key={config.title}
            config={config}
            selectedId={selected}
            onRangeSelect={onNamedRangeSelect(index)}
          />
        ),
        rangeConfig,
        selectedSidebarRanges
      )}
    </div>
  );
};

DatePickerSidebar.propTypes = {
  onNamedRangeSelect: PropTypes.func,
  rangeConfig: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      ranges: PropTypes.array,
    })
  ),
  selectedSidebarRanges: PropTypes.arrayOf(PropTypes.string),
  comparisonRanges: PropTypes.arrayOf(PropTypes.array),
};

const languageToLocale = {
  cs,
  de,
  en: enUS,
  es,
  fr,
  pl,
  zh: zhCN,
  ja,
  pt,
};

export const languageToDateFormat = {
  cs: 'D. MMMM YYYY',
  de: 'D. MMMM YYYY',
  en: 'MMMM D, YYYY',
  es: 'D [de] MMMM [de] YYYY',
  fr: 'D MMMM YYYY',
  pl: 'D MMMM YYYY',
  zh: 'YYYY年MMMMD日',
  pt: 'D [de] MMMM [de] YYYY',
  ja: 'YYYY年M月D日',
};

const internalDateFormat = 'yyyy-MM-dd';
function fromInternalDateFormat(date) {
  return DateTime.fromFormat(date, internalDateFormat).toLocal();
}

export const _internal = { internalDateFormat, fromInternalDateFormat };

const rangeToCalendarInput = (range, intervalColor) => {
  return {
    startDate: range[0] && fromInternalDateFormat(range[0]).toJSDate(),
    endDate: range[1] && fromInternalDateFormat(range[1]).toJSDate(),
    range1: range,
    color: intervalColor,
  };
};

function updateSelectedRanges(idx, newRange, selectedRanges) {
  return R.update(
    idx,
    R.map(v => v && DateTime.fromJSDate(v).toFormat('yyyy-MM-dd'), newRange),
    selectedRanges
  );
}

const adaptToReactDateRange = (intervalColors, intervals, namedIntervals) => {
  let result = R.zipWith(rangeToCalendarInput, intervals, intervalColors);
  result = R.zipWith(
    (range, interval) => (interval === 'none' ? null : range),
    result,
    namedIntervals
  );
  return R.filter(R.identity, result);
};

export const DatePicker = ({
  updateCalendarRanges,
  updateNamedCalendarRanges,
  onApply,
  onCancel = () => {},
  selectableRange: [minDate, maxDate],
  selectedRanges,
  selectedNamedRanges,
  sidebarConfig,
  cancelButtonText = 'Cancel',
  applyButtonText = 'Apply',
  locale = 'en',
  dateFormat = languageToDateFormat[locale],
  intervalColors = ['#05afec', '#0061ac'],
  className,
  ...restProps
}) => {
  const rangeSelectHandler = doSidebarRangeSelect(
    sidebarConfig,
    selectedNamedRanges,
    updateNamedCalendarRanges,
    updateCalendarRanges
  );

  const calendarRangeInput = adaptToReactDateRange(
    intervalColors,
    selectedRanges,
    selectedNamedRanges
  );
  return (
    <div
      {...restProps}
      className={classnames(className, 'vs-date-picker', {
        'vs-date-picker-side-by-side': R.length(calendarRangeInput) === 2,
      })}
    >
      <div className="vs-date-picker-calendars">
        <DatePickerSidebar
          rangeConfig={sidebarConfig}
          onNamedRangeSelect={rangeSelectHandler(selectedRanges)}
          selectedSidebarRanges={selectedNamedRanges}
          selectedRanges={selectedRanges}
          onCalendarRangeUpdate={updateCalendarRanges}
        />
        <div className="vs-date-pickers">
          {R.addIndex(R.zipWith)(
            (range, className, idx) => (
              <DateRange
                key={className}
                className={className}
                onChange={({ range1: range }) => {
                  rangeSelectHandler(
                    updateSelectedRanges(
                      idx,
                      R.props(['startDate', 'endDate'], range),
                      selectedRanges
                    ),
                    idx,
                    'custom'
                  );
                }}
                moveRangeOnFirstSelection={false}
                ranges={[range]}
                minDate={fromInternalDateFormat(minDate).toJSDate()}
                maxDate={fromInternalDateFormat(maxDate).toJSDate()}
                direction="vertical"
                scroll={{ enabled: false }}
                locale={languageToLocale[locale]}
                dateDisplayFormat={dateFormat}
              />
            ),
            calendarRangeInput,
            ['vs-calendar', 'vs-comparison-calendar vs-calendar']
          )}
        </div>
      </div>
      <div className="vs-button-bar">
        <Button
          type="text"
          onClick={(...args) => {
            onCancel(...args);
          }}
          className="vs-cancel-button"
        >
          {cancelButtonText}
        </Button>
        <Button
          type="solid-primary"
          onClick={_ =>
            onApply(
              R.map(R.prop('range1'), calendarRangeInput),
              selectedNamedRanges
            )
          }
          className="vs-apply-button"
        >
          {applyButtonText}
        </Button>
      </div>
    </div>
  );
};
DatePicker.propTypes = {
  selectedRanges: PropTypes.array,
  selectedNamedRanges: PropTypes.arrayOf(PropTypes.string),
  sidebarConfig: PropTypes.arrayOf(rangeConfigShape),
  selectableRange: PropTypes.array,
  updateCalendarRanges: PropTypes.func.isRequired,
  updateNamedCalendarRanges: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  cancelButtonText: PropTypes.node,
  applyButtonText: PropTypes.node,
};

export default withErrorBoundary(DatePicker);

/*
 * Usage: sidebarSection(
 *     sectionRange('id', 'Label', ["2018-01-01", "2018-02-02"]),
 *     sectionTitle('Title'),
 * )
 */
export const sidebarSection = (title, ...ranges) =>
  R.pipe(
    title,
    ...ranges
  )({});
export const sectionTitle = R.assoc('title');
export const sectionRange = (id, label, range) => section =>
  R.over(R.lensProp('ranges'), R.append({ id, label, range }), section);
