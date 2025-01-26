import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ setLoading }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    setLoading(false);
                    return 100;
                }
            });
        }, 30); // Update every 30ms to fill up in 3 seconds

        return () => clearInterval(interval);
    }, [setLoading]);

    return (
        <div className="loading-screen">
            <img src="/loading.gif" alt="Loading..." className="loading-gif" />
            <div className="loading-bar">
                <div className="loading-progress" style={{ width: `${progress}%` }}></div>
            </div>
            <p>Loading... {progress}%</p>
        </div>
    );
};

export default LoadingScreen;
