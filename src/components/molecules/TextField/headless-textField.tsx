import type { ReactNode, CSSProperties, HTMLAttributes } from 'react';
import React from 'react';
import { theme } from 'configs/ui.config';
import styled from '@emotion/styled';
import Typography, { TypographyVariant } from 'components/atoms/Typograph/default-typography';

interface TextFieldContextProps {
    error?: boolean;
    errorChange: React.Dispatch<React.SetStateAction<boolean>>;
}

interface WrapperProps {
    paddingX?: number;
    paddingY?: number;
}
interface ContainerProps {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}
interface LabelProps {
    fontSize?: keyof typeof theme.fontSize;
}
interface InputProps {
    value: HTMLInputElement['value'];
    type: HTMLInputElement['type'];
    placeholder?: HTMLInputElement['placeholder'];

    radius?: number;
    placeHolderFontSize?: keyof typeof theme.fontSize;
    disabled?: boolean;
    readOnly?: boolean;
}
interface HelperTextProps {
    helperVariant?: TypographyVariant;
    textAlign?: CSSProperties['textAlign'];
    color?: keyof typeof theme.colors;
    fontSize?: keyof typeof theme.fontSize;
    fontWeight?: keyof typeof theme.fontWeight;
}

type TextFieldProviderProps = React.PropsWithChildren<{}> & TextFieldContextProps;
type TextFieldWrapperProps = React.PropsWithChildren<WrapperProps> & HTMLAttributes<HTMLElement>;
type TextFieldContainerProps = React.PropsWithChildren<ContainerProps> & HTMLAttributes<HTMLElement>;
type TextFieldLabelProps = React.PropsWithChildren<LabelProps> & HTMLAttributes<HTMLLabelElement>;
type TextFieldInputProps = React.PropsWithChildren<InputProps> & HTMLAttributes<HTMLInputElement>;
type TextFieldHelperTextProps = React.PropsWithChildren<HelperTextProps> &
    Omit<HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLTextAreaElement>, 'color'>;

const TextFieldContext = React.createContext<TextFieldContextProps>({
    error: false,
    errorChange: () => {},
});

const useTextFieldContext = () => React.useContext(TextFieldContext);

// Provider
const TextFieldProvider = ({ children }: TextFieldProviderProps) => {
    const [error, errorChange] = React.useState<TextFieldContextProps['error']>(false);
    return <TextFieldContext.Provider value={{ error, errorChange }}>{children}</TextFieldContext.Provider>;
};

// Wrapper
const TextFieldWrapper = ({ paddingX = 16, paddingY = 8, children, ...rest }: TextFieldWrapperProps) => {
    return (
        <Wrapper paddingX={paddingX} paddingY={paddingY} {...rest}>
            {children}
        </Wrapper>
    );
};
// Container
const TextFieldContainer = ({ children, ...rest }: TextFieldContainerProps) => {
    return <Container {...rest}>{children}</Container>;
};
const TextFieldLabel = ({ fontSize = 'md', children, ...rest }: TextFieldLabelProps) => {
    return (
        <Label fontSize={fontSize} {...rest}>
            {children}
        </Label>
    );
};

// Input
const TextFieldInput = React.forwardRef(function TextFieldInput(
    {
        value = '',
        type = 'text',
        placeholder = '',
        placeHolderFontSize = 'md',
        disabled = false,
        readOnly = false,
        ...rest
    }: TextFieldInputProps,
    forwardedRef: React.Ref<HTMLInputElement>,
) {
    return (
        <input
            value={value}
            type={type}
            ref={forwardedRef}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            {...rest}
        />
    );
});

const TextFieldHelperText = ({
    helperVariant = 'BODY2',
    textAlign = 'left',
    color = 'sementic',
    fontSize = 'sm',
    fontWeight = 'regular',
    children = '에러 메시지를 입력해주세요.',
    ...rest
}: TextFieldHelperTextProps) => {
    const { error } = useTextFieldContext();
    return (
        <>
            {error && (
                <Typography
                    as="span"
                    width={100}
                    variant={helperVariant}
                    color={color}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    textAlign={textAlign}
                    {...rest}
                >
                    {children}
                </Typography>
            )}
        </>
    );
};

const TextField = Object.assign(TextFieldProvider, {
    Wrapper: TextFieldWrapper,
    Container: TextFieldContainer,
    Label: TextFieldLabel,
    Input: TextFieldInput,
    HelperText: TextFieldHelperText,
});

export default TextField;

const Wrapper = styled.div<Required<WrapperProps>>`
    display: flex;
    flex-direction: column;
    padding: ${({ paddingX, paddingY }) => `${paddingY}px ${paddingX}px`};
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;
const Label = styled.label<Required<LabelProps>>`
    margin-bottom: 16px;
    font-size: calc(${({ fontSize, theme }) => theme.fontSize[fontSize]} - 4px);
`;

const Input = styled.input``;
