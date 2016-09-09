import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.pm/dist/leaflet.pm.css';

export default {
  mixins: [
  ],
  props: {
  },
  computed: {
  },
  mounted() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.pm.addControls();

    map.on('pm:create', (e) => {
      const layer = e.layer;
      layer.pm.enable({
        snap: true,
        draggable: true,
      });
    });
  },
};