'use client';

import usePreRegister, { Page } from './hooks/usePreRegister';
import PreRegisterStart from './PreRegisterStart';
import PreRegisterSuccess from './PreRegisterSuccess';

export default function PreRegister() {
    const { currentPage, toNextPage } = usePreRegister();

    switch (currentPage) {
        case Page.Success:
            return <PreRegisterSuccess />;
        case Page.Start:
        default:
            return <PreRegisterStart toNextPage={toNextPage} />;
    }
}
