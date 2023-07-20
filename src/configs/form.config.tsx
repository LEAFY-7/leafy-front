import type { ReactNode } from 'react';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineExclamationCircle, AiOutlineMail, AiOutlineUserDelete } from 'react-icons/ai';

/**
 * @description 한글 정규 표현식 - 한글만 가능 최소 2자리 최대 16자리
 * @description 이메일 정규 표현식 - 이메일 형식 최소 7자리
 * @description 비밀번호 정규 표현식 - 대문자, 소문자, 특수문자, 숫자 포함 최소 6자리 최대 16자리
 * /^.*(?=^.{6,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
 */
export const krRule = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,16}/;
export const onlyKrEgRule = /^[a-zA-Z가-힣]+$/;
export const krEgNumRule = /^[a-zA-Z가-힣0-9]+$/;
export const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
export const passwordRule = /./;
export const VALIDATE_TYPES = { krRule, onlyKrEgRule, krEgNumRule, emailRule, passwordRule } as const;
export const EXPORT_VALIDATE_TYPES = [
    VALIDATE_TYPES.krRule,
    VALIDATE_TYPES.onlyKrEgRule,
    VALIDATE_TYPES.emailRule,
    VALIDATE_TYPES.krEgNumRule,
    VALIDATE_TYPES.passwordRule,
] as const;
export type ValidateRuleType = typeof EXPORT_VALIDATE_TYPES;

export type AuthItem = 'email' | 'displayName' | 'password' | 'confirmPassword';
type AuthItemStateType = {
    [key in AuthItem]: {
        type: 'text' | 'password';
        label: string;
        property: AuthItem;
        icon: {
            main: ReactNode;
            helper: ReactNode;
        };
    };
};

export const authFormState = {
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
            value: krRule,
            message: '이름은 한글만 작성해주세요.',
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
            value: 1,
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
    confirmPassword: (callback) => ({
        required: '비밀번호 확인은 필수 입니다.',
        minLength: {
            value: 6,
            message: '최소 6글자 이상의 비밀번호를 입력해주세요.',
        },
        maxLength: {
            value: 16,
            message: '16자 이하의 비밀번호만 사용 가능합니다. ',
        },
        validate: callback,
    }),
};

export const authItemState: AuthItemStateType = {
    displayName: {
        type: 'text',
        label: '이름',
        property: 'displayName',
        icon: {
            main: <AiOutlineUserDelete />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    email: {
        type: 'text',
        label: '이메일',
        property: 'email',
        icon: {
            main: <AiOutlineMail />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    password: {
        type: 'password',
        label: '비밀번호',
        property: 'password',
        icon: {
            main: <RiLockPasswordLine />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    confirmPassword: {
        type: 'password',
        label: '비밀번호 확인',
        property: 'confirmPassword',
        icon: {
            main: <RiLockPasswordLine />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
};
export default { authFormState, authItemState };
