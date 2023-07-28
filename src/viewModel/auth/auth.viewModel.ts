import { AxiosError, AxiosResponse } from 'axios';
import { action, makeObservable, observable, runInAction } from 'mobx';
import DefaultViewModel from 'viewModel/default.viewModel';
import { AddressModel } from 'models/auth/address.model';
import { SignUphModel } from 'models/auth/signUp.model';
import DaumModule from 'modules/daum.module';
import tokenModule from 'modules/token.module';
import { AuthDto } from 'dto/auth/auth.dto';
import { Alert } from 'modules/alert.module';
import { toast } from 'react-toastify';

interface IProps {}

export default class AuthViewModel extends DefaultViewModel {
    public data: SignUphModel;
    public daum: DaumModule;
    public toggle: boolean;

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
        this.toggle = false;

        makeObservable(this, {
            toggle: observable,
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
            this.toggle = !this.toggle;
        });
    };

    handleTimeoutId = (time: number = 100) => {
        return setTimeout(() => {
            const formEl = document.getElementById('form_wrapper');
            if (!formEl) return;
            formEl.style.opacity = '1';
        }, time);
    };

    // 회원가입 - 아이디 중복 체크
    handleUserCheck = () => {
        // return this.api.get('/v1/users/check').then((response: AxiosResponse<boolean>)=>{
        // })
    };

    // 회원가입 - 1. 필수 정보 (이메일, 이름, 닉네임, 비밀번호, 비밀번호확인)
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

    // 회원가입 - 2. 부가 정보 (연락처, 생년월일, 주소, 성별, 간단소개)
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

    // 회원가입
    handleSignUp = () => {
        return this.api
            .post('/v1/users/sign-up', {
                name: this.data.name,
                nickName: this.data.nickName,
                email: this.data.email,
                password: this.data.password,
                confirmPassword: this.data.confirmPassword,
                phone: this.data.phone,
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
                if (error.response && error.response.status === 400) {
                    Alert.alert('유효하지 않은 요청입니다.');
                } else if (error.response && error.response.status === 401) {
                    Alert.alert('비밀번호가 맞지 않습니다. 다시 확인해주세요.');
                } else {
                    Alert.alert('알 수 없는 에러가 발생했습니다.');
                }
            });
    };

    // 로그인
    handleSignIn = (data, callback) => {
        return this.api
            .post('/v1/users/sign-in', data)
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
                if (error.response && error.response.status === 400) {
                    Alert.alert('유효하지 않은 요청입니다.');
                } else if (error.response && error.response.status === 401) {
                    Alert.alert('비밀번호가 맞지 않습니다. 다시 확인해주세요.');
                } else {
                    Alert.alert('알 수 없는 에러가 발생했습니다.');
                }
            });
    };
}

// const zoneCodeEl = document.getElementById('zoneCode') as HTMLInputElement;
// const addressEl = document.getElementById('address') as HTMLInputElement;
// zoneCodeEl.value = this.data.zoneCode;
// addressEl.value = this.data.address;
