import type { HTMLAttributes } from 'react';
import React from 'react';
import styled from '@emotion/styled';

import { theme } from 'configs/ui.config';
import Div from 'components/atoms/Div/div';
import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';

interface FlyoutContextProps {
    isOpen: boolean;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
interface OverLayProps {}
interface ToggleProps {}
interface HeaderProps {}
interface ListProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'default';
    variant?: 'default' | 'primary' | 'secondary' | 'translucent';
    isBorder?: boolean;
    borderColor?: keyof typeof theme.colors;
}

interface ItemProps {
    to?: string;
}
type FlyoutProviderProps = React.PropsWithChildren<FlyoutContextProps>;
type FlyoutOverLayProps = React.PropsWithChildren<OverLayProps> & HTMLAttributes<HTMLElement>;
type FlyoutToggleProps = React.PropsWithChildren<ToggleProps> & HTMLAttributes<HTMLElement>;
type FlyoutHeaderProps = React.PropsWithChildren<HeaderProps> & HTMLAttributes<HTMLElement>;
type FlyoutListProps = React.PropsWithChildren<ListProps> & Omit<HTMLAttributes<HTMLDivElement>, 'color'>;
type FlyoutItemProps = React.PropsWithChildren<ItemProps> & HTMLAttributes<HTMLElement>;

const FlyoutContext = React.createContext<FlyoutContextProps>({ isOpen: false, toggle: () => {} });
const useFlyoutContext = () => React.useContext(FlyoutContext);

// Provider
const FlyoutProvider = ({ children }: FlyoutProviderProps) => {
    const [isOpen, toggle] = React.useState(false);
    return <FlyoutContext.Provider value={{ isOpen, toggle }}>{children}</FlyoutContext.Provider>;
};

// Toggle
const FlyoutToggle = ({ children, ...rest }: FlyoutToggleProps) => {
    const { toggle } = React.useContext(FlyoutContext);
    return (
        <div onClick={() => toggle((prev) => !prev)} {...rest}>
            {children}
        </div>
    );
};
// OverLay
const FlyoutOverlay = ({ ...rest }: FlyoutOverLayProps) => {
    const { isOpen, toggle } = React.useContext(FlyoutContext);
    return <> {isOpen && <Overlay id="overlay" {...rest} onClick={() => toggle(false)} />}</>;
};

// Wrapper
const FloutWrapper = ({ children, ...rest }) => {
    return <Wrapper {...rest}>{children}</Wrapper>;
};

// Header
const FlyoutHeader = ({ children, ...rest }: FlyoutHeaderProps) => {
    return <div {...rest}>{children}</div>;
};

// List
const FlyoutList = ({
    size = 'lg',
    variant = 'translucent',
    isBorder = false,
    borderColor = 'inherit',
    children,
    ...rest
}: FlyoutListProps) => {
    const { isOpen } = useFlyoutContext();

    React.useEffect(() => {
        if (!isOpen) return;

        const timeoutId = setTimeout(() => {
            const menuListEl = document.getElementById('menu-list');
            if (!menuListEl) return;
            menuListEl.style.opacity = '1';
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [isOpen]);

    return (
        isOpen && (
            <ListWrapper
                id="menu-list"
                size={size}
                variant={variant}
                direction="column"
                isBorder={isBorder}
                borderColor={borderColor}
                {...rest}
            >
                {children}
            </ListWrapper>
        )
    );
};

// ITEM
const FlyoutItem = ({ to = '', onClick, children, ...rest }: FlyoutItemProps) => {
    const { toggle } = React.useContext(FlyoutContext);

    const handleClickEvent = (event) => {
        if (onClick) {
            onClick(event);
        }
        toggle(false);
    };

    return (
        <LinkWrapper to={to}>
            <li onClick={handleClickEvent} {...rest}>
                {children}
            </li>
        </LinkWrapper>
    );
};

const Flyout = Object.assign(FlyoutProvider, {
    Wrapper: FloutWrapper,
    OverLay: FlyoutOverlay,
    Toggle: FlyoutToggle,
    Header: FlyoutHeader,
    List: FlyoutList,
    Item: FlyoutItem,
});

export default Flyout;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9;
`;

const Wrapper = styled.span`
    position: relative;
`;

const ListWrapper = styled(Div.Default)`
    position: absolute;
    top: 8px;
    left: 0px;
    z-index: 99;
    padding: 8px;
    height: 350px;
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
    justify-content: flex-start;
`;
