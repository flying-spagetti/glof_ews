"use client";

import React from 'react';
import { FaWater, FaMountain, FaCloudRain, FaExclamationTriangle, FaChartLine } from 'react-icons/fa';
import { GiDam } from 'react-icons/gi';
import { motion } from 'framer-motion';

interface RiskFactor {
  name: string;
  value: number;
  description: string;
}

interface CityRisk {
  name: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  riskFactors: RiskFactor[];
  mitigationSteps: {
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    status: 'pending' | 'in-progress' | 'completed';
    timeEstimate: string;
  }[];
  lastUpdated: string;
}

const CityRiskAssessment: React.FC<{ cityData: CityRisk }> = ({ cityData }) => {
  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'high': return 'bg-orange-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
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
          <h2 className="text-2xl font-bold">{cityData.name}</h2>
          <div className="flex items-center space-x-2">
            <FaExclamationTriangle />
            <span className="text-sm">Last Updated: {cityData.lastUpdated}</span>
          </div>
        </div>
        <p className="text-sm mt-1">Risk Level: {cityData.riskLevel.toUpperCase()}</p>
      </div>

      {/* Risk Factors */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold mb-4">Risk Factors</h3>
        <div className="space-y-4">
          {cityData.riskFactors.map((factor, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{factor.name}</p>
                <p className="text-sm text-gray-600">{factor.description}</p>
              </div>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-full rounded-full ${
                    factor.value > 75 ? 'bg-red-500' : 
                    factor.value > 50 ? 'bg-orange-500' : 
                    factor.value > 25 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${factor.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mitigation Steps */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Mitigation Protocol</h3>
        <div className="space-y-4">
          {cityData.mitigationSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg ${getStatusColor(step.status)}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{step.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`text-sm font-medium ${getPriorityColor(step.priority)}`}>
                    {step.priority.toUpperCase()} PRIORITY
                  </span>
                  <span className="text-sm text-gray-500">{step.timeEstimate}</span>
                </div>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(step.status)}`} />
                <span className="text-sm capitalize">{step.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CityRiskAssessment; 