import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

import { AiOutlineExclamationCircle, AiOutlineUserDelete } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { toast } from 'react-toastify';

import TextFiled from 'components/molecules/TextField';

import CustomCalender from 'components/molecules/Calender/CustomCalender';
import formConfig from 'configs/form.config';
import Flex from 'components/atoms/Group/flex';
import Button from 'components/atoms/Button/rectangle-button';

type FormValues = {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const EditPageAdditional = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [address, setAddress] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            displayName: '오태권',
            email: 'test@test.com',
            password: '1234',
            confirmPassword: '1234',
        },
    });

    const onSubmit = async (data: FormValues) => {
        toast.success('회원가입이 성공하였습니다.');
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(new Date(event.target.value));
    };

    const handleCalendarChange = (date: Date | Date[] | any) => {
        if (Array.isArray(date)) {
            setSelectedDate(date[0]);
        } else {
            setSelectedDate(date);
        }
        setShowCalendar(false);
    };

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    const handleChangeAddress = () => {};

    const handleComplete = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Flex id="form_wrapper" direction="column">
                <Flex id="form_contents">
                    <TextFiled
                        hookForm
                        leftIcon={<AiOutlineUserDelete />}
                        type="text"
                        labelTitle="이름"
                        error={!!errors.displayName}
                        helperText={errors.displayName?.message}
                        helperIcon={<AiOutlineExclamationCircle />}
                        disabled
                        {...register('displayName', formConfig.signFormState.name)}
                    />
                    {!showCalendar && (
                        <TextFiled
                            type="text"
                            value={selectedDate ? selectedDate.toLocaleDateString() : ''}
                            onChange={handleInputChange}
                            onClick={toggleCalendar}
                            leftIcon={<SlCalender />}
                            readOnly
                            labelTitle="생년월일"
                        />
                    )}

                    {showCalendar && (
                        <CustomCalender
                            handleCalendarChange={handleCalendarChange}
                            selectedDate={selectedDate}
                        />
                    )}
                </Flex>
                <TextFiled
                    type="text"
                    value={address}
                    onChange={handleChangeAddress}
                    leftIcon={<SlCalender />}
                    readOnly
                    labelTitle="주소"
                />
                <Button type="submit" variant="green">
                    확인
                </Button>
            </Flex>
        </form>
    );
};

export default EditPageAdditional;

const Wrapper = styled.div`
    .react-calendar {
        position: absolute;
        z-index: 99;
    }
`;
