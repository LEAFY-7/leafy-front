import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    to?: string;
}

const LinkWrapper = ({ to, children }: React.PropsWithChildren<Props>) => {
    return (
        <>
            {to ? (
                <Link
                    to={to}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    {children}
                </Link>
            ) : (
                children
            )}
        </>
    );
};

export default LinkWrapper;
