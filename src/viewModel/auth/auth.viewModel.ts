import { makeObservable } from 'mobx';
import DefaultViewModel from '../default.viewModel';

interface IProps {}

export default class AuthViewModel extends DefaultViewModel {
    constructor(props: IProps) {
        super(props);
        makeObservable(this, {});
    }
}
