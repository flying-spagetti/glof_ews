"use client";

import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import React from 'react';

import {
  Chart,
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(LinearScale, CategoryScale, LineElement, PointElement, Tooltip, Legend);

export default function Monitoring() {
    const [activeMenu, setActiveMenu] = useState("dashboard");

    return (
        <div className="container mx-auto p-4 bg-gradient-to-b from-black via-zinc-800 to-black min-h-screen text-white">
            <button 
                onClick={() => window.location.href = '/'} 
                className="text-white font-semibold mb-4"
            >
                ← Back to Homepage
            </button>
            <h1 className="text-3xl font-bold mb-6">Glacier Monitoring Dashboard</h1>
            {activeMenu === "dashboard" && <Dashboard />}
            <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Rainfall in the Past 5 Days</h3>
                <RainfallChart />
            </div>

            {/* Dam Conditions Section */}
            <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Dam Conditions</h3>
                <p>{checkDamCondition(75, 65)}</p>
            </div>

            {/* Glacier State Section */}
            <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Glacier State</h3>
                <p>{checkGlacierState(6, 8, 11)}</p>
            </div>
        </div>
    );

    function Dashboard() {
        return (
            <div className="mx-auto">
                <h2 className="text-2xl font-bold mb-4">Dashboard Content</h2>
                <div className="flex space-x-4 mb-4">
                    <FirstTable />
                    <SecondTable />
                </div>
                <div className="flex space-x-4 mb-4">
                    <ThirdTable />
                    <WeatherComponent />
                </div>
                <div className="flex space-x-4 mb-4">
                    <DamConditions />
                </div>
            </div>
        );
    }

    function FirstTable() {
        const data = [
            { location: "Siachen Glacier" },
            { location: "Gangotri Glacier" },
            { location: "Pindari Glacier" },
        ];

        return (
            <div className="w-1/2">
                <table className="bg-zinc-900 rounded-lg shadow-md w-full border border-zinc-700">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left text-lg text-blue-500" colSpan={2}>Indian Glaciers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="hover:bg-zinc-800">
                                <td className="py-2 px-4 border-b border-zinc-700">{row.location}</td>
                                <td className="py-2 px-4 border-b border-zinc-700 text-green-400">Stable</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    function SecondTable() {
        const data = [
            { column1: "Siachen Glacier", column2: "Uttarakhand", column3: "700 sq km", column4: "Nubra", column5: "Monsoon" },
            { column1: "Baltoro Glacier", column2: "Himachal Pradesh", column3: "750 sq km", column4: "Braldo", column5: "Summer" },
            { column1: "Hemis Glacier", column2: "Jammu and Kashmir", column3: "22 sq km", column4: "Indus", column5: "Summer" },
        ];

        return (
            <div className="w-1/2">
                <table className="bg-zinc-900 rounded-lg shadow-md w-full border border-zinc-700">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left text-lg text-green-500" colSpan={5}>Glacier Data</th>
                        </tr>
                        <tr>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Glacier</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Location</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Size</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">River</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Climate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="hover:bg-zinc-800">
                                <td className="py-2 px-4 border-b border-zinc-700">{row.column1}</td>
                                <td className="py-2 px-4 border-b border-zinc-700">{row.column2}</td>
                                <td className="py-2 px-4 border-b border-zinc-700">{row.column3}</td>
                                <td className="py-2 px-4 border-b border-zinc-700">{row.column4}</td>
                                <td className="py-2 px-4 border-b border-zinc-700">{row.column5}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    function ThirdTable() {
        const data = [
            { glacier: "Siachen", state: "Leh Pangong Lake", river: "2°C", condition: "Normal", notes: "No concerns" },
            { glacier: "Gangotri", state: "Gaumukh", river: "8°C", condition: "Melting", notes: "Watch closely" },
            { glacier: "Pindari", state: "Pindari", river: "6°C", condition: "Normal", notes: "No concerns" },
        ];

        return (
            <div className="w-1/2">
                <table className="bg-zinc-900 rounded-lg shadow-md w-full border border-zinc-700">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left text-lg text-red-500" colSpan={5}>Current Status of the Glaciers and Rivers<span className='text-xs px-2'>(Critical Alert Issued)</span></th>
                        </tr>
                        <tr>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Glacier</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Lake Name</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Temperature</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Sudden Changes</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="hover:bg-zinc-800">
                                <td className="py-2 px-4 border-b border-zinc-700">{row.glacier}</td>
                                <td className="py-2 px-4 border-b border-zinc-700">{row.state}</td>
                                <td className="py-2 px-4 border-b border-zinc-700">{row.river}</td>
                                <td className="py-2 px-4 border-b border-zinc-700">{row.condition}</td>
                                <td
                                className={`py-2 px-4 border-b border-zinc-700 ${
                                    row.notes.includes('concern') || row.notes.includes('watch') 
                                ? 'text-green-400'
                                : 'text-red-500'
    }`}
>
    {row.notes}
</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    function WeatherComponent() {
        const weatherData = [
            { glacier: "Siachen", rainfall: "50mm", temp: "2°C", status: "Normal" },
            { glacier: "Gangotri", rainfall: "120mm", temp: "8°C", status: "Heavy Rainfall" },
            { glacier: "Pindari", rainfall: "70mm", temp: "6°C", status: "Normal" },
        ];

        return (
            <div className="w-1/2">
                <table className="bg-zinc-900 rounded-lg shadow-md w-full border border-zinc-700">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left text-lg text-blue-500" colSpan={4}>Weather Conditions<span className='text-xs px-2'>(Rainfall alert Issued)</span></th>
                        </tr>
                        <tr>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Glacier</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Rainfall</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Temperature</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weatherData.map((row, index) => (
                            <tr key={index} className="hover:bg-zinc-800">
                                <td className="py-2 px-4 border-b border-zinc-700">{row.glacier}</td>
                                <td className="py-2 px-4 border-b border-zinc-700">{row.rainfall}</td>
                                <td className="py-2 px-4 border-b border-zinc-700">{row.temp}</td>
                                <td
                                className={`py-2 px-4 border-b border-zinc-700 ${
                                    row.status.includes('Normal') || row.status.includes('Heavy Rainfall') 
                                ? 'text-green-400'
                                : 'text-red-500'
                                }`}
                                >{row.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    function DamConditions() {
        const damData = [
            {
                dam: "Tehri Dam", 
                river: "Bhagirathi", 
                condition: "Normal", 
                notes: "No concerns",
                deformity: "None",
                seismicActivity: "Low",
                strength: "Good"
            },
            {
                dam: "Bhakra Dam", 
                river: "Sutlej", 
                condition: "High Water Level", 
                notes: "Close monitoring",
                deformity: "Minor cracks",
                seismicActivity: "Moderate",
                strength: "Fair"
            },
            {
                dam: "Nagarjuna Sagar", 
                river: "Krishna", 
                condition: "Normal", 
                notes: "No concerns",
                deformity: "None",
                seismicActivity: "Low",
                strength: "Good"
            },
        ];
    
        return (
            <div className="w-full">
                <table className="bg-zinc-900 rounded-lg shadow-md w-full border border-zinc-700">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left text-lg text-yellow-500" colSpan={7}>Dam Conditions<span className='text-xs px-2'>(In alert and Continous monitoring)</span></th>
                        </tr>
                        <tr>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Dam</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">River</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Condition</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Notes</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Deformity Detects</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Seismic Activity</th>
                            <th className="py-2 px-4 border-b border-zinc-700 text-left">Strength So Far</th>
                        </tr>
                    </thead>
                    <tbody>
                        {damData.map((row, index) => (
                            <tr key={index} className="hover:bg-zinc-800">
                                <td className="py-2 px-4 border-b border-zinc-700">{row.dam}</td>
                                <td className="py-2 px-4 border-b border-zinc-700">{row.river}</td>
                                <td className='py-2 px-4 border-b border-zinc-700 text-green-400 '>{row.condition}</td>    
                                <td
                                    className={`py-2 px-4 border-b border-zinc-700 ${
                                        row.notes.includes('No concerns') || row.notes.includes('Close monitoring') 
                                    ? 'text-green-400'
                                    : 'text-red-500'
                                    }`}
                                >
                                    {row.notes}
                                </td>
                                <td className="py-2 px-4 border-b border-zinc-700">{row.deformity}</td>
                                <td className="py-2 px-4 border-b border-zinc-700">{row.seismicActivity}</td>
                                <td className="py-2 px-4 border-b border-zinc-700">{row.strength}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    

    
    function RainfallChart() {
        const data = {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
            datasets: [
                {
                    label: 'Siachen Glacier Rainfall (mm)',
                    data: [12, 19, 30, 5, 2],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                },
                {
                    label: 'Gangotri Glacier Rainfall (mm)',
                    data: [10, 25, 15, 7, 5],
                    fill: false,
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                },
                {
                    label: 'Pindari Glacier Rainfall (mm)',
                    data: [5, 10, 20, 2, 1],
                    fill: false,
                    borderColor: 'rgb(54, 162, 235)',
                    tension: 0.1,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                },
            ],
        };
    
        const options = {
            scales: {
                y: {
                    type: 'linear',
                    beginAtZero: true,
                },
            },
            plugins: {
                customAlert: {
                    alertRanges: [
                        { min: 20, max: 25, color: 'rgba(255, 0, 0, 0.3)' }, // Red alert range
                    ],
                },
            },
        };
    
        const plugins = [{
            id: 'customAlert',
            beforeDraw: (chart) => {
                const ctx = chart.ctx;
                const yScale = chart.scales.y;
                const xScale = chart.scales.x;
                const { alertRanges } = chart.config.options.plugins.customAlert;
    
                alertRanges.forEach(range => {
                    const yRangeStart = yScale.getPixelForValue(range.min);
                    const yRangeEnd = yScale.getPixelForValue(range.max);
    
                    ctx.fillStyle = range.color;
                    ctx.fillRect(
                        xScale.left, 
                        yRangeEnd, 
                        xScale.width, 
                        yRangeStart - yRangeEnd
                    );
                });
            }
        }];
    
        return <Line data={data} options={options} plugins={plugins} />;
    }
    
    function checkDamCondition(waterLevel: number, damIntegrity: number): string {
        if (waterLevel > 80 && damIntegrity < 60) {
            return "Critical - Immediate attention required";
        } else if (waterLevel > 60 && damIntegrity < 75) {
            return "Warning - Monitor closely";
        } else {
            return "Normal";
        }
    }
    
    function checkGlacierState(temperature: number, meltingRate: number, suddenFlowIncrease: number): string {
        if (temperature > 5 && meltingRate > 7) {
            return "Anomaly - Glacier is melting rapidly";
        } else if (suddenFlowIncrease > 10) {
            return "Alert - Sudden increase in water flow detected";
        } else {
            return "Normal - Glacier is stable";
        }
    }
    
}
