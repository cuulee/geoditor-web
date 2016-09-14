import locationService from './../../services/location';

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
  },
  computed: {
  },
  mounted() {
  },
};
