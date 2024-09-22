import { FaWater, FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function RiverFlow() {
    const data = [
        { river: "Ganges", flowRate: "500 m³/s", status: "Rising" },
        { river: "Brahmaputra", flowRate: "750 m³/s", status: "Stable" },
        { river: "Indus", flowRate: "300 m³/s", status: "Decreasing" },
    ];

    const flowIcons = {
        "Rising": <FaArrowUp title="Rising" className="text-red-500" />,
        "Stable": <FaWater title="Stable" className="text-green-500" />,
        "Decreasing": <FaArrowDown title="Decreasing" className="text-blue-500" />
    };

    return (
        <div className="w-1/2">
            <table className="bg-zinc-900 rounded-lg shadow-md w-full border border-zinc-700">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left text-lg text-blue-500">
                            River Flow Monitoring
                        </th>
                    </tr>
                    <tr>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">River</th>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Flow Rate</th>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="hover:bg-zinc-800">
                            <td className="py-2 px-4 border-b border-zinc-700">{row.river}</td>
                            <td className="py-2 px-4 border-b border-zinc-700">{row.flowRate}</td>
                            <td className="py-2 px-4 border-b border-zinc-700">
                                {flowIcons[row.status] || row.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


