"use client";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Public';
import AlertsIcon from '@mui/icons-material/Warning';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';   

export default function Sidemenu() {
    
    const [activeMenu, setActiveMenu] = useState("dashboard");
    return (
        
        <aside className="fixed left-0 top-0 w-64 h-full bg-black shadow-lg p-6 flex flex-col justify-between">
        <nav>
          <ul>
            <li 
              className={`mb-6 cursor-pointer flex items-center ${activeMenu === "dashboard" ? "text-blue-600" : "text-white"}`}
              onClick={() => setActiveMenu("dashboard")}
            >
              <DashboardIcon className="mr-3" /> About
            </li>
            <li 
              className={`mb-6 cursor-pointer flex items-center ${activeMenu === "map" ? "text-blue-600" : "text-white"}`}>
              <a href="http://glofs.geoecology.uni-potsdam.de/" className="flex items-center">
                <MapIcon className="mr-3" /> Country Map
              </a>
            </li>
            <li 
              className={`mb-6 cursor-pointer flex items-center ${activeMenu === "map" ? "text-blue-600" : "text-white"}`}>
              <a href="/monitoring" className="flex items-center">
                <MapIcon className="mr-3" /> Monitoring
              </a>
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
          © SIH 2024 Team 02
        </div>
      </aside>
    )
}