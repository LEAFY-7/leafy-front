import { useState, useMemo } from 'react';

interface PaginationProps {
    target: number;
    limit: number;
    visiblePageCount: number;
}

const usePagination = ({ limit = 1, target = 0, visiblePageCount = 8 }: PaginationProps) => {
    const [offset, setOffset] = useState<number>(0);

    const totalPageCount: number = Math.ceil(target / limit);

    const totalNavArray: number[] = useMemo(
        () => Array.from({ length: totalPageCount }, (_, i) => i + 1),
        [totalPageCount],
    );

    const navNumbersArray = useMemo(
        () => totalNavArray.slice(offset, offset + visiblePageCount),
        [offset, totalNavArray],
    );

    return { offset, setOffset, visiblePageCount, navNumbersArray, totalPageCount };
};

export default usePagination;
