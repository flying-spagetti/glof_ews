"use client";
import Image from "next/image";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Public';
import AlertsIcon from '@mui/icons-material/Warning';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <main className="flex min-h-screen bg-gray-700">
      {/* Right-Side Navigation */}
      <aside className="fixed left-0 top-0 w-64 h-full bg-black shadow-lg p-6 flex flex-col justify-between">
        <nav>
          <ul>
            <li 
              className={`mb-6 cursor-pointer flex items-center ${activeMenu === "dashboard" ? "text-blue-600" : "text-white"}`}
              onClick={() => setActiveMenu("dashboard")}
            >
              <DashboardIcon className="mr-3" /> Dashboard
            </li>
            <li 
              className={`mb-6 cursor-pointer flex items-center ${activeMenu === "map" ? "text-blue-600" : "text-white"}`}
              onClick={() => setActiveMenu("map")}
            >
              <MapIcon className="mr-3" /> Country Map
            </li>
            <li 
              className={`mb-6 cursor-pointer flex items-center ${activeMenu === "alerts" ? "text-blue-600" : "text-white"}`}
              onClick={() => setActiveMenu("alerts")}
            >
              <AlertsIcon className="mr-3" /> Alerts
            </li>
            <li 
              className={`mb-6 cursor-pointer flex items-center ${activeMenu === "settings" ? "text-blue-600" : "text-white"}`}
              onClick={() => setActiveMenu("settings")}
            >
              <SettingsIcon className="mr-3" /> Settings
            </li>
          </ul>
        </nav>
        <div className="text-white text-sm">
          © 2024 GLOF-EWS
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-64">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="relative w-full h-64 mb-8">
            <img
              src="//public/lorenzo-castagnone-xwTYw9knAG8-unsplash.jpg" 
              alt="Glacial Lake"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
              <h1 className="text-5xl font-bold mb-2">GLOF-EWS</h1>
              <p className="text-xl">Glacial Lake Outburst Flood Early Warning System</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
                Explore the Dashboard
              </button>
            </div>
          </div>

          {/* Active Section Content */}
          <section>
            {activeMenu === "dashboard" && <Dashboard />}
            {activeMenu === "map" && <CountryMap />}
            {activeMenu === "alerts" && <Alerts />}
            {activeMenu === "settings" && <Settings />}
          </section>
        </div>
      </div>
    </main>
  );
}

function Dashboard() {
  return <div>Dashboard Content</div>;
}

function CountryMap() {
  return <div>
    Maps
  </div>;
}

function Alerts() {
  return <div>Alerts Content</div>;
}

function Settings() {
  return <div>Settings Content</div>;
}
