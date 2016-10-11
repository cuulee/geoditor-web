/* ============
 * Geodata Module
 * ============
 */

export default {
  state: {
    data: [],
    properties: ['Category', 'Name', 'Parking Spots'],
  },
  mutations: {
    GEODATA(state, data) {
      state.data = data;
    },
  },
};
