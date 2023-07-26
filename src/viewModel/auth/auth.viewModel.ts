import { AxiosResponse } from 'axios';
import { action, makeObservable, observable, runInAction } from 'mobx';
import DefaultViewModel from 'viewModel/default.viewModel';
import { AddressModel } from 'models/auth/address.model';
import { SignUphModel } from 'models/auth/signUp.model';
import DaumModule from 'modules/daum.module';
import { AuthDto } from 'dto/auth/auth.dto';

interface IProps {}

export default class AuthViewModel extends DefaultViewModel {
    public data: SignUphModel;
    public daum: DaumModule;
    public toggle: boolean = false;

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
            .then((response: AxiosResponse) => {
                response.data;
                window.location.href = '/auth/signin';
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // 로그인
    handleSignIn = (data) => {
        return this.api
            .post('/v1/users/sign-in', data)
            .then((response: AxiosResponse<AuthDto>) => {
                this.authToken.saveToken(response.data);
                window.location.href = '/';
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

// const zoneCodeEl = document.getElementById('zoneCode') as HTMLInputElement;
// const addressEl = document.getElementById('address') as HTMLInputElement;
// zoneCodeEl.value = this.data.zoneCode;
// addressEl.value = this.data.address;
