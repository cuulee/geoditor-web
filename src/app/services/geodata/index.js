import Vue from 'vue';
import store from './../../store';

const getGeodata = () => {
  Vue.http.get('polygons.json').then((response) => {
    const result = JSON.parse(response.body).results;
    store.dispatch('setGeodata', result);
  }, () => {
    // error
  });
};

export default {
  getGeodata,
};
