import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';
import React, { MouseEventHandler, ReactElement } from 'react';

interface Props {
    title: string;
    value?: string | number;
    onClick?: MouseEventHandler;
    children?: ReactElement | ReactElement[];
    isPositive?: boolean;
}

export const DefaultButton = ({
    isPositive = false,
    title,
    value,
    onClick,
    children,
}: React.PropsWithChildren<Props>) => {
    return (
        <Button onClick={onClick} className={isPositive ? 'positive' : ''}>
            <>
                <p>{title}</p>
                {children && <ChildrenWrap>{children}</ChildrenWrap>}
            </>
        </Button>
    );
};

export default DefaultButton;

const ChildrenWrap = styled.div``;

const Button = styled.button`
    width: 120px;
    height: 40px;
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    border-radius: 16px;
    border: 1px solid ${theme.colors.primary};

    & * {
        font-size: 18px;
        font-weight: ${theme.fontWeight.medium};
    }

    &.positive {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
    }
`;
