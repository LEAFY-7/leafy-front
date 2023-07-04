import React from 'react';
import styled from '@emotion/styled';
import { ImCancelCircle } from 'react-icons/im';
import { theme } from 'configs/style.config';
import Dialog from 'components/atoms/Dialog/default-dialog';
import EffectiveButton from 'components/atoms/Button/effective-button';
import Flex from 'components/atoms/Group/flex';
import Div from 'components/atoms/Div/default-div';

type ModalProps = {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
    toggleEl: React.ReactNode;
    header?: React.ReactNode;
};

type ModalPropsType = ModalProps & React.PropsWithChildren<{}>;

const WaterModal = ({
    open = false,
    onOpenChange = undefined,
    toggleEl,
    header,
    children,
}: ModalPropsType) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <Dialog.Toggle>{toggleEl}</Dialog.Toggle>
            <Dialog.Portal>
                <Overlay />
                <Content>
                    <Container className="content-container">
                        {header && header}
                        <Div id="content" size="md">
                            {children}
                        </Div>
                        <CloseButton>
                            <ImCancelCircle size={20} />
                        </CloseButton>
                    </Container>
                </Content>
            </Dialog.Portal>
        </Dialog>
    );
};

export default WaterModal;

const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100vh;
`;

const Content = styled(Dialog.Content)`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
const Container = styled.div`
    position: relative;
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2.5rem;
    background-color: rgba(255, 255, 255, 0.9);
    color: ${theme.colors.black};
    border-radius: 59% 41% 52% 48% / 58% 48% 52% 42%;
    box-shadow: inset -10px 25px 20px rgba(0, 0, 0, 0.4), inset -20px 28px 20px rgba(255, 255, 255, 0.3);
    transition: all 0.5s ease-out;
    box-sizing: border-box;
    &::after {
        content: '';
        position: absolute;
        top: 70px;
        right: 120px;
        width: 30px;
        height: 80px;
        background: transparent;
        border-radius: 20px;
        transform: rotate(-40deg);
        box-shadow: inset -3px -3px 3px rgba(0, 0, 0, 0.5), 5px -5px 8px rgba(0, 0, 0, 0.7),
            10px 20px 30px rgba(255, 255, 255, 0.5), inset -3px 5px 8px rgba(255, 255, 255, 1);
        transition: all 0.5s ease-out;
    }
`;
const CloseButton = styled(Dialog.CloseToggle)`
    position: absolute;
    top: 25%;
    right: 20%;
    transform: translate(60%, 20%);
    cursor: pointer;
`;
