import L from 'leaflet';

import store from './../../store';

export default {
  mixins: [
  ],
  props: {
  },
  data() {
    return {
      map: null,
      location: store.state.location,
    };
  },
  computed: {
  },
  watch: {
    /* eslint quote-props: 0 */
    'location': {
      deep: true,
      handler(location) {
        if (location.activeLocation) {
          this.map.setView(location.activeLocation, 15);
        }
      },
    },
  },
  mounted() {
    const center = this.location.activeLocation || [51.505, -0.09];
    this.map = L.map('map').setView(center, 13);
    const map = this.map;

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.pm.addControls();

    map.on('pm:create', (e) => {
      const layer = e.layer;
      layer.pm.enable({
        snappable: true,
        draggable: true,
      });
    });
  },
};
