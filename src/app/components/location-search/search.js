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
      locationService.search(loc);
    },
  },
  computed: {
  },
  mounted() {
  },
};
