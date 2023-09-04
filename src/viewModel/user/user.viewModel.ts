import { AxiosError, AxiosResponse } from 'axios';
import { plainToInstance } from 'class-transformer';
import { ServerType } from 'constants/constants';
import { UserDto } from 'dto/user/user.dto';
import { action, makeObservable, observable, runInAction } from 'mobx';
import DefaultViewModel from 'viewModel/default.viewModel';

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
    getMyPage = () => {
        return this.api
            .get(ServerType.API, '/v1/users/my-page')
            .then((result: AxiosResponse<any>) => {
                console.log(result);
            })
            .catch((error: AxiosError) => {
                console.log(error);
            });
    };

    getUser = async (userId: number) => {
        await this.api
            .get(ServerType.API, '/v1/users', userId)
            .then((result: AxiosResponse<UserDto>) => {
                console.log('받은 데이터', result.data);
                runInAction(() => {
                    this.user = plainToInstance(UserDto, result.data);
                });
            })
            .catch((error: AxiosError) => {
                console.log('error : ', error);
                return false;
            });
    };
}
