import React from 'react';
import Calendar from 'react-calendar';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { Control, Controller } from 'react-hook-form';
import { SignUphModel } from 'models/auth/signUp.model';

import useToggle from 'hooks/useToggle';
import Flex from 'components/atoms/Group/flex';
import TextField from '../TextField/';
import { AuthItemType } from 'configs/form.config';

interface Props<T extends keyof SignUphModel> {
    name: T;
    label?: string;
    control: Control<SignUphModel, any>;
    placeholder?: string;
    required?: string;
    format?: string;
    error?: string;
    authItemState: AuthItemType;
}

const InputCalender = <T extends keyof SignUphModel>({
    label = '',
    placeholder = '입력해주세요.',
    required = '필수입니다.',
    format = 'YYYY-MM-DD',
    control,
    error,
    authItemState,
    ...rest
}: Props<T>) => {
    const inputRef = React.useRef(null);
    const calendarRef = React.useRef(null);
    const [date, setDate] = React.useState<Date>();
    const { isOpen, handler: toggle } = useToggle({});

    const handleOutsideClick = (event) => {
        if (inputRef.current && inputRef.current.contains(event.target)) return;

        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
            toggle();
        }
    };

    const handleDateClick = (value: Date) => {
        setDate(value);
        toggle();
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <Wrapper>
            <Controller
                name={authItemState.property}
                control={control}
                rules={{ required }}
                render={({ field: { onChange }, fieldState: { error } }) => (
                    <Flex>
                        <TextField
                            type={authItemState.type}
                            labelTitle={authItemState.label}
                            value={date ? dayjs(date).format(format) : ''}
                            ref={inputRef}
                            leftIcon={authItemState.icon.main}
                            onFocus={toggle}
                            readOnly
                            helperText={error?.message}
                            helperIcon={authItemState.icon.helper}
                            error={!!error}
                            placeholder={placeholder}
                        />

                        {isOpen && (
                            <CalenderContainer ref={calendarRef}>
                                <Calendar
                                    onChange={(value: Date, dateString) => {
                                        handleDateClick(value);
                                        onChange(dayjs(value).format(format));
                                    }}
                                    formatDay={(locale, date) => dayjs(date).format('DD')}
                                />
                            </CalenderContainer>
                        )}
                    </Flex>
                )}
            />
        </Wrapper>
    );
};

export default InputCalender;

const Wrapper = styled.div`
    position: relative;
`;
const CalenderContainer = styled.div`
    .react-calendar {
        top: 48px;
        left: 0;
        right: 0;
        position: absolute;
        z-index: 99;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #000;
`;
