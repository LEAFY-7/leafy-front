import React from 'react';
import styled from '@emotion/styled';

type ModalProps = {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

type ModalPropsType = ModalProps & React.PropsWithChildren<{}>;

const WaterModal = ({ open = false, onOpenChange = undefined, children }: ModalPropsType) => {
    return (
        <>
            {/* <Toggle open={open} onOpenChange={onOpenChange}>
                <Toggle.Content>a</Toggle.Content>
                <Toggle.Toggle>d</Toggle.Toggle>
            </Toggle> */}
        </>
    );
};

export default WaterModal;
