import type { HTMLAttributes } from 'react';
import React from 'react';
import { BsFillArrowUpCircleFill as UpArrow } from 'react-icons/bs';

import DefaultAnchor from 'components/atoms/Anchor/default-anchor';

interface PageWrapperProps {}

type Props = React.PropsWithChildren<PageWrapperProps> & HTMLAttributes<HTMLElement>;

function PageWrapper({ children }: Props) {
    const [showAnchor, setShowAnchor] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            if (scrollY > window.innerHeight) {
                setShowAnchor(true);
            } else {
                setShowAnchor(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id="top" style={{ width: '100%', height: '30px' }}></section>
            {children}
            {showAnchor && (
                <DefaultAnchor
                    href="#top"
                    style={{
                        width: 'auto',
                        height: 'auto',
                        position: 'fixed',
                        right: '5%',
                        bottom: '5%',
                        zIndex: 90,
                        opacity: showAnchor ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out',
                    }}
                >
                    <UpArrow size={30} color="gray" />
                </DefaultAnchor>
            )}
        </>
    );
}

export default PageWrapper;
