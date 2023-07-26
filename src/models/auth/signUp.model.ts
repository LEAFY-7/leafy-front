import { SignInModel } from './signIn.model';

export class SignUphModel extends SignInModel {
    public name: string = '';
    public nickName: string = '';
    public confirmPassword: string = '';
    public phone: string = '';
    public birthDay: string = '';
    public zoneCode: string = '';
    public address: string = '';
    public jibunAddress: string = '';
    public roadAddress: string = '';
    public addressDetail: string = '';
    public gender: 'MALE' | 'FEMALE' | '' = '';
    public simpleIntroduction: string = '';
    public addressIsHide: boolean = true;
}
