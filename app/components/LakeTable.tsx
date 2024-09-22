import { FaExclamationTriangle, FaSnowflake, FaSun } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';

function LakeTable() {
    const data = [
        { glacier: "Siachen", lake: "Leh Pangong Lake", temperature: "2°C", condition: "Normal", notes: "No concerns" },
        { glacier: "Gangotri", lake: "Gaumukh", temperature: "8°C", condition: "Melting", notes: "Watch closely" },
        { glacier: "Pindari", lake: "Pindari", temperature: "6°C", condition: "Normal", notes: "No concerns" },
        // Add more rows as needed for testing scrolling
    ];

    const conditionIcons = {
        "Normal": <GiWaterDrop title="Normal" />,
        "Melting": <FaSun title="Melting" />,
        "Freezing": <FaSnowflake title="Freezing" />,
        "Warning": <FaExclamationTriangle title="Warning" />
    };

    return (
        <div className="w-full max-h-80 overflow-y-auto">
            <table className="bg-zinc-900 rounded-lg shadow-md w-full border border-zinc-700">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left text-lg text-blue-500 flex items-center">
                            Lake Monitoring
                            <FaExclamationTriangle className="text-yellow-500 ml-2 blink-animation" title="Critical Alert Issued" />
                        </th>
                    </tr>
                    <tr>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Glacier</th>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Lake Name</th>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Temperature</th>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Condition</th>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="hover:bg-zinc-800">
                            <td className="py-2 px-4 border-b border-zinc-700">{row.glacier}</td>
                            <td className="py-2 px-4 border-b border-zinc-700">{row.lake}</td>
                            <td className="py-2 px-4 border-b border-zinc-700">{row.temperature}</td>
                            <td className="py-2 px-4 border-b border-zinc-700">
                                {conditionIcons[row.condition] || <FaExclamationTriangle className="text-red-500" title="Unknown" />}
                            </td>
                            <td className={`py-2 px-4 border-b border-zinc-700 ${
                                row.notes.includes("concern") || row.notes.includes("watch") ? "text-yellow-400" : "text-green-400"
                            }`}>
                                {row.notes}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LakeTable;
