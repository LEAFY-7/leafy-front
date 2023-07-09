import React, { useContext } from 'react';

interface FlyoutContextProps {
    open: boolean;
    Flyout: React.Dispatch<React.SetStateAction<boolean>>;
}
type FlyoutWrapperProps = FlyoutContextProps & React.PropsWithChildren<{}>;

export const FlyoutContext = React.createContext<FlyoutContextProps>({
    open: false,
    Flyout: () => {},
});

const useFlyoutContext = () => {
    const context = React.useContext(FlyoutContext);
    return context;
};

const FlyoutWrapper = ({ children }: FlyoutWrapperProps) => {
    const [open, Flyout] = React.useState(false);

    const providerValue = { open, Flyout };

    return <FlyoutContext.Provider value={providerValue}>{children}</FlyoutContext.Provider>;
};

const Flyout = ({ children }: { children: React.ReactNode }) => {
    const { open, Flyout } = useContext(FlyoutContext);
    return <div onClick={() => Flyout(!open)}>{children}</div>;
};

const FlyoutList = ({ children }) => {
    const { open } = useFlyoutContext();
    return open && <ul>{children}</ul>;
};

const FlyoutItem = ({ children }) => {
    return <li>{children}</li>;
};

FlyoutWrapper.Flyout = Flyout;
FlyoutWrapper.List = FlyoutList;
FlyoutWrapper.Item = FlyoutItem;

export default FlyoutWrapper;

export const DefaultFlyout = Object.assign(FlyoutWrapper, {
    Flyout: Flyout,
    List: FlyoutList,
    Item: FlyoutItem,
});
