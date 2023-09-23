import { SignInModel } from './signIn.model';

export class SignUphModel extends SignInModel {
    public name: string = '';
    public nickName: string = '';
    public confirmPassword: string = '';
    public phone: string = '';
    public birthDay: string = '';
    public introduction: string = '';
}
