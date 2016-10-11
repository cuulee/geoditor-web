'use strict';

const fs = require('fs');

fs.readFile('pmm_polygons_stuttgart.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  const response = JSON.parse(data);
  let polygons = response.result.items;

  polygons = polygons.filter((p) => p.zoneType === 'RELOCATIONZONE');

  let geojson = polygons.map((p) => p.coords);

  geojson = geojson.map((p) => {
    const feature = {
      type: 'Feature',
      geometry: p,
      properties: {
        geoditorCategory: 'Districts',
      },
    };

    return feature;
  });

  const reduced = geojson.splice(0, 150);

  console.log(JSON.stringify(reduced));

  console.log(reduced.length);
});
