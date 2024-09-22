import { FaCloudRain, FaSun, FaWind } from 'react-icons/fa';

function WeatherPredictions() {
    const data = [
        { day: "Monday", temperature: "5°C", rainfall: "10mm", windSpeed: "15km/h", condition: "Rainy" },
        { day: "Tuesday", temperature: "8°C", rainfall: "5mm", windSpeed: "10km/h", condition: "Cloudy" },
        { day: "Wednesday", temperature: "12°C", rainfall: "0mm", windSpeed: "8km/h", condition: "Sunny" },
    ];

    const conditionIcons = {
        "Rainy": <FaCloudRain title="Rainy" />,
        "Cloudy": <FaSun title="Cloudy" />,
        "Sunny": <FaSun title="Sunny" />,
        "Windy": <FaWind title="Windy" />
    };

    return (
        <div className="w-1/2">
            <table className="bg-zinc-900 rounded-lg shadow-md w-full border border-zinc-700">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left text-lg text-yellow-500">
                            Weather Predictions
                        </th>
                    </tr>
                    <tr>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Day</th>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Temperature</th>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Rainfall</th>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Wind Speed</th>
                        <th className="py-2 px-4 border-b border-zinc-700 text-left">Prediction</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="hover:bg-zinc-800">
                            <td className="py-2 px-4 border-b border-zinc-700">{row.day}</td>
                            <td className="py-2 px-4 border-b border-zinc-700">{row.temperature}</td>
                            <td className="py-2 px-4 border-b border-zinc-700">{row.rainfall}</td>
                            <td className="py-2 px-4 border-b border-zinc-700">{row.windSpeed}</td>
                            <td className="py-2 px-4 border-b border-zinc-700">
                                {conditionIcons[row.condition] || row.condition}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default WeatherPredictions;
