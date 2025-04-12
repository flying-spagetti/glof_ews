"use client";

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import AlertIcon from '@mui/icons-material/Warning';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MitigationProtocol from '../components/MitigationProtocol';

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
  const [searchTerm, setSearchTerm] = useState("");
  const [riskFilter, setRiskFilter] = useState("all");

  // Mock data for affected areas with mitigation protocols
  const [affectedAreas, setAffectedAreas] = useState([
    {
      name: "Solukhumbu",
      location: [27.6867, 86.7314],
      riskLevel: "high",
      anomalyType: "Rising Water Levels",
      lastUpdated: new Date().toLocaleString(),
      steps: [
        {
          title: "Evacuation Planning",
          description: "Coordinate with local authorities to establish evacuation routes and safe zones",
          icon: <LocationOnIcon className="text-blue-500 text-2xl" />,
          status: "in-progress",
          timeEstimate: "2 hours"
        },
        {
          title: "Emergency Shelters",
          description: "Set up temporary shelters in designated safe areas",
          icon: <PeopleIcon className="text-green-500 text-2xl" />,
          status: "pending",
          timeEstimate: "4 hours"
        }
      ]
    },
    {
      name: "Khumbu",
      location: [27.9619, 86.9333],
      riskLevel: "medium",
      anomalyType: "Glacial Lake Monitoring",
      lastUpdated: new Date().toLocaleString(),
      steps: [
        {
          title: "Sensor Deployment",
          description: "Install additional monitoring sensors around the glacial lake",
          icon: <LocationOnIcon className="text-blue-500 text-2xl" />,
          status: "in-progress",
          timeEstimate: "3 hours"
        },
        {
          title: "Community Alert",
          description: "Issue early warning to local communities",
          icon: <PeopleIcon className="text-green-500 text-2xl" />,
          status: "completed",
          timeEstimate: "30 minutes"
        }
      ]
    }
  ]);

  const [evacuationRoutes, setEvacuationRoutes] = useState(['Route A', 'Route B']);
  const [rescueTeams, setRescueTeams] = useState([
    { name: 'Team Alpha', location: [32.7266, 74.8570] },
    { name: 'Team Beta', location: [34.0837, 74.7973] },
    { name: 'Team Gamma', location: [34.1526, 77.5771] },
  ]);
  const [shelters, setShelters] = useState([
    { name: 'Shelter 1', location: [32.2432, 77.1892], capacity: 200 },
    { name: 'Shelter 2', location: [31.1048, 77.1734], capacity: 150 },
    { name: 'Shelter 3', location: [30.7333, 79.0667], capacity: 180 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const filteredAreas = affectedAreas.filter(area => {
    const matchesSearch = area.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk = riskFilter === "all" || area.riskLevel === riskFilter;
    return matchesSearch && matchesRisk;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-800 mb-8"
        >
          GLOF Alert Dashboard
        </motion.h1>

        {/* Alert Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-600 text-white p-4 rounded-lg mb-6 flex items-center justify-between"
        >
          <div className="flex items-center">
            <AlertIcon className="mr-2" />
            <div>
              <span className="font-bold">Alert Level: {alertLevel}</span>
              <p className="text-sm">Last Updated: {lastUpdated.toLocaleString()}</p>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search affected areas..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <select
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            aria-label="Filter by risk level"
          >
            <option value="all">All Risk Levels</option>
            <option value="low">Low Risk</option>
            <option value="medium">Medium Risk</option>
            <option value="high">High Risk</option>
            <option value="critical">Critical Risk</option>
          </select>
        </div>

        {/* Emergency Map */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Emergency Map</h2>
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
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

        {/* Mitigation Protocols */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Mitigation Protocols</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <MitigationProtocol 
                  cityData={{
                    city: area.name,
                    anomalyType: area.anomalyType,
                    riskLevel: area.riskLevel,
                    steps: area.steps,
                    lastUpdated: area.lastUpdated
                  }} 
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <PeopleIcon className="text-red-500" />
              <span>Rescue Coordination: +977 1234567890</span>
            </div>
            <div className="flex items-center space-x-2">
              <LocalHospitalIcon className="text-blue-500" />
              <span>Emergency Medical Services: +977 9876543210</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsPage;
