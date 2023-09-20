import { useEffect, useState } from 'react';

export interface WindowSize {
    width: number;
    height: number;
}

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.screen.width,
                height: window.screen.height,
            });
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}
