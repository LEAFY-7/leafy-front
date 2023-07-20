import React, { createContext, useState, useContext } from 'react';
import Div from '../../atoms/Div/default-div';
import styled from '@emotion/styled';

interface FlyoutContextProps {
    isOpen: boolean;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
interface FlyoutListStyle {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'default';
    variant?: 'default' | 'primary' | 'secondary' | 'translucent';
}
type FlyoutProviderProps = React.PropsWithChildren<{}> & FlyoutContextProps;
type FlyoutOverLayProps = React.PropsWithChildren<{}>;
type FlyoutToggleProps = React.PropsWithChildren<{}>;
type FlyoutHeaderProps = React.PropsWithChildren<{}>;
type FlyoutListProps = React.PropsWithChildren<{}> & FlyoutListStyle;
type FlyoutItemProps = React.PropsWithChildren<{}>;

const FlyoutContext = createContext<FlyoutContextProps>({ isOpen: false, toggle: () => {} });

const useFlyoutContext = () => {
    const context = useContext(FlyoutContext);
    return context;
};

// Provider
const FlyoutProvider = ({ children }: FlyoutProviderProps) => {
    const [isOpen, toggle] = useState(false);
    return <FlyoutContext.Provider value={{ isOpen, toggle }}>{children}</FlyoutContext.Provider>;
};

// Toggle
const FlyoutToggle = ({ children, ...rest }: FlyoutToggleProps) => {
    const { toggle } = useContext(FlyoutContext);
    return (
        <div onClick={() => toggle((prev) => !prev)} {...rest}>
            {children}
        </div>
    );
};
// OverLay
const FlyoutOverlay = ({ ...rest }: FlyoutOverLayProps) => {
    const { isOpen, toggle } = useContext(FlyoutContext);
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
const FlyoutList = ({ size = 'lg', variant = 'translucent', children, ...rest }: FlyoutListProps) => {
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
            <ListWrapper id="menu-list" size={size} variant={variant} direction="column" {...rest}>
                {children}
            </ListWrapper>
        )
    );
};

// ITEM
const FlyoutItem = ({ children, ...rest }: FlyoutItemProps) => {
    return <li {...rest}>{children}</li>;
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
    z-index: 3;
`;

const Wrapper = styled.span`
    position: relative;
`;

const ListWrapper = styled(Div)`
    position: absolute;
    top: 8px;
    left: 0px;
    z-index: 9;
    padding: 8px;
    height: 350px;
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
`;
