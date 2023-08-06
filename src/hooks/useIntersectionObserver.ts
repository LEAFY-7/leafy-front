import React from 'react';

const useIntersectionObserver = (callback, options) => {
    const targetRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
                callback();
            }
        }, options);

        if (targetRef.current) {
            console.log('여기');
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [callback, options]);

    return targetRef;
};

export default useIntersectionObserver;
