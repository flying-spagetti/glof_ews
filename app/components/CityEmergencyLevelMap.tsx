import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

interface CityEmergencyLevel {
    city: string;
    level: 'Low' | 'Medium' | 'High' | 'Critical';
    description: string;
}

const cityEmergencyLevels: CityEmergencyLevel[] = [
    { city: 'Rishikesh', level: 'Medium', description: 'Increased water levels, monitoring closely' },
    { city: 'Haridwar', level: 'High', description: 'Evacuation recommended for low-lying areas' },
    { city: 'Varanasi', level: 'Low', description: 'Normal conditions, staying vigilant' },
    { city: 'Patna', level: 'Critical', description: 'Immediate evacuation required, severe flooding' },
    { city: 'Bhagalpur', level: 'Medium', description: 'Preparing for potential flooding' },
];

const levelColors = {
    Low: 'bg-green-500',
    Medium: 'bg-yellow-500',
    High: 'bg-orange-500',
    Critical: 'bg-red-500',
};

export default function CityEmergencyLevels() {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-4 text-white">City Emergency Levels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cityEmergencyLevels.map((city, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg shadow-md p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold text-white">{city.city}</h3>
                            <div className={`${levelColors[city.level]} text-white text-sm font-bold py-1 px-2 rounded-full flex items-center`}>
                                <FaExclamationTriangle className="mr-1" />
                                {city.level}
                            </div>
                        </div>
                        <p className="text-gray-300">{city.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
