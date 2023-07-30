import { SignUphModel } from 'models/auth/signUp.model';
import DefaultViewModel from 'viewModel/default.viewModel';
import DaumModule from 'modules/daum.module';
import { makeAutoObservable, observable } from 'mobx';

interface IProps {}

export default class MyEditViewModel extends DefaultViewModel {
    public data: SignUphModel;
    public daum: DaumModule;

    constructor(props: IProps) {
        super(props);
        this.data = {
            name: '',
            nickName: '',
            confirmPassword: '',
            phone: '',
            birthDay: '',
            zoneCode: '',
            address: '',
            jibunAddress: '',
            roadAddress: '',
            addressDetail: '',
            gender: '',
            simpleIntroduction: '',
            email: '',
            password: '',
            addressIsHide: true,
        };
        this.daum = DaumModule.getInstance();

        makeAutoObservable(this, {
            data: observable,
        });
    }
}
