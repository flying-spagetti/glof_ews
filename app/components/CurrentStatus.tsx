export default function CurrentStatusTable() {
    const weatherData = [
        { glacier: "Siachen", rainfall: "50mm", temp: "2°C", status: "Normal" },
        { glacier: "Gangotri", rainfall: "120mm", temp: "8°C", status: "Heavy Rainfall" },
        { glacier: "Pindari", rainfall: "70mm", temp: "6°C", status: "Normal" },
    ];

    return (
        <div className="w-full">
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