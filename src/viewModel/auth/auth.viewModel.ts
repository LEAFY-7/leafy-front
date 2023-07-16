import { action, makeObservable, observable, runInAction } from 'mobx';
import { SignInModel, SignUphModel } from 'models/auth/auth.model';
import { useForm } from 'react-hook-form';
import DefaultViewModel from 'viewModel/default.viewModel';

interface IProps {}

export default class AuthViewModel extends DefaultViewModel {
    public signInModel: SignInModel = new SignInModel();
    public signUpModel: SignUphModel = new SignUphModel();
    public data = {};
    public toggle: boolean = false;

    constructor(props: IProps) {
        super(props);
        makeObservable(this, {
            toggle: observable,

            handleToggle: action,
        });
    }

    handleToggle = () => {
        runInAction(() => {
            this.toggle = !this.toggle;
        });
    };

    handleSubmit = async (data, e) => {
        const { ariaLabel } = e.target;
        if (ariaLabel === 'signin') {
            // 로그인
            console.log('로그인', data);
        } else {
            // 회원가입
            console.log('회원가입', data);
        }
    };
}
