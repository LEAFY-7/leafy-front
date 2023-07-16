import { SignInModel } from './signin.model';

export class SignUphModel extends SignInModel {
    public displayName: string = '';
    public confirmPassword: string = '';
}
