import { useState, useEffect } from 'react';
import CountUp from 'react-countup';

export default function TotalCaseStatistics() {
    const [totalCases, setTotalCases] = useState(0);
    const [activeCases, setActiveCases] = useState(0);
    const [recoveredCases, setRecoveredCases] = useState(0);
    const [criticalCases, setCriticalCases] = useState(0);
    const [deaths, setDeaths] = useState(0);

    useEffect(() => {
        // Define real data
        const data = {
            totalCases: 1234,
            activeCases: 567,
            recoveredCases: 890,
            criticalCases: 45,
            deaths: 32
        };

        setTotalCases(data.totalCases);
        setActiveCases(data.activeCases);
        setRecoveredCases(data.recoveredCases);
        setCriticalCases(data.criticalCases);
        setDeaths(data.deaths);
    }, []);

    return (
        <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Total Case Statistics</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Total Cases</h2>
                        <p className="text-lg">
                            <CountUp end={totalCases} duration={2.5} />
                        </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Active Cases</h2>
                        <p className="text-lg">
                            <CountUp end={activeCases} duration={2.5} />
                        </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Recovered Cases</h2>
                        <p className="text-lg">
                            <CountUp end={recoveredCases} duration={2.5} />
                        </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Critical Cases</h2>
                        <p className="text-lg">
                            <CountUp end={criticalCases} duration={2.5} />
                        </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Deaths</h2>
                        <p className="text-lg">
                            <CountUp end={deaths} duration={2.5} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
