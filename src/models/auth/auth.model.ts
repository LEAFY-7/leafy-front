export class SignInModel {
    public email: string = '';
    public password: string = '';
}
export class SignUphModel extends SignInModel {
    public displayName: string = '';
    public confirmPassword: string = '';
}
