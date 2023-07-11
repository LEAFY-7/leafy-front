import React, { useContext } from 'react';

interface FlyoutContextProps {
    open: boolean;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
type FlyoutWrapperProps = FlyoutContextProps & React.PropsWithChildren<{}>;

const FlyoutContext = React.createContext<FlyoutContextProps>({
    open: false,
    toggle: () => {},
});

const useFlyoutContext = () => {
    const context = React.useContext(FlyoutContext);
    return context;
};

const Flyout = ({ children }: FlyoutWrapperProps) => {
    const [open, toggle] = React.useState(false);

    const providerValue = { open, toggle };

    return <FlyoutContext.Provider value={providerValue}>{children}</FlyoutContext.Provider>;
};

const FlyoutToggle = ({ children }: { children: React.ReactNode }) => {
    const { open, toggle } = useContext(FlyoutContext);
    return <div onClick={() => toggle(!open)}>{children}</div>;
};

const FlyoutList = ({ children }) => {
    const { open } = useFlyoutContext();
    return open && <ul>{children}</ul>;
};

const FlyoutItem = ({ children }) => {
    return <li>{children}</li>;
};

Flyout.Toggle = FlyoutToggle;
Flyout.List = FlyoutList;
Flyout.Item = FlyoutItem;

export default Flyout;

export const DefaultFlyout = Object.assign(Flyout, {
    Toggle: FlyoutToggle,
    List: FlyoutList,
    Item: FlyoutItem,
});
