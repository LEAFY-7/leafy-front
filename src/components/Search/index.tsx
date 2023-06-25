import { Input } from '@components/ui/Input';
import { CSSProperties, ChangeEventHandler, ReactElement } from 'react';

interface IProps {
    value: string | number;
    required?: boolean;
    onChange?: ChangeEventHandler;
    dataset?: { [key: string]: string | number };
    name?: string;
    style?: CSSProperties;
    placeholder?: string;
}

export default function SearchBar(props: IProps): ReactElement {
    const { value, required, onChange, dataset, name, style, placeholder } = props;
    return (
        <div>
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
