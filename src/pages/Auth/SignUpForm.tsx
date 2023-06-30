import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineExclamationCircle, AiOutlineMail, AiOutlineUserDelete } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import formConfig from '@configs/form.config';

import Flex from '@components/atoms/Group/flex';
import RectangleButton from '@components/atoms/Button/rectangle-button';
import TextFiled from '@components/molecules/TextField';
import Div from '@components/atoms/Div/default-div';

type FormValues = {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const defaultValues: FormValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting, isDirty },
    } = useForm<FormValues>({ defaultValues });

    const onValidate = (value: string) => value === watch('password');

    const onSubmit = async (data: FormValues) => {
        /**
         * 회원가입 POST 요청
         */
        toast.success('회원가입이 성공하였습니다.');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Flex id="signUpForm_wrapper" direction="column">
                <TextFiled
                    hookForm
                    leftIcon={<AiOutlineUserDelete />}
                    type="text"
                    labelTitle="이름"
                    error={!!errors.displayName}
                    helperText={errors.displayName?.message}
                    helperIcon={<AiOutlineExclamationCircle />}
                    {...register('displayName', formConfig.signFormState.name)}
                />
                <TextFiled
                    hookForm
                    leftIcon={<AiOutlineMail />}
                    type="text"
                    labelTitle="이메일"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    helperIcon={<AiOutlineExclamationCircle />}
                    {...register('email', formConfig.signFormState.email)}
                />
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
                <Div id="submit_btn" width={100} size="xs">
                    <RectangleButton
                        type="submit"
                        variant="green"
                        isBorder
                        disabled={isSubmitting}
                        style={{ width: '100%' }}
                    >
                        로그인하기
                    </RectangleButton>
                </Div>
            </Flex>
        </form>
    );
};

export default SignUpForm;
