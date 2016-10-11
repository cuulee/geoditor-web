import store from './../../store';
import geodataService from './../../services/geodata';

export default {
  mixins: [
  ],
  props: {
  },
  data() {
    return {
      properties: store.state.geo.properties,
      name: 'Sumit',
    };
  },
  methods: {
  },
  computed: {
  },
  mounted() {
    console.log(geodataService);
    geodataService.getGeodata();
  },
};
