import {
  GEODATA,
} from './../../mutation-types';

export default {
  [GEODATA](state, geolayers) {
    state.geolayers = geolayers;
  },
};
