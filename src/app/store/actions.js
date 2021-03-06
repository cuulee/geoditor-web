/* ============
 * Vuex Actions
 * ============
 *
 * All the actions that can be used
 * inside the store
 */
import * as types from './mutation-types';

// Account
export const getAccount = ({ commit }, account) => {
  commit(types.GET_ACCOUNT, account);
};

// Auth
export const login = ({ commit }, token) => {
  commit(types.LOGIN, token);
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
};

export const checkAuthentication = ({ commit }) => {
  commit(types.CHECK_AUTHENTICATION);
};

export const searchLocation = ({ commit }, result) => {
  commit(types.LOCATION_SEARCH, result);
};

export const setLocation = ({ commit }, latlng) => {
  commit(types.LOCATION_SET, latlng);
};

export const setGeodata = ({ commit }, data) => {
  commit(types.GEODATA, data);
};
