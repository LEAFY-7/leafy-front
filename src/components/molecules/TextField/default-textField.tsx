import type { ReactNode, CSSProperties, HTMLAttributes } from 'react';
import React from 'react';
import { theme } from 'configs/ui.config';
import styled from '@emotion/styled';
import Typography, { TypographyVariant } from 'components/atoms/Typograph/default-typography';
import DefaultInput from 'components/atoms/Input/default-input';
import { css } from '@emotion/react';
import DefaultTextarea from 'components/atoms/Textarea/default-textarea';

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
}
interface TextareaProps {
    value: HTMLTextAreaElement['value'];
    readOnly?: HTMLTextAreaElement['readOnly'];
    placeholder?: HTMLTextAreaElement['placeholder'];
    maxLength?: HTMLTextAreaElement['maxLength'];
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
type TextFieldTextareaProps = React.PropsWithChildren<TextareaProps> & HTMLAttributes<HTMLTextAreaElement>;

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
        <Wrapper id="textField_wrapper" paddingX={paddingX} paddingY={paddingY} {...rest}>
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

// Textarea
const TextFieldTextarea = React.forwardRef(function TextFieldTextarea(
    { value = '', placeholder = '', readOnly = false, maxLength = 999999, ...rest }: TextFieldTextareaProps,
    forwardedRef: React.Ref<HTMLTextAreaElement>,
) {
    const { error, disabled } = useTextFieldContext();
    return (
        <Textarea
            value={value}
            ref={forwardedRef}
            placeholder={placeholder}
            readOnly={readOnly}
            maxLength={maxLength}
            disabled={disabled}
            error={error}
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
                    {leftIcon && <HelperIcon>{leftIcon}</HelperIcon>}
                    <Blank />
                    {children}
                    <Blank />

                    {rightIcon && <HelperIcon>{rightIcon}</HelperIcon>}
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
    Textarea: TextFieldTextarea,
    HelperText: TextFieldHelperText,
});

export default TextField;

const Wrapper = styled.div<Required<WrapperProps>>`
    display: flex;
    flex-direction: column;
    padding: ${({ paddingX, paddingY }) => `${paddingY}px ${paddingX}px`};

    margin-top: 4px;
    margin-bottom: 4px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: max-content;
`;

const Label = styled(Typography)<LabelProps>`
    width: 100%;
    ${({ required, theme, requiredtext, fontSize }) =>
        required &&
        css`
            &::after {
                content: '* ${requiredtext}';
                position: absolute;
                margin-left: 4px;
                color: ${theme.colors.sementic};
                font-size: calc(${theme.fontSize[fontSize]} - 6px);

                ${theme.mediaQuery.xsMobile} {
                    content: '*';
                }
                ${theme.mediaQuery.smMobile} {
                    font-size: calc(${theme.fontSize[fontSize]} - 8px);
                }

                ${theme.mediaQuery.mdMobile} {
                    font-size: calc(${theme.fontSize[fontSize]} - 8px);
                }

                ${theme.mediaQuery.lgMobile} {
                    font-size: calc(${theme.fontSize[fontSize]} - 6px);
                }

                ${theme.mediaQuery.smTablet} {
                    width: auto;
                }

                ${theme.mediaQuery.mdTablet} {
                    width: auto;
                }

                ${theme.mediaQuery.lgTablet} {
                    width: auto;
                }
                ${theme.mediaQuery.desktop} {
                    width: auto;
                }
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
    width: 100%;
    padding: 8px 24px;
    color: ${({ theme }) => theme.colors.inherit};

    &:focus {
        + #icon_box {
            color: ${({ theme }) => theme.palette.text.black};
        }
    }
`;
const Textarea = styled(DefaultTextarea)`
    width: 100%;
    ${theme.mediaQuery.xsMobile} {
        padding: 2px;
    }

    ${theme.mediaQuery.smMobile} {
        padding: 8px;
    }

    ${theme.mediaQuery.mdMobile} {
        padding: 8px 12px;
    }

    ${theme.mediaQuery.lgMobile} {
        padding: 8px 24px;
    }
`;

const HelperText = styled(Typography)`
    align-items: center;

    @media only screen and (max-width: 200px) {
        display: none;
    }

    ${theme.mediaQuery.smMobile} {
        display: flex;
    }
`;

const Blank = styled.div`
    width: 4px;
    height: 4px;
`;

const HelperIcon = styled.span`
    ${theme.mediaQuery.xsMobile} {
        display: none;
    }

    ${theme.mediaQuery.smMobile} {
        display: block;
    }
`;
