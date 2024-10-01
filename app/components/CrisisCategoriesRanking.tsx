import React from 'react';
import { FaExclamationTriangle, FaExclamationCircle, FaExclamation } from 'react-icons/fa';

interface CrisisCategory {
    level: 'Critical' | 'High' | 'Medium' | 'Low';
    cities: string[];
    icon: React.ReactNode;
    color: string;
}

const crisisCategories: CrisisCategory[] = [
    {
        level: 'Critical',
        cities: ['Patna', 'Haridwar'],
        icon: <FaExclamationTriangle className="mr-2" />,
        color: 'text-red-500'
    },
    {
        level: 'High',
        cities: ['Rishikesh', 'Bhagalpur'],
        icon: <FaExclamationCircle className="mr-2" />,
        color: 'text-orange-500'
    },
    {
        level: 'Medium',
        cities: ['Varanasi'],
        icon: <FaExclamation className="mr-2" />,
        color: 'text-yellow-500'
    },
    {
        level: 'Low',
        cities: ['Kolkata', 'Allahabad'],
        icon: <FaExclamation className="mr-2" />,
        color: 'text-green-500'
    }
];

export default function CrisisCategoriesRanking() {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-4 text-white">Crisis Categories Ranking</h2>
            <div className="space-y-4">
                {crisisCategories.map((category, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg shadow-md p-4">
                        <div className={`flex items-center ${category.color} text-xl font-semibold mb-2`}>
                            {category.icon}
                            {category.level}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.cities.map((city, cityIndex) => (
                                <span key={cityIndex} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                                    {city}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
