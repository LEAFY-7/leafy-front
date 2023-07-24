import React from 'react';
import { MdCancel } from 'react-icons/md';
import * as Styled from './index.styles';

import { Props } from './index.types';
import Modal from 'components/molecules/Modal/default-modal';

import useModal from 'hooks/useModal';

const sizeUp = ['icon_sm', 'icon_md', 'icon_lg', 'default'];

const Image = ({ src, alt, variant, ...rest }: React.PropsWithChildren<Props>) => {
    const { isOpen, openModal, closeModal } = useModal();

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };
    return sizeUp.find((img) => variant.includes(img)) ? (
        <>
            <Styled.Img src={src} alt={alt} variant={variant} onClick={openModal} {...rest} />
            {isOpen && (
                <Modal show={isOpen} onClose={handleOverlayClick}>
                    <Styled.Wrapper>
                        <Styled.ButtonWrapper onClick={closeModal}>
                            <MdCancel size={20} />
                        </Styled.ButtonWrapper>
                        <Styled.DialogImage src={src} />
                    </Styled.Wrapper>
                </Modal>
            )}
        </>
    ) : (
        <>
            <Styled.Img src={src} alt={alt} variant={variant} {...rest} />
        </>
    );
};

export default Image;
