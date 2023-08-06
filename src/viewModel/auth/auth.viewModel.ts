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
    public data: SignUphModel;
    public daum: DaumModule;
    public isActive: boolean;

    constructor(props: IProps) {
        super(props);
        this.data = {
            name: '',
            nickName: '',
            confirmPassword: '',
            phone: '',
            birthDay: '',
            zoneCode: '',
            address: '',
            jibunAddress: '',
            roadAddress: '',
            addressDetail: '',
            gender: '',
            simpleIntroduction: '',
            email: '',
            password: '',
            addressIsHide: true,
        };
        this.daum = DaumModule.getInstance();
        this.isActive = false;

        makeObservable(this, {
            isActive: observable,
            data: observable,

            handleToggle: action,
            handleSignUpNecessary: action,
            handleSignUpAdditional: action,
            handleSignIn: action,
        });
    }
    private handleOnComplete = (data: AddressModel) => {
        runInAction(() => {
            this.data.zoneCode = data.zonecode;
            this.data.address = data.address;
            this.data.jibunAddress = data.jibunAddress;
            this.data.roadAddress = data.roadAddress;
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
        console.log(key, value);
        runInAction(() => {
            this.data[key] = value;
        });
    };

    // 닉네임 중복 체크
    handleCheckNickName = () => {
        return this.api
            .post('/v1/users/check/nickname', {
                nickName: this.data.nickName,
            })
            .then((response: AxiosResponse) => {
                console.log(response);
            })
            .catch((error: AxiosError) => {
                if (error && error.status === 409) {
                    Alert.alert('이미 사용중인 닉네임입니다.');
                } else {
                    Alert.alert('요청이 실패했습니다. 다시 시도해주시기 바랍니다.');
                }
            });
    };
    // 이메일 중복 체크
    handleCheckEmail = () => {
        return this.api
            .post('/v1/users/check/email', {
                email: this.data.email,
            })
            .then((response: AxiosResponse) => {
                console.log(response);
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
    handleSignUpNecessary = async (data) => {
        const { name, nickName, email, password, confirmPassword } = data;
        runInAction(() => {
            this.data.name = name;
            this.data.nickName = nickName;
            this.data.email = email;
            this.data.password = password;
            this.data.confirmPassword = confirmPassword;
        });
        await this.handleToggle();
        await document.getElementById('phone_input')?.focus();
    };

    // 2. 부가 정보 (연락처, 생년월일, 주소, 성별, 간단소개)
    handleSignUpAdditional = async (data) => {
        const { phone, birthDay, addressDetail, gender, simpleIntroduction } = data;
        runInAction(() => {
            this.data.phone = phone;
            this.data.birthDay = birthDay;
            this.data.addressDetail = addressDetail;
            this.data.gender = gender;
            this.data.simpleIntroduction = simpleIntroduction;
        });
        await this.handleSignUp();
    };

    // 3. 제출하기
    handleSignUp = () => {
        const phoneNumber = this.data.phone;
        const phoneNumberWithoutHyphens = phoneNumber.replace(/-/g, '');

        return this.api
            .post('/v1/users/sign-up', {
                name: this.data.name,
                nickName: this.data.nickName,
                email: this.data.email,
                password: this.data.password,
                confirmPassword: this.data.confirmPassword,
                phone: phoneNumberWithoutHyphens,
                zoneCode: this.data.zoneCode,
                address: this.data.address,
                jibunAddress: this.data.jibunAddress,
                roadAddress: this.data.roadAddress,
                addressDetail: this.data.addressDetail,
                birthDay: this.data.birthDay,
                gender: this.data.gender,
                simpleIntroduction: this.data.simpleIntroduction,
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

    // 로그인
    // 제출하기
    handleSignIn = (data) => {
        return this.api
            .post('/v1/users/sign-in', data)
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

// const zoneCodeEl = document.getElementById('zoneCode') as HTMLInputElement;
// const addressEl = document.getElementById('address') as HTMLInputElement;
// zoneCodeEl.value = this.data.zoneCode;
// addressEl.value = this.data.address;
