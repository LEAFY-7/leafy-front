import React, { useContext } from 'react';
import Div from '../Div/default-div';
import styled from '@emotion/styled';

interface StyleProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'default';
    variant?: 'default' | 'primary' | 'secondary' | 'translucent';
}

interface FlyoutContextProps {
    open: boolean;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
type FlyoutWrapperProps = FlyoutContextProps & React.PropsWithChildren<{}>;

type FloutListProps = StyleProps & React.PropsWithChildren<{}>;

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

const FlyoutToggle = ({ children, ...rest }: { children: React.ReactNode }) => {
    const { open, toggle } = useContext(FlyoutContext);
    return (
        <div onClick={() => toggle(!open)} {...rest}>
            {children}
        </div>
    );
};
const FlyoutHeader = ({ children, ...rest }) => {
    return <div {...rest}>{children}</div>;
};

const FlyoutList = ({ size = 'lg', variant = 'translucent', children, ...rest }: FloutListProps) => {
    const { open } = useFlyoutContext();

    React.useEffect(() => {
        if (open) {
            const timeoutId = setTimeout(() => {
                const listWrapperElement = document.getElementById('list-wrapper');
                if (listWrapperElement) {
                    listWrapperElement.style.opacity = '1';
                }
            }, 100);

            return () => clearTimeout(timeoutId);
        }
    }, [open]);

    return (
        open && (
            <ListWrapper id="list-wrapper" size={size} variant={variant} direction="column" {...rest}>
                {children}
            </ListWrapper>
        )
    );
};

const FlyoutItem = ({ children, ...rest }) => {
    return <li {...rest}>{children}</li>;
};

Flyout.Toggle = FlyoutToggle;
Flyout.Header = FlyoutHeader;
Flyout.List = FlyoutList;
Flyout.Item = FlyoutItem;

export default Flyout;

const ListWrapper = styled(Div)`
    position: absolute;
    top: 8px;
    left: 0px;
    z-index: 9;
    padding: 8px;
    height: 350px;

    opacity: 0;
    transition: opacity 0.5s ease-in-out;
`;
