import styled from '@emotion/styled';

const Comment = {
    Wrap: styled.div`
        width: 100%;
        background: #fafafa;
        border-radius: 8px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,
    Button: styled.button`
        width: 40px;
        height: 40px;
        border-radius: 8px;
        transition: all 0.4s ease;

        border: 2px solid #d9d9d9;

        &:hover {
            background: #d9d9d9;
        }
    `,
};

const Menus = styled.ul``;

export  {Comment, Menus};