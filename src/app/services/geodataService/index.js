import store from './../../store';

const lala = () => {
  console.log('get it');
  store.dispatch('setGeodata', ['lala']);
};

export default {
  getGeodata: lala,
};
