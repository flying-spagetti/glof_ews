import React from 'react';

interface RiverData {
    flowRate: number;
    waterLevel: number;
    temperature: number;
    sedimentLoad: number;
}

const riverData: { [key: string]: RiverData } = {
    'Indus': { flowRate: 7000, waterLevel: 12.5, temperature: 15, sedimentLoad: 200 },
    'Chenab': { flowRate: 2500, waterLevel: 8.2, temperature: 18, sedimentLoad: 150 },
    'Jhelum': { flowRate: 3200, waterLevel: 9.7, temperature: 17, sedimentLoad: 180 },
    // Add more rivers as needed
};

interface RiverDetailsProps {
    riverName: string;
}

const RiverDetails: React.FC<RiverDetailsProps> = ({ riverName }) => {
    const data = riverData[riverName] || { flowRate: 0, waterLevel: 0, temperature: 0, sedimentLoad: 0 };

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{riverName} River Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-gray-400">Flow Rate</p>
                    <p className="text-xl font-semibold">{data.flowRate} m³/s</p>
                </div>
                <div>
                    <p className="text-gray-400">Water Level</p>
                    <p className="text-xl font-semibold">{data.waterLevel} m</p>
                </div>
                <div>
                    <p className="text-gray-400">Temperature</p>
                    <p className="text-xl font-semibold">{data.temperature}°C</p>
                </div>
                <div>
                    <p className="text-gray-400">Sediment Load</p>
                    <p className="text-xl font-semibold">{data.sedimentLoad} mg/L</p>
                </div>
            </div>
        </div>
    );
};

export default RiverDetails;
