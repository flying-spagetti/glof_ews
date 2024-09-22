import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/solid'; // Using Heroicons for redirect icon

const RiversTable = () => {
    const rivers = [
        { id: 'ganges', name: 'Ganges River', flowRate: '16,648 m³/s', waterLevel: '2450 m', temperature: '24°C', status: 'good', condition: 'Stable and healthy' },
        { id: 'yamuna', name: 'Yamuna River', flowRate: '2,850 m³/s', waterLevel: '350 m', temperature: '21°C', status: 'warning', condition: 'Moderate risk, monitor closely' },
        { id: 'nile', name: 'Brahmaputra River', flowRate: '2,830 m³/s', waterLevel: '500 m', temperature: '27°C', status: 'offset', condition: 'Critical condition, possible flood risk' },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'good':
                return 'text-green-400'; // Green for good
            case 'warning':
                return 'text-yellow-400'; // Yellow for warning
            case 'offset':
                return 'text-red-400'; // Red for offset
            default:
                return 'text-white'; // Default white
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full bg-zinc-900 text-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4">River Name</th>
                        <th className="py-2 px-4">Flow Rate</th>
                        <th className="py-2 px-4">Water Level</th>
                        <th className="py-2 px-4">Temperature</th>
                        <th className="py-2 px-4">Condition</th>
                        <th className="py-2 px-4">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {rivers.map((river) => (
                        <tr key={river.id} className="hover:bg-zinc-700">
                            <td className="py-2 px-4 whitespace-nowrap">
                                <Link href={`/river/${river.id}`} className="text-blue-400">
                                    {river.name}
                                </Link>
                            </td>
                            <td className={`py-2 px-4 ${getStatusColor(river.status)}`}>
                                {river.flowRate}
                            </td>
                            <td className={`py-2 px-4 ${getStatusColor(river.status)}`}>
                                {river.waterLevel}
                            </td>
                            <td className={`py-2 px-4 ${getStatusColor(river.status)}`}>
                                {river.temperature}
                            </td>
                            <td className={`py-2 px-4 ${getStatusColor(river.status)}`}>
                                {river.condition}
                            </td>
                            <td className="py-2 px-4">
                                <Link href={`/river/${river.id}`}>
                                    <ArrowRightIcon className="w-5 h-5 text-blue-400 inline-block" />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RiversTable;
