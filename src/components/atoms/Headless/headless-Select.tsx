import type { ReactNode, ElementType, CSSProperties, HTMLAttributes } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';

interface SelectStyle {}

interface ContextProps {
    isOpen: boolean;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface WrapperProps {}

interface LabelProps {}

interface TriggerProps {
    as?: ElementType;
}

interface OptionListProps {}

interface OptionProps {}

interface HelperTextProps {
    helperText?: string;
    helperIcon?: ReactNode;
}

type SelectProviderProps = React.PropsWithChildren<ContextProps>;
type SelectWrapperProps = React.PropsWithChildren<WrapperProps> & HTMLAttributes<HTMLDivElement>;
type SelectLabelProps = React.PropsWithChildren<LabelProps> & HTMLAttributes<HTMLLabelElement>;
type SelectTriggerProps = React.PropsWithChildren<TriggerProps> & HTMLAttributes<HTMLElement>;
type SelectOptionsListProps = React.PropsWithChildren<OptionListProps> & HTMLAttributes<HTMLElement>;
type SelectOptionProps = React.PropsWithChildren<OptionProps> & HTMLAttributes<HTMLElement>;
type SelectHelperTextProps = React.PropsWithChildren<HelperTextProps> & HTMLAttributes<HTMLElement>;

const SelectContext = React.createContext<SelectProviderProps>({ isOpen: false, toggle: () => {} });

const useSelectContext = () => React.useContext(SelectContext);

// Provider
const SelectProvider = ({ children }: SelectProviderProps) => {
    const [isOpen, toggle] = React.useState(false);

    return <SelectContext.Provider value={{ isOpen, toggle }}>{children}</SelectContext.Provider>;
};

// Wrapper
const SelectWrapper = ({ children, ...rest }: SelectWrapperProps) => {
    return <div {...rest}> {children}</div>;
};

const SelectLabel = ({ children, ...rest }: SelectLabelProps) => {
    return <label {...rest}>{children}</label>;
};
// Trigger
const SelectTrigger = ({ as: Component = 'div', children, ...rest }: SelectTriggerProps) => {
    const { toggle } = React.useContext(SelectContext);
    return (
        <Component onClick={() => toggle((prev) => !prev)} {...rest}>
            {children}
        </Component>
    );
};
// OptionList
const SelectOptionList = ({ children, ...rest }: SelectOptionsListProps) => {
    const { isOpen } = useSelectContext();
    return (
        <ul role="listbox" {...rest}>
            {isOpen ? children : null}
        </ul>
    );
};

// Option
const SelectOption = ({ children, ...rest }: SelectOptionProps) => {
    return <li {...rest}>{children}</li>;
};

// HelperText
const SelectHelperText = ({ children, ...rest }: SelectHelperTextProps) => {
    return <span {...rest}>{children}</span>;
};

const Select = Object.assign(SelectProvider, {
    Wrapper: SelectWrapper,
    Label: SelectLabel,
    Trigger: SelectTrigger,
    Menu: SelectOptionList,
    Item: SelectOption,
    HelperText: SelectHelperText,
});

export default Select;
