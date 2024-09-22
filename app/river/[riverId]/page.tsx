"use client";
import React, { useEffect, useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import 'chartjs-gauge';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { useParams } from 'next/navigation';

// Register all required elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

// Function to fetch river data
const fetchRiverData = (riverId: string) => {
  // This function would typically make an API call
  // For now, we'll return mock data based on the riverId
  const riverData = {
    ganges: {
      name: "Ganges River",
      regionRescueData: [
        { region: "Varanasi", team: "Team A", people: 50 },
        { region: "Kanpur", team: "Team B", people: 30 },
        { region: "Allahabad", team: "Team C", people: 70 },
        { region: "Patna", team: "Team D", people: 45 },
      ],
      waterFlowData: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
        datasets: [
          {
            label: "Waterflow (m³/s)",
            data: [1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1900, 1950],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
          },
        ],
      },
      sensorStrengthData: {
        labels: ["Satellite Imagery", "Weather Sensors", "River Sensors"],
        datasets: [
          {
            label: "Sensor Strength (%)",
            data: [95, 92, 98],
            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
            borderWidth: 1,
          },
        ],
      },
      temperatureData: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
        datasets: [
          {
            label: "Average Temperature (°C)",
            data: [25.5, 26.1, 27.0, 26.7, 25.8, 26.5, 27.3, 27.0, 26.2, 25.9],
            borderColor: "rgba(255, 159, 64, 1)",
            backgroundColor: "rgba(255, 159, 64, 0.2)",
          },
        ],
      },
      waterVolumeData: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
        datasets: [
          {
            label: "Water Volume (m³)",
            data: [525000, 530000, 535000, 540000, 545000, 550000, 555000, 560000, 565000, 570000],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
          },
        ],
      },
      ecologicalImpactData: {
        labels: ['Healthy Species', 'At Risk Species', 'Endangered Species'],
        datasets: [
          {
            data: [55, 30, 15],
            backgroundColor: ['#4CAF50', '#FFC107', '#FF5722'],
          },
        ],
      },
      ribbonData: {
        avgTemp: "26°C",
        totalVolume: "550,000 m³",
        flowSpeed: "5.2 m/s",
        criticalLevel: "High"
      },
      cityData: [
        { name: "Varanasi", risk: "High", topology: "Critical" },
        { name: "Kanpur", risk: "Moderate", topology: "Alert" },
        { name: "Allahabad", risk: "High", topology: "Critical" },
        { name: "Patna", risk: "High", topology: "Critical" },
      ],
      weatherForecast: [
        { day: "Day 1", temp: "30°C", condition: "Sunny", location: "Varanasi" },
        { day: "Day 2", temp: "28°C", condition: "Cloudy", location: "Kanpur" },
        { day: "Day 3", temp: "29°C", condition: "Rainy", location: "Allahabad" },
        { day: "Day 4", temp: "27°C", condition: "Thunderstorm", location: "Patna" },
        { day: "Day 5", temp: "26°C", condition: "Heavy Rain", location: "Kanpur" },
      ],
      regions: [
        { name: 'Varanasi', population: 1200000, team: 'National Disaster Response Team' },
        { name: 'Kanpur', population: 2700000, team: 'Community Rescue Team' },
        { name: 'Allahabad', population: 1500000, team: 'Air Force' },
        { name: 'Patna', population: 2000000, team: 'National Disaster Response Team' },
      ],
    },
    yamuna: {
      name: "Yamuna River",
      regionRescueData: [
        { region: "Delhi", team: "Team E", people: 60 },
        { region: "Agra", team: "Team F", people: 40 },
        { region: "Mathura", team: "Team G", people: 35 },
        { region: "Vrindavan", team: "Team H", people: 25 },
      ],
      waterFlowData: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
        datasets: [
          {
            label: "Waterflow (m³/s)",
            data: [320, 315, 330, 345, 310, 305, 340, 360, 350, 325],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
          },
        ],
      },
      sensorStrengthData: {
        labels: ["Satellite Imagery", "Weather Sensors", "River Sensors"],
        datasets: [
          {
            label: "Sensor Strength (%)",
            data: [88, 90, 93],
            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
            borderWidth: 1,
          },
        ],
      },
      temperatureData: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
        datasets: [
          {
            label: "Average Temperature (°C)",
            data: [24.5, 25.1, 26.0, 25.7, 24.8, 25.5, 26.3, 26.0, 25.2, 24.9],
            borderColor: "rgba(255, 159, 64, 1)",
            backgroundColor: "rgba(255, 159, 64, 0.2)",
          },
        ],
      },
      waterVolumeData: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
        datasets: [
          {
            label: "Water Volume (m³)",
            data: [25000, 26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
          },
        ],
      },
      ecologicalImpactData: {
        labels: ['Healthy Species', 'At Risk Species', 'Endangered Species'],
        datasets: [
          {
            data: [45, 35, 20],
            backgroundColor: ['#4CAF50', '#FFC107', '#FF5722'],
          },
        ],
      },
      ribbonData: {
        avgTemp: "25°C",
        totalVolume: "30,000 m³",
        flowSpeed: "1.8 m/s",
        criticalLevel: "Moderate"
      },
      cityData: [
        { name: "Delhi", risk: "High", topology: "Critical" },
        { name: "Agra", risk: "Moderate", topology: "Alert" },
        { name: "Mathura", risk: "Low", topology: "Stable" },
        { name: "Vrindavan", risk: "Low", topology: "Stable" },
      ],
      weatherForecast: [
        { day: "Day 1", temp: "29°C", condition: "Sunny", location: "Delhi" },
        { day: "Day 2", temp: "27°C", condition: "Partly Cloudy", location: "Agra" },
        { day: "Day 3", temp: "28°C", condition: "Cloudy", location: "Mathura" },
        { day: "Day 4", temp: "26°C", condition: "Light Rain", location: "Vrindavan" },
        { day: "Day 5", temp: "25°C", condition: "Thunderstorm", location: "Delhi" },
      ],
      regions: [
        { name: 'Delhi', population: 19000000, team: 'National Disaster Response Team' },
        { name: 'Agra', population: 1700000, team: 'Community Rescue Team' },
        { name: 'Mathura', population: 450000, team: 'Air Force' },
        { name: 'Vrindavan', population: 63000, team: 'Community Rescue Team' },
      ],
    },
  };

  return riverData[riverId] || riverData.ganges; // Default to Ganges if riverId is not found
};

