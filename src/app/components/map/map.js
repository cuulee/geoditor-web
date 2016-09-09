import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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
  },
};
