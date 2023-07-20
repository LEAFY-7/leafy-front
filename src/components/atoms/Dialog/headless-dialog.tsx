import type { HTMLAttributes, PropsWithChildren } from 'react';
import React, { createContext, useContext } from 'react';
import { createPortal } from 'react-dom';
import useToggleProvider from 'hooks/useToggleProvider';

interface DialogContextProps {
    isOpen: boolean;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
type DialogProviderProps = React.PropsWithChildren<{
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
}>;
type DialogToggleProps = React.PropsWithChildren<{ onClick?: () => void }>;

const DialogContext = createContext<DialogContextProps>({ isOpen: false, toggle: () => {} });
const DialogProvider = ({
    children,
    open = undefined,
    onOpenChange = undefined,
}: PropsWithChildren<DialogProviderProps>) => {
    const { values } = useToggleProvider({
        open: open,
        onOpenChange: onOpenChange,
    });
    return <DialogContext.Provider value={values}>{children}</DialogContext.Provider>;
};
// Toggle
const DialogToggle = ({ children, onClick, ...rest }: PropsWithChildren<DialogToggleProps>) => {
    const { isOpen, toggle } = useContext(DialogContext);

    const handleClick = () => {
        if (onClick !== undefined) {
            return onClick();
        } else toggle(!isOpen);
    };

    return (
        <div onClick={handleClick} {...rest}>
            {children}
        </div>
    );
};
// Toggle - only close
const DialogCloseToggle = ({ children, ...rest }: PropsWithChildren) => {
    const { toggle } = useContext(DialogContext);

    return (
        <div onClick={() => toggle(false)} {...rest}>
            {children}
        </div>
    );
};
// Portal
const DialogPortal = ({ children }: PropsWithChildren) => {
    const { isOpen } = useContext(DialogContext);
    return isOpen ? createPortal(<>{children}</>, document.body) : null;
};
// OverLay - only close
const DialogOverlay = (props: HTMLAttributes<HTMLDivElement>) => {
    const { toggle } = useContext(DialogContext);
    return <div {...props} onClick={() => toggle(false)} />;
};

// Content
const DialogContent = (props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
    return <div {...props}>{props.children}</div>;
};

const Dialog = Object.assign(DialogProvider, {
    Toggle: DialogToggle,
    Content: DialogContent,
    Portal: DialogPortal,
    Overlay: DialogOverlay,
    CloseToggle: DialogCloseToggle,
});
export default Dialog;
