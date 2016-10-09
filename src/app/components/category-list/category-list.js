import _ from 'lodash';
import store from './../../store';

export default {
  mixins: [
  ],
  props: [],
  data() {
    const geodata = store.state.geo.data;

    const categories = geodata.map((feature) => feature.properties.geoditorCategory);

    return {
      categories: _.uniq(categories),
    };
  },
  computed: {
  },
  methods: {
  },
  watch: {
  },
  mounted() {
  },
};
