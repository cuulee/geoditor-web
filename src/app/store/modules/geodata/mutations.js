import {
  GEODATA,
} from './../../mutation-types';

export default {
  [GEODATA](state, data) {
    state.data = data;
  },
};
