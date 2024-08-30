import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import { useEffect } from 'react';

// Define icon styles
const icon = L.icon({
  iconUrl: '/images/marker-icon.png', // Custom marker icon path
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const damLocations = [
  {
    id: 1,
    name: "Potential Risky Dam 1",
    position: [27.9881, 86.9250], // Example coordinates (Mt. Everest)
  },
  {
    id: 2,
    name: "Potential Risky Dam 2",
    position: [28.3949, 84.1240], // Example coordinates (Nepal)
  },
  // Add more dam locations as needed
];

const Maps = () => {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/images/marker-icon-2x.png',
      iconUrl: '/images/marker-icon.png',
      shadowUrl: '/images/marker-shadow.png',
    });
  }, []);

  return (
    <div className="w-full h-full">
      <MapContainer center={[27.9881, 86.9250]} zoom={5} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {damLocations.map((dam) => (
          <Marker key={dam.id} position={dam.position} icon={icon}>
            <Popup>
              <div>
                <h3>{dam.name}</h3>
                <p>Risk Level: High</p>
                <p>Click for more info.</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Maps;
