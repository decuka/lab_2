import { useEffect, useState } from 'react';

export default function Footer() {
    const [systemInfo, setSystemInfo] = useState(null);

    useEffect(() => {
        const info = {
            userAgent: navigator.userAgent,
            platform: navigator.platform || 'Unknown',
            language: navigator.language,
            cookieEnabled: navigator.cookieEnabled,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
        };

        localStorage.setItem('systemInfo', JSON.stringify(info));

        const savedInfo = JSON.parse(localStorage.getItem('systemInfo'));
        setSystemInfo(savedInfo);
    }, []);

    return (
        <footer className="col-span-full bg-slate-950 px-10 py-8 text-white">
            <h2 className="mb-5 text-2xl font-bold">
                System Information
            </h2>

            {systemInfo ? (
                <ul className="space-y-2 break-words text-sm text-slate-300">
                    {Object.entries(systemInfo).map(([key, value]) => (
                        <li key={key}>
                            <strong className="text-white">{key}:</strong> {String(value)}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading system information...</p>
            )}
        </footer>
    );
}