import styled from '@emotion/styled';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const FloatingInfomation = (props) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <Container className={isActive ? 'active' : ''}>
            <Icon onClick={() => setIsActive(!isActive)}>
                <FontAwesomeIcon icon={faLeaf} />
            </Icon>
        </Container>
    );
};

export default FloatingInfomation;

const Container = styled.div`
    position: absolute;
    right: 16px;
    bottom: 16px;
    width: 48px;
    height: 48px;
    background: #fff;
    border-radius: 50%;

    transition: all 0.2s ease;

    -webkit-box-shadow: inset 6px 6px 8px -4px rgba(0, 0, 0, 0.2), 6px 6px 8px -4px rgba(0, 0, 0, 0.2);
    box-shadow: inset 6px 6px 8px -4px rgba(0, 0, 0, 0.2), 6px 6px 8px -4px rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(1.2);
    }

    &.active {
        transform: scale(4) translate(-32px, -32px);
    }
`;

const Icon = styled.div`
    background: #00927a;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    padding: 6px 8px;
    flex-shrink: 0;

    & svg {
        font-size: 16px;
        color: #fff;

        & path {
            width: 16px;
            height: 16px;
        }
    }
`;
