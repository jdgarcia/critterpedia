import React from 'react';
import PropTypes from 'prop-types';

import { AvailabilityFilter, HemisphereFilter } from '../constants';

const Filters = ({ filters }) => {
  return (
    <div className="flex justify-between mb-lg">
      <div>
        <div>
          <label htmlFor="filter">Show:</label>
        </div>
        <select // eslint-disable-line jsx-a11y/no-onchange
          id="filter"
          onChange={e => filters.setAvailabilityFilter(e.target.value)}
          value={filters.availabilityFilter}
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
          onChange={e => filters.setHemisphereFilter(e.target.value)}
          value={filters.hemisphereFilter}
        >
          <option value={HemisphereFilter.Northern}>Northern</option>
          <option value={HemisphereFilter.Southern}>Southern</option>
        </select>
      </div>
    </div>
  );
};

Filters.propTypes = {
  filters: PropTypes.shape({
    availabilityFilter: PropTypes.string.isRequired,
    setAvailabilityFilter: PropTypes.func.isRequired,
    hemisphereFilter: PropTypes.string.isRequired,
    setHemisphereFilter: PropTypes.func.isRequired,
  }).isRequired,
};

export default Filters;
