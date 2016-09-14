import {
  LOCATION_SEARCH,
} from './../../mutation-types';

export default {
  [LOCATION_SEARCH](state, results) {
    state.searchResults = results;
  },
};
