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
      console.log('why');
      if (this.map) {
        this.map.panTo(latlng);
      }
      return latlng;
    },
  },
  mounted() {
    this.map = L.map('map').setView(this.latlng, 13);
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
