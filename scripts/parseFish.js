// Parses https://animalcrossing.fandom.com/wiki/Fish_(New_Horizons)#Northern%20Hemisphere
(function() {
  const getData = el => el.textContent.trim();
  const isCheckmark = el => getData(el) === '✓';

  const parseMonths = (tds, startIndex) => {
    const months = {};
    for (let i = 0; i < 12; i++) {
      months[i + 1] = getData(tds[startIndex]) === '✓';
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
        name: getData(tds[0]),
        price: getData(tds[2]),
        location: getData(tds[3]),
        shadowSize: getData(tds[4]),
        timeOfDay: getData(tds[5]),
        months: {
          '1': isCheckmark(tds[6]),
          '2': isCheckmark(tds[7]),
          '3': isCheckmark(tds[8]),
          '4': isCheckmark(tds[9]),
          '5': isCheckmark(tds[10]),
          '6': isCheckmark(tds[11]),
          '7': isCheckmark(tds[12]),
          '8': isCheckmark(tds[13]),
          '9': isCheckmark(tds[14]),
          '10': isCheckmark(tds[15]),
          '11': isCheckmark(tds[16]),
          '12': isCheckmark(tds[17]),
        },
      };
    });
  };

  const fish = {
    northernHemishpere: parseFish('Northern Hemisphere'),
    southernHemisphere: parseFish('Southern Hemisphere'),
  };

  copy(fish);
})();
