import type { UseFormSetValue } from 'react-hook-form';
import { AxiosResponse } from 'axios';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { AddressModel } from 'models/auth/address.model';
import { SignUphModel } from 'models/auth/signUp.model';
import DaumModule from 'modules/daum.module';
import DefaultViewModel from 'viewModel/default.viewModel';

interface IProps {}

export default class AuthViewModel extends DefaultViewModel {
    public data: SignUphModel = {
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
        gender: 'MALE',
        simpleIntroduction: '',
        email: '',
        password: '',
    };
    public daum: DaumModule;
    public toggle: boolean = false;

    constructor(props: IProps) {
        super(props);
        this.daum = DaumModule.getInstance();

        makeObservable(this, {
            toggle: observable,
            data: observable,

            handleToggle: action,
            handleSignUpNecessary: action,
            handleSignUpAdditional: action,
        });
    }

    handleToggle = () => {
        runInAction(() => {
            this.toggle = !this.toggle;
        });
    };

    private handleOnComplete = (data: AddressModel) => {
        // const zoneCodeEl = document.getElementById('zoneCode') as HTMLInputElement;
        // const addressEl = document.getElementById('address') as HTMLInputElement;
        // zoneCodeEl.value = this.data.zoneCode;
        // addressEl.value = this.data.address;

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
        const {
            name,
            nickName,
            email,
            password,
            confirmPassword,
            phone,
            zoneCode,
            address,
            jibunAddress,
            roadAddress,
            addressDetail,
            birthDay,
            gender,
            simpleIntroduction,
        } = this.data;

        // return this.api.post('/v1/users/sign-up', data).then((response: AxiosResponse) => {
        //     response.data;
        // });
    };

    // 로그인
    handleSignIn = (data) => {
        return this.api.post('/v1/users/sign-in', data).then((response: AxiosResponse) => {
            response.data;
        });
    };
}

// console.log(
//     name,
//     nickName,
//     email,
//     password,
//     confirmPassword,
//     phone,
//     zoneCode,
//     address,
//     jibunAddress,
//     roadAddress,
//     addressDetail,
//     birthDay,
//     gender,
//     simpleIntroduction,
// );
