import { AxiosError, AxiosResponse } from 'axios';
import { action, makeObservable, observable, runInAction } from 'mobx';
import DefaultViewModel from 'viewModel/default.viewModel';
import { AddressModel } from 'models/auth/address.model';
import { SignUphModel } from 'models/auth/signUp.model';
import DaumModule from 'modules/daum.module';
import tokenModule from 'modules/token.module';
import { AuthDto } from 'dto/auth/auth.dto';
import { Alert } from 'modules/alert.module';

interface IProps {}

export default class AuthViewModel extends DefaultViewModel {
    public isEmailCheck: boolean;
    public isNickNameCheck: boolean;
    public isActive: boolean;
    public authState: SignUphModel = new SignUphModel();
    public daum: DaumModule;

    constructor(props: IProps) {
        super(props);
        this.isEmailCheck = false;
        this.isNickNameCheck = false;
        // this.authState = {
        //     name: '',
        //     nickName: '',
        //     confirmPassword: '',
        //     phone: '',
        //     birthDay: '',
        //     zoneCode: '',
        //     address: '',
        //     jibunAddress: '',
        //     roadAddress: '',
        //     addressDetail: '',
        //     // gender: '',
        //     introduction: '',
        //     email: '',
        //     password: '',
        //     addressIsHide: true,
        // };
        this.daum = DaumModule.getInstance();
        this.isActive = false;

        makeObservable(this, {
            isEmailCheck: observable,
            isNickNameCheck: observable,
            isActive: observable,
            authState: observable,

            handleCheckNickName: action,
            handleCheckEmail: action,
            handleToggle: action,
            handleSignUpNecessary: action,
            handleSignUpAdditional: action,
            handleSignIn: action,
        });
    }
    private handleOnComplete = (authState: AddressModel) => {
        runInAction(() => {
            this.authState.zoneCode = authState.zonecode;
            this.authState.address = authState.address;
            this.authState.jibunAddress = authState.jibunAddress;
            this.authState.roadAddress = authState.roadAddress;
        });
        document.getElementById('address_detail')?.focus();
    };

    handleDaumAddress = () => {
        return this.daum.openPostcode(this.handleOnComplete);
    };

    handleToggle = () => {
        runInAction(() => {
            this.isActive = !this.isActive;
        });
    };
    handleTimeoutId = (time: number = 100) => {
        return setTimeout(() => {
            const formEl = document.getElementById('form_wrapper');
            if (!formEl) return;
            formEl.style.opacity = '1';
        }, time);
    };

    handleInputChange = (key, value) => {
        runInAction(() => {
            this.authState[key] = value;
        });
    };

    // 닉네임 중복 체크
    handleCheckNickName = (e) => {
        e.preventDefault();
        const nickName = this.authState.nickName;
        return this.api
            .get(`/v1/users/check/nickname?nickName=${nickName}`)
            .then(({ status }: AxiosResponse) => {
                if (status === 204) {
                    runInAction(() => {
                        this.isNickNameCheck = true;
                    });
                    Alert.alert(`${nickName}은(는) 사용이 가능합니다.`);
                }
            })
            .catch((error: AxiosError) => {
                if (error && error.status === 204) {
                    Alert.alert('닉네임 형식이 맞지 않습니다.');
                } else if (error && error.status === 409) {
                    Alert.alert('이미 사용중인 닉네임입니다.');
                } else {
                    Alert.alert('요청이 실패했습니다. 다시 시도해주시기 바랍니다.');
                }
            });
    };
    // 이메일 중복 체크
    handleCheckEmail = (e) => {
        e.preventDefault();
        const email = this.authState.email;
        return this.api
            .get(`/v1/users/check/email?email=${email}`)
            .then(({ status }: AxiosResponse) => {
                if (status === 204) {
                    runInAction(() => {
                        this.isEmailCheck = true;
                    });
                    Alert.alert(`${email}은(는) 사용이 가능합니다.`);
                }
            })
            .catch((error: AxiosError) => {
                if (error && error.status === 409) {
                    Alert.alert('이미 사용중인 이메일입니다.');
                } else {
                    Alert.alert('요청이 실패했습니다. 다시 시도해주시기 바랍니다.');
                }
            });
    };

