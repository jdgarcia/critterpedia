// Run this on https://animalcrossing.fandom.com/wiki/Fish_(New_Horizons)
(function() {
  const getCellData = el => el.textContent.trim();

  const parseMonths = (tds, startIndex) => {
    const months = {};
    for (let i = 0; i < 12; i++) {
      months[i + 1] = getCellData(tds[startIndex + i]) === '✓';
    }
    return months;
  };

  const parseFish = divTitle => {
    const dataRows = document.querySelectorAll(
      `div[title="${divTitle}"] table.sortable tbody tr`
    );
    return Array.prototype.map.call(dataRows, tr => {
      const tds = tr.querySelectorAll('td');

      return {
        name: getCellData(tds[0]),
        price: getCellData(tds[2]),
        location: getCellData(tds[3]),
        shadowSize: getCellData(tds[4]),
        timeOfDay: getCellData(tds[5]),
        months: parseMonths(tds, 6),
      };
    });
  };

  const fish = {
    northernHemisphere: parseFish('Northern Hemisphere'),
    southernHemisphere: parseFish('Southern Hemisphere'),
    lastUpdated: new Date().toISOString(),
  };

  copy(fish);
})();
