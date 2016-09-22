import L from 'leaflet';

const mock = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [
              -0.15483856201171872,
              51.527329038465936,
            ],
            [
              -0.16977310180664062,
              51.51643437722083,
            ],
            [
              -0.15964508056640625,
              51.50094238217541,
            ],
            [
              -0.13149261474609375,
              51.5042549065934,
            ],
            [
              -0.11758804321289061,
              51.518463972439385,
            ],
            [
              -0.13303756713867188,
              51.53106680201548,
            ],
            [
              -0.15483856201171872,
              51.527329038465936,
            ],
          ],
        ],
      },
    },
  ],
};

const layer = L.geoJson(mock);

export default {
  layers: [layer],
};
