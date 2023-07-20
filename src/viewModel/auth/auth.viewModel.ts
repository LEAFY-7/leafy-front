import { action, makeObservable, observable, runInAction } from 'mobx';
import { useForm } from 'react-hook-form';
import DefaultViewModel from 'viewModel/default.viewModel';

interface IProps {}

export default class AuthViewModel extends DefaultViewModel {
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

    handleSignIn = async (data) => {
        console.log('로그인', data);
    };
    handleSignUp = async (data) => {
        console.log('회원가입', data);
    };
}
