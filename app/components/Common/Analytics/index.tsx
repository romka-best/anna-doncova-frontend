'use client';
import { useEffect } from 'react';
import { initializeAnalytics, isSupported } from 'firebase/analytics';

import app from 'services/firebase';

declare global {
    interface Window {
        _firebaseAnalyticsInitialized?: boolean;
    }
}

const Analytics = () => {
    useEffect(() => {
        isSupported()
            .then(() => {
                if (!window._firebaseAnalyticsInitialized) {
                    initializeAnalytics(app);
                    window._firebaseAnalyticsInitialized = true;
                }
            })
            .catch((e) => {
                console.warn('Analytics is not supported in this environment:', e.message);
            });
    }, []);

    return null;
};

export default Analytics;
