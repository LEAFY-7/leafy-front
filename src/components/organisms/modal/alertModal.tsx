import styled from '@emotion/styled';
import DefaultButton from 'components/atoms/Button/default-button';
import { theme } from 'configs/ui.config';
import { CSSProperties, MouseEventHandler, ReactElement } from 'react';

interface IProps {
    isOpen: boolean;
    handleClickClose: MouseEventHandler;
    handleClickConfirm: MouseEventHandler;
    children: string | string[] | ReactElement | ReactElement[];
    style?: CSSProperties;
    confirmText?: string;
    cancelText?: string;
}

const AlertModal = ({ isOpen, handleClickClose, handleClickConfirm, children, style }: IProps) => {
    return (
        <>
            <BackGround onClick={handleClickClose} isOpen={isOpen} />
            <Container isOpen={isOpen}>
                <ChildrenWrap style={style}>{children}</ChildrenWrap>
                <ButtonWrap>
                    <DefaultButton title="test" onClick={handleClickClose} />
                    <DefaultButton title="test" onClick={handleClickConfirm} isPositive />
                </ButtonWrap>
            </Container>
        </>
    );
};

export default AlertModal;

const Container = styled.div<{ isOpen: boolean }>`
    z-index: 1000;
    border-radius: 50%;
    aspect-ratio: 1/1;

    -webkit-box-shadow: inset 32px 32px 32px 12px #0E111B10, 32px 32px 32px 12px #0E111B10;
    box-shadow: inset 32px 32px 32px 12px #0E111B10, 32px 32px 32px 12px #0E111B10;
    background: #fafafa;


    position: fixed;
    inset:0;
    margin: auto;
    box-sizing: border-box;
    grid-template-columns: minmax(0, 100%);
    max-width: 100%;
    width: 32em;
    border: none;
    background: #fff;
    color: #545454;
    font-family: inherit;
    font-size: 1rem;
    
    
    padding: 80px 120px;
    
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    align-items:center;
    
    transition: all 0.2s ease;
    
    // opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transform: scale(${({ isOpen }) => (isOpen ? '1' : '0')});
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};

}
`;

const BackGround = styled.div<{ isOpen: boolean }>`
    z-index: 999;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    background: #00000060;
    transition: all 0.2s ease;

    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
`;

const ChildrenWrap = styled.div`
    font-size: 24px;
    font-weight: ${theme.fontWeight.bold};
    margin: 0 auto;
`;

const ButtonWrap = styled.div`
    margin-top: 80px;
    display: flex;
    gap: 16px;
`;
