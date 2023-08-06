import React from 'react';

const useWindowSize = (): { width: number; height: number } => {
    const [windowSize, setWindowSize] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = React.useCallback(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return React.useMemo(() => windowSize, [windowSize]);
};

export default useWindowSize;
