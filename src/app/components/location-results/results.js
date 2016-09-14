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
  },
  computed: {
    location() {
      return store.state.location;
    },
  },
  mounted() {
  },
};
