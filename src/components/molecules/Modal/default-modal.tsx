import React, { ReactNode } from 'react';
import reactDom from 'react-dom';
import styled from '@emotion/styled';

type ModalContextProps = {
    id?: string;
    show?: boolean;
    onClose: (event: React.MouseEvent<HTMLDivElement>) => void;
};

type ModalProps = ModalContextProps & React.PropsWithChildren<{}>;

const ModalContext = React.createContext<Required<ModalContextProps>>({
    id: '',
    show: false,
    onClose: () => {},
});

const useModalContext = () => {
    const context = React.useContext(ModalContext);
    return context;
};

const ModalWrapper = ({ id, show, onClose, children }: ModalProps) => {
    const value = { id, show, onClose };
    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

const ModalPortal = ({ children }: { children: ReactNode }) => {
    const el = document.getElementById('modal');
    return reactDom.createPortal(children, el!);
};

const Modal = ({ show, onClose, children }: React.PropsWithChildren<ModalProps>) => {
    return show ? (
        <ModalPortal>
            <Overlay onClick={onClose}>{children}</Overlay>
        </ModalPortal>
    ) : null;
};
export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 999;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(1px);
`;
