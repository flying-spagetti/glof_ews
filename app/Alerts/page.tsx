"use client";

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import AlertIcon from '@mui/icons-material/Warning';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

// Leaflet icon setup
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

const AlertsPage = () => {
  const [alertLevel, setAlertLevel] = useState('High');
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [affectedAreas, setAffectedAreas] = useState(['Solukhumbu', 'Khumbu']);
  const [evacuationRoutes, setEvacuationRoutes] = useState(['Route A', 'Route B']);
  const [rescueTeams, setRescueTeams] = useState([
    { name: 'Team Alpha', location: [32.7266, 74.8570] }, // Jammu
    { name: 'Team Beta', location: [34.0837, 74.7973] },  // Srinagar
    { name: 'Team Gamma', location: [34.1526, 77.5771] }, // Leh
  ]);
  const [shelters, setShelters] = useState([
    { name: 'Shelter 1', location: [32.2432, 77.1892], capacity: 200 }, // Manali
    { name: 'Shelter 2', location: [31.1048, 77.1734], capacity: 150 }, // Shimla
    { name: 'Shelter 3', location: [30.7333, 79.0667], capacity: 180 }, // Gangotri
  ]);

  useEffect(() => {
    // Simulating real-time updates
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Glacial Lake Outburst Flood Alerts</h1>
      
      <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
        <AlertIcon className="mr-2" />
        <span className="font-bold">Alert Level: {alertLevel}</span>
        <p>Last Updated: {lastUpdated.toLocaleString()}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Affected Areas</h2>
          <ul>
            {affectedAreas.map((area, index) => (
              <li key={index} className="flex items-center">
                <LocationOnIcon className="mr-2" /> {area}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Evacuation Routes</h2>
          <ul>
            {evacuationRoutes.map((route, index) => (
              <li key={index}>{route}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Emergency Map</h2>
        <div style={{ height: '400px' }}>
          <MapContainer center={[27.7172, 85.3240]} zoom={12} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {rescueTeams.map((team, index) => (
              <Marker key={index} position={team.location}>
                <Popup>{team.name}</Popup>
              </Marker>
            ))}
            {shelters.map((shelter, index) => (
              <Marker key={index} position={shelter.location}>
                <Popup>{`${shelter.name} (Capacity: ${shelter.capacity})`}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Emergency Contacts</h2>
        <ul>
          <li className="flex items-center mb-2">
            <PeopleIcon className="mr-2" /> Rescue Coordination: +977 1234567890
          </li>
          <li className="flex items-center">
            <LocalHospitalIcon className="mr-2" /> Emergency Medical Services: +977 9876543210
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AlertsPage;
