import { AxiosResponse } from 'axios';
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

    handleSignIn = (data) => {
        return this.api.post('/v1/users/sign-in', data).then((response: AxiosResponse) => {
            response.data;
        });
    };
    handleSignUp = (data) => {
        return this.api.post('/v1/users/sign-up', data).then((response: AxiosResponse) => {
            response.data;
        });
    };
}
