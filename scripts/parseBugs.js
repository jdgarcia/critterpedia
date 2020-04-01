// Run this on https://animalcrossing.fandom.com/wiki/Bugs_(New_Horizons)
(function() {
  const getCellData = el => el.textContent.trim();

  const parseMonths = (tds, startIndex) => {
    const months = {};
    for (let i = 0; i < 12; i++) {
      months[i + 1] = getCellData(tds[startIndex + i]) === '✓';
    }
    return months;
  };

  const parseBugs = divTitle => {
    const dataRows = document.querySelectorAll(
      `div[title="${divTitle}"] table.sortable tbody tr`
    );
    return Array.prototype.map.call(dataRows, tr => {
      const tds = tr.querySelectorAll('td');

      return {
        name: getCellData(tds[0]),
        price: getCellData(tds[2]),
        location: getCellData(tds[3]),
        timeOfDay: getCellData(tds[4]),
        months: parseMonths(tds, 5),
      };
    });
  };

  const bugs = {
    northernHemisphere: parseBugs('Northern Hemisphere'),
    southernHemisphere: parseBugs('Southern Hemisphere'),
    lastUpdated: new Date().toISOString(),
  };

  copy(bugs);
})();
