import React from 'react';
import * as Styled from './index.styles';
import { CheckBoxProps } from './index.types';
import { css } from '@emotion/react';
import { theme } from '@configs/style.config';

type CheckboxContextProps = {
    id: string;
    isChecked: boolean;
    onChange: () => void;
};

type CheckboxProps = CheckboxContextProps & React.PropsWithChildren<{}>;

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

const Checkbox = ({ variant = 'primary', ...props }: React.PropsWithChildren<CheckBoxProps>) => {
    const { id, isChecked, onChange } = useCheckboxContext();

    // const defaultCheckBoxStyle = css`
    //     width: 20px;
    //     height: 20px;
    //     border-color: ${theme.colors.turquoise};
    //     background-color: ${theme.colors.turquoise};
    // `;
    return (
        <Styled.CheckBox
            type="checkbox"
            variant={variant}
            id={id}
            checked={isChecked}
            onChange={onChange}
            {...props}
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
