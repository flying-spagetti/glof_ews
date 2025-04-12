"use client";

import React, { useState } from 'react';
import CityRiskAssessment from '../components/CityRiskAssessment';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface RiskFactor {
  name: string;
  value: number;
  description: string;
}

interface MitigationStep {
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'completed';
  timeEstimate: string;
}

interface CityRisk {
  name: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  lastUpdated: string;
  riskFactors: RiskFactor[];
  mitigationSteps: MitigationStep[];
}

// Mock data for city risk assessments
const cityRiskData: CityRisk[] = [
  {
    name: "Kathmandu",
    riskLevel: "high",
    lastUpdated: "2024-03-15",
    riskFactors: [
      { name: "Population Density", value: 85, description: "High population density in vulnerable areas" },
      { name: "Infrastructure", value: 75, description: "Aging infrastructure in flood-prone zones" },
      { name: "Early Warning", value: 60, description: "Limited early warning system coverage" }
    ],
    mitigationSteps: [
      {
        title: "Early Warning System",
        description: "Implement comprehensive early warning system",
        priority: "high",
        status: "in-progress",
        timeEstimate: "6 months"
      },
      {
        title: "Infrastructure Upgrade",
        description: "Strengthen critical infrastructure in flood zones",
        priority: "high",
        status: "pending",
        timeEstimate: "12 months"
      }
    ]
  },
  {
    name: "Pokhara",
    riskLevel: "medium",
    lastUpdated: "2024-03-14",
    riskFactors: [
      { name: "Tourism Impact", value: 70, description: "High tourist population during peak seasons" },
      { name: "Lake Proximity", value: 65, description: "Close proximity to Phewa Lake" },
      { name: "Evacuation Routes", value: 55, description: "Limited evacuation routes" }
    ],
    mitigationSteps: [
      {
        title: "Tourist Safety Protocol",
        description: "Develop and implement tourist safety protocols",
        priority: "medium",
        status: "in-progress",
        timeEstimate: "3 months"
      },
      {
        title: "Route Planning",
        description: "Establish additional evacuation routes",
        priority: "medium",
        status: "pending",
        timeEstimate: "6 months"
      }
    ]
  },
  {
    name: "Solukhumbu",
    riskLevel: "critical",
    lastUpdated: "2024-03-15",
    riskFactors: [
      { name: "Glacial Proximity", value: 95, description: "Direct exposure to glacial lakes" },
      { name: "Altitude", value: 90, description: "High altitude settlements" },
      { name: "Accessibility", value: 85, description: "Limited access for emergency services" }
    ],
    mitigationSteps: [
      {
        title: "Glacial Lake Monitoring",
        description: "Enhance monitoring of nearby glacial lakes",
        priority: "high",
        status: "in-progress",
        timeEstimate: "2 months"
      },
      {
        title: "Emergency Response Plan",
        description: "Develop mountain-specific emergency response plan",
        priority: "high",
        status: "pending",
        timeEstimate: "4 months"
      }
    ]
  },
  {
    name: "Namche Bazaar",
    riskLevel: "high",
    lastUpdated: "2024-03-14",
    riskFactors: [
      { name: "Tourist Hub", value: 80, description: "Major tourist destination" },
      { name: "Mountain Location", value: 75, description: "Located in mountainous terrain" },
      { name: "Limited Resources", value: 70, description: "Limited local resources for disaster response" }
    ],
    mitigationSteps: [
      {
        title: "Tourist Evacuation Plan",
        description: "Create specialized evacuation plan for tourists",
        priority: "high",
        status: "in-progress",
        timeEstimate: "3 months"
      },
      {
        title: "Resource Stockpiling",
        description: "Establish emergency resource stockpiles",
        priority: "medium",
        status: "pending",
        timeEstimate: "2 months"
      }
    ]
  },
  {
    name: "Lukla",
    riskLevel: "high",
    lastUpdated: "2024-03-13",
    riskFactors: [
      { name: "Airport Vulnerability", value: 85, description: "Critical airport infrastructure at risk" },
      { name: "Gateway Location", value: 80, description: "Primary gateway to Everest region" },
      { name: "Population Surge", value: 75, description: "Seasonal population increases" }
    ],
    mitigationSteps: [
      {
        title: "Airport Protection",
        description: "Implement flood protection measures for airport",
        priority: "high",
        status: "in-progress",
        timeEstimate: "4 months"
      },
      {
        title: "Alternative Routes",
        description: "Develop alternative access routes",
        priority: "medium",
        status: "pending",
        timeEstimate: "6 months"
      }
    ]
  },
  {
    name: "Dingboche",
    riskLevel: "medium",
    lastUpdated: "2024-03-12",
    riskFactors: [
      { name: "High Altitude", value: 80, description: "Located at high altitude" },
      { name: "Limited Infrastructure", value: 70, description: "Basic infrastructure" },
      { name: "Remote Location", value: 65, description: "Remote mountain location" }
    ],
    mitigationSteps: [
      {
        title: "Local Training",
        description: "Train local community in emergency response",
        priority: "medium",
        status: "in-progress",
        timeEstimate: "2 months"
      },
      {
        title: "Communication Setup",
        description: "Establish reliable communication systems",
        priority: "medium",
        status: "pending",
        timeEstimate: "3 months"
      }
    ]
  },
  {
    name: "Leh, Ladakh",
    riskLevel: "high",
    lastUpdated: "2024-03-15",
    riskFactors: [
      { name: "Glacial Lake Proximity", value: 85, description: "Close to multiple glacial lakes" },
      { name: "Tourist Destination", value: 80, description: "Major tourist hub in the region" },
      { name: "Infrastructure Vulnerability", value: 75, description: "Critical infrastructure in flood-prone areas" }
    ],
    mitigationSteps: [
      {
        title: "Tourist Safety Protocol",
        description: "Implement comprehensive tourist safety measures",
        priority: "high",
        status: "in-progress",
        timeEstimate: "4 months"
      },
      {
        title: "Infrastructure Protection",
        description: "Strengthen critical infrastructure against floods",
        priority: "high",
        status: "pending",
        timeEstimate: "8 months"
      }
    ]
  },
  {
    name: "Gangtok, Sikkim",
    riskLevel: "critical",
    lastUpdated: "2024-03-14",
    riskFactors: [
      { name: "Population Density", value: 90, description: "High population in vulnerable areas" },
      { name: "Mountain Location", value: 85, description: "Located in seismically active zone" },
      { name: "Glacial Lake Risk", value: 95, description: "Downstream of multiple glacial lakes" }
    ],
    mitigationSteps: [
      {
        title: "Early Warning System",
        description: "Deploy advanced early warning system",
        priority: "high",
        status: "in-progress",
        timeEstimate: "6 months"
      },
      {
        title: "Evacuation Planning",
        description: "Develop comprehensive evacuation plans",
        priority: "high",
        status: "pending",
        timeEstimate: "3 months"
      }
    ]
  },
  {
    name: "Uttarkashi, Uttarakhand",
    riskLevel: "high",
    lastUpdated: "2024-03-13",
    riskFactors: [
      { name: "River Proximity", value: 85, description: "Located near Bhagirathi River" },
      { name: "Historical Events", value: 80, description: "History of GLOF events" },
      { name: "Mountain Roads", value: 75, description: "Vulnerable mountain roads" }
    ],
    mitigationSteps: [
      {
        title: "Road Protection",
        description: "Implement protective measures for mountain roads",
        priority: "high",
        status: "in-progress",
        timeEstimate: "5 months"
      },
      {
        title: "Community Training",
        description: "Train local communities in disaster response",
        priority: "medium",
        status: "pending",
        timeEstimate: "4 months"
      }
    ]
  },
  {
    name: "Dharamshala, Himachal Pradesh",
    riskLevel: "medium",
    lastUpdated: "2024-03-12",
    riskFactors: [
      { name: "Tourist Population", value: 75, description: "Significant tourist population" },
      { name: "Mountain Location", value: 70, description: "Located in Himalayan foothills" },
      { name: "Infrastructure", value: 65, description: "Developing infrastructure" }
    ],
    mitigationSteps: [
      {
        title: "Tourist Awareness",
        description: "Implement tourist awareness programs",
        priority: "medium",
        status: "in-progress",
        timeEstimate: "3 months"
      },
      {
        title: "Infrastructure Assessment",
        description: "Conduct vulnerability assessment of infrastructure",
        priority: "medium",
        status: "pending",
        timeEstimate: "4 months"
      }
    ]
  }
];

const RiskAssessmentPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [riskFilter, setRiskFilter] = useState("all");

  const filteredCities = cityRiskData.filter(city => {
    const matchesSearch = city.name.toLowerCase().includes(searchTerm.toLowerCase());
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
          City Risk Assessment
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
              <CityRiskAssessment cityData={city} />
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

export default RiskAssessmentPage; 