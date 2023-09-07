import type { PropsWithChildren, SetStateAction, HTMLAttributes } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';

interface ContextProps {
    isOn: boolean;
    toggle: React.Dispatch<SetStateAction<boolean>>;
}
interface WrapperProps {}
interface ToggleProps {}
interface TitleProps {}

type SwitchProviderProps = PropsWithChildren<ContextProps>;
type SwitchWrapperProps = PropsWithChildren<WrapperProps> & HTMLAttributes<HTMLDivElement>;
type SwitchToggleProps = PropsWithChildren<ToggleProps> & HTMLAttributes<HTMLElement>;
type SwitchTitleProps = PropsWithChildren<TitleProps> & HTMLAttributes<HTMLSpanElement>;

export const SwitchContext = React.createContext<ContextProps>({
    isOn: false,
    toggle: () => {},
});

const useSwitchContext = () => {
    const context = React.useContext(SwitchContext);
    return context;
};

const SwitchProvider = ({ children }: SwitchProviderProps) => {
    const [isOn, toggle] = React.useState(false);
    const providerValue = { isOn, toggle };
    return <SwitchContext.Provider value={providerValue}>{children}</SwitchContext.Provider>;
};

const SwitchWrapper = ({ children, ...rest }: SwitchWrapperProps) => {
    const { isOn, toggle } = React.useContext(SwitchContext);
    return (
        <Wrapper onClick={() => toggle(!isOn)} isOn={isOn} {...rest}>
            {children}
        </Wrapper>
    );
};

const SwitchToggle = ({ children, ...rest }: SwitchToggleProps) => {
    const { isOn } = useSwitchContext();
    return (
        isOn && (
            <Toggle isOn={isOn} {...rest}>
                {children}
            </Toggle>
        )
    );
};
const SwitchTitle = ({ children, ...rest }: SwitchTitleProps) => {
    return <span {...rest}>{children}</span>;
};

const Switch = Object.assign(SwitchProvider, {
    Wrapper: SwitchWrapper,
    Toggle: SwitchToggle,
    Title: SwitchTitle,
});
export default Switch;

const Wrapper = styled.div<{ isOn: boolean }>`
    position: relative;
    cursor: pointer;
    width: 60px;
    height: 30px;
    background-color: ${({ isOn }) => (isOn ? theme.colors.primary : theme.colors.secondary)};
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    font-weight: ${theme.fontWeight.bold};
    padding: 0 5px;
`;
const Toggle = styled.div<{ isOn: boolean }>`
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 2.5px;
    left: ${({ isOn }) => (isOn ? 'calc(100% - 27.5px)' : '2.5px')};
    transition: left 0.3s ease-in-out;
`;
