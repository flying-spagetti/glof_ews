"use client";

import React from 'react';
import { FaExclamationTriangle, FaCheckCircle, FaClock, FaUsers, FaTruck, FaHospital, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface MitigationStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'pending' | 'in-progress' | 'completed';
  timeEstimate: string;
}

interface CityMitigation {
  city: string;
  anomalyType: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  steps: MitigationStep[];
  lastUpdated: string;
}

const MitigationProtocol: React.FC<{ cityData: CityMitigation }> = ({ cityData }) => {
  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'high': return 'bg-orange-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-gray-200';
      case 'in-progress': return 'bg-blue-200';
      case 'completed': return 'bg-green-200';
      default: return 'bg-gray-200';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* Header */}
      <div className={`p-4 ${getRiskColor(cityData.riskLevel)} text-white`}>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{cityData.city}</h2>
          <div className="flex items-center space-x-2">
            <FaExclamationTriangle />
            <span className="text-sm">Last Updated: {cityData.lastUpdated}</span>
          </div>
        </div>
        <p className="text-sm mt-1">Anomaly Type: {cityData.anomalyType}</p>
      </div>

      {/* Protocol Steps */}
      <div className="p-6 space-y-4">
        {cityData.steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-lg ${getStatusColor(step.status)}`}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {step.icon}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-500" />
                    <span className="text-sm text-gray-600">{step.timeEstimate}</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-1">{step.description}</p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(step.status)}`} />
                  <span className="text-sm capitalize">{step.status}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Emergency Contacts */}
      <div className="bg-gray-50 p-4 border-t">
        <h3 className="text-lg font-semibold mb-2">Emergency Contacts</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <FaPhone className="text-red-500" />
            <span>Emergency Services: 911</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaHospital className="text-blue-500" />
            <span>Medical Services: 112</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaTruck className="text-green-500" />
            <span>Evacuation Support: 113</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaUsers className="text-purple-500" />
            <span>Community Support: 114</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MitigationProtocol; 