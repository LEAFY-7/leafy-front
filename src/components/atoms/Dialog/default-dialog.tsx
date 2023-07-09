import React, { HTMLAttributes, PropsWithChildren, useContext } from 'react';
import { createPortal } from 'react-dom';
import useToggleProvider from 'hooks/useToggleProvider';

interface DialogContextProps {
    isOpen: boolean;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DialogProps {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DialogToggleProps {
    onClick?: () => void;
}

export const DialogContext = React.createContext<DialogContextProps>({
    isOpen: false,
    toggle: () => {},
});

function DialogWrapper({
    children,
    open = undefined,
    onOpenChange = undefined,
}: PropsWithChildren<DialogProps>) {
    const { values } = useToggleProvider({
        open: open,
        onOpenChange: onOpenChange,
    });

    return <DialogContext.Provider value={values}>{children}</DialogContext.Provider>;
}

function DialogToggle({ children, onClick, ...rest }: PropsWithChildren<DialogToggleProps>) {
    const { isOpen, toggle } = useContext(DialogContext);

    const handleClick = () => {
        if (onClick !== undefined) {
            return onClick();
        } else toggle(!isOpen);
    };

    return <div onClick={handleClick}>{children}</div>;
}

export function DialogCloseToggle({ children, ...props }: PropsWithChildren) {
    const { toggle } = useContext(DialogContext);

    return (
        <div onClick={() => toggle(false)} {...props}>
            {children}
        </div>
    );
}

export function DialogPortal({ children }: PropsWithChildren) {
    const { isOpen } = useContext(DialogContext);

    return isOpen ? createPortal(<>{children}</>, document.body) : null;
}

export function DialogOverlay(props: HTMLAttributes<HTMLDivElement>) {
    const { toggle } = useContext(DialogContext);
    return <div {...props} onClick={() => toggle(false)} />;
}

export function DialogContent(props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
    return <div {...props}>{props.children}</div>;
}

const Dialog = Object.assign(DialogWrapper, {
    Toggle: DialogToggle,
    Content: DialogContent,
    Portal: DialogPortal,
    Overlay: DialogOverlay,
    CloseToggle: DialogCloseToggle,
});
export default Dialog;
