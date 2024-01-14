import * as process from 'process';
import { initializeApp } from 'firebase/app';
import { getRemoteConfig } from 'firebase/remote-config';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const remoteConfig = getRemoteConfig(app);
remoteConfig.settings.minimumFetchIntervalMillis = Number(process.env.NEXT_PUBLIC_FIREBASE_REMOTE_CONFIG_FETCH_INTERVAL);

export default app;
