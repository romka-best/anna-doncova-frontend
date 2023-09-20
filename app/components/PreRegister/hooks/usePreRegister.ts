import { useCallback, useState } from 'react';

export enum Page {
    Start = 'START',
    Success = 'SUCCESS',
}

export default function usePreRegister() {
    const [currentPage, setCurrentPage] = useState<Page>(Page.Start);

    const toNextPage = useCallback(() => {
        if (currentPage === Page.Start) {
            setCurrentPage(Page.Success);
        }
    }, [currentPage]);

    return {
        currentPage,
        toNextPage,
    };
}
