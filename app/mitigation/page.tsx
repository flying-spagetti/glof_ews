"use client";

import React, { useState } from 'react';
import MitigationProtocol from '../components/MitigationProtocol';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Mock data for demonstration
const mockCityData = [
  {
    city: "Kathmandu",
    anomalyType: "Rising Water Levels",
    riskLevel: "high",
    lastUpdated: "2024-04-12 10:30 AM",
    steps: [
      {
        title: "Evacuation Planning",
        description: "Coordinate with local authorities to establish evacuation routes and safe zones",
        icon: <FaMapMarkedAlt className="text-blue-500 text-2xl" />,
        status: "in-progress",
        timeEstimate: "2 hours"
      },
      {
        title: "Emergency Shelters",
        description: "Set up temporary shelters in designated safe areas",
        icon: <FaUsers className="text-green-500 text-2xl" />,
        status: "pending",
        timeEstimate: "4 hours"
      },
      {
        title: "Medical Support",
        description: "Deploy medical teams and supplies to affected areas",
        icon: <FaHospital className="text-red-500 text-2xl" />,
        status: "completed",
        timeEstimate: "1 hour"
      }
    ]
  },
  {
    city: "Pokhara",
    anomalyType: "Glacial Lake Monitoring",
    riskLevel: "medium",
    lastUpdated: "2024-04-12 09:45 AM",
    steps: [
      {
        title: "Sensor Deployment",
        description: "Install additional monitoring sensors around the glacial lake",
        icon: <FaMapMarkedAlt className="text-blue-500 text-2xl" />,
        status: "in-progress",
        timeEstimate: "3 hours"
      },
      {
        title: "Community Alert",
        description: "Issue early warning to local communities",
        icon: <FaUsers className="text-green-500 text-2xl" />,
        status: "completed",
        timeEstimate: "30 minutes"
      }
    ]
  }
];

const MitigationPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [riskFilter, setRiskFilter] = useState("all");

  const filteredCities = mockCityData.filter(city => {
    const matchesSearch = city.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk = riskFilter === "all" || city.riskLevel === riskFilter;
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
          Mitigation Protocols
        </motion.h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search cities..."
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

        {/* City Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCities.map((city, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <MitigationProtocol cityData={city} />
            </motion.div>
          ))}
        </div>

        {filteredCities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No cities found matching your criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MitigationPage; 