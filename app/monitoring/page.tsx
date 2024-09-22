"use client";

import { useState } from 'react';
import { FaBroadcastTower, FaWater, FaMountain, FaCloudRain, FaExclamationCircle, FaCloudSunRain, FaChartLine, FaExternalLinkAlt } from 'react-icons/fa';
import { GiDam } from 'react-icons/gi';
import RiverDetails from '../components/RiverDetails';

import Section from '../components/Section';
import LakeTable from '../components/LakeTable';
import RainfallChart from '../components/Prev_rainfall';
import GlacierTable from '../components/GlacialTable';
import RiversTable from '../components/RiverTable';
import CurrentStatusTable from '../components/CurrentStatus';
import DamConditions from '../components/DamConditon';
import WeatherPredictions from '../components/WeatherPrediction';
import SocialMediaFeeds from '../components/SocialMediaFeeds';
import RadioFeeds from '../components/RadioFeeds';
import MapPage from '../maps/page';
import Link from 'next/link';

export default function Monitoring({ river }: { river?: string }) {
    const [activeMenu, setActiveMenu] = useState("dashboard");

    return (
        <div className="mx-auto bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
            {/* Header */}
            <header className="relative bg-[url('/images/glacier-bg.jpg')] bg-cover bg-center h-80 shadow-2xl">
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                <div className="relative h-full flex flex-col justify-center items-center">
                    <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg mb-4">
                        {river ? `${river} River Monitoring` : 'GLOF Monitoring Dashboard'}
                    </h1>
                    <p className="text-xl mt-2 text-indigo-300 max-w-2xl text-center">
                        {river ? `Real-time monitoring and analysis for ${river} River` : 'Real-time monitoring and analysis for effective Disaster Management'}
                    </p>
                </div>
            </header>

            {/* Navigation & Live Monitoring Status */}
            <nav className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <div className="flex justify-between items-center py-4 px-6 sm:px-12 max-w-7xl mx-auto">
                    <button 
                        onClick={() => window.location.href = '/'} 
                        className="text-white font-semibold bg-indigo-600 px-6 py-2 rounded-full transition hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/50"
                    >
                        ← Back to Homepage
                    </button>

                    <div className="blinking flex items-center space-x-3 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
                        <FaBroadcastTower size={20} />
                        <span className="font-medium">Live Monitoring</span>
                    </div>
                </div>
            </nav>

            {/* Dashboard Content */}
            {activeMenu === "dashboard" && (
                <div className="flex flex-col gap-8 mx-6 sm:mx-12 py-12">
                    {river ? (
                        <Section
                            title={`${river} River Details`}
                            icon={<FaWater size={28} className="text-blue-400" />}
                            imageUrl="/images/river-bg.jpg"
                            content={<RiverDetails riverName={river} />}
                        />
                    ) : (
                        <>
                            <Section
                                title="River Monitoring"
                                icon={<FaWater size={28} className="text-blue-400" />}
                                imageUrl="/images/river-bg.jpg"
                                content={<RiversTable />}
                            />

                            <Section
                                title="Glacier Monitoring"
                                icon={<FaMountain size={28} className="text-teal-400" />}
                                imageUrl="/images/glacier-bg.jpg"
                                content={<GlacierTable />}
                            />

                            <Section
                                title="Lake Monitoring"
                                icon={<FaCloudRain size={28} className="text-cyan-400" />}
                                imageUrl="/images/lake-bg.jpg"
                                content={
                                    <>
                                        <LakeTable />
                                        <CurrentStatusTable />
                                    </>
                                }
                            />

                            <Section
                                title="Dam Monitoring"
                                icon={<GiDam size={28} className="text-yellow-400" />}
                                imageUrl="/images/dam-bg.jpg"
                                content={<DamConditions />}
                            />

                            <Section
                                title="Weather Monitoring"
                                icon={<FaCloudSunRain size={28} className="text-purple-400" />}
                                imageUrl="/images/weather-bg.jpg"
                                content={<WeatherPredictions />}
                            />

                             <Section
                                title="Potential Risk Zones"
                                icon={<FaExclamationCircle size={28} className="text-red-400" />}
                                imageUrl="/images/map-bg.jpg"
                                content={
                                    <div className="relative">
                                        <MapPage />
                                        <Link href="/map" className="absolute top-2 right-2 text-white hover:text-blue-300 transition-colors">
                                            <FaExternalLinkAlt size={20} />
                                        </Link>
                                    </div>
                                }
                            />
                        </>
                    )}
                </div>
            )}

            {/* Additional Interactive Sections */}
            <div className="flex flex-col lg:flex-row gap-8 px-6 sm:px-12 py-12 bg-gray-900">
                <section className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-2xl shadow-2xl flex-1">
                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">
                        Social Media & Radio Feeds
                    </h2>
                    <div className="space-y-6">
                        <SocialMediaFeeds />
                        <RadioFeeds />
                    </div>
                </section>

                <section className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-2xl shadow-2xl flex-1">
                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                        Interactive Risk Map
                    </h2>
                    <div className="h-96">
                        <MapPage />
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 px-6 sm:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-4 md:mb-0">© 2023 GLOF Monitoring System. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a>
                        <a href="#" className="hover:text-indigo-400 transition">Terms of Service</a>
                        <a href="#" className="hover:text-indigo-400 transition">Contact Us</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
