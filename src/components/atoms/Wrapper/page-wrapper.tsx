import React, { HTMLAttributes, useEffect } from 'react';
import FlowerAnimation from 'components/atoms/Animation/flower-animation';
import useToggle from 'hooks/useToggle';

interface Props extends HTMLAttributes<HTMLElement> {}

function PageWrapper({ children }: React.PropsWithChildren<Props>) {
    const { isOpen, handler } = useToggle({ callback: hideComponent });

    function hideComponent() {
        const component = document.getElementById('flower_animate');
        component.style.display = 'none';
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handler();
        }, 1500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {!isOpen && <FlowerAnimation />}
            {children}
        </>
    );
}

export default PageWrapper;
