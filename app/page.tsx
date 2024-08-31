"use client";
import Image from "next/image";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Public';
import AlertsIcon from '@mui/icons-material/Warning';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import Sidemenu from "./components/Sidemenu";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-800 text-white">
      {/* Right-Side Navigation */}
      <Sidemenu />

      {/* Main Content */}
      <div className="flex-1 p-8 ml-64">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="relative w-full h-96 mb-8">
            <img
              src="/lorenzo-castagnone-xwTYw9knAG8-unsplash.jpg"
              alt="Glacial Lake"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-800 bg-opacity-80 flex flex-col items-center justify-center text-white">
              <h1 className="text-6xl font-bold mb-4">GLOF-EWS</h1>
              <p className="text-2xl mb-8">Glacial Lake Outburst Flood Early Warning System</p>
              <button className="mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition">
                Explore the Dashboard
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-700 rounded-lg shadow-lg p-6">
              <DashboardIcon className="text-blue-500 mb-4" fontSize="large" />
              <h3 className="text-xl font-bold mb-2">Real-Time Monitoring</h3>
              <p>Stay informed with live data from glacial lakes.</p>
            </div>
            <div className="bg-gray-700 rounded-lg shadow-lg p-6">
              <MapIcon className="text-purple-500 mb-4" fontSize="large" />
              <h3 className="text-xl font-bold mb-2">Comprehensive Mapping</h3>
              <p>Visualize and analyze data across multiple glacial regions.</p>
            </div>
            <div className="bg-gray-700 rounded-lg shadow-lg p-6">
              <AlertsIcon className="text-red-500 mb-4" fontSize="large" />
              <h3 className="text-xl font-bold mb-2">Early Warning Alerts</h3>
              <p>Get notified of potential outbursts before they occur.</p>
            </div>
            <div className="bg-gray-700 rounded-lg shadow-lg p-6">
              <SettingsIcon className="text-green-500 mb-4" fontSize="large" />
              <h3 className="text-xl font-bold mb-2">Customizable Settings</h3>
              <p>Tailor the system to your specific needs and preferences.</p>
            </div>
          </div>

          <div className=" rounded-lg shadow-lg p-6 py-6">
            <h3 className="text-xl font-bold mb-4">This is a Project developed as a part of SIH 2024 by Team 02</h3>
            <p>This project is a part of the SIH 2024 Team 02 and is developed by the students of KL University.</p>
          </div>
        </div>
      </div>
    </main>
  );
}