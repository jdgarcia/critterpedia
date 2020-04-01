import React from 'react';

import data from '../../content/data';
import Filters from './Filters';
import useFilters from '../hooks/useFilters';
import filterData from '../utils/filterData';
import { MONTHS, CURRENT_MONTH } from '../constants';

const unavailableThisMonthStyle = {
  backgroundColor: 'white',
  color: '#a1a1a1',
};
const availableThisMonthStyle = {
  backgroundColor: '#fff5c8',
  color: '#2a2a2a',
  fontWeight: 'bold',
};

const unavailableMonthStyle = {
  color: '#a1a1a1',
  fontWeight: 'normal',
};
const availableMonthStyle = {
  color: '#2a2a2a',
  fontWeight: 'bold',
};

const BugTable = () => {
  const filters = useFilters();
  const items = filterData(data.bugs, filters);

  return (
    <div>
      <Filters filters={filters} />
      {items.map(bug => {
        const rowStyle = bug.months[CURRENT_MONTH]
          ? availableThisMonthStyle
          : unavailableThisMonthStyle;

        return (
          <div
            className="border rounded p mb-lg"
            key={bug.name}
            style={{
              fontSize: '0.8rem',
              marginBottom: '16px',
              ...rowStyle,
            }}
          >
            <div className="flex justify-between">
              <div>{bug.name}</div>
              <div>
                <span role="img" aria-label="price">
                  🛎
                </span>
                {bug.price}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex-2">
                <span role="img" aria-label="location">
                  🗺
                </span>
                {bug.location}
              </div>
              <div className="flex-1">
                <span role="img" aria-label="time">
                  🕐
                </span>
                {bug.timeOfDay}
              </div>
            </div>
            <div
              className="flex justify-between"
              style={{ fontSize: '0.7rem' }}
            >
              {MONTHS.map((month, i) => {
                const monthStyle = bug.months[i + 1]
                  ? availableMonthStyle
                  : unavailableMonthStyle;
                return (
                  <div key={month} style={monthStyle}>
                    {month}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BugTable;
