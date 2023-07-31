import { RiLockPasswordLine, RiLockPasswordFill } from 'react-icons/ri';
import {
    AiOutlineUser,
    AiOutlineExclamationCircle,
    AiOutlineMail,
    AiOutlineUserDelete,
    AiOutlinePhone,
} from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { GiPostOffice } from 'react-icons/gi';
import { CgDetailsLess } from 'react-icons/cg';
import { SlCalender } from 'react-icons/sl'; // 달력
import { BsHouseDoor, BsGenderAmbiguous, BsPencil } from 'react-icons/bs';

export const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
export const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@~#$%^&*])[A-Za-z\d!@~#$%^&*]{6,16}$/;
export const nickNameRule = /^[\w가-힣]+([\s_][\w가-힣]+)*$/;
export const nameRule = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,16}/;
export const onlyKrEgRule = /^[a-zA-Z가-힣]+$/;
export const krEgNumRule = /^[a-zA-Z가-힣0-9]+$/;

export type AuthItem =
    | 'email'
    | 'name'
    | 'nickName'
    | 'password'
    | 'confirmPassword'
    | 'phone'
    | 'birthDay'
    | 'zoneCode'
    | 'address'
    | 'gender'
    | 'jibunAddress'
    | 'roadAddress'
    | 'addressDetail'
    | 'simpleIntroduction';

export interface AuthItemType {
    type: 'number' | 'password' | 'text' | 'tel';
    label: string;
    property: AuthItem;
    placeHolder?: string;
    icon: {
        main: React.ReactNode;
        helper: React.ReactNode;
    };
}

export type AuthItemStateType = {
    [key in AuthItem]: AuthItemType;
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
            value: nameRule,
            message: '이름은 한글만 작성해주세요.',
        },
    },
    nickName: {
        required: '이름 입력은 필수 입니다.',
        minLength: {
            value: 3,
            message: '최소 3자리 이상 입력하셔야 합니다.',
        },
        maxLength: {
            value: 12,
            message: '최대 12자리 이하 입력하세야 합니다.',
        },
        pattern: {
            value: nickNameRule,
            message: '한글/영어/하이픈(_)만 가능합니다.',
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
    phone: {
        required: '핸드폰 번호를 입력해주세요.',
        minLength: {
            value: 12,
            message: '최소 11자리 이상의 핸드폰 번호만 입력해주세요.',
        },
        maxLength: {
            value: 13,
            message: '최대 12자리 이하의 핸드폰 번호만 사용 가능합니다.',
        },
    },
    birthDay: {
        required: '생년월일은 필수입니다.',
        format: 'YYYY-MM-DD',
    },
    zoneCode: {
        required: '우편 번호는 필수 입니다.',
    },
    address: {
        required: '주소는 필수 입니다.',
    },
    jibunAddress: {},
    roadAddress: {},
    addressDetail: {
        required: '상세 주소를 입력해주세요',
        minLength: {
            value: 1,
            message: '최소 1글자 이상의 상세 주소를 입력해주세요.',
        },
        maxLength: {
            value: 20,
            message: '상세 주소는 20자 이내까지 입력해주세요. ',
        },
    },
    simpleIntroduction: {
        required: '30자 이내의 간단한 소개를 입력해주세요',
        minLength: {
            value: 1,
            message: '최소 1글자 이상의 소개를 입력해주세요.',
        },
        maxLength: {
            value: 30,
            message: '소개글은 30자 이내로 입력해주세요. ',
        },
    },
};

export const authItemState: AuthItemStateType = {
    name: {
        type: 'text',
        label: '이름',
        property: 'name',
        placeHolder: '이름을 입력해주세요',
        icon: {
            main: <AiOutlineUser />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    nickName: {
        type: 'text',
        label: '닉네임',
        property: 'nickName',
        placeHolder: '닉네임을 입력해주세요',
        icon: {
            main: <BiUserCircle />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    email: {
        type: 'text',
        label: '이메일',
        property: 'email',
        placeHolder: '이메일을 입력해주세요',
        icon: {
            main: <AiOutlineMail />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    password: {
        type: 'password',
        label: '비밀번호',
        property: 'password',
        placeHolder: '비밀번호를 입력해주세요',
        icon: {
            main: <RiLockPasswordLine />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    confirmPassword: {
        type: 'password',
        label: '비밀번호 확인',
        property: 'confirmPassword',
        placeHolder: '비밀번호를 한 번 더 입력해주세요',
        icon: {
            main: <RiLockPasswordFill />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    phone: {
        type: 'tel',
        label: '연락처',
        property: 'phone',
        placeHolder: '전화번호를 입력해주세요',
        icon: {
            main: <AiOutlinePhone />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    birthDay: {
        type: 'text',
        label: '생년월일',
        property: 'birthDay',
        placeHolder: '날짜를 입력해주세요',
        icon: {
            main: <SlCalender />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    gender: {
        type: 'text',
        label: '성별',
        property: 'gender',
        placeHolder: '성별을 선택해주세요.',
        icon: {
            main: <BsGenderAmbiguous />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    zoneCode: {
        type: 'text',
        label: '우편번호',
        property: 'zoneCode',
        placeHolder: '우편번호를 입력해주세요',
        icon: {
            main: <GiPostOffice />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    address: {
        type: 'text',
        label: '주소',
        property: 'address',
        placeHolder: '주소를 입력해주세요',
        icon: {
            main: <BsHouseDoor />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    jibunAddress: {
        type: 'text',
        label: '지번주소',
        property: 'jibunAddress',
        placeHolder: '주소를 입력해주세요',
        icon: {
            main: <BsHouseDoor />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    roadAddress: {
        type: 'text',
        label: '도로명 주소',
        property: 'roadAddress',
        placeHolder: '주소를 입력해주세요',
        icon: {
            main: <BsHouseDoor />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    addressDetail: {
        type: 'text',
        label: '상세주소',
        property: 'addressDetail',
        placeHolder: '상세 주소를 입력해주세요',

        icon: {
            main: <CgDetailsLess />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
    simpleIntroduction: {
        type: 'text',
        label: '간단소개',
        property: 'simpleIntroduction',
        placeHolder: '상대방을 위해 간단한 소개를 입력해주세요',
        icon: {
            main: <AiOutlinePhone />,
            helper: <AiOutlineExclamationCircle />,
        },
    },
};
export default { authFormState, authItemState };
