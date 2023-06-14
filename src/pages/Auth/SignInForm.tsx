import React from 'react'
import { useForm } from "react-hook-form";
import TextFiled from "@components/ui/TextField";
import Flex from '@components/ui/Flex';
import Button from '@components/ui/Button';
import { emailRule, passwordRule } from "@utils/validate";
import { RiLockPasswordLine } from "react-icons/ri"
import {
  AiOutlineExclamationCircle,
  AiOutlineMail,
} from "react-icons/ai";

type FormValues = {
  email: string;
  password: string;
};

const SignInForm = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formState = {
    email: {
      required: "이메일 입력은 필수 입니다.",
      minLength: {
        value: 7,
        message: "최소 7자리 이상 입력하셔야 합니다.",
      },
      maxLength: {
        value: 20,
        message: "최대 20자리 이하 입력하세야 합니다.",
      },
      pattern: {
        value: emailRule,
        message: "이메일 형식에 맞지 않습니다",
      },
    },
    password: {
      required: "비밀번호 입력은 필수 입니다.",
      minLength: {
        value: 6,
        message: "최소 6글자 이상의 비밀번호를 입력해주세요.",
      },
      maxLength: {
        value: 16,
        message: "16자 이하의 비밀번호만 사용 가능합니다. ",
      },
      pattern: {
        value: passwordRule,
        message: "비밀번호 형식에 맞지 않습니다.",
      },
    },
  };

  const onSubmit = async (data: FormValues) => {
    console.log(data)
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
          {...register("email", formState.email)}
        />
        <TextFiled
          hookForm
          type="password"
          labelTitle="비밀번호"
          error={!!errors.password}
          helperText={errors.password?.message}
          leftIcon={<RiLockPasswordLine />}
          helperIcon={<AiOutlineExclamationCircle />}
          {...register("password", formState.password)}
        />
        <Button type="submit" variant="green">
          로그인
        </Button>
      </Flex>
    </form>
  );
};

export default SignInForm;