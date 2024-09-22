"use client";
import React, { useState, useEffect } from 'react';
import styles from './Loading.module.css';

const Loading: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        "Gathering Sensor Data...",
        "Analyzing Data Points...",
        "Sending Alerts...",
        "Generating Dashboard..."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loader}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={styles.glacierIcon}>
                    <polygon points="50,15 90,85 10,85" fill="#9b2226" className={styles.glacierShape} />
                    <circle cx="50" cy="50" r="5" fill="#ffffff" className={styles.pulsatingDot} />
                </svg>
            </div>
            <div className={styles.progressBar}>
                <div 
                    className={styles.progressFill} 
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                ></div>
            </div>
            <p className={styles.loadingText}>{steps[currentStep]}</p>
        </div>
    );
};

export default Loading;
