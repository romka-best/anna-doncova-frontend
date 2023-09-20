'use client';
import React, { createContext, useContext, ReactNode } from 'react';

import useWindowSize, { WindowSize } from 'hooks/useWindowSize';

import Loading from '../loading';

const WindowSizeContext = createContext<WindowSize>({
    width: 0,
    height: 0,
});

export function WindowSizeProvider({ children }: { children: ReactNode }) {
    const windowSize = useWindowSize();

    if (!windowSize.width || !windowSize.height) {
        return <Loading className="min-h-screen" />;
    }

    return <WindowSizeContext.Provider value={windowSize}>{children}</WindowSizeContext.Provider>;
}

export function useGlobalWindowSize() {
    return useContext(WindowSizeContext);
}
