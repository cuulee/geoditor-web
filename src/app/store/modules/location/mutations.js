import {
  LOCATION_SEARCH,
  LOCATION_SET,
} from './../../mutation-types';

export default {
  [LOCATION_SEARCH](state, results) {
    state.searchResults = results;
  },
  [LOCATION_SET](state, latlng) {
    state.activeLocation = latlng;
  },
};
