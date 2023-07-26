import type { ReactNode, CSSProperties, HTMLAttributes } from 'react';
import { useContext, createContext } from 'react';
import { theme } from 'configs/ui.config';
import styled from '@emotion/styled';

interface TextFieldContextProps {}
interface TextFieldStyle {}

interface WrapperProps {}

interface InputProps {
    placeHolderFontSize?: keyof typeof theme.fontSize;
    disabled?: boolean;
    readOnly?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

interface HelperTextProps {
    helperText?: string;
    helperIcon?: ReactNode;
}

type TextFieldProviderProps = React.PropsWithChildren<{}> & TextFieldContextProps;
type TextFieldWrapperProps = React.PropsWithChildren<WrapperProps> & HTMLAttributes<HTMLDivElement>;

type TextFieldInputProps = React.PropsWithChildren<InputProps> & HTMLAttributes<HTMLInputElement>;

type TextFieldHelperTextProps = React.PropsWithChildren<HelperTextProps> & HTMLAttributes<HTMLElement>;

const TextFieldContext = createContext<TextFieldContextProps>({});

const useTextFieldContext = () => useContext(TextFieldContext);

// Provider
const TextFieldProvider = ({ children }: TextFieldProviderProps) => {
    return <TextFieldContext.Provider value={{}}>{children}</TextFieldContext.Provider>;
};

// Wrapper
const TextFieldWrapper = ({ children, ...rest }: TextFieldWrapperProps) => {
    return <Wrapper {...rest}>{children}</Wrapper>;
};

const TextFieldInput = ({
    placeHolderFontSize = 'md',
    placeholder = '',
    disabled = false,
    readOnly = false,
    leftIcon,
    rightIcon,
}: TextFieldInputProps) => {
    return (
        <Container>
            <input placeholder={placeholder} disabled={disabled} readOnly={readOnly} />
        </Container>
    );
};

const TextFieldHelperText = ({ children, ...rest }: TextFieldHelperTextProps) => {
    return <p {...rest}>{children}</p>;
};

const TextField = Object.assign(TextFieldProvider, {
    Wrapper: TextFieldWrapper,
    Input: TextFieldInput,
    HelperText: TextFieldHelperText,
});

export default TextField;

//

const Wrapper = styled.div``;

const Container = styled.div``;
