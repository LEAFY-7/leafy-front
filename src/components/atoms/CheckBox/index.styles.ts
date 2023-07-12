import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
    variant?: 'primary' | 'secondary' | 'important' | 'default';
};
export const CheckBox = styled.input<Required<Props>>`
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    margin: 8px;
    color: white;

    ${({ variant, theme }) => {
        switch (variant) {
            case 'primary': {
                return css`
                    border-width: 3px;
                    border-style: solid;
                    border-color: ${theme.palette.primary.borderColor};
                    background-color: ${theme.palette.primary.backgroundColor};
                    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
                        color 0.15s ease-in-out;

                    &:checked {
                        border-color: ${theme.palette.secondary.borderColor};
                        background-color: ${theme.palette.secondary.backgroundColor};
                    }
                    &:checked:active {
                        border-color: ${theme.palette.tertiary.borderColor};
                    }
                `;
            }
            default: {
                return css`
                    border-color: ${theme.palette.default.borderColor};
                    background-color: ${theme.palette.default.backgroundColor};
                    &:hover {
                    }
                `;
            }
        }
    }};
`;
