import { MdRadio } from 'react-icons/md';

export default function RadioFeeds() {
    const radioBroadcasts = [
        {
            station: "GLOF Disaster Radio",
            frequency: "105.4 FM",
            content: "GLOF warning issued for the following regions. Evacuations are advised immediately.",
            time: "Live"
        },
        {
            station: "Mountain Rescue Radio",
            frequency: "98.3 FM",
            content: "Heavy rainfall in the northern region, all local authorities are on alert for GLOF risks.",
            time: "15 min ago"
        },
        {
            station: "Weather Advisory Radio",
            frequency: "102.6 FM",
            content: "Severe weather forecast for the next 48 hours near high-risk glaciers.",
            time: "1h ago"
        }
    ];

    return (
        <div className="space-y-4">
            {radioBroadcasts.map((broadcast, index) => (
                <div
                    key={index}
                    className="flex items-center bg-zinc-800 p-3 rounded-lg shadow-md space-x-4"
                >
                    <MdRadio size={20} className="text-yellow-400" />
                    <div>
                        <h3 className="font-semibold">{broadcast.station}</h3>
                        <p>{broadcast.frequency} - {broadcast.content}</p>
                        <span className="text-sm text-gray-400">{broadcast.time}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
