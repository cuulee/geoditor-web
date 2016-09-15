import locationService from './../../services/location';
import store from './../../store';

export default {
  mixins: [
  ],
  props: {
  },
  data() {
    return {
      address: '',
    };
  },
  methods: {
    search(loc) {
      if (loc.length > 0) {
        window.clearTimeout(this.searchTimer);
        this.searchTimer = window.setTimeout(() => {
          locationService.search(loc);
        }, 300);
      } else {
        locationService.clearResults();
      }
    },
    selectLocation(latlng) {
      locationService.setLocation(latlng);
      this.address = '';
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
