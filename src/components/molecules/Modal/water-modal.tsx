import styled from '@emotion/styled';
import Dialog from 'components/atoms/Dialog/headless-dialog';
import React from 'react';

type ModalProps = {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
    handleModal?: () => void;
    toggleEl: React.ReactNode;
    header?: React.ReactNode;
};

type ModalPropsType = ModalProps & React.PropsWithChildren<{}>;

const WaterModal = ({
    open = false,
    onOpenChange = undefined,
    toggleEl,
    header,
    handleModal,
    children,
}: ModalPropsType) => {
    return (
        <>
            <Dialog.Toggle onClick={handleModal}>{toggleEl}</Dialog.Toggle>
            <Dialog open={open} onOpenChange={onOpenChange}>
                <Dialog.Portal>
                    <Overlay />
                    <Wrapper>
                        <Content>
                            {header && header}
                            <span>{children}</span>
                            {/* <CloseButton>
                                <ImCancelCircle size={20} />
                            </CloseButton> */}
                        </Content>
                    </Wrapper>
                </Dialog.Portal>
            </Dialog>
        </>
    );
};

export default WaterModal;

const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;

const Wrapper = styled(Dialog.Content)`
    position: absolute;
    width: 350px;
    height: 350px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: radial-gradient(
        66.35% 237.95% at 21.48% 25.52%,
        rgba(250, 250, 250, 0.3) 0%,
        rgba(250, 250, 250, 0.01) 18.75%,
        #fafafa 100%
    );
    mix-blend-mode: normal;
    box-shadow: 5px 30px 30px rgba(14, 17, 27, 0.1), inset 5px 30px 30px rgba(14, 17, 27, 0.15);
    backdrop-filter: blur(15px);
    border-radius: 50%;
`;

const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
`;

const CloseButton = styled(Dialog.CloseToggle)`
    position: absolute;
    top: 25%;
    right: 20%;
    transform: translate(60%, 20%);
    cursor: pointer;
`;
