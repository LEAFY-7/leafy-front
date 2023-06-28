import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineExclamationCircle, AiOutlineMail, AiOutlineUserDelete } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import TextFiled from '@components/molecules/TextField';
import { emailRule, krEgNumRule, passwordRule } from '@utils/validate';
import Flex from '@components/atoms/Group/flex';
import Button from '@components/atoms/Button/rectangle-button';

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
        formState: { errors, isSubmitting, isDirty, isValid },
    } = useForm({
        defaultValues: {
            nickName: '오태권',
            email: 'test@test.com',
            password: '1234',
            confirmPassword: '1234',
        },
    });

    const formState = {
        name: {
            required: '이름 입력은 필수 입니다.',
            minLength: {
                value: 2,
                message: '최소 2자리 이상 입력하셔야 합니다.',
            },
            maxLength: {
                value: 20,
                message: '최대 20자리 이하 입력하세야 합니다.',
            },
            pattern: {
                value: krEgNumRule,
                message: '닉네임은 한글, 영어, 숫자로만 작성해주세요.',
            },
        },
        email: {
            required: '이메일 입력은 필수 입니다.',
            minLength: {
                value: 7,
                message: '최소 7자리 이상 입력하셔야 합니다.',
            },
            maxLength: {
                value: 20,
                message: '최대 20자리 이하 입력하세야 합니다.',
            },
            pattern: {
                value: emailRule,
                message: '이메일 형식에 맞지 않습니다',
            },
        },
        password: {
            required: '비밀번호 입력은 필수 입니다.',
            minLength: {
                value: 6,
                message: '최소 6글자 이상의 비밀번호를 입력해주세요.',
            },
            maxLength: {
                value: 16,
                message: '16자 이하의 비밀번호만 사용 가능합니다. ',
            },
            pattern: {
                value: passwordRule,
                message: '비밀번호 형식에 맞지 않습니다.',
            },
        },
        confirmPassword: {
            required: '비밀번호 확인은 필수 입니다.',
            minLength: {
                value: 6,
                message: '최소 6글자 이상의 비밀번호를 입력해주세요.',
            },
            maxLength: {
                value: 16,
                message: '16자 이하의 비밀번호만 사용 가능합니다. ',
            },
            validate: (value: string) => value === watch('password'),
        },
    };
    const onSubmit = async (data: FormValues) => {
        /**
         * 여기에 POST 요청
         */

        // const { response, error } = await userApis.signUp(data);

        // if (response) {
        //   console.log(response);
        //   toast.success("회원가입이 성공하였습니다.");
        // }
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
                    {...register('nickName', formState.name)}
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
                    {...register('email', formState.email)}
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
                        {...register('password', formState.password)}
                    />
                    <TextFiled
                        hookForm
                        type="password"
                        labelTitle="비밀번호 확인"
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message || '비밀번호가 일치하지 않습니다.'}
                        leftIcon={<RiLockPasswordLine />}
                        helperIcon={<AiOutlineExclamationCircle />}
                        {...register('confirmPassword', formState.confirmPassword)}
                    />
                </Flex>
                <Button type="submit" variant="green">
                    확인
                </Button>
            </Flex>
        </form>
    );
};

export default EditPageRequire;