function sendSmsAlert(regionName: string) {
  const message = `Alert! The ${regionName} region is experiencing flooding. Please evacuate immediately. The National Disaster Response Team is currently deployed to assist in the relief efforts.`;
  if (window.confirm(message)) {
    alert(message);
  }
}

export default function RiverDetails() {
  const [isClient, setIsClient] = useState(false);
  const [riverData, setRiverData] = useState(null);
  const params = useParams();
  const riverId = params.riverId as string;

  useEffect(() => {
    setIsClient(true);
    const data = fetchRiverData(riverId);
    setRiverData(data);
  }, [riverId]);

  if (!isClient || !riverData) {
    return <div className="text-white">Loading...</div>;
  }

  // Prepare rescue team data
  const rescueTeamData = {
    labels: riverData.regionRescueData.map(item => item.region),
    datasets: [{
      label: 'People Rescued',
      data: riverData.regionRescueData.map(item => item.people),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">{riverData.name} Monitoring Dashboard</h1>
          <button onClick={() => window.location.href = '/monitoring'} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Monitoring
          </button>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">River Overview</h2>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(riverData.ribbonData).map(([key, value]) => (
              <div key={key} className="bg-gray-700 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-300 uppercase">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                <p className="text-xl font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-800 shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Waterflow (Last 10 Days)</h3>
            <Line data={riverData.waterFlowData} options={{ responsive: true, plugins: { legend: { labels: { color: 'white' } } }, scales: { x: { ticks: { color: 'white' } }, y: { ticks: { color: 'white' } } } }} height={200} />
          </div>
          <div className="bg-gray-800 shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Sensor Strength</h3>
            <Bar data={riverData.sensorStrengthData} options={{ indexAxis: 'y', responsive: true, plugins: { legend: { labels: { color: 'white' } } }, scales: { x: { ticks: { color: 'white' } }, y: { ticks: { color: 'white' } } } }} height={200} />
          </div>
          <div className="bg-gray-800 shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Temperature Over Time</h3>
            <Line data={riverData.temperatureData} options={{ responsive: true, plugins: { legend: { labels: { color: 'white' } } }, scales: { x: { ticks: { color: 'white' } }, y: { ticks: { color: 'white' } } } }} height={200} />
          </div>
          <div className="bg-gray-800 shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Water Volume by Day</h3>
            <Bar data={riverData.waterVolumeData} options={{ responsive: true, plugins: { legend: { labels: { color: 'white' } } }, scales: { x: { ticks: { color: 'white' } }, y: { ticks: { color: 'white' } } } }} height={200} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-800 shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Rescue Team Distribution</h3>
            <Bar data={rescueTeamData} options={{ responsive: true, plugins: { legend: { labels: { color: 'white' } } }, scales: { x: { ticks: { color: 'white' } }, y: { ticks: { color: 'white' } } } }} height={200} />
          </div>
          <div className="bg-gray-800 shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Ecological Impact</h3>
            <Pie data={riverData.ecologicalImpactData} options={{ responsive: true, plugins: { legend: { labels: { color: 'white' } } } }} height={200} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-800 shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Adjacent Cities & Districts</h3>
            <table className="w-full text-left">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-2">City/District</th>
                  <th className="px-4 py-2">Flood Risk</th>
                  <th className="px-4 py-2">Topology</th>
                </tr>
              </thead>
              <tbody>
                {riverData.cityData.map((city, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-600' : ''}>
                    <td className="px-4 py-2">{city.name}</td>
                    <td className={`px-4 py-2 ${city.risk === 'High' ? 'text-red-500' : city.risk === 'Moderate' ? 'text-yellow-500' : 'text-green-500'}`}>{city.risk}</td>
                    <td className="px-4 py-2">{city.topology}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-800 shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Weather Forecast (Next 5 Days)</h3>
            <table className="w-full text-left">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-2">Day</th>
                  <th className="px-4 py-2">Temperature</th>
                  <th className="px-4 py-2">Condition</th>
                </tr>
              </thead>
              <tbody>
                {riverData.weatherForecast.map((day, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-600' : ''}>
                    <td className="px-4 py-2">{day.day}</td>
                    <td className="px-4 py-2">{day.temp}</td>
                    <td className="px-4 py-2">{day.condition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray-800 shadow-md rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold mb-4">AI-Alert Management System</h3>
          <div className="grid grid-cols-2 gap-4">
            {riverData.regions.map((region) => (
              <div key={region.name} className="bg-gray-700 p-4 rounded-lg">
                <h4 className="text-md font-semibold mb-2">{region.name}</h4>
                <p className="text-sm mb-1">Population: {region.population}</p>
                <p className="text-sm mb-2">Team in Charge: {region.team}</p>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm"
                  onClick={() => sendSmsAlert(region.name)}
                >
                  Send SMS Alert
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Rescue Team Availability</h3>
          <table className="w-full text-left">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-2">Rescue Team</th>
                <th className="px-4 py-2">Members</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-600">
                <td className="px-4 py-2">Community Rescue Team</td>
                <td className="px-4 py-2">50</td>
                <td className="px-4 py-2 text-green-500">Active</td>
              </tr>
              <tr>
                <td className="px-4 py-2">National Disaster Response Team</td>
                <td className="px-4 py-2">40</td>
                <td className="px-4 py-2 text-yellow-500">Standby</td>
              </tr>
              <tr className="bg-gray-600">
                <td className="px-4 py-2">Air Force</td>
                <td className="px-4 py-2">30</td>
                <td className="px-4 py-2 text-red-500">Deployed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
