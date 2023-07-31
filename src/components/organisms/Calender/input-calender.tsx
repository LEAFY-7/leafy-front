import React from 'react';
import { Control, Controller } from 'react-hook-form';
import Calendar from 'react-calendar';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { SignUphModel } from 'models/auth/signUp.model';

import useToggle from 'hooks/useToggle';
import { AuthItemType } from 'configs/form.config';
import Flex from 'components/atoms/Group/flex';
import TextField from 'components/molecules/TextField/default-textField';

interface Props<T extends keyof SignUphModel> {
    width?: string;
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
    width = '300px',
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
        <Wrapper {...rest}>
            <Controller
                name={authItemState.property}
                control={control}
                rules={{ required }}
                render={({ field: { onChange }, fieldState: { error } }) => (
                    <Flex>
                        <TextField error={!!error}>
                            <TextField.Wrapper style={{ height: '100px' }}>
                                <TextField.Label>{authItemState.label}</TextField.Label>
                                <TextField.Container
                                    id="calender_container"
                                    leftIcon={authItemState.icon.main}
                                >
                                    <TextField.Input
                                        value={date ? dayjs(date).format(format) : ''}
                                        type={authItemState.type}
                                        placeholder={placeholder}
                                        ref={inputRef}
                                        onFocus={toggle}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const { value } = e.target;
                                            onChange(value);
                                        }}
                                        style={{ width }}
                                        readOnly
                                    />
                                </TextField.Container>
                                <TextField.HelperText
                                    leftIcon={authItemState.icon.helper}
                                    style={{ padding: '0 8px' }}
                                >
                                    {error?.message}
                                </TextField.HelperText>
                            </TextField.Wrapper>
                        </TextField>

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
