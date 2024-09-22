"use client";
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Circle, Popup, useMap, LayersControl, GeoJSON, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-river';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Custom Icon for markers
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom Component to Add Rivers
function RiverLayer() {
  const map = useMap();

  // Ganga River coordinates
  const gangaRiverCoords = [
    [30.455, 78.522],  // Start near Gangotri
    [29.945, 78.163],  // Haridwar
    [26.449, 80.331],  // Kanpur
    [25.594, 85.137],  // Patna
    [22.572, 88.363],  // Near Kolkata
  ];

  // Yamuna River coordinates
  const yamunaRiverCoords = [
    [30.999, 78.459],  // Yamunotri
    [28.613, 77.209],  // Delhi
    [27.176, 78.009],  // Agra
    [25.435, 81.846],  // Allahabad (Prayagraj)
  ];

  // Brahmaputra River coordinates
  const brahmaputraRiverCoords = [
    [30.055, 91.684],  // Tibet
    [26.156, 91.769],  // Guwahati
    [25.594, 89.669],  // Bangladesh border
  ];

  // Styling rivers with a smooth blue gradient and animation
  const riverStyle = {
    minWidth: 2,
    maxWidth: 20,
    color: '#1E90FF',
    opacity: 0.8,
    weight: 3,
    dashArray: '10, 10',
    dashOffset: '0',
    animate: true,
    animationSpeed: 1000
  };

  L.river(gangaRiverCoords, { ...riverStyle, name: 'Ganga' }).addTo(map);
  L.river(yamunaRiverCoords, { ...riverStyle, name: 'Yamuna' }).addTo(map);
  L.river(brahmaputraRiverCoords, { ...riverStyle, name: 'Brahmaputra' }).addTo(map);

  return null;
}

function MapPage() {
  const [indiaGeoJSON, setIndiaGeoJSON] = useState(null);

  useEffect(() => {
    fetch('/india.geojson')
      .then(response => response.json())
      .then(data => setIndiaGeoJSON(data));
  }, []);

  // Danger zone locations with criticality levels
  const dangerZones = [
    { name: 'Haridwar', coords: [29.945, 78.163], river: 'Ganga', criticality: 'high' },
    { name: 'Kanpur', coords: [26.449, 80.331], river: 'Ganga', criticality: 'medium' },
    { name: 'Patna', coords: [25.594, 85.137], river: 'Ganga', criticality: 'high' },
    { name: 'Delhi', coords: [28.613, 77.209], river: 'Yamuna', criticality: 'low' },
    { name: 'Agra', coords: [27.176, 78.009], river: 'Yamuna', criticality: 'medium' },
    { name: 'Guwahati', coords: [26.156, 91.769], river: 'Brahmaputra', criticality: 'high' },
    { name: 'Bangladesh Border', coords: [25.594, 89.669], river: 'Brahmaputra', criticality: 'high' },
  ];

  // Function to determine the color and radius based on criticality
  const getCircleOptions = (criticality) => {
    switch (criticality) {
      case 'high':
        return { color: 'red', fillColor: '#ff4d4d', fillOpacity: 0.7, radius: 150000 };
      case 'medium':
        return { color: 'orange', fillColor: '#ffa500', fillOpacity: 0.7, radius: 100000 };
      case 'low':
        return { color: 'green', fillColor: '#90ee90', fillOpacity: 0.7, radius: 50000 };
      default:
        return { color: 'gray', fillColor: '#d3d3d3', fillOpacity: 0.7, radius: 50000 };
    }
  };

  // Ganga River coordinates
  const gangaRiverCoords = [
    [30.455, 78.522],  // Start near Gangotri
    [29.945, 78.163],  // Haridwar
    [26.449, 80.331],  // Kanpur
    [25.594, 85.137],  // Patna
    [22.572, 88.363],  // Near Kolkata
  ];

  return (
    <MapContainer center={[22.5937, 78.9629]} zoom={5} scrollWheelZoom={true} style={{ height: '80vh', width: '100%' }}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Satellite">
          <TileLayer
            attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            url="https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_ACCESS_TOKEN"
          />
        </LayersControl.BaseLayer>
        
        <LayersControl.Overlay checked name="India Boundary">
          {indiaGeoJSON && (
            <GeoJSON 
              data={indiaGeoJSON} 
              style={() => ({
                color: '#4a83ec',
                weight: 1,
                fillColor: "#1a1d62",
                fillOpacity: 0.1,
              })}
            />
          )}
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Rivers">
          <RiverLayer />
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Danger Zones">
          {dangerZones.map((zone, index) => (
            <Circle
              key={index}
              center={zone.coords}
              {...getCircleOptions(zone.criticality)}
            >
              <Popup>
                <div style={{ fontWeight: 'bold' }}>{zone.name} - {zone.criticality.charAt(0).toUpperCase() + zone.criticality.slice(1)} Risk</div>
                <p>{zone.river} River</p>
              </Popup>
            </Circle>
          ))}
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Ganga River">
          <Polyline
            positions={gangaRiverCoords}
            color="#1E90FF"
            weight={3}
            opacity={0.8}
          >
            <Popup>Ganga River</Popup>
          </Polyline>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}

export default MapPage;
