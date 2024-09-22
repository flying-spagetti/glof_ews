export default function GlacialTable() {
    const data = [
        {
            location: "Siachen Glacier", 
            status: "Stable", 
            waterflow: "1500 m³/s", 
            sensorStrength: "Strong", 
            floodRisk: "Low", 
            temperature: "-10°C", 
            rescueTeams: 3, 
            damCondition: "Normal"
        },
        {
            location: "Gangotri Glacier", 
            status: "Receding", 
            waterflow: "2000 m³/s", 
            sensorStrength: "Weak", 
            floodRisk: "High", 
            temperature: "-5°C", 
            rescueTeams: 2, 
            damCondition: "Warning"
        },
        {
            location: "Pindari Glacier", 
            status: "Advancing", 
            waterflow: "1700 m³/s", 
            sensorStrength: "Moderate", 
            floodRisk: "Medium", 
            temperature: "-8°C", 
            rescueTeams: 4, 
            damCondition: "Stable"
        },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "Stable":
                return "text-green-400";
            case "Receding":
                return "text-red-400";
            case "Advancing":
                return "text-yellow-400";
            default:
                return "text-white";
        }
    };

    const getFloodRiskColor = (risk: string) => {
        switch (risk) {
            case "Low":
                return "text-green-400";
            case "Medium":
                return "text-yellow-400";
            case "High":
                return "text-red-400";
            default:
                return "text-white";
        }
    };

    return (


    <div className="overflow-x-auto">
        <table className="bg-zinc-900 rounded-lg shadow-md w-full border border-zinc-700">
            <thead> 
                <tr>
                    <th className="py-2 px-4 border-b border-zinc-700">Location</th>
                    <th className="py-2 px-4 border-b border-zinc-700">Status</th>
                    <th className="py-2 px-4 border-b border-zinc-700">Waterflow</th>
                    <th className="py-2 px-4 border-b border-zinc-700">Sensor Strength</th>
                    <th className="py-2 px-4 border-b border-zinc-700">Flood Risk</th>
                    <th className="py-2 px-4 border-b border-zinc-700">Temperature</th>
                    <th className="py-2 px-4 border-b border-zinc-700">Rescue Teams</th>
                    <th className="py-2 px-4 border-b border-zinc-700">Dam Condition</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index} className="hover:bg-zinc-800">
                        <td className="py-2 px-4 border-b border-zinc-700">{row.location}</td>
                        <td className={`py-2 px-4 border-b border-zinc-700 ${getStatusColor(row.status)}`}>
                            {row.status}
                        </td>
                        <td className="py-2 px-4 border-b border-zinc-700">{row.waterflow}</td>
                        <td className="py-2 px-4 border-b border-zinc-700">{row.sensorStrength}</td>
                        <td className={`py-2 px-4 border-b border-zinc-700 ${getFloodRiskColor(row.floodRisk)}`}>
                            {row.floodRisk}
                        </td>
                        <td className="py-2 px-4 border-b border-zinc-700">{row.temperature}</td>
                        <td className="py-2 px-4 border-b border-zinc-700">{row.rescueTeams}</td>
                        <td className="py-2 px-4 border-b border-zinc-700">{row.damCondition}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    );
}
