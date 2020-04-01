import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CURRENT_MONTH } from '../constants';

const AvailabilityFilter = {
  All: 'all',
  ThisMonth: 'thisMonth',
  NewThisMonth: 'newThisMonth',
  LeavingThisMonth: 'leavingThisMonth',
  NotThisMonth: 'notThisMonth',
};

const HemisphereFilter = {
  Northern: 'northern',
  Southern: 'southern',
};

const PREV_MONTH = CURRENT_MONTH - 1 < 1 ? 12 : CURRENT_MONTH - 1;
const NEXT_MONTH = CURRENT_MONTH + 1 > 12 ? 1 : CURRENT_MONTH + 1;

const FilterableCritterList = ({ data, rowRenderer }) => {
  const [availabilityFilter, setAvailabilityFilter] = useState(
    AvailabilityFilter.All
  );
  const [hemisphereFilter, setHemisphereFilter] = useState(
    HemisphereFilter.Northern
  );

  let items =
    hemisphereFilter === HemisphereFilter.Northern
      ? data.northernHemisphere
      : data.southernHemisphere;

  if (availabilityFilter === AvailabilityFilter.ThisMonth) {
    items = items.filter(item => item.months[CURRENT_MONTH]);
  } else if (availabilityFilter === AvailabilityFilter.NewThisMonth) {
    items = items.filter(
      item => item.months[CURRENT_MONTH] && !item.months[PREV_MONTH]
    );
  } else if (availabilityFilter === AvailabilityFilter.LeavingThisMonth) {
    items = items.filter(
      item => item.months[CURRENT_MONTH] && !item.months[NEXT_MONTH]
    );
  } else if (availabilityFilter === AvailabilityFilter.NotThisMonth) {
    items = items.filter(item => !item.months[CURRENT_MONTH]);
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
            onChange={e => setAvailabilityFilter(e.target.value)}
            value={availabilityFilter}
          >
            <option value={AvailabilityFilter.All}>All</option>
            <option value={AvailabilityFilter.ThisMonth}>
              Available This Month
            </option>
            <option value={AvailabilityFilter.NewThisMonth}>
              New This Month
            </option>
            <option value={AvailabilityFilter.LeavingThisMonth}>
              Leaving This Month
            </option>
            <option value={AvailabilityFilter.NotThisMonth}>
              Unavailable This Month
            </option>
          </select>
        </div>
        <div>
          <div>
            <label htmlFor="hemisphere">Hemisphere:</label>
          </div>
          <select // eslint-disable-line jsx-a11y/no-onchange
            id="hemisphere"
            onChange={e => setHemisphereFilter(e.target.value)}
            value={hemisphereFilter}
          >
            <option value={HemisphereFilter.Northern}>Northern</option>
            <option value={HemisphereFilter.Southern}>Southern</option>
          </select>
        </div>
      </div>
      {items.map(rowRenderer)}
    </div>
  );
};

FilterableCritterList.propTypes = {
  data: PropTypes.shape({
    northernHemisphere: PropTypes.arrayOf(PropTypes.object).isRequired,
    southernHemisphere: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  rowRenderer: PropTypes.func.isRequired,
};

export default FilterableCritterList;
