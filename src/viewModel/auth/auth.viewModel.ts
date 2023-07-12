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
        console.log(this.toggle);
    };

    handleSubmit = async <T>(data) => {
        console.log(data);
    };
}
