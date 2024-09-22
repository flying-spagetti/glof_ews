import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function SocialMediaFeeds() {
    const socialPosts = [
        {
            platform: "Twitter",
            icon: <FaTwitter size={20} />,
            user: "@disasterResponse",
            content: "Heavy rainfall detected near the glacier! Evacuations recommended.",
            time: "2h ago"
        },
        {
            platform: "Facebook",
            icon: <FaFacebook size={20} />,
            user: "DisasterWatch",
            content: "Severe weather alerts in multiple areas near GLOF-prone lakes. Stay safe!",
            time: "3h ago"
        },
        {
            platform: "Instagram",
            icon: <FaInstagram size={20} />,
            user: "@local_alerts",
            content: "Rising water levels observed in local dams, monitoring for GLOF risks.",
            time: "5h ago"
        }
    ];

    return (
        <div className="space-y-4">
            {socialPosts.map((post, index) => (
                <div
                    key={index}
                    className="flex items-center bg-zinc-800 p-3 rounded-lg shadow-md space-x-4"
                >
                    <div>{post.icon}</div>
                    <div>
                        <h3 className="font-semibold">{post.user}</h3>
                        <p>{post.content}</p>
                        <span className="text-sm text-gray-400">{post.time}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
