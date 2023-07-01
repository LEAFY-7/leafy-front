import validate from '@utils/validate';
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
            value: validate.krRule,
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
            value: validate.emailRule,
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
            value: validate.passwordRule,
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
