import type { HTMLAttributes } from 'react';
import React from 'react';

interface IconProps {}

type Props = React.PropsWithChildren<IconProps> & HTMLAttributes<HTMLElement>;

const UserIcon = ({ ...rest }: Props) => {
    const publicUrl = process.env.PUBLIC_URL;

    return (
        <div>
            <img src={`${publicUrl}/image/icons/user.svg`} {...rest} />
        </div>
    );
};

export default UserIcon;
