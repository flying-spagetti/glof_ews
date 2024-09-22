"use client";
import Image from "next/image";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Public';
import AlertsIcon from '@mui/icons-material/Warning';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState, useEffect } from 'react';
import Sidemenu from "./components/Sidemenu";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Right-Side Navigation */}
      <Sidemenu />

      {/* Main Content */}
      <div className="flex-1 p-8 ml-64">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="relative w-full h-screen mb-16">
            <Image
              src="/lorenzo-castagnone-xwTYw9knAG8-unsplash.jpg"
              alt="Glacial Lake"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
              <h1 className="text-7xl font-bold mb-6 text-center animate-fade-in-down">
                GLOF-EWS
              </h1>   
              <p className="text-3xl mb-12 text-center max-w-3xl animate-fade-in-up">
                Glacial Lake Outburst Flood Early Warning System: Protecting Communities Through Advanced Technology
              </p>
              <button className="mt-4 px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 animate-pulse">
                Explore the Dashboard
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            <div className="bg-gray-800 rounded-xl shadow-2xl p-8 transform hover:scale-105 transition duration-300">
              <DashboardIcon className="text-blue-400 mb-6" style={{ fontSize: '3rem' }} />
              <h3 className="text-2xl font-bold mb-4">Real-Time Monitoring</h3>
              <p className="text-gray-300">Stay informed with live data from glacial lakes, ensuring up-to-the-minute insights for rapid decision-making.</p>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-2xl p-8 transform hover:scale-105 transition duration-300">
              <MapIcon className="text-purple-400 mb-6" style={{ fontSize: '3rem' }} />
              <h3 className="text-2xl font-bold mb-4">Comprehensive Mapping</h3>
              <p className="text-gray-300">Visualize and analyze data across multiple glacial regions with our advanced mapping technology.</p>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-2xl p-8 transform hover:scale-105 transition duration-300">
              <AlertsIcon className="text-red-400 mb-6" style={{ fontSize: '3rem' }} />
              <h3 className="text-2xl font-bold mb-4">Early Warning Alerts</h3>
              <p className="text-gray-300">Receive instant notifications of potential outbursts, allowing for proactive measures and enhanced safety.</p>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-2xl p-8 transform hover:scale-105 transition duration-300">
              <SettingsIcon className="text-green-400 mb-6" style={{ fontSize: '3rem' }} />
              <h3 className="text-2xl font-bold mb-4">Customizable Settings</h3>
              <p className="text-gray-300">Tailor the system to your specific needs with flexible settings and personalized alert thresholds.</p>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-gray-800 rounded-xl shadow-2xl p-12 mb-24">
            <h3 className="text-3xl font-bold mb-6">Innovating for a Safer Tomorrow</h3>
            <p className="text-xl text-gray-300 mb-8">
              GLOF-EWS is a cutting-edge project developed as part of SIH 2024 by Team 02. Our mission is to leverage advanced technology to protect communities from the devastating impacts of glacial lake outburst floods and other related calamities.
            </p>
            <p className="text-lg text-gray-400">
              Developed with passion and expertise by Gnaneswar Lopinti and the dedicated members of Team 02.
            </p>
          </div>
        </div>
      </div>

      {/* Floating CTA Button */}
      <button className={`fixed bottom-8 right-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
        Get Started
      </button>
    </main>
  );
}