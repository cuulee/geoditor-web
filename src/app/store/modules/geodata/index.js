/* ============
 * Geodata Module
 * ============
 */

/* eslint-disable */
const json = '{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[9.170837402343752,48.79711496094425],[9.163970947265627,48.78806790179962],[9.185771942138674,48.784109300424035],[9.188003540039064,48.794740265830924],[9.170837402343752,48.79711496094425]]]}}';
/* eslint-enable */

export default {
  state: {
    data: [
      JSON.parse(json),
    ],
    properties: ['Category', 'Name', 'Parking Spots'],
  },
  mutations: {
    GEODATA(state, data) {
      state.data = data;
    },
  },
};
