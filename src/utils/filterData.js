import {
  AvailabilityFilter,
  HemisphereFilter,
  CURRENT_MONTH,
} from '../constants';

const PREV_MONTH = CURRENT_MONTH - 1 < 1 ? 12 : CURRENT_MONTH - 1;
const NEXT_MONTH = CURRENT_MONTH + 1 > 12 ? 1 : CURRENT_MONTH + 1;

const filterData = (data, filters) => {
  let items =
    filters.hemisphereFilter === HemisphereFilter.Northern
      ? data.northernHemisphere
      : data.southernHemisphere;

  switch (filters.availabilityFilter) {
    case AvailabilityFilter.ThisMonth:
      return items.filter(item => item.months[CURRENT_MONTH]);

    case AvailabilityFilter.NewThisMonth:
      return items.filter(
        item => item.months[CURRENT_MONTH] && !item.months[PREV_MONTH]
      );

    case AvailabilityFilter.LeavingThisMonth:
      return items.filter(
        item => item.months[CURRENT_MONTH] && !item.months[NEXT_MONTH]
      );

    case AvailabilityFilter.NotThisMonth:
      return items.filter(item => !item.months[CURRENT_MONTH]);

    default:
      return items;
  }
};

export default filterData;
