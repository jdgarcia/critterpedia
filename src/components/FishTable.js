import React from 'react';

import data from '../../content/data';
import { MONTHS, CURRENT_MONTH } from '../constants';
import FilterableCritterList from './FilterableCritterList';

const unavailableThisMonthStyle = {
  backgroundColor: 'white',
  color: '#a1a1a1',
};
const availableThisMonthStyle = {
  backgroundColor: '#b3e2f0',
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

const FishTable = () => {
  const rowRenderer = fish => {
    const rowStyle = fish.months[CURRENT_MONTH]
      ? availableThisMonthStyle
      : unavailableThisMonthStyle;

    return (
      <div
        className="border rounded p mb-lg"
        key={fish.name}
        style={{
          fontSize: '0.8rem',
          marginBottom: '16px',
          ...rowStyle,
        }}
      >
        <div className="flex justify-between">
          <div>{fish.name}</div>
          <div>
            <span role="img" aria-label="price">
              🛎
            </span>
            {fish.price}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex-1">
            <span role="img" aria-label="location">
              🗺
            </span>
            {fish.location}
          </div>
          <div className="flex-1">
            <span role="img" aria-label="time">
              🕐
            </span>
            {fish.timeOfDay}
          </div>
          <div className="flex-1 text-end">Size: {fish.shadowSize}</div>
        </div>
        <div className="flex justify-between" style={{ fontSize: '0.7rem' }}>
          {MONTHS.map((month, i) => {
            const monthStyle = fish.months[i + 1]
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
  };

  return <FilterableCritterList data={data.fish} rowRenderer={rowRenderer} />;
};

export default FishTable;
