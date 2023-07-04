import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { CheckBoxProps } from './index.types';

export const CheckBox = styled.input<Required<CheckBoxProps>>`
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
                    border-color: ${theme.palette.style.primary.borderColor};
                    background-color: ${theme.palette.style.primary.backgroundColor};
                    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
                        color 0.15s ease-in-out;

                    &:checked {
                        border-color: ${theme.palette.style.secondary.borderColor};
                        background-color: ${theme.palette.style.secondary.backgroundColor};
                    }
                    &:checked:active {
                        border-color: ${theme.palette.style.tertiary.borderColor};
                    }
                `;
            }
            default: {
                return css`
                    border-color: ${theme.palette.style.default.borderColor};
                    background-color: ${theme.palette.style.default.backgroundColor};
                    &:hover {
                    }
                `;
            }
        }
    }};
`;
