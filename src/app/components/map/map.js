import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.pm/dist/leaflet.pm.css';

import store from './../../store';

export default {
  mixins: [
  ],
  props: {
  },
  data() {
    return {
      map: null,
      latlng: [51.505, -0.09],
    };
  },
  computed: {
    center() {
      const latlng = store.state.location.activeLocation || this.latlng;
      if (this.map) {
        this.map.setView(latlng, 13);
      }
      return latlng;
    },
  },
  mounted() {
    this.map = L.map('map');
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
