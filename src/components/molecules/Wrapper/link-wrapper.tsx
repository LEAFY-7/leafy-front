import type { HTMLAttributes } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

interface LinWrapperProps {
    to?: string;
}

type Props = React.PropsWithChildren<LinWrapperProps> & HTMLAttributes<HTMLAnchorElement>;

const LinkWrapper = ({ to, children }: Props) => {
    return (
        <>
            {to ? (
                <Link
                    to={to}
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
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
