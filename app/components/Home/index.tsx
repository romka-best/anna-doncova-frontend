'use client';
import { useEffect, useState } from 'react';
import { getValue, fetchAndActivate } from 'firebase/remote-config';

import Header from 'components/Common/Header';
import Main from 'components/Common/Main';
import Footer from 'components/Common/Footer';
import Start from 'app/components/Common/Start';
import Target from 'components/Register/Target';
import PricesAndTariffs from 'app/components/Register/PricesAndTariffs';
import PreRegister from 'components/PreRegister';

import { remoteConfig } from 'services/firebase';
import rcDefaultsJson from 'remote_config_defaults.json';
import Loading from '../../loading';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [isPreRegister, setIsPreRegister] = useState(true);

    useEffect(() => {
        fetchAndActivate(remoteConfig)
            .then(() => {
                setIsPreRegister(getValue(remoteConfig, 'isPreRegister').asBoolean());
            })
            .catch(() => {
                setIsPreRegister(rcDefaultsJson.isPreRegister);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            {isLoading ? (
                <Loading className="h-screen" isFullScreen={false} />
            ) : (
                <>
                    <Header />
                    <Main>
                        <Start isPreRegister={isPreRegister} />
                        {isPreRegister ? (
                            <PreRegister />
                        ) : (
                            <>
                                <Target />
                                <PricesAndTariffs />
                            </>
                        )}
                    </Main>
                    <Footer />
                </>
            )}
        </>
    );
}
