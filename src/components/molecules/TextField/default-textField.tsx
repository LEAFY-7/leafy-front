// /** @jsxImportSource @emotion/react */
// import React from 'react';
// import type { CSSProperties, ChangeEvent, ElementType, HTMLAttributes, ReactNode } from 'react';
// import styleConfig, { theme } from 'configs/style.config';
// import { css } from '@emotion/react';

// export interface TextFieldStyleProps {
//     fontSize?: keyof typeof styleConfig.theme.fontSize;
//     lineHeight?: keyof typeof styleConfig.theme.lineHeight;
//     fontWeight?: CSSProperties['fontWeight'];
//     paddingX?: number;
//     paddingY?: number;
//     error?: boolean;
// }
// export interface TextFieldInputProps extends TextFieldStyleProps {
//     radius?: number;
//     helperText?: string;
//     placeHolderFontSize?: keyof typeof styleConfig.theme.fontSize;
//     disabled?: boolean;
//     readOnly?: boolean;
// }
// export interface TextFieldHelperText extends HTMLAttributes<HTMLElement>, TextFieldStyleProps {
//     helperText?: string;
// }
// export interface IconProps {
//     disabled?: boolean;
// }

// export interface Props extends HTMLAttributes<HTMLElement>, TextFieldStyleProps, TextFieldInputProps {
//     hookForm?: boolean;
//     value?: string;
//     type: 'text' | 'password';
//     placeholder?: string;
//     labelTitle?: string;
//     leftIcon?: ReactNode;
//     helperIcon?: ReactNode;
//     onChange: (e: ChangeEvent<HTMLInputElement>) => void;
// }

// const TextField = ({
//     paddingX = 16,
//     paddingY = 8,
//     fontWeight = 400,
//     fontSize = 'md',
//     lineHeight = 'sm',
//     placeHolderFontSize = 'md',
//     radius = 5,
//     leftIcon,
//     helperIcon,
//     children,
//     ...rest
// }: React.PropsWithChildren<Props>) => {
//     const wrapperStyle = css`
//         display: flex;
//         flex-direction: column;
//         padding: ${`${paddingX}px ${paddingX}px`};
//         font-weight: ${fontWeight};
//         font-size: ${theme.fontSize[fontSize]};
//     `;
//     return (
//         <div>
//             <label></label>
//             <div>
//                 <input type="text" />
//                 <div></div>

//                 <span></span>
//             </div>
//         </div>
//     );
// };

// export default TextField;

import React, { CSSProperties, HTMLAttributes } from 'react';
import { theme } from 'configs/ui.config';
import styled from '@emotion/styled';

interface TextFieldContextProps {
    value?: string;
    helperText?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type TextFieldWrapperProps = TextFieldContextProps &
    React.PropsWithChildren<{
        fontSize?: keyof typeof theme.fontSize;
        lineHeight?: keyof typeof theme.lineHeight;
        fontWeight?: CSSProperties['fontWeight'];
        paddingX?: number;
        paddingY?: number;
        error?: boolean;
    }>;

export interface TextFieldProps {
    fontSize?: keyof typeof theme.fontSize;
    lineHeight?: keyof typeof theme.lineHeight;
    fontWeight?: CSSProperties['fontWeight'];
    paddingX?: number;
    paddingY?: number;
    error?: boolean;
}
type TextFieldInputProps = {
    radius?: number;
    placeHolderFontSize?: keyof typeof theme.fontSize;
    disabled?: boolean;
};

interface TextFieldHelperText extends HTMLAttributes<HTMLElement> {
    helperText?: string;
    fontSize?: keyof typeof theme.fontSize;
    lineHeight?: keyof typeof theme.lineHeight;
    fontWeight?: CSSProperties['fontWeight'];
    paddingX?: number;
    paddingY?: number;
    error?: boolean;
}

const TextFieldContext = React.createContext<TextFieldContextProps>({
    value: '',
    helperText: '',
    disabled: false,
    onChange: () => {},
});

const useTextFieldContext = () => {
    const context = React.useContext(TextFieldContext);
    return context;
};

const TextField = ({ children }: TextFieldWrapperProps) => {
    const { value, onChange, disabled, helperText } = useTextFieldContext();
    return (
        <TextFieldContext.Provider value={{ value, onChange, disabled, helperText }}>
            <div>{children}</div>
        </TextFieldContext.Provider>
    );
};

const TextFieldLabel = ({ children }) => {
    return <StyledLabel>{children}</StyledLabel>;
};

const TextFieldInput = ({ radius, placeHolderFontSize, disabled }: TextFieldInputProps) => {
    return <StyledInput radius={radius} placeHolderFontSize={placeHolderFontSize} disabled={disabled} />;
};

const TextFieldHelperText = ({
    fontSize = 'md',
    fontWeight,
    paddingX,
    paddingY,
    error = false,
    children,
}: TextFieldHelperText) => {
    return (
        <StyledHelperText fontWeight={fontWeight} paddingX={paddingX} paddingY={paddingY} error={error}>
            {children}
        </StyledHelperText>
    );
};

const TextFieldIcon = ({ children }) => {
    return <StyledIconBox>{children}</StyledIconBox>;
};

TextField.Label = TextFieldLabel;
TextField.Toggle = TextFieldInput;
TextField.List = TextFieldHelperText;
TextField.Icon = TextFieldIcon;

export default TextField;

export const DefaultTextField = Object.assign(TextField, {
    Label: TextFieldLabel,
    Input: TextFieldInput,
    HelperText: TextFieldHelperText,
    Icon: TextFieldIcon,
});

export const StyledWrapper = styled.div<TextFieldProps>`
    display: flex;
    flex-direction: column;
    padding: ${({ paddingX, paddingY }) => `${paddingY}px ${paddingX}px`};
    font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize]};
    font-weight: ${({ fontWeight }) => fontWeight};
    line-height: ${({ lineHeight, theme }) => theme.lineHeight[lineHeight]};
`;
export const StyledLabel = styled.label<Required<{}>>``;
export const StyledInput = styled.input<Required<TextFieldInputProps>>``;
export const StyledIconBox = styled.div<Required<{}>>``;
export const StyledHelperText = styled.span<TextFieldProps>`
    width: 100%;
    padding: ${({ paddingX, paddingY }) => `${paddingY - 12}px ${paddingX - 4}px`};
    color: ${({ error, theme }) => error && theme.colors.red};
    text-align: left;
    font-size: calc(${({ fontSize, theme }) => theme.fontSize[fontSize]} - 4px);
    font-weight: calc(${({ fontWeight }) => fontWeight} - 200);
    line-height: ${({ lineHeight, theme }) => theme.lineHeight[lineHeight]};
`;
