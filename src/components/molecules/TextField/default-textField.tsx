import type { ReactNode, CSSProperties, HTMLAttributes } from 'react';
import React from 'react';
import { theme } from 'configs/ui.config';
import styled from '@emotion/styled';
import Typography, { TypographyVariant } from 'components/atoms/Typograph/default-typography';
import DefaultInput from 'components/atoms/Input/default-input';
import { css } from '@emotion/react';

interface TextFieldContextProps {
    error?: boolean;
    disabled?: boolean;
}

interface WrapperProps {
    paddingX?: number;
    paddingY?: number;
}
interface IconProps {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}
interface ContainerProps extends IconProps {}

interface LabelProps {
    required?: boolean;
    requiredtext?: string;
    labelVariant?: TypographyVariant;
    color?: keyof typeof theme.colors;
    fontSize?: keyof typeof theme.fontSize;
    fontWeight?: keyof typeof theme.fontWeight;
    textAlign?: CSSProperties['textAlign'];
}
interface InputProps {
    value: HTMLInputElement['value'];
    type: HTMLInputElement['type'];
    placeholder?: HTMLInputElement['placeholder'];
    maxLength?: HTMLInputElement['maxLength'];
    readOnly?: HTMLInputElement['readOnly'];
    placeHolderFontSize?: keyof typeof theme.fontSize;
}
interface HelperTextProps extends IconProps {
    helperVariant?: TypographyVariant;
    color?: keyof typeof theme.colors;
    fontSize?: keyof typeof theme.fontSize;
    fontWeight?: keyof typeof theme.fontWeight;
    textAlign?: CSSProperties['textAlign'];
}

type TextFieldProviderProps = React.PropsWithChildren<TextFieldContextProps>;
type TextFieldWrapperProps = React.PropsWithChildren<WrapperProps> & HTMLAttributes<HTMLElement>;
type TextFieldContainerProps = React.PropsWithChildren<ContainerProps> & HTMLAttributes<HTMLElement>;
type TextFieldLabelProps = React.PropsWithChildren<LabelProps> & HTMLAttributes<HTMLLabelElement>;
type TextFieldInputProps = React.PropsWithChildren<InputProps> & HTMLAttributes<HTMLInputElement>;
type TextFieldHelperTextProps = React.PropsWithChildren<HelperTextProps> &
    Omit<HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLTextAreaElement>, 'color'>;

const TextFieldContext = React.createContext<TextFieldContextProps>({
    error: false,
    disabled: false,
});

const useTextFieldContext = () => React.useContext(TextFieldContext);

// Provider
const TextFieldProvider = ({ error, disabled, children }: TextFieldProviderProps) => {
    return <TextFieldContext.Provider value={{ error, disabled }}>{children}</TextFieldContext.Provider>;
};

// Wrapper
const TextFieldWrapper = ({ paddingX = 8, paddingY = 8, children, ...rest }: TextFieldWrapperProps) => {
    return (
        <Wrapper paddingX={paddingX} paddingY={paddingY} {...rest}>
            {children}
        </Wrapper>
    );
};
// Label
const TextFieldLabel = ({
    required = false,
    requiredtext = '필수 입력',
    labelVariant = 'BODY1',
    color = 'grey',
    fontSize = 'md',
    fontWeight = 'regular',
    textAlign = 'start',
    children,
    ...rest
}: TextFieldLabelProps) => {
    return (
        <Label
            as="label"
            width={100}
            required={required}
            requiredtext={requiredtext}
            variant={labelVariant}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            textAlign={textAlign}
            marginBottom={8}
            {...rest}
        >
            {children}
        </Label>
    );
};

// Container
const TextFieldContainer = ({ leftIcon, rightIcon, children, ...rest }: TextFieldContainerProps) => {
    const { disabled } = useTextFieldContext();

    return (
        <Container {...rest}>
            {leftIcon && (
                <LeftIcon id="icon_box" disabled={disabled}>
                    {leftIcon}
                </LeftIcon>
            )}
            {children}
            {rightIcon && (
                <RightIcon id="icon_box" disabled={disabled}>
                    {rightIcon}
                </RightIcon>
            )}
        </Container>
    );
};

// Input
const TextFieldInput = React.forwardRef(function TextFieldInput(
    {
        value = '',
        type = 'text',
        placeholder = '',
        placeHolderFontSize = 'md',
        readOnly = false,
        maxLength = 999999,
        ...rest
    }: TextFieldInputProps,
    forwardedRef: React.Ref<HTMLInputElement>,
) {
    const { error, disabled } = useTextFieldContext();
    return (
        <Input
            value={value}
            type={type}
            ref={forwardedRef}
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={disabled}
            error={error}
            maxLength={maxLength}
            {...rest}
        />
    );
});

// HelperText
const TextFieldHelperText = ({
    helperVariant = 'BODY3',
    textAlign = 'left',
    color = 'sementic',
    fontSize = 'sm',
    fontWeight = 'regular',
    children = '에러 메시지를 입력해주세요.',
    leftIcon,
    rightIcon,
    ...rest
}: TextFieldHelperTextProps) => {
    const { error } = useTextFieldContext();
    return (
        <>
            {error && (
                <HelperText
                    as="span"
                    width={100}
                    variant={helperVariant}
                    color={color}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    textAlign={textAlign}
                    marginTop={8}
                    {...rest}
                >
                    {leftIcon && leftIcon}
                    <Blank />
                    {children}
                    <Blank />

                    {rightIcon && rightIcon}
                </HelperText>
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
    width: max-content;
    height: max-content;
`;

const Label = styled(Typography)<LabelProps>`
    ${({ required, theme, requiredtext, fontSize }) =>
        required &&
        css`
            &::after {
                content: '* ${requiredtext}';
                position: absolute;
                margin-left: 4px;
                color: ${theme.colors.sementic};
                font-size: calc(${theme.fontSize[fontSize]} - 6px);
            }
        `}
`;

const LeftIcon = styled.div<Required<{ disabled?: boolean }>>`
    position: absolute;
    left: 0;
    transform: translateY(10%);
    padding-left: 4px;
    margin-right: 4px;
    color: ${({ disabled, theme }) => (disabled ? theme.colors.white : theme.colors.grey)};
`;

const RightIcon = styled.div<Required<{ disabled?: boolean }>>`
    position: absolute;
    right: 0;
    transform: translateY(10%);
    padding-right: 4px;
    margin-left: 4px;
    color: ${({ disabled, theme }) => (disabled ? theme.colors.white : theme.colors.grey)};
`;

const Input = styled(DefaultInput)`
    padding: 8px 24px;
    color: ${({ theme }) => theme.colors.inherit};

    &:focus {
        + #icon_box {
            color: ${({ theme }) => theme.palette.text.black};
        }
    }
`;

const HelperText = styled(Typography)`
    display: flex;
    align-items: center;
`;

const Blank = styled.div`
    width: 4px;
    height: 4px;
`;
