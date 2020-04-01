import React, { useState } from 'react';

import data from '../../content/data';

const currentMonth = new Date().getMonth() + 1;
const prevMonth = currentMonth - 1 < 1 ? 12 : currentMonth - 1;
const nextMonth = currentMonth + 1 > 12 ? 1 : currentMonth + 1;

const unavailableThisMonthStyle = {
  backgroundColor: '#f2f4fd',
  color: '#a1a1a1',
};
const availableThisMonthStyle = {
  backgroundColor: '#b3e2f0',
  color: '#2a2a2a',
  fontWeight: 'bold',
};

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dev',
];

const unavailableMonthStyle = {
  color: '#a1a1a1',
  fontWeight: 'normal',
};
const availableMonthStyle = {
  color: '#2a2a2a',
  fontWeight: 'bold',
};

const FishTable = () => {
  const [hemisphere, setHemisphere] = useState('northern');
  const [filter, setFilter] = useState('all');

  let rows =
    hemisphere === 'northern'
      ? data.fish.northernHemisphere
      : data.fish.southernHemisphere;

  if (filter === 'availableThisMonth') {
    rows = rows.filter(fish => fish.months[currentMonth]);
  } else if (filter === 'newThisMonth') {
    rows = rows.filter(
      fish => fish.months[currentMonth] && !fish.months[prevMonth]
    );
  } else if (filter === 'leavingThisMonth') {
    rows = rows.filter(
      fish => fish.months[currentMonth] && !fish.months[nextMonth]
    );
  } else if (filter === 'unavailableThisMonth') {
    rows = rows.filter(fish => !fish.months[currentMonth]);
  }

  return (
    <div>
      <div className="flex justify-between mb-lg">
        <div>
          <div>
            <label htmlFor="filter">Show:</label>
          </div>
          <select // eslint-disable-line jsx-a11y/no-onchange
            id="filter"
            onChange={e => setFilter(e.target.value)}
            value={filter}
          >
            <option value="all">All</option>
            <option value="availableThisMonth">Available This Month</option>
            <option value="newThisMonth">New This Month</option>
            <option value="leavingThisMonth">Leaving This Month</option>
            <option value="unavailableThisMonth">Unavailable This Month</option>
          </select>
        </div>
        <div>
          <div>
            <label htmlFor="hemisphere">Hemisphere:</label>
          </div>
          <select // eslint-disable-line jsx-a11y/no-onchange
            id="hemisphere"
            onChange={e => setHemisphere(e.target.value)}
            value={hemisphere}
          >
            <option value="northern">Northern</option>
            <option value="southern">Southern</option>
          </select>
        </div>
      </div>
      {rows.map(fish => {
        const rowStyle = fish.months[currentMonth]
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
            <div
              className="flex justify-between"
              style={{ fontSize: '0.7rem' }}
            >
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
      })}
    </div>
  );
};

export default FishTable;
