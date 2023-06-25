import RectangleButton from '@components/atoms/Button/rectangle-button';
import Flex from '@components/atoms/Group/flex';
import TextFiled from '@components/molecules/TextField';
import { useForm } from 'react-hook-form';
import { AiOutlineExclamationCircle, AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

type FormValues = {
    email: string;
    password: string;
};

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data: FormValues) => {
        console.log(data);
    };

    const onSubmit = async (data: FormValues) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Flex direction="column">
                <TextFiled
                    hookForm
                    leftIcon={<AiOutlineMail />}
                    type="text"
                    labelTitle="이메일"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    helperIcon={<AiOutlineExclamationCircle />}
                    {...register('email', formState.email)}
                />
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
                <RectangleButton type="submit" variant="green">
                    로그인
                </RectangleButton>
            </Flex>
        </form>
    );
};

export default SignInForm;
