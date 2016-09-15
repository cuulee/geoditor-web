import Vue from 'vue';
import store from './../../store';

const searchAddress = (address) => {
  Vue.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`).then((response) => {
    const result = JSON.parse(response.body).results;
    store.dispatch('searchLocation', result);
  }, () => {
    // error
  });
};

const clearResults = () => {
  store.dispatch('searchLocation', null);
};

const setLocation = ({ lat, lng }) => {
  store.dispatch('setLocation', [lat, lng]);
  clearResults();
};

export default {
  search: searchAddress,
  clearResults,
  setLocation,
};
