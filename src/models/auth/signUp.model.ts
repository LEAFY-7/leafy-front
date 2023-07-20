import { SignInModel } from './signIn.model';

export class SignUphModel extends SignInModel {
    public displayName: string = '';
    public confirmPassword: string = '';
}
