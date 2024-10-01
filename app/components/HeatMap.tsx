import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface HeatMapData {
  lat: number;
  lng: number;
  intensity: number;
  city: string;
}

const heatMapData: HeatMapData[] = [
  {lat:79.06590209242177, lng:30.730003601545107, intensity: 0.7, city: 'Kedarnath' },
  { lat: 30.0869, lng: 78.2676, intensity: 0.7, city: 'Rishikesh' },
  { lat: 29.9457, lng: 78.1642, intensity: 0.9, city: 'Haridwar' },
  { lat: 25.3176, lng: 82.9739, intensity: 0.3, city: 'Varanasi' },
  { lat: 25.5941, lng: 85.1376, intensity: 1.0, city: 'Patna' },
  { lat: 25.2425, lng: 87.0079, intensity: 0.6, city: 'Bhagalpur' },
];

const getColor = (intensity: number) => {
  const hue = ((1 - intensity) * 120).toString(10);
  return [`hsl(${hue}, 100%, 50%)`, `hsl(${hue}, 100%, 30%)`];
};

export default function HeatMap() {
  return (
    <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
      <MapContainer center={[26.8467, 80.9462]} zoom={6} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {heatMapData.map((point, index) => (
          <CircleMarker
            key={index}
            center={[point.lat, point.lng]}
            radius={20}
            fillColor={getColor(point.intensity)[0]}
            color={getColor(point.intensity)[1]}
            weight={2}
            fillOpacity={0.7}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1}>
              <div>
                <strong>{point.city}</strong>
                <br />
                Intensity: {(point.intensity * 100).toFixed(0)}%
              </div>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
