/**
 * @description 한글 정규 표현식 - 한글만 가능 최소 2자리 최대 16자리
 * @description 이메일 정규 표현식 - 이메일 형식 최소 7자리
 * @description 비밀번호 정규 표현식 - 대문자, 소문자, 특수문자, 숫자 포함 최소 6자리 최대 16자리
 */
export const krRule = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,16}/; // 한글 정규 표현식
export const onlyKrEgRule = /^[a-zA-Z가-힣]+$/; // 한글과 영어만 허용
export const krEgNumRule = /^[a-zA-Z가-힣0-9]+$/; // 한글, 영어 숫자 허용
export const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일 정규 표현식
export const passwordRule = /^.*(?=^.{6,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/; // 비밀번호 정규 표현식

const VALIDATE_TYPES = {
    krRule: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,16}/,
    onlyKrEgRule: /^[a-zA-Z가-힣]+$/,
    krEgNumRule: /^[a-zA-Z가-힣0-9]+$/,
    emailRule: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    passwordRule: /^.*(?=^.{6,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
} as const;

export const EXPORT_VALIDATE_TYPES = [
    VALIDATE_TYPES.krRule,
    VALIDATE_TYPES.onlyKrEgRule,
    VALIDATE_TYPES.emailRule,
    VALIDATE_TYPES.krEgNumRule,
    VALIDATE_TYPES.passwordRule,
] as const;

export type ValidateRuleType = typeof EXPORT_VALIDATE_TYPES;

const signFormState = {
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

export default { signFormState };
