import Vue from 'vue';
import store from './../../store';

const searchAddress = (address) => {
  Vue.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`).then((response) => {
    const result = JSON.parse(response.body).results;
    store.dispatch('searchLocation', result);
  }, (response) => {
    console.log('ERROR');
    console.log(response);
  });
};

export default {
  search: searchAddress,
};
