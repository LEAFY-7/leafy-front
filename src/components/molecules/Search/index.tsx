import { Input } from 'components/atoms/Input';
import { CSSProperties, ChangeEventHandler, ReactElement } from 'react';

interface IProps {
    value: string | number;
    required?: boolean;
    onChange?: ChangeEventHandler;
    dataset?: { [key: string]: string | number };
    name?: string;
    style?: CSSProperties;
    placeholder?: string;
    isFilter?: boolean;
}

export default function Search(props: IProps): ReactElement {
    const { isFilter = false, value, required, onChange, dataset, name, style, placeholder } = props;
    return (
        <div>
            {isFilter && <></>}
            <Input
                value={value}
                required={required}
                onChange={onChange}
                dataset={dataset}
                name={name}
                style={style}
                placeholder={placeholder}
            />
        </div>
    );
}
