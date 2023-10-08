import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';

const StyledComment = {
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


const MenuList = {
    Wrap : styled.div`
        position: relative;
    `,

    Menu : styled.ul`
        position: absolute;
        right: 0;
        top: 0;
        background-color: ${theme.colors.white};
        border-radius: 16px;
        padding: 10px;
        width: 392px;
    `,
    List : styled.li`
        padding: 10px;
        border-radius: 8px;
        &:hover{
            background-color: ${theme.colors.secondary};
            color: ${theme.colors.white};
        }
    `,
}

export  {StyledComment, MenuList};