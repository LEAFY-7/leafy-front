import { UserDto } from '@dto/user/user.dto';
import { AxiosResponse } from 'axios';
import { plainToInstance } from 'class-transformer';
import { action, makeObservable, observable, runInAction } from 'mobx';
import DefaultViewModel from '../default.viewModel';

interface IProps {}

export default class UserViewModel extends DefaultViewModel {
    public user: UserDto = new UserDto();

    constructor(props: IProps) {
        super(props);
        makeObservable(this, {
            user: observable,

            getUser: action,
        });
    }

    getUser = async (userId: number) => {
        await this.api
            .get('/v1/user', userId)
            .then((result: AxiosResponse<UserDto>) => {
                runInAction(() => {
                    this.user = plainToInstance(UserDto, result.data);
                });
            })
            .catch((error) => {
                console.log('error : ', error);
                return false;
            });
    };
}
