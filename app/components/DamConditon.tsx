import { FaExclamationTriangle, FaWater, FaCheckCircle, FaArrowUp, FaArrowDown } from 'react-icons/fa';

function DamConditionUpdates() {
    const data = [
        { dam: "Tehri Dam", waterLevel: "150m", inflow: "2000 m³/s", outflow: "1800 m³/s", condition: "Stable", safetyAlert: "None" },
        { dam: "Bhakra Dam", waterLevel: "120m", inflow: "2200 m³/s", outflow: "2500 m³/s", condition: "Overflow Risk", safetyAlert: "High" },
        { dam: "Sardar Sarovar", waterLevel: "140m", inflow: "2300 m³/s", outflow: "2100 m³/s", condition: "Crack Detected", safetyAlert: "Critical" },
    ];

    const conditionIcons = {
        "Stable": <FaCheckCircle title="Stable" className="text-green-500" />,
        "Overflow Risk": <FaExclamationTriangle title="Overflow Risk" className="text-yellow-500" />,
        "Crack Detected": <FaExclamationTriangle title="Crack Detected" className="text-red-500" />
    };

    const safetyAlertColors = {
        "None": "text-green-400",
        "High": "text-yellow-500",
        "Critical": "text-red-500"
    };

    return (
        <div className="w-full mx-auto">
            <table className="bg-zinc-900 rounded-lg shadow-md w-full border border-zinc-700">
                <thead>
                    <tr>
                        <th colSpan="6" className="py-4 px-4 border-b border-zinc-700 text-left text-lg text-red-500">
                            Dam Condition Updates
                        </th>
                    </tr>
                    <tr>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Dam</th>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Water Level</th>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Inflow</th>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Outflow</th>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Condition</th>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Safety Alert</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="hover:bg-zinc-800">
                            <td className="py-2 px-4 border-b border-zinc-700">{row.dam}</td>
                            <td className="py-2 px-4 border-b border-zinc-700">{row.waterLevel}</td>
                            <td className="py-2 px-4 border-b border-zinc-700">
                                <FaArrowUp className="mr-1 text-blue-400" /> {row.inflow}
                            </td>
                            <td className="py-2 px-4 border-b border-zinc-700">
                                <FaArrowDown className="mr-1 text-blue-400" /> {row.outflow}
                            </td>
                            <td className="py-2 px-4 border-b border-zinc-700">{conditionIcons[row.condition]}</td>
                            <td className={`py-2 px-4 border-b border-zinc-700 ${safetyAlertColors[row.safetyAlert]}`}>
                                {row.safetyAlert}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DamConditionUpdates;
