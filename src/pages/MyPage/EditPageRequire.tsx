import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineExclamationCircle, AiOutlineMail, AiOutlineUserDelete } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { toast } from 'react-toastify';

import formConfig from 'configs/form.config';
import TextFiled from 'components/molecules/TextField';
import Flex from 'components/atoms/Group/flex';
import Button from 'components/atoms/Button/rectangle-button';

type FormValues = {
    nickName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const EditPageRequire = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nickName: '오태권',
            email: 'test@test.com',
            password: '1234',
            confirmPassword: '1234',
        },
    });

    const onValidate = (value: string) => value === watch('password');

    const onSubmit = async (data: FormValues) => {
        /**
         * 여기에 POST 요청
         */
        toast.success('회원가입이 성공하였습니다.');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Flex id="form_wrapper" direction="column">
                <TextFiled
                    hookForm
                    leftIcon={<AiOutlineUserDelete />}
                    type="text"
                    labelTitle="이름"
                    error={!!errors.nickName}
                    helperText={errors.nickName?.message}
                    helperIcon={<AiOutlineExclamationCircle />}
                    {...register('nickName', formConfig.signFormState.name)}
                />
                <TextFiled
                    hookForm
                    leftIcon={<AiOutlineMail />}
                    type="text"
                    labelTitle="이메일"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    helperIcon={<AiOutlineExclamationCircle />}
                    disabled={true}
                    {...register('email', formConfig.signFormState.email)}
                />
                <Flex id="password_wrapper">
                    <TextFiled
                        hookForm
                        type="password"
                        labelTitle="비밀번호"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        leftIcon={<RiLockPasswordLine />}
                        helperIcon={<AiOutlineExclamationCircle />}
                        {...register('password', formConfig.signFormState.password)}
                    />
                    <TextFiled
                        hookForm
                        type="password"
                        labelTitle="비밀번호 확인"
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message || '비밀번호가 일치하지 않습니다.'}
                        leftIcon={<RiLockPasswordLine />}
                        helperIcon={<AiOutlineExclamationCircle />}
                        {...register('confirmPassword', formConfig.signFormState.confirmPassword(onValidate))}
                    />
                </Flex>
                <Button type="submit">확인</Button>
            </Flex>
        </form>
    );
};

export default EditPageRequire;