    // 회원가입
    // 1. 필수 정보 (이메일, 이름, 닉네임, 비밀번호, 비밀번호확인)
    handleSignUpNecessary = async (authState) => {
        const { name, nickName, email, password, confirmPassword } = authState;
        runInAction(() => {
            this.authState.name = name;
            this.authState.nickName = nickName;
            this.authState.email = email;
            this.authState.password = password;
            this.authState.confirmPassword = confirmPassword;
        });
        await this.handleToggle();
        await document.getElementById('phone_input')?.focus();
    };

    // 2. 부가 정보 (연락처, 생년월일, 주소, 성별, 간단소개)
    handleSignUpAdditional = async (authState) => {
        const { phone, birthDay, addressDetail, introduction } = authState;
        runInAction(() => {
            this.authState.phone = phone;
            this.authState.birthDay = birthDay;
            this.authState.addressDetail = addressDetail;
            // this.authState.gender = gender;
            this.authState.introduction = introduction;
        });
        await this.handleSignUp();
    };

    // 회원가입 제출
    handleSignUp = () => {
        const phoneNumber = this.authState.phone;
        const phoneNumberWithoutHyphens = phoneNumber.replace(/-/g, '');

        return this.api
            .post('/v1/users/sign-up', {
                name: this.authState.name,
                nickName: this.authState.nickName,
                email: this.authState.email,
                password: this.authState.password,
                confirmPassword: this.authState.confirmPassword,
                phone: phoneNumberWithoutHyphens,
                zoneCode: this.authState.zoneCode,
                address: this.authState.address,
                jibunAddress: this.authState.jibunAddress,
                roadAddress: this.authState.roadAddress,
                addressDetail: this.authState.addressDetail,
                birthDay: this.authState.birthDay,
                // gender: this.authState.gender,
                introduction: this.authState.introduction,
                addressIsHide: true,
            })
            .then((response: AxiosResponse<AuthDto>) => {
                tokenModule.save({
                    auth: {
                        token: response.data.token,
                        userAuth: response.data.userAuth,
                    },
                });
                window.location.replace('/');
            })
            .catch((error: AxiosError) => {
                if (error && error.status === 400) {
                    Alert.alert('입력하신 내용이 형식에 맞지 않습니다.');
                } else if (error && error.status === 409) {
                    Alert.alert('이메일 혹은 닉네임이 이미 존재합니다.');
                } else if (error && error.status === 500) {
                    Alert.alert('서버에 요청이 실패하였습니다.');
                } else {
                    Alert.alert('요청이 실패했습니다. 다시 시도해주시기 바랍니다.');
                }
            });
    };

    // 로그인 제출
    handleSignIn = (authState) => {
        return this.api
            .post('/v1/users/sign-in', authState)
            .then((response: AxiosResponse<AuthDto>) => {
                console.log(response);
                tokenModule.save({
                    auth: {
                        token: response.data.token,
                        userAuth: response.data.userAuth,
                    },
                });
                window.location.replace('/');
            })
            .catch((error: AxiosError) => {
                console.log(error);
                if (error && error.status === 400) {
                    Alert.alert('아이디 또는 비밀번호가 형식에 맞지 않습니다.');
                } else if (error && error.status === 401) {
                    Alert.alert('비밀번호가 맞지 않습니다. 다시 확인해주세요.');
                } else if (error && error.status === 404) {
                    Alert.alert('이메일이 맞지 않습니다. 다시 확인해주세요.');
                } else if (error && error.status === 500) {
                    Alert.alert('서버에 요청이 실패하였습니다.');
                } else {
                    Alert.alert('요청이 실패했습니다. 다시 시도해주시기 바랍니다.');
                }
            });
    };
}
