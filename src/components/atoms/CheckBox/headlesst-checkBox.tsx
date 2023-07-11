import React from 'react';
import * as Styled from './index.styles';

type CheckboxContextProps = {
    id: string;
    isChecked: boolean;
    onChange: () => void;
};

type CheckboxProps = CheckboxContextProps &
    React.PropsWithChildren<{
        variant?: 'primary' | 'secondary' | 'default';
    }>;

const CheckboxContext = React.createContext<Required<CheckboxContextProps>>({
    id: '',
    isChecked: false,
    onChange: () => {},
});

const useCheckboxContext = () => {
    const context = React.useContext(CheckboxContext);
    return context;
};
const CheckboxWrapper = ({ id, isChecked, onChange, children }: CheckboxProps) => {
    const value = { id, isChecked, onChange };

    return (
        <>
            <CheckboxContext.Provider value={value}>{children}</CheckboxContext.Provider>
        </>
    );
};

const Checkbox = ({ variant = 'primary', ...rest }: CheckboxProps) => {
    const { id, isChecked, onChange } = useCheckboxContext();

    return (
        <Styled.CheckBox
            type="checkbox"
            variant={variant}
            id={id}
            checked={isChecked}
            onChange={onChange}
            {...rest}
        />
    );
};

const Label = ({ children, ...props }: React.PropsWithChildren<{}>) => {
    const { id } = useCheckboxContext();
    return (
        <label htmlFor={id} {...props}>
            {children}
        </label>
    );
};

CheckboxWrapper.Checkbox = Checkbox;
CheckboxWrapper.Label = Label;

export default CheckboxWrapper;

export const DefaultCheckBox = Object.assign(CheckboxWrapper, {
    Checkbox: Checkbox,
    Label: Label,
});
