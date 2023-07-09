import React, { useContext } from 'react';

interface SwitchContextProps {
    isOn: boolean;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
type SwitchWrapperProps = SwitchContextProps & React.PropsWithChildren<{}>;

export const SwitchContext = React.createContext<SwitchContextProps>({
    isOn: false,
    toggle: () => {},
});

const useSwitchContext = () => {
    const context = React.useContext(SwitchContext);
    return context;
};

const SwitchWrapper = ({ children }: SwitchWrapperProps) => {
    const [isOn, toggle] = React.useState(false);
    const providerValue = { isOn, toggle };
    return <SwitchContext.Provider value={providerValue}>{children}</SwitchContext.Provider>;
};

const SwitchContainer = ({ children }: { children: React.ReactNode }) => {
    const { isOn, toggle } = useContext(SwitchContext);
    return <div onClick={() => toggle(!isOn)}>{children}</div>;
};

const SwitchToggle = ({ children }) => {
    const { isOn } = useSwitchContext();
    return isOn && <ul>{children}</ul>;
};

const SwitchToggleText = ({ children }) => {
    return <li>{children}</li>;
};

SwitchWrapper.Container = SwitchContainer;
SwitchWrapper.Toggle = SwitchToggle;
SwitchWrapper.Item = SwitchToggleText;

export default SwitchWrapper;

export const DefaultSwitch = Object.assign(SwitchWrapper, {
    Switch: SwitchContainer,
    List: SwitchToggle,
    Item: SwitchToggleText,
});
