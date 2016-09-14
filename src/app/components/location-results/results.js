import locationService from './../../services/location';
import store from './../../store';


export default {
  mixins: [
  ],
  props: {
  },
  methods: {
    selectLocation(latlng) {
      locationService.setLocation(latlng);
    },
  },
  computed: {
    location() {
      return store.state.location;
    },
  },
  mounted() {
  },
};
