import loader from './../../../utils/loader';

export default {
  methods: {
    initMap(map) {
      map.pm.addControls({
        editPolygon: false,
      });
    },
  },
  components: {
    VLayout: loader.layout('default'),
    VPanel: loader.component('panel'),
    VMap: loader.component('map'),
    VLocationSearch: loader.component('location-search'),
    VGeodataFilter: loader.component('geodata-filter'),
  },
};
