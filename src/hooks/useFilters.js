import { useState } from 'react';

import { AvailabilityFilter, HemisphereFilter } from '../constants';

const useFilters = () => {
  const [availabilityFilter, setAvailabilityFilter] = useState(
    AvailabilityFilter.All
  );
  const [hemisphereFilter, setHemisphereFilter] = useState(
    HemisphereFilter.Northern
  );

  return {
    availabilityFilter,
    setAvailabilityFilter,
    hemisphereFilter,
    setHemisphereFilter,
  };
};

export default useFilters;
