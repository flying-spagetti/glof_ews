"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Public';
import AlertsIcon from '@mui/icons-material/Warning';
import SettingsIcon from '@mui/icons-material/Settings';
import MonitoringIcon from '@mui/icons-material/Visibility';

export default function Sidemenu() {
    const [activeMenu, setActiveMenu] = useState("dashboard");
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true); // Component is mounted
    }, []);

    if (!mounted) {
        return null; // Prevents rendering on server
    }

    const menuItems = [
        { name: "About", icon: DashboardIcon, link: "/" },
        { name: "Country Map", icon: MapIcon, link: "http://glofs.geoecology.uni-potsdam.de/" },
        { name: "Monitoring", icon: MonitoringIcon, link: "/monitoring" },
        { name: "Alerts", icon: AlertsIcon, link: "/risk-assessment" },
        { name: "Settings", icon: SettingsIcon, link: "/settings" },
    ];

    return (
        <aside className="fixed left-0 top-0 w-64 h-full bg-gray-900 shadow-lg flex flex-col justify-between">
            <nav className="mt-10">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.link}>
                                <div
                                    className={`flex items-center px-6 py-4 text-sm font-medium rounded-lg transition-colors duration-200 ${
                                        pathname === item.link
                                            ? "bg-blue-600 text-white"
                                            : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                    }`}
                                    onClick={() => setActiveMenu(item.name.toLowerCase())}
                                >
                                    <item.icon className="mr-3 h-6 w-6" />
                                    {item.name}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mb-6 px-6 py-4 text-gray-400 text-sm">
                © 90mlIodine 
            </div>
        </aside>
    );
}
