import React from 'react';
import { useForm } from 'react-hook-form';
import UserViewModel from 'viewModel/user/user.viewModel';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineExclamationCircle, AiOutlineMail } from 'react-icons/ai';

import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import formConfig from 'configs/form.config';

import RectangleButton from 'components/atoms/Button/rectangle-button';
import Flex from 'components/atoms/Group/flex';
import TextFiled from 'components/molecules/TextField';
import Div from 'components/atoms/Div/default-div';

type FormValues = {
    email: string;
    password: string;
};
const DialogLabelButtonType = (<Flex />).type;

const defaultValues: FormValues = {
    email: '',
    password: '',
};
const SignInForm = () => {
    const userViewModel: UserViewModel = useViewModel(ViewModelName.USER);
    console.log(userViewModel.user);

    console.log(DialogLabelButtonType);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty },
    } = useForm<FormValues>({ defaultValues });

    const onSubmit = async (data: FormValues) => {
        /**
         * 로그인 POST 요청
         */
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Flex id="signInForm_wrapper" direction="column">
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
                <Div id="submit_btn" width={100} size="xs">
                    <RectangleButton
                        type="submit"
                        variant="primary"
                        isBorder
                        disabled={isSubmitting}
                        style={{ width: '100%' }}
                    >
                        회원가입하기
                    </RectangleButton>
                </Div>
            </Flex>
        </form>
    );
};

export default SignInForm;
