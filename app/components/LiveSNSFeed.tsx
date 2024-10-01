import { useState, useEffect } from 'react';
import { FaSyncAlt } from 'react-icons/fa';

interface SNSData {
    user: string;
    message: string;
    timestamp: string;
}

export default function LiveSNSFeed() {
    const [snsData, setSnsData] = useState<SNSData[]>([
        { user: 'ISRO_Official', message: 'Flood warning in Guwahati!', timestamp: '2023-03-15T10:00:00Z' },
        { user: 'IMD_Weather', message: 'Heavy rainfall expected tomorrow in the catchment areas of river Brahmaputra.', timestamp: '2023-03-15T12:00:00Z' },
        { user: 'RiverWatch', message: 'River levels rising rapidly in the catchment areas of river Brahmaputra.', timestamp: '2023-03-15T14:00:00Z' },
        { user: 'EmergencyServices', message: 'Emergency services on standby in Guwahati.', timestamp: '2023-03-15T16:00:00Z' },
        { user: 'Govt_Alerts', message: 'Evacuation orders issued in Guwahati.', timestamp: '2023-03-15T18:00:00Z' },
        { user: 'ISRO_Official', message: 'Flood warning in Kedarnath!', timestamp: '2024-03-15T10:00:00Z' },
        { user: 'Accuweather', message: 'Heavy rainfall expected in Kedarnath!', timestamp: '2024-03-15T12:00:00Z' },
        { user: 'RiverWatch', message: 'River levels rising rapidly in Lake Saraswati.', timestamp: '2024-03-15T14:00:00Z' },
        { user: 'EmergencyServices', message: 'Emergency services on standby in Kedarnath.', timestamp: '2024-03-15T16:00:00Z' },
        { user: 'Govt_Alerts', message: 'Evacuation orders issued in Kedarnath.', timestamp: '2024-03-15T18:00:00Z' },
    ]);
    const [displayedData, setDisplayedData] = useState<SNSData[]>([]);

    const replayMessages = () => {
        setDisplayedData([]);
        let index = 0;
        const interval = setInterval(() => {
            if (index < snsData.length - 1) {
                setDisplayedData((prevData) => {
                    if (!prevData.includes(snsData[index])) {
                        return [...prevData, snsData[index]];
                    }
                    return prevData;
                });
                index++;
            } else {
                clearInterval(interval);
            }
        }, 5000); // Adjust the interval time as needed
    };

    useEffect(() => {
        replayMessages();
    }, [snsData]);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Live SNS Feed from the Sources</h1>
                <button onClick={replayMessages} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <FaSyncAlt size={24} />
                </button>
            </div>
            <ul>
                {displayedData.map((item, index) => (
                    <li key={index} className="feed-item">
                        <p><strong>{item.user}</strong>: {item.message}</p>
                        <p><em>{new Date(item.timestamp).toLocaleString()}</em></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
