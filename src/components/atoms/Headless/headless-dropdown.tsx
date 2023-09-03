import type { ReactNode, ElementType, CSSProperties, HTMLAttributes } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';

interface DropdownStyle {}

interface ContextProps {
    isOpen: boolean;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface WrapperProps {}

interface HeaderProps {}

interface LabelProps {}

interface TriggerProps {
    as?: ElementType;
}

interface MenuProps {}

interface ItemProps {}

interface HelperTextProps {
    helperText?: string;
    helperIcon?: ReactNode;
}

type DropdownProviderProps = React.PropsWithChildren<ContextProps>;
type DropdownWrapperProps = React.PropsWithChildren<WrapperProps> & HTMLAttributes<HTMLDivElement>;
type DropdownHeaderProps = React.PropsWithChildren<HeaderProps> & HTMLAttributes<HTMLElement>;
type DropdownLabelProps = React.PropsWithChildren<LabelProps> & HTMLAttributes<HTMLLabelElement>;
type DropdownTriggerProps = React.PropsWithChildren<TriggerProps> & HTMLAttributes<HTMLElement>;
type DropdownMenuProps = React.PropsWithChildren<MenuProps> & HTMLAttributes<HTMLElement>;
type DropdownItemProps = React.PropsWithChildren<ItemProps> & HTMLAttributes<HTMLElement>;
type DropdownHelperTextProps = React.PropsWithChildren<HelperTextProps> & HTMLAttributes<HTMLElement>;

const DropdownContext = React.createContext<DropdownProviderProps>({ isOpen: false, toggle: () => {} });

const useDropdownContext = () => React.useContext(DropdownContext);

const DropdownProvider = ({ children }: DropdownProviderProps) => {
    const [isOpen, toggle] = React.useState(false);

    return <DropdownContext.Provider value={{ isOpen, toggle }}>{children}</DropdownContext.Provider>;
};

// Wrapper
const DropdownWrapper = ({ children, ...rest }: DropdownWrapperProps) => {
    return <div {...rest}> {children}</div>;
};

// Header
const DropdownHeader = ({ children, ...rest }: DropdownHeaderProps) => {
    return <span {...rest}>{children}</span>;
};

const DropdownLabel = ({ children, ...rest }: DropdownLabelProps) => {
    return <label {...rest}>{children}</label>;
};
// Trigger

const DropdownTrigger = ({ as: Component = 'div', children, ...rest }: DropdownTriggerProps) => {
    const { toggle } = React.useContext(DropdownContext);
    return (
        <Component onClick={() => toggle((prev) => !prev)} {...rest}>
            {children}
        </Component>
    );
};
// Menu
const DropdownMenu = ({ children, ...rest }: DropdownMenuProps) => {
    return <div {...rest}>{children}</div>;
};

/// Item
const DropdownItem = ({ children, ...rest }: DropdownItemProps) => {
    return <div {...rest}>{children}</div>;
};

// HelperText
const DropdownHelperText = ({ children, ...rest }: DropdownHelperTextProps) => {
    return <span {...rest}>{children}</span>;
};

const Dropdown = Object.assign(DropdownProvider, {
    Wrapper: DropdownWrapper,
    Header: DropdownHeader,
    Label: DropdownLabel,
    Trigger: DropdownTrigger,
    Menu: DropdownMenu,
    Item: DropdownItem,
    HelperText: DropdownHelperText,
});

export default Dropdown;
